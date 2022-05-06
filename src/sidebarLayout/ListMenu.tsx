import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Box, ListItemText } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'
import { SolidSidebarMenuItem } from '../index'
import { SidebarWidth, SidebarHeight } from './Variables'

const DefaultMargin = 16

const useStyles = makeStyles({
  headerTitle: {
    marginTop: DefaultMargin,
    marginRight: DefaultMargin,
    marginLeft: DefaultMargin,
    marginBottom: DefaultMargin
  },
  headerTitleSmall: {
    marginTop: DefaultMargin + SidebarHeight,
    marginRight: DefaultMargin,
    marginLeft: DefaultMargin,
    marginBottom: DefaultMargin
  },
  sidebar: {
    display: 'flex',
    overflow: 'hidden',
    flexShrink: 0,
    background: grey[100],
    backdropFilter: 'blur(9px)',
    whiteSpace: 'nowrap',
    padding: 0,
    margin: 0,
    width: SidebarWidth,
    height: '100vh',
    flexDirection: 'column'
  },
  sidebarSmall: {
    display: 'flex',
    overflow: 'hidden',
    flexShrink: 0,
    background: grey[100],
    backdropFilter: 'blur(9px)',
    whiteSpace: 'nowrap',
    padding: 0,
    margin: 0,
    width: '100vw',
    height: SidebarHeight
  },
  sidebarList: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0
  },
  sidebarListSmall: {
    display: 'flex',
    margin: 0,
    padding: 0
  },
  actionButton: {
    alignSelf: 'center',
    marginTop: DefaultMargin
  },
  actionButtonSmall: {
    alignSelf: 'center',
    marginRight: DefaultMargin
  }
})

interface Props {
  title: string
  menuItems: SolidSidebarMenuItem[]
  actionButton: JSX.Element
}

const ListMenu: React.FC<Props> = (props) => {
  const classes = useStyles();
  const isSmall = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <Box display='flex' position='fixed' zIndex='appBar'>
      <Box className={isSmall ? classes.sidebarSmall : classes.sidebar}>
        <List
          className={isSmall ? classes.sidebarListSmall : classes.sidebarList}
        >
          <ListItem style={{ margin: 16 }}>
            <Typography variant='h6'>{props.title}</Typography>
          </ListItem>
          {props.menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              component='a'
              onClick={item.goTo}
              selected={item.isSelected()}
              style={{ padding: 8 }}
            >
              {isSmall ? (
                <Box flexDirection='column' alignItems='center'>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </Box>
              ) : (
                <Fragment>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </Fragment>
              )}
            </ListItem>
          ))}
        </List>
        {isSmall && <Box flexGrow={1}></Box>}
        <Box
          className={isSmall ? classes.actionButtonSmall : classes.actionButton}
        >
          {props.actionButton}
        </Box>
      </Box>
    </Box>
  )
}

export default ListMenu

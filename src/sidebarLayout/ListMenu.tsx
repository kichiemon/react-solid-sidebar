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

const drawerWidth = 220
const drawerHeight = 60

const useStyles = makeStyles({
  headerTitle: {
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16
  },
  headerTitleMobile: {
    marginTop: 16 + drawerHeight,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16
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
    width: drawerWidth,
    height: '100vh',
    flexDirection: 'column'
  },
  sidebarMobile: {
    display: 'flex',
    overflow: 'hidden',
    flexShrink: 0,
    background: grey[100],
    backdropFilter: 'blur(9px)',
    whiteSpace: 'nowrap',
    padding: 0,
    margin: 0,
    width: '100vw',
    height: drawerHeight
  },
  sidebarList: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0
  },
  sidebarListMobile: {
    display: 'flex',
    margin: 0,
    padding: 0
  },
  logout: {
    alignSelf: 'center',
    marginTop: 16
  },
  logoutMobile: {
    alignSelf: 'center',
    marginRight: 16
  }
})

interface Props {
  title: string
  menuItems: SolidSidebarMenuItem[]
  actionButton: JSX.Element
}

const ListMenu: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles()
  const isSmall = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <Box display='flex' position='fixed' zIndex='appBar'>
      <Box className={isSmall ? classes.sidebarMobile : classes.sidebar}>
        <List
          className={isSmall ? classes.sidebarListMobile : classes.sidebarList}
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
              style={{ padding: 16 }}
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
        <Box className={isSmall ? classes.logoutMobile : classes.logout}>
          {props.actionButton}
        </Box>
      </Box>
    </Box>
  )
}

export default ListMenu

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'
import { ListMenuItem } from '../index'

const drawerWidth = 220
const drawerHeight = 60

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    maxWidth: 'none',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    padding: 0
  },
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
  }
})

interface Props {
  listItems: ListMenuItem[]
}

const MainContent: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles()
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <Box
      className={classes.content}
      style={{
        marginLeft: isMobile ? 0 : drawerWidth
      }}
    >
      {/* ヘッダー */}
      <Box
        className={isMobile ? classes.headerTitleMobile : classes.headerTitle}
      >
        <Typography variant='h3'>
          {props.listItems.find((i) => i.isSelected())?.title}
        </Typography>
      </Box>
      {/* ボディ */}
      <Box flex={1} style={{ margin: 16 }}>
        {props.children}
      </Box>
    </Box>
  )
}

export default MainContent

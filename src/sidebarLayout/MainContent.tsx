import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'
import { SolidSidebarMenuItem } from '../index'
import { SidebarWidth, SidebarHeight } from './Variables'

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
  headerTitleSmall: {
    marginTop: 16 + SidebarHeight,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16
  }
})

interface Props {
  menuItems: SolidSidebarMenuItem[]
  children?: ReactNode
}

const MainContent: React.FC<Props> = ({ menuItems, children }) => {
  const classes = useStyles()
  const isSmall = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <Box
      className={classes.content}
      style={{
        marginLeft: isSmall ? 0 : SidebarWidth
      }}
    >
      {/* ヘッダー */}
      <Box className={isSmall ? classes.headerTitleSmall : classes.headerTitle}>
        <Typography variant='h3'>
          {menuItems.find((i) => i.isSelected())?.name}
        </Typography>
      </Box>
      {/* ボディ */}
      <Box flex={1} style={{ margin: 16 }}>
        {children}
      </Box>
    </Box>
  )
}

export default MainContent

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import ListMenu from './sidebarLayout/ListMenu'
import MainContent from './sidebarLayout/MainContent'

const useStyles = makeStyles({
  root: { padding: 0, margin: 0 }
})

export interface SolidSidebarMenuItem {
  /**
   * Menu's name
   */
  name: string

  /**
   * Menu's Icon
   */
  icon: JSX.Element

  /**
   * This is called when user select list menu item.
   * It's expected move page.
   */
  goTo(): void

  /**
   * returned menu is selected
   */
  isSelected(): boolean
}

interface SolidSidebarLayoutProps {
  title: string
  menuItems: SolidSidebarMenuItem[]
  actionButton: JSX.Element
  children?: React.ReactNode
}

const SolidSidebarLayout: React.FC<SolidSidebarLayoutProps> = (
  props: SolidSidebarLayoutProps
) => {
  const classes = useStyles()
  return (
    <Container component='main' maxWidth={false} className={classes.root}>
      {/* サイドバー */}
      <ListMenu {...props} />
      {/* メインコンテンツ */}
      <MainContent {...props} />
    </Container>
  )
}

export default SolidSidebarLayout

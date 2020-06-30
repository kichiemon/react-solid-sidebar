import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import ListMenu from './sidebarLayout/ListMenu'
import MainContent from './sidebarLayout/MainContent'

const useStyles = makeStyles({
  root: { padding: 0, margin: 0 }
})

export interface ListMenuItem {
  text: string
  title: string
  icon: JSX.Element
  goTo(): void
  isSelected(): boolean
}

interface SidebarLayoutProps {
  title: string
  listItems: ListMenuItem[]
  actionButton: JSX.Element
}

const SidebarLayout: React.FunctionComponent<SidebarLayoutProps> = (
  props: SidebarLayoutProps
) => {
  const classes = useStyles()
  return (
    <Container component='main' maxWidth={false} className={classes.root}>
      {/* サイドバー */}
      <ListMenu
        title={props.title}
        listItems={props.listItems}
        actionButton={props.actionButton}
      />
      {/* メインコンテンツ */}
      <MainContent listItems={props.listItems} />
    </Container>
  )
}

export default SidebarLayout

import React from 'react'
import SidebarLayout, { ListMenuItem } from 'react-solid-sidebar'
import 'react-solid-sidebar/dist/index.css'
import { Button, Box, Typography } from '@material-ui/core'
import Business from '@material-ui/icons/Business'
import Person from '@material-ui/icons/Person'
import { Redirect, Route, withRouter } from 'react-router'

const MenuA: React.FunctionComponent<{}> = () => {
  return (
    <Box component='body'>
      <Typography variant='h2'>メニューA</Typography>
    </Box>
  )
}
const MenuB: React.FunctionComponent<{}> = () => {
  return (
    <Box component='body'>
      <Typography variant='h2'>メニューA</Typography>
    </Box>
  )
}

const App = (props: any) => {
  const handleClick = () => console.log('button clicked!')
  const listItems: ListMenuItem[] = [
    {
      text: 'Menu A',
      title: 'Menu A',
      icon: <Business />,
      goTo: () => props.history.push('/menu-a'),
      isSelected: () => window.location.pathname === '/menu-a'
    },
    {
      text: 'Menu B',
      title: 'Menu B',
      icon: <Person />,
      goTo: () => props.history.push('/menu-b'),
      isSelected: () => window.location.pathname === '/menu-b'
    }
  ]
  const ActionButton = <Button onClick={handleClick}></Button>

  return (
    <SidebarLayout
      title='DEMO Page'
      listItems={listItems}
      actionButton={ActionButton}
    >
      <Route exact path='/menu-a' component={MenuA} />
      <Route exact path='/menu-b' component={MenuB} />
      <Route exact path='/' render={() => <Redirect to='menu-a' />} />
    </SidebarLayout>
  )
}

export default withRouter(App)

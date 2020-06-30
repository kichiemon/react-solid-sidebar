import React from 'react'
import SolidSidebarLayout, { SolidSidebarMenuItem } from 'react-solid-sidebar'
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
  const menuItems: SolidSidebarMenuItem[] = [
    {
      name: 'Menu A',
      icon: <Business />,
      goTo: () => props.history.push('/menu-a'),
      isSelected: () => window.location.pathname === '/menu-a'
    },
    {
      name: 'Menu B',
      icon: <Person />,
      goTo: () => props.history.push('/menu-b'),
      isSelected: () => window.location.pathname === '/menu-b'
    }
  ]
  const ActionButton = <Button onClick={handleClick}></Button>

  return (
    <SolidSidebarLayout
      title='DEMO Page'
      menuItems={menuItems}
      actionButton={ActionButton}
    >
      <Route exact path='/menu-a' component={MenuA} />
      <Route exact path='/menu-b' component={MenuB} />
      <Route exact path='/' render={() => <Redirect to='menu-a' />} />
    </SolidSidebarLayout>
  )
}

export default withRouter(App)

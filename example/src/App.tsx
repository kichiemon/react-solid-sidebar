import React from 'react'
import SolidSidebarLayout, { SolidSidebarMenuItem } from 'react-solid-sidebar'
import { Button, Box, Typography } from '@material-ui/core'
import Business from '@material-ui/icons/Business'
import Person from '@material-ui/icons/Person'
import { Navigate, Route, Routes, useLocation, useNavigate, useParams, } from "react-router-dom";

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

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{location, navigate, params}}
          />
      );
  }

  return ComponentWithRouterProp;
}

const App = () => {
  const navigate = useNavigate();
  const handleClick = () => console.log('button clicked!')
  const menuItems: SolidSidebarMenuItem[] = [
    {
      name: 'Menu A',
      icon: <Business />,
      goTo: () => navigate('/menu-a'),
      isSelected: () => window.location.pathname === '/menu-a'
    },
    {
      name: 'Menu B',
      icon: <Person />,
      goTo: () => navigate('/menu-b'),
      isSelected: () => window.location.pathname === '/menu-b'
    }
  ]
  const ActionButton = (
    <Button onClick={handleClick}>
      <Typography variant='button' color='error'>
        ログアウト
      </Typography>
    </Button>
  )

  return (
    <SolidSidebarLayout
      title='DEMO Page'
      menuItems={menuItems}
      actionButton={ActionButton}
    >
      <Routes>
        <Route path='/menu-a' element={<MenuA />} />
        <Route path='/menu-b' element={<MenuB />} />
        <Route path='/' element={<Navigate to='menu-a' />} />
      </Routes>
    </SolidSidebarLayout>
  )
}

export default withRouter(App)

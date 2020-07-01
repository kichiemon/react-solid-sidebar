# react-solid-sidebar

> A React Solid Sidebar Widget.

[![NPM](https://img.shields.io/npm/v/react-solid-sidebar.svg)](https://www.npmjs.com/package/react-solid-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo Page

https://kichiemon.github.io/react-solid-sidebar/

![demo](https://user-images.githubusercontent.com/7911520/86148041-12207800-bb35-11ea-9148-1a8508a0c66e.gif)


## Install

### npm
```bash
npm install --save react-solid-sidebar
```

### yarn
```bash
yarn add react-solid-sidebar
```

## Props

|name|type|description|required|
|:---:|:---:|:----:|:----:|
|title|`strinig`|title in the menu|required|
|menuItems| `ListMenuItem[]` | menu list |required|
|actionButton|`JSX.Element`|right or bottom button |required|

## Example Usage

```tsx
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
```

## License

MIT © [kichiemon](https://github.com/kichiemon)

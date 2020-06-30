# react-solid-sidebar

> A React Solid Sidebar Widget.

[![NPM](https://img.shields.io/npm/v/react-solid-sidebar.svg)](https://www.npmjs.com/package/react-solid-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### npm
```bash
npm install --save react-solid-sidebar
```

### yarn
```bash
yarn add react-solid-sidebar
```

## Usage

```tsx
import React, { Component } from 'react'

import SidebarLayout, { ListMenuItem } from 'react-solid-sidebar'
import 'react-solid-sidebar/dist/index.css'

export default Example() {
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
```

## License

MIT © [kichiemon](https://github.com/kichiemon)

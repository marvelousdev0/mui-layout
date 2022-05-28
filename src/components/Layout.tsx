import * as React from 'react'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

export default function Layout({ children }: { children: React.ReactNode }) {
  const [openSideBar, setOpenSideBar] = React.useState(false)

  const handleSideBarOpen = () => {
    setOpenSideBar(true)
  }

  const handleSideBarClose = () => {
    setOpenSideBar(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Header openSideBar={openSideBar} handleSideBarOpen={handleSideBarOpen} />
      <SideBar openSideBar={openSideBar} handleSideBarClose={handleSideBarClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
        <Footer openSideBar={openSideBar} />
      </Box>
    </Box>
  )
}

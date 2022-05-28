import { Link, useLocation } from 'react-router-dom'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeftOutlined'
import ChevronRightIcon from '@mui/icons-material/ChevronRightOutlined'
import DashboardIcon from '@mui/icons-material/DashboardOutlined'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

export default function SideBar({
  openSideBar,
  handleSideBarClose
}: {
  openSideBar: boolean
  handleSideBarClose: () => void
}) {
  const { pathname } = useLocation()
  const theme = useTheme()

  return (
    <Drawer variant="permanent" open={openSideBar}>
      <DrawerHeader>
        <IconButton onClick={handleSideBarClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {[
          { label: 'Home', icon: <HomeIcon />, path: '/' },
          { label: 'Cron Jobs', icon: <DashboardIcon />, path: '/jobs' }
        ].map((item) => (
          <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: openSideBar ? 'initial' : 'center',
                px: 2.5,
                color: pathname === item.path ? theme.palette.primary.main : theme.palette.text.primary,
                borderRight: pathname === item.path ? `3px solid ${theme.palette.primary.main}` : 'none'
              }}
              component={Link}
              to={item.path}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: openSideBar ? 3 : 'auto',
                  justifyContent: 'center',
                  color: pathname === item.path ? theme.palette.primary.main : theme.palette.text.primary
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} sx={{ opacity: openSideBar ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

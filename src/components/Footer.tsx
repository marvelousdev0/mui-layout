import { Box } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

export default function Footer({ openSideBar }: { openSideBar: boolean }) {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} color="inherit" open={openSideBar}>
      <Toolbar variant="dense" sx={{ minHeight: 24 }}>
        <Box flexGrow={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="caption">copyright (c) 2022 | Company Name</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

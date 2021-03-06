import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import doglogo from "./img/header/doglogo.svg";
import twitterlogo from "./img/header/twittericon.svg";
import telegramlogo from "./img/header/telegramicon.svg";
import { Link, Stack } from "@mui/material";
import "./App.css";
const drawerWidth = "70%";
const menuFontDefaultStyle = {
  fontSize: "14px",
  fontWeight: "500",
};
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        backgroundColor: "#0F121E",
      }}
    >
      <Toolbar />
      <Divider />
      <Stack
        sx={{ minHeight: "80px" }}
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 0, sm: 0, md: 3, lg: 4 }}
      >
        <Link href="#" underline="none">
          <img src={doglogo} alt="logo" />
        </Link>
        <Link
          className="header-logotext"
          href="#"
          underline="none"
          color="white"
        >
          doge army <br />
          token
        </Link>
        <Link
          sx={{
            fontSize: "14px",
            fontWeight: "900",
          }}
          href="#"
          underline="none"
          color="white"
        >
          tokenomics
        </Link>
        <Link sx={menuFontDefaultStyle} href="#" underline="none" color="white">
          roadmap
        </Link>
        <Link sx={menuFontDefaultStyle} href="#" underline="none" color="white">
          distribution
        </Link>
        <Link sx={menuFontDefaultStyle} href="#" underline="none" color="white">
          presale
        </Link>
        <Link sx={menuFontDefaultStyle} href="#" underline="none" color="white">
          giveaway
        </Link>
        <Link sx={menuFontDefaultStyle} href="#" underline="none" color="white">
          team
        </Link>
        <Link sx={menuFontDefaultStyle} href="#" underline="none" color="white">
          faq
        </Link>
        <Link sx={menuFontDefaultStyle} href="#" underline="none" color="white">
          <img src={twitterlogo} alt="twitter icon" />
        </Link>
        <Link sx={menuFontDefaultStyle} href="#" underline="none" color="white">
          <img src={telegramlogo} alt="telegram icon" />
        </Link>
        <Link
          sx={{
            width: "125px",
            height: "30px",
            backgroundColor: "#FBB829",
            borderRadius: "15px",
            textAlign: "center",
            padding: "3px 1px 0 1px",
            "&:hover": {
              color: "#FBB829",
              backgroundColor: "#5e3500",
            },
          }}
          href="#"
          underline="none"
          color="white"
        >
          Connect
        </Link>
      </Stack>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

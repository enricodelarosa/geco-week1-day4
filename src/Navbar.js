import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
/* import image from "../../images/React_logo.png"; */

import definedPages from './definedPages';





function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const location = useLocation();

  console.log(location.pathname);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };



  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "gray" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* <img src={image} style={{ height: "50px", width: "100px" }} /> */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {definedPages.map((page) => (
                <MenuItem key={page.pathName} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`${page.pathName}`}>{page.displayName}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* <img src={image} style={{ height: "50px", width: "100px" }} /> */}
          </Typography>

          <Box
            justifyContent="right"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {definedPages.map((page) => (
              <Link
                key={page.pathName}
                to={`${page.pathName}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page.pathName}
                  onClick={handleCloseNavMenu}
                  sx={location.pathname == page.pathName ? { my: 2, color: "black", display: "block" } : { my: 2, color: "white", display: "block" }}
                >
                  {page.displayName}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
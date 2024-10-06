"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import DrawerMenu from "./DrawerMenu";
import LanguageMenu from "./LanguageMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Container>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* عرض الشعار و MenuIcon في الشاشات الصغيرة والمتوسطة فقط */}
            {(isMobile || isMedium) && (
              <>
                <Image src="/lo.png" alt="Logo" width={50} height={50} />
                <IconButton
                  onClick={toggleDrawer(true)}
                  sx={{ color: "#333", ml: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
          </Box>

          {/* عرض الروابط في الشاشات الكبيرة فقط */}
          {!isMobile && !isMedium && <NavLinks />}

          <LanguageMenu />

          <DrawerMenu open={drawerOpen} toggleDrawer={toggleDrawer} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

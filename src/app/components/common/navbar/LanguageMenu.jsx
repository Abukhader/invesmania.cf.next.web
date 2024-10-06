import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Typography,
  Box,
  Button,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLanguageMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton sx={{ color: "#555" }} onClick={handleLanguageMenu}>
        <LanguageIcon />
      </IconButton>

      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderColor: "#ccc", mx: 1 }}
      />

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Arabic</MenuItem>
        <MenuItem onClick={handleClose}>English</MenuItem>
      </Menu>

      <Typography
        sx={{
          mx: 2,
          fontWeight: 700,
          color: "#777",
          cursor: "pointer",
          "&:hover": {
            color: "var(--primary-color)",
          },
        }}
      >
        Login
      </Typography>

      <Button
        variant="contained"
        sx={{
          mx: 2,
          fontWeight: 700,
          backgroundColor: "var(--primary-color)",
          color: "#FFF",
          borderRadius: "50px",
          "&:hover": {
            color: "#fff",
          },
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default LanguageMenu;

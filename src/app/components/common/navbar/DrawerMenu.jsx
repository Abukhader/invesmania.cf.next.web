import React from "react";
import {
  Drawer,
  Box,
  IconButton,
  MenuItem,
  Divider,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DrawerMenu = ({ open, toggleDrawer }) => {
  const [selectedLink, setSelectedLink] = React.useState(null);
  const [showOptions, setShowOptions] = React.useState(false);

  const handleLinkClick = (link) => {
    if (selectedLink === link) {
      setShowOptions(!showOptions);
    } else {
      setSelectedLink(link);
      setShowOptions(true);
    }
  };

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{ width: "90vw" }}
    >
      <Box
        sx={{
          width: "95%",
          height: "100vh",
          bgcolor: "rgba(3, 111, 91, 0.1)",
          display: "flex",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{
            alignSelf: "flex-end",
            color: "#333",
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "rotate(180deg)",
              color: "red",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {["Home", "Investors", "About"].map((link) => (
          <Box key={link}>
            <MenuItem
              onClick={() => handleLinkClick(link)}
              sx={{ width: "100%", justifyContent: "space-between" }}
            >
              <Typography
                sx={{ display: "flex", alignItems: "center", color: "#036f5b" }}
              >
                {link}
                <ExpandMoreIcon sx={{ fontSize: 16, marginLeft: 0.5 }} />
              </Typography>
            </MenuItem>
            {selectedLink === link && showOptions && (
              <Box
                sx={{
                  pl: 2,
                  bgcolor: "rgba(3, 111, 91, 0.2)",
                  borderRadius: 1,
                  padding: 2,
                  opacity: showOptions ? 1 : 0,
                  maxHeight: showOptions ? "200px" : 0,
                  transition:
                    "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  overflow: "hidden",
                }}
              >
                <Typography sx={{ mb: 1 }}>Link A</Typography>
                <Divider sx={{ bgcolor: "#ccc", my: 1 }} />
                <Typography sx={{ mb: 1 }}>Link B</Typography>
                <Divider sx={{ bgcolor: "#ccc", my: 1 }} />
                <Typography>Link C</Typography>
              </Box>
            )}

            <Divider sx={{ bgcolor: "#ccc" }} />
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;

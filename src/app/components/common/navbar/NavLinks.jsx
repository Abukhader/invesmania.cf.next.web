import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavLinkOptions from "./NavLinkOptions";
import Image from "next/image"; // تأكد من هذا السطر

const NavLinks = () => {
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        ml: 25,
      }}
    >
      <Image src="/log.png" alt="Logo" width={150} height={80} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          left: 0,
        }}
      >
        {["Home", "Investors", "About"].map((link) => (
          <Box key={link}>
            <Typography
              sx={{
                color: "#036f5b",
                cursor: "pointer",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  color: "var(--primary-color)",
                },
                mx: 2,
              }}
              onClick={() => handleLinkClick(link)}
            >
              {link}
              <ExpandMoreIcon sx={{ fontSize: 16, marginLeft: 0.5 }} />
            </Typography>
            {selectedLink === link && showOptions && <NavLinkOptions />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NavLinks;

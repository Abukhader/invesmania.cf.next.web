import React from "react";
import { Box, Typography } from "@mui/material";

const WarningBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(192, 192, 192, 0.8)", // تقليل الشفافية
        padding: 1,
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: 550,
          letterSpacing: "0.5px",
        }}
      >
        Don’t invest unless you’re prepared to lose all the money you invest.
        This is a high risk investment and you are unlikely to be protected if
        something goes wrong. Take 2 mins to learn more.
      </Typography>
    </Box>
  );
};

export default WarningBanner;

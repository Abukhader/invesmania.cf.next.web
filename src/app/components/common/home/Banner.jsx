import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box sx={{ position: "relative", height: "85vh", overflow: "hidden" }}>
      {/* قسم الفيديو */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "0",
          left: 0,
          width: "100%",
          height: "auto",
          minHeight: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/vedioBanner.mp4" type="video/mp4" />
        متصفحك لا يدعم الفيديو
      </video>

      {/* قسم النص */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
          color: "#000", // اللون الأسود للنص
          padding: 2, // إضافة حواف للنص
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 1000 }}>
          Smart & Secure
          <span
            style={{
              color: "var(--primary-color)",
              fontWeight: 900,
              fontSize: "2.5rem",
              background: "rgba(255, 255, 255, 0.7)", // لون خلفية أبيض مع شفافية
              padding: "0.5rem 1rem", // إضافة حواف داخلية
              borderRadius: "15px", // زوايا دائرية
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // تأثير ظل
              display: "block", // اجعلها كتلة لتظهر في سطر منفصل
              margin: "0 auto", // توسيط العنصر
              width: "fit-content", // تأكد من أن العرض يتناسب مع المحتوى
            }}
          >
            Real Estate Investment
          </span>{" "}
          Platform
        </Typography>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 800 }}>
          Invest in the future of real estate
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 1000 }}>
          Start earning monthly rental income and capital growth with our
          property-backed investments
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              mt: 2,
              bgcolor: "var(--primary-color)",
              fontWeight: 700,
              color: "#eee",
              padding: "10px 20px",
              borderRadius: "25px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s, transform 0.3s, color 0.3s", // تأثير انتقال
              "&:hover": {
                bgcolor: "#ddd",
                color: "var(--primary-color)",
                transform: "translateY(-2px)",
                fontWeight: 1000,
              },
              "&:active": {
                transform: "translateY(1px)", // تأثير ضغط الزر
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

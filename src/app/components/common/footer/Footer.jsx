import React from "react";
import Image from "next/image";
import { Box, Typography, TextField, Button, Grid, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2c3e50", // لون داكن
        color: "#bdc3c7", // نص بلون فاتح
        padding: { xs: "20px", md: "40px 20px" }, // ضبط الحشوة
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: "bold", color: "#fff" }}
        >
          Subscribe for updates
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Stay on top of the latest blog posts, news, and announcements
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // تغيير الاتجاه بناءً على الشاشة
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter Your Email"
            sx={{
              input: { color: "#fff" },
              mb: { xs: 2, sm: 0 }, // إضافة هوامش في الأجهزة الصغيرة
              mr: { sm: 2 },
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "var(--primary-color)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Grid container spacing={8}>
        {["Invesmania", "Company", "Invest", "Legal"].map((title, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 2 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", color: "#fff" }}
              >
                {title}
              </Typography>
              {title === "Invesmania" && (
                <>
                  <Image
                    src="/lo.png"
                    alt="Invesmania Logo"
                    width={70}
                    height={70}
                    style={{ marginBottom: "16px" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ mt: 2, mb: 2, opacity: 0.8 }}
                  >
                    Invesmania is a platform offering anyone the ability to
                    invest and potentially earn money from property at the click
                    of a button.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    <Link
                      href="#"
                      color="inherit"
                      sx={{
                        mx: 1,
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.2)",
                          color: "#3b5998",
                        },
                      }}
                    >
                      <Facebook />
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      sx={{
                        mx: 1,
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.2)",
                          color: "#1DA1F2",
                        },
                      }}
                    >
                      <Twitter />
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      sx={{
                        mx: 1,
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.2)",
                          color: "#E4405F",
                        },
                      }}
                    >
                      <Instagram />
                    </Link>
                    <Link
                      href="#"
                      color="inherit"
                      sx={{
                        mx: 1,
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "scale(1.2)",
                          color: "#0077B5",
                        },
                      }}
                    >
                      <LinkedIn />
                    </Link>
                  </Box>
                </>
              )}
              {title === "Company" && (
                <>
                  {[
                    "About Us",
                    "Careers",
                    "Blog",
                    "Contact Us",
                    "Affiliate",
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      sx={{
                        display: "block",
                        mb: 1,
                        color: "#bdc3c7",
                        "&:hover": { color: "var(--primary-color)" },
                        textDecoration: "none",
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </>
              )}
              {title === "Invest" && (
                <>
                  {[
                    "Browse Properties",
                    "How it works",
                    "Loan Application",
                    "Property Alerts",
                    "FAQs",
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      sx={{
                        display: "block",
                        mb: 1,
                        color: "#bdc3c7",
                        "&:hover": { color: "var(--primary-color)" },
                        textDecoration: "none",
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </>
              )}
              {title === "Legal" && (
                <>
                  {[
                    "Privacy Policy",
                    "Terms & Conditions",
                    "Cookie Policy",
                    "Key Risks",
                  ].map((link, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      sx={{
                        display: "block",
                        mb: 1,
                        color: "#bdc3c7",
                        "&:hover": { color: "var(--primary-color)" },
                        textDecoration: "none",
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;

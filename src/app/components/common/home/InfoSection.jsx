import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

const InfoSection = () => {
  const features = [
    {
      title: "Secure Investment",
      description: "Pellentesque molestie, quam ac porttitor venenatis ipsum.",
      imgSrc: "/insurance.png",
    },
    {
      title: "Transparent Platform",
      description: "Pellentesque molestie, quam ac porttitor venenatis ipsum.",
      imgSrc: "/money.png",
    },
    {
      title: "Cash out any time",
      description: "Pellentesque molestie, quam ac porttitor venenatis ipsum.",
      imgSrc: "/cash-on-delivery.png",
    },
    {
      title: "Reinvest",
      description: "Pellentesque molestie, quam ac porttitor venenatis ipsum.",
      imgSrc: "/cash.png",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 4,
        margin: "20px",
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: "#666" }}>
        Smarter Property Investing
      </Typography>

      <Typography
        variant="h5"
        sx={{ mb: 2, fontWeight: 900, color: "var(--primary-color)" }}
      >
        Why Invest in Real Estate?
      </Typography>

      <Typography
        variant="body2"
        sx={{ mb: 3, color: "#666", fontWeight: 500 }}
      >
        Start building your real estate investment portfolio today with as
        little as € 100.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2, mb: 3 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                textAlign: "center",
                padding: 2,
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(3, 111, 91, 0.1)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)", // تأثير التكبير عند التمرير
                },
              }}
            >
              <Image
                src={feature.imgSrc} // استخدم مصدر الصورة من المصفوفة
                alt={feature.title} // استخدم عنوان الصورة من المصفوفة
                width={80}
                height={80}
                style={{ marginBottom: "16px" }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: 900, mb: 2, color: "var(--primary-color)" }}
              >
                {feature.title} {/* استخدم عنوان البطاقات من المصفوفة */}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                {feature.description} {/* استخدم وصف البطاقات من المصفوفة */}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoSection;

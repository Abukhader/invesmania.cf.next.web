import React from "react";
import Image from "next/image"; // استيراد Image من Next.js
import { Box, Typography, Grid, Divider } from "@mui/material";

const steps = [
  {
    number: "01",
    title: "SIGN UP",
    description: "Securely create an account on StartEngine.",
  },
  {
    number: "02",
    title: "BROWSE INVESTMENTS",
    description:
      "Review hundreds of investment opportunities, from Startups to Collectibles.",
  },
  {
    number: "03",
    title: "MAKE AN INVESTMENT",
    description:
      "Submit your payment and own a financial stake in a Startup or Collectible.",
  },
  {
    number: "04",
    title: "HOLD OR SELL",
    description:
      "You can continue to invest in future rounds, hold on to your investment, or sell eligible securities on StartEngine’s trading platform.",
  },
];

const HowToInvest = () => {
  return (
    <Box
      sx={{
        padding: 4,
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Image
          src="/lo.png"
          alt="logo"
          width={60}
          height={60}
          style={{ marginRight: "20px", marginBottom: "18px" }}
        />
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: 700, color: "#666", letterSpacing: 4 }}
        >
          HOW TO INVEST
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ padding: 2 }}>
              <Typography
                variant="h4"
                color="var(--primary-color)"
                gutterBottom
              >
                {step.number}
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Typography
                variant="h6"
                color="#666"
                fontWeight="bold"
                gutterBottom
              >
                {step.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {step.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowToInvest;

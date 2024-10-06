import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import InvestmentCard from "./InvestmentCard";

const JustLaunchedSection = () => {
  const projects = [
    {
      id: 1,
      coverImage: "/solar-power-jordan.mp4",
      logo: "/solar.jpeg",
      name: "Solar Power Jordan",
      description:
        "A project aimed at accelerating the energy transition in Jordan through accessible solar solutions.",
      primary: "Primary",
      raised: "99% - 6 days left",
      location: "JO",
      valuation: "$5M",
      target: "$500,000",
      investors: "172",
    },
    {
      id: 2,
      coverImage: "/natural-juice-co.mp4",
      logo: "/juice.jpg",
      name: "Natural Juice Co.",
      description:
        "A Jordanian brand offering fresh and healthy natural juices to consumers worldwide.",
      primary: "Primary",
      raised: "70% - 32 days left",
      location: "JO",
      valuation: "$2M",
      target: "$200,000",
      investors: "80",
    },
    {
      id: 3,
      coverImage: "/mooiVedio.mp4",
      logo: "/clothes.jpg",
      name: "Trendy Clothes",
      description:
        "A trendy clothing store supporting authentic self-expression through street fashion.",
      primary: "Primary",
      raised: "20% - 90 days left",
      location: "JO",
      valuation: "$1M",
      target: "$100,000",
      investors: "38",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        padding: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "0 auto",
          maxWidth: "1200px", // تعيين حد أقصى للعرض
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: "#666" }}>
          Just Launched
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 2, fontWeight: 900, color: "var(--primary-color)" }}
        >
          These pitches are the newest to launch on the platform.
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 3, color: "#666", fontWeight: 500, mb: 5 }}
        >
          You’ll find many more investment opportunities in the full
          marketplace. If you want to learn more, check out our introduction to
          investing.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Box display="flex" justifyContent="center">
                {" "}
                {/* توسيط البطاقة */}
                <InvestmentCard project={project} />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Button
          sx={{
            marginTop: 5,
            bgcolor: "var(--primary-color)",
            color: "#fff",
            "&:hover": {
              color: "var(--primary-color)",
              bgcolor: "#f5f5f5",
            },
          }}
        >
          View All Live Pitches
        </Button>
      </Box>
    </Box>
  );
};

export default JustLaunchedSection;

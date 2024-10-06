import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Divider,
} from "@mui/material";
import Image from "next/image"; // استيراد Image من Next.js
import AddIcon from "@mui/icons-material/Add"; // استيراد الأيقونة

const InvestmentCard = ({ project }) => {
  // استخراج النسبة المئوية من raised
  const raisedPercentage = project.raised ? parseInt(project.raised) : 0; // تحويل القيمة إلى عدد صحيح

  // دالة لتحديد لون الشريط بناءً على النسبة
  const getProgressColor = (percentage) => {
    if (percentage <= 25) return "#f44336"; // أحمر
    if (percentage <= 50) return "#ff9800"; // برتقالي
    if (percentage <= 75) return "#ffc107"; // أصفر
    return "#4caf50"; // أخضر
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 580,
        position: "relative",
        borderRadius: 2,
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          width: "100%",
        }}
      >
        <source src={project.coverImage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.8)", // شفافية
            color: "var(--primary-color)",
            display: "flex",
            alignItems: "center",
            padding: "6px",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 1)", // تغيير لون الخلفية عند التحويم
            },
          }}
        >
          <Typography variant="body2">Follow</Typography>
          <AddIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 150,
          right: "-8%",
          transform: "translateX(-50%)",
          zIndex: 1,
          border: "1px solid rgba(0, 0, 0, 0.2)",
        }}
      >
        <Image src={project.logo} alt={project.name} width={90} height={90} />
      </Box>

      <CardContent sx={{ paddingTop: 1 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#333",
            textAlign: "left",
            fontWeight: 750,
            letterSpacing: -1,
            mb: 1,
          }}
        >
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            color: "#666",
            my: 3,
            height: "60px",
          }}
        >
          {project.description}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box
            sx={{
              bgcolor: "rgba(0, 255, 0, 0.2)",
              color: "#333",
              fontSize: "13px",
              fontWeight: "600",
              borderRadius: "50px",
              padding: "3px 10px",
              display: "flex",
              alignItems: "center",
              mr: 1,
            }}
          >
            {project.primary}
          </Box>
          <Box
            sx={{
              bgcolor: "#eee",
              color: "#333",
              fontSize: "13px",
              fontWeight: "600",
              borderRadius: "50px",
              padding: "3px 10px",
              display: "flex",
              alignItems: "center",
              mr: 1,
            }}
          >
            <Image
              src="/Jordan.png"
              alt="Jordan Flag"
              width={20}
              height={15}
              style={{ marginRight: 5 }}
            />
            {project.location}
          </Box>
        </Box>
        <Divider sx={{ margin: "10px 0" }} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: "left", mt: 2 }}
        >
          Raised:
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#333", fontWeight: 750, textAlign: "left", mb: 2 }}
        >
          {project.raised}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={raisedPercentage}
          sx={{
            borderRadius: "5px",
            height: 12,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: getProgressColor(raisedPercentage),
              borderRadius: "5px",
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          {project.valuation && (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="textSecondary">
                Valuation
              </Typography>
              <Typography variant="h6" color="#333" sx={{ fontWeight: 750 }}>
                {project.valuation}
              </Typography>
            </Box>
          )}
          <Divider orientation="vertical" flexItem />
          {project.target && (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="textSecondary">
                Target
              </Typography>
              <Typography variant="h6" color="#333" sx={{ fontWeight: 750 }}>
                {project.target}
              </Typography>
            </Box>
          )}
          <Divider orientation="vertical" flexItem />
          {project.investors && (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="textSecondary">
                Investors
              </Typography>
              <Typography variant="h6" color="#333" sx={{ fontWeight: 750 }}>
                {project.investors}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;

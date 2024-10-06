import React from "react";
import { Box, Button, Divider } from "@mui/material";

const NavLinkOptions = () => (
  <Box
    sx={{
      pl: 2,
      bgcolor: "rgba(3, 111, 91, 0.1)",
      borderRadius: 1,
      mt: 3.5,
      boxShadow: 3,
      position: "absolute",
      zIndex: 1,
      width: "50%",
      padding: 2,
    }}
  >
    {["Link A", "Link B", "Link C"].map((item, index) => (
      <Box key={item} sx={{ width: "100%" }}>
        <Button
          variant="outlined" // يمكنك محاولة "contained" أيضاً
          sx={{
            zIndex: 2000,
            fontWeight: 700,
            width: "100%",
            bgcolor: "transparent", // خلفية شفافة في البداية
            color: "var(--primary-color)", // لون الخط الافتراضي
            textAlign: "left", // محاذاة النص لليسار
            padding: 1,
            borderRadius: 0, // زوايا مربعة
            borderColor: "var(--primary-color)", // لون الحدود
            transition: "background-color 0.3s, color 0.3s", // تأثير الانتقال
            "&:hover": {
              bgcolor: "var(--primary-color)", // خلفية باللون الأساسي عند التحويم
              color: "#fff", // لون الخط أبيض عند التحويم
            },
          }}
        >
          {item}
        </Button>
        {index < 2 && (
          <Divider
            sx={{
              borderStyle: "solid",
              borderColor: "var(--primary-color)",
              mb: 1,
              width: "100%",
            }}
          />
        )}
      </Box>
    ))}
  </Box>
);

export default NavLinkOptions;

// src/app/layout.js
import Footer from "./components/common/footer/Footer.jsx";
import Navbar from "./components/common/navbar/Navbar.jsx";
import WarningBanner from "./components/common/warningBanner";
import "./globals.css";

export const metadata = {
  title: "Website Title",
  description: "Website Description",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Cairo, sans-serif" }}>
        <WarningBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

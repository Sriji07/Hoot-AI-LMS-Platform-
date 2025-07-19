import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Outfit } from "next/font/google";
import Provider from "./provider";
import { Toaster } from "../components/ui/sonner";
import DashboardHeader from "./dashboard/_components/DashboardHeader"; // Add your header

export const metadata = {
  title: "Hoot AI",
  description: "AI-Powered Learning Platform",
  icons: {
    icon: "/logo.svg",  // Your new favicon path
  }
};

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Provider>
            <DashboardHeader /> {/* Header is now global */}
            <main>{children}</main> {/* Add padding for fixed header */}
          </Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

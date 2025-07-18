import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Outfit } from "next/font/google";
import Provider from "./provider";
import { Toaster } from "../components/ui/sonner";

export const metadata = {
  title: "Hoot AI",
  description: "AI-Powered Learning Platform",
};

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: outfit.className }} dynamic={true}>
      <html lang="en">
        <body className={outfit.className}>
          <Provider>{children}</Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from './provider.js'; // ✅ correct path and capitalization
import { Toaster } from "sonner";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Hoot AI",
  description: "Hoot AI - Your AI Student Assistant",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Provider> {children}</Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

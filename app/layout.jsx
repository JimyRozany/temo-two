import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Tajawal } from "next/font/google";
// import { LayoutProvider } from "@/utils/LayoutProvider";
import { Toaster } from "sonner";
import LayoutProvider from "../utils/LayoutProvider";
const tajawal = Tajawal({
  weight: ["200", "400", "500", "700"],
  style: "normal",
  subsets: ["arabic"],
  variable: "--font-tajawal",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TemoGPT",
  description:
    "TemoGPT is an application for learning programming for students with artificial intelligence based on OpenAI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutProvider>{children}</LayoutProvider>
        <Toaster
          toastOptions={{
            unstyled: false,
            classNames: {
              error: "bg-red-400",
              success: "text-green-400",
              warning: "text-yellow-400",
              info: "bg-blue-400",
            },
          }}
        />
      </body>
    </html>
  );
}

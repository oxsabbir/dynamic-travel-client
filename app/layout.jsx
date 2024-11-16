import { SessionProvider } from "next-auth/react";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import TopLoader from "./components/Extras/TopLoader";

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dynamic Travel",
  description: "Explore new traveling opportunity",
};

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={dmSans.className}>
          <TopLoader />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}

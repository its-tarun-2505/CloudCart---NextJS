import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Provider from "./providers";
import styles from "./layout.module.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CloudCart-NextJS",
  description: "E-Commerce Application - by NextJs",
  icons: {
    icon: "/assets/fevicon.ico", // custom favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${styles.body}`}
      >
        <Provider>
          <header className={styles.header}>
            <Navbar />
          </header>

          <main className={styles.main}>
            {children}
          </main>

          <footer className={styles.footer}>
            <p>© 2024 Cloud Cart - Next.js. All rights reserved.</p>
          </footer>
        </Provider>
      </body>
    </html>
  );
}

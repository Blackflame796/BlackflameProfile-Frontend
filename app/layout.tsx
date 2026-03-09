import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Blackflame",
  description: "Blackflame",
};

import Preloader from "./components/Preloader/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader fullScreen={true} minimumDisplayTime={1500} />
        <Header />
        <main className={styles.Container}>
          {children}
        </main>
      </body>
    </html>
  );
}

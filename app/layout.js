import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clerkie Challenge",
  description:
    "This app is my submission to the Clerkie FE developer coding challenge",
};

export function TopMenu() {
  const pageName = "Home";

  return (
    <div className={styles.topMenu}>
      <h2>{pageName}</h2>
    </div>
  );
}

export function SideMenu() {
  return (
    <nav>
      <div className={styles.site_title}>
        <div className={styles.logo_wrapper}>
          <Image src="/images/Clerkie.png" alt="Home Icon" fill={true} />
        </div>
        <span>Clerkie Challenge</span>
      </div>
      <div className={styles.menu_row1}>
        <Link href="/">
          <div className={styles.icon_wrapper}>
            <Image src="/images/Home.png" alt="Home Icon" fill={true} />
          </div>
          <span>Home</span>
        </Link>
      </div>
      <div className={styles.menu_row2}>
        <Link href="/friends">
          <div className={styles.icon_wrapper}>
            <Image src="/images/Friends.png" alt="Home Icon" fill={true} />
          </div>
          <span>Friends</span>
        </Link>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideMenu />
        <br></br>
        <TopMenu />
        <div className={styles.content}>{children}</div>
      </body>
    </html>
  );
}

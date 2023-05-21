import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
// import getFriendsData from "./data/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clerkie Challenge",
  description:
    "This app is my submission to the Clerkie FE developer coding challenge",
};

export default function RootLayout({ children }) {
  // let { data } = getFriendsData();

  // console.log(data);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}

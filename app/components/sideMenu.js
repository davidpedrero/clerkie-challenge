import styles from "./sideMenu.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SideMenu() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.site_title}>
        <div className={styles.logo_wrapper}>
          <Image
            src="/images/Clerkie.png"
            alt="Home Icon"
            fill={true}
            sizes="(max-width: 16px)"
          />
        </div>
        <span>Clerkie Challenge</span>
      </div>
      <div className={styles.menu_row1}>
        <Link href="/">
          <div className={styles.icon_wrapper}>
            <Image
              src="/images/Home.png"
              alt="Home Icon"
              fill={true}
              sizes="(max-width: 16px)"
            />
          </div>
          <span>Home</span>
        </Link>
      </div>
      <div className={styles.menu_row2}>
        <Link href="/friends">
          <div className={styles.icon_wrapper}>
            <Image
              src="/images/Friends.png"
              alt="Home Icon"
              fill={true}
              sizes="(max-width: 16px)"
            />
          </div>
          <span>Friends</span>
        </Link>
      </div>
    </nav>
  );
}

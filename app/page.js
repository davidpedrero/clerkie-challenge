import styles from "./page.module.css";
import SideMenu from "./components/sideMenu";
import TopMenu from "./components/topMenu";

export default function Home() {
  const pageName = "Home";

  return (
    <>
      <TopMenu pageName={pageName} />
      <SideMenu />
      <div className={styles.content}>
        <main className={styles.main}>
          <p>Welcome to the Clerkie Challenge!</p>
        </main>
      </div>
    </>
  );
}

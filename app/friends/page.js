import styles from "./page.module.css";
import TopMenu from "../components/topMenu";
import SideMenu from "../components/sideMenu";
import getFriendsData from "../data/data";
import FilterMenu from "../components/filterMenu";

export default function Friends() {
  const pageName = "Friends";

  let { data } = getFriendsData();

  return (
    <>
      <TopMenu pageName={pageName} />
      <SideMenu />
      <div className={styles.content}>
        <FilterMenu />
        <main className={styles.main}>
          <div className={styles.toggle_menu}></div>
          <div className={styles.friend_container}>
            {data.map(({ id, name, status, email, number }) =>
              status == "Super Close Friends" ? (
                <div className={styles.friend_row} key={id}>
                  <div>
                    <span id={styles.name}>{name}</span>
                    <span id={styles.super_close}>{status}</span>
                  </div>
                  <div>
                    <small id={styles.small}>
                      {email} &bull; {number}
                    </small>
                  </div>
                </div>
              ) : status == "Close Friends" ? (
                <div className={styles.friend_row} key={id}>
                  <div>
                    <span id={styles.name}>{name}</span>
                    <span id={styles.close}>{status}</span>
                  </div>
                  <div>
                    <small id={styles.small}>
                      {email} &bull; {number}
                    </small>
                  </div>
                </div>
              ) : (
                <div className={styles.friend_row} key={id}>
                  <div>
                    <span id={styles.name}>{name}</span>
                    <span></span>
                  </div>
                  <div>
                    <small id={styles.small}>
                      {email} &bull; {number}
                    </small>
                  </div>
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </>
  );
}

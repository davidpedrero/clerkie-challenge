import styles from "./page.module.css";
import TopMenu from "@/app/components/topMenu";
import SideMenu from "@/app/components/sideMenu";
import getFriendsData from "@/app/data/data";
import FilterMenu from "@/app/components/filterMenu";

export default function Page({ params }) {
  let filter = params.filter.split("%2C");

  let parsedFilter = [];

  filter.forEach((x) => {
    let str = x.replaceAll(/%20/g, " ");
    parsedFilter.push(str);
  });

  console.log(parsedFilter);

  let { data } = getFriendsData();

  let filterData = [];

  data.forEach((x) => {
    if (parsedFilter.indexOf(x.status) != -1) {
      filterData.push(x);
    }
  });

  console.log(filterData);

  let pageName = "Friends";

  return (
    <>
      <TopMenu pageName={pageName} />
      <SideMenu />
      <div className={styles.content}>
        <FilterMenu />
        <main className={styles.main}>
          <div className={styles.toggle_menu}></div>
          <div className={styles.friend_container}>
            {filterData.map(({ id, name, status, email, number }) =>
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

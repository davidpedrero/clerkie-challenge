"use client";
import styles from "./filterMenu.module.css";
import { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import getFriendsData from "../data/data";

export default function FilterMenu() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [close, setClose] = useState(false);
  const [superClose, setSuperClose] = useState(false);

  useEffect(() => {
    let i = close && superClose ? 2 : close || superClose ? 1 : 0;

    setCount(i);
  }, [close, superClose]);

  function handleToggle() {
    setToggle(!toggle);
  }

  function HandleFilter() {
    let filterArray = [];

    if (close) {
      filterArray.push("Close Friends");
    }
    if (superClose) {
      filterArray.push("Super Close Friends");
    }
    if (!(close || superClose)) {
      filterArray.push("Default");
    }

    console.log(filterArray);

    let { data } = getFriendsData();

    let filterData = [];

    data.forEach((x) => {
      if (filterArray.indexOf(x.status) != -1) {
        filterData.push(x);
      }
    });

    console.log(filterData);

    return filterData;
  }

  return (
    <div className={styles.menu_container}>
      <button className={styles.button_wrapper} onClick={handleToggle}>
        <div className={styles.icon_wrapper}>
          <TfiMenuAlt size={20} />
          <span>{count}</span>
        </div>
      </button>
      <div
        className={styles.filter_menu}
        style={{ display: toggle ? "block" : "none" }}
      >
        <div className={styles.head}>
          <div>Clear all</div>
          <div>Filter</div>
          <div>
            <div onClick={handleToggle}>X</div>
          </div>
        </div>
        <div className={styles.form_container}>
          <form>
            <small>Friend Status</small>
            <table>
              <tbody>
                <tr>
                  <td>Close Friends</td>
                  <td>
                    <input
                      type="checkbox"
                      value="Close Friends"
                      onChange={(e) => setClose(!close)}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>Super Close Friends</td>
                  <td>
                    <input
                      type="checkbox"
                      value="Super Close Friends"
                      onChange={(e) => setSuperClose(!superClose)}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" onClick={HandleFilter}>
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

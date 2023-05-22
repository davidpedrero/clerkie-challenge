"use client";
import styles from "./filterMenu.module.css";
import { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import Link from "next/link";

export default function FilterMenu() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const [close, setClose] = useState(false);
  const [superClose, setSuperClose] = useState(false);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let i = close && superClose ? 2 : close || superClose ? 1 : 0;

    setCount(i);
  }, [close, superClose]);

  useEffect(() => {
    let array = [];

    if (close) {
      array.push("Close Friends");
    }
    if (superClose) {
      array.push("Super Close Friends");
    }
    if (!(close || superClose)) {
      array.push("Default");
    }

    setFilters(array);
  }, [close, superClose]);

  function handleToggle() {
    setToggle(!toggle);
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
            <Link href={`/friends/${filters}`}>
              <button type="button">Apply</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

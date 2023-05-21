import styles from "./topMenu.module.css";

export default function TopMenu({ pageName }) {
  return (
    <div className={styles.topMenu}>
      <h2>{pageName}</h2>
    </div>
  );
}

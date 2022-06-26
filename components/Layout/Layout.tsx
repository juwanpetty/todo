import React from "react";
import styles from "./Layout.module.scss";

type LayoutProps = {};

const Layout = (props: LayoutProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>Top Nav</section>
      <section className={styles.sidebar}>Sidebar</section>
      <section className={styles.main}>Main</section>
    </div>
  );
};

export default Layout;

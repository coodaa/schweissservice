// import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import BurgerMenu from "./BurgerMenu";
import styles from "../styles/BurgerMenu.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <BurgerMenu />
    </header>
  );
}

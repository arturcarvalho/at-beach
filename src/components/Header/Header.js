import React from "react";
import { Link } from "react-router-dom";
import Notification from "../Notification/Notification";
import styles from "./header.module.css";

export default function Header({ notification, notificationDate }) {
  return (
    <header className={styles.container}>
      <div className={styles.info}>
        <h1>
          <Link aria-label="Go home" to={"/"}>
            At Beach
          </Link>
        </h1>
        <h2>Premium Luxembourgish beaches</h2>
      </div>

      <Notification
        message={notification}
        notificationDate={notificationDate}
      />
    </header>
  );
}

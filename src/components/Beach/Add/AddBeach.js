import React from "react";
import { Link } from "react-router-dom";
import styles from "./addbeach.module.css";
import AddIcon from "./AddIcon";

export default function AddBeach() {
  return (
    <div className={styles.container}>
      <Link to="/beach">
        <AddIcon />
        <span>Add Beach</span>
      </Link>
    </div>
  );
}

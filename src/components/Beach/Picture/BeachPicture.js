import React from "react";
import styles from "./picture.module.css";
import getImage from "../../../utils/getImage";

function BeachPicture({ picture, handlePictureChange }) {
  const pictures = Array.from(new Array(9), (_x, i) => i);

  const resetPicture = () => {
    handlePictureChange(null);
  };

  let body, footer;
  if (picture !== null) {
    body = (
      <img className={styles.bigPicture} alt="beach" src={getImage(picture)} />
    );

    footer = <button onClick={resetPicture}>Change picture</button>;
  } else {
    body = (
      <div className={styles.pictures}>
        {pictures.map(idx => (
          <div
            className={styles.picture}
            key={idx}
            onClick={() => handlePictureChange(idx)}
          >
            <img alt="beach thumbnail" src={getImage(idx)} />
          </div>
        ))}
      </div>
    );
    footer = <p>Choose a picture</p>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.body}>{body}</div>
      <div className={styles.footer}>{footer}</div>
    </section>
  );
}

export default BeachPicture;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./beachfields.module.css";
import CurrencyField from "../../Fields/CurrencyField";
import BeachPicture from "../Picture/BeachPicture";

function BeachFields({
  handleSubmit,
  handleTitleChange,
  handleNotesChange,
  handlePriceChange,
  handlePictureChange,
  beach,
  submitLabel
}) {
  return (
    <form className={styles.fields} onSubmit={handleSubmit}>
      <div className={styles.top}>
        <div className={styles.left}>
          <label>
            <span>Title</span>
            <input
              autoFocus
              spellCheck={false}
              autoComplete="off"
              type="text"
              placeholder="Add a title..."
              value={beach.title}
              onChange={handleTitleChange}
            />
          </label>

          <label>
            <span>Notes</span>
            <textarea
              rows={5}
              autoComplete="off"
              placeholder="Add your notes..."
              value={beach.notes}
              onChange={handleNotesChange}
            />
          </label>

          <CurrencyField
            labelText={"Price"}
            number={beach.price}
            onChange={handlePriceChange}
          />
        </div>

        <div className={styles.right}>
          <BeachPicture
            handlePictureChange={handlePictureChange}
            picture={beach.picture}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <input className={styles.submit} type="submit" value={submitLabel} />
        <Link aria-label="Cancel" to="/">cancel</Link>
      </div>
    </form>
  );
}

export default BeachFields;

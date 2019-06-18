import React from "react";
import { Link } from "react-router-dom";
import styles from "./beachitem.module.css";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import getImage from "../../../utils/getImage";

class BeachItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showButtons: false };
  }
  onEnter = () => {
    this.setState({ showButtons: true });
  };
  onLeave = () => {
    this.setState({ showButtons: false });
  };
  render() {
    const { beach, deleteBeach } = this.props;

    const btnStyle = this.state.showButtons ? { opacity: 1 } : { opacity: 0 };

    return (
      <section
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        className={styles.container}
      >
        <div className={styles.image}>
          <img alt="Beach thumbnail" src={getImage(beach.picture)} />
        </div>

        <section className={styles.info}>
          <h1 className={styles.title}>{beach.title}</h1>
          <div className={styles.notes}>{beach.notes}</div>
        </section>

        <div style={btnStyle} className={styles.edit}>
          <Link to={`/beach/${beach.id}`}>
            <EditIcon />
          </Link>
        </div>

        <div style={btnStyle} className={styles.delete}>
          <button onClick={() => deleteBeach(beach.id)}>
            <DeleteIcon />
          </button>
        </div>
      </section>
    );
  }
}
export default BeachItem;

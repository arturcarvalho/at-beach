import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./beachdetail.module.css";
import BeachFields from "./Fields/BeachFields";

class BeachDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beach: null };
  }

  componentDidMount() {
    // Using local state to keep a temporary version of the beach.
    // If user doesn't save it, it will go back to what it was.
    this.setState({ beach: this.props.beach });
  }

  handleBeachChange = (name, value) => {
    this.setState(state => {
      return {
        beach: { ...state.beach, [name]: value }
      };
    });
  };

  handleTitleChange = event => {
    this.handleBeachChange("title", event.target.value);
  };

  handleNotesChange = event => {
    this.handleBeachChange("notes", event.target.value);
  };

  handlePriceChange = event => {
    this.handleBeachChange("price", event.target.value);
  };

  handlePictureChange = value => {
    this.handleBeachChange("picture", value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.upsertBeach(this.state.beach);
    this.props.history.push("/");
  };

  render() {
    const { beach } = this.state;

    // Not putting a Loading component here because it'll cause a "flash of loading":
    // https://github.com/jamiebuilds/react-loadable#avoiding-flash-of-loading-component
    if (!beach) return null;

    const fieldArgs = {
      handleSubmit: this.handleSubmit,
      handleTitleChange: this.handleTitleChange,
      handleNotesChange: this.handleNotesChange,
      handlePriceChange: this.handlePriceChange,
      handlePictureChange: this.handlePictureChange,
      beach,
      submitLabel: beach.id === null ? "Add Beach" : "Save Beach"
    };
    return (
      <section className={styles.details}>
        <BeachFields {...fieldArgs} />
      </section>
    );
  }
}

export default withRouter(BeachDetail);

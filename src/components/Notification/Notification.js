import React from "react";
import styles from "./notification.module.css";
import presets from "../../utils/presets";
let timerId = 0; // 0 cannot be a timer id.
class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNotification: false };
  }

  /**
   * Show a notification for 2 seconds.
   * In case a new notification comes up, cancel hiding the previous animation.
   */
  showNotification = () => {
    this.setState({ showNotification: true });
    if (timerId) {
      clearInterval(timerId);
      timerId = 0;
    }

    timerId = setInterval(() => {
      this.setState({ showNotification: false });
    }, presets.notificationDuration);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.notificationDate !== this.props.notificationDate) {
      this.showNotification();
    }
  }

  render() {
    const { message } = this.props;

    return (
      <section className={styles.container}>
        {this.state.showNotification && <p>{message}</p>}
      </section>
    );
  }
}

export default Notification;

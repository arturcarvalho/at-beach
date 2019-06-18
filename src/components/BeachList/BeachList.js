import React from "react";
import BeachItem from "../Beach/Item/BeachItem";

class BeachList extends React.Component {
  render() {
    const { beachList, deleteBeach } = this.props;
    return (
      <section>
        {beachList &&
          beachList.map(beach => (
            <BeachItem key={beach.id} deleteBeach={deleteBeach} beach={beach} />
          ))}
      </section>
    );
  }
}

export default BeachList;

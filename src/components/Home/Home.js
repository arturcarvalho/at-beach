import React from "react";
import BeachList from "../BeachList/BeachList";
import AddBeach from "../Beach/Add/AddBeach";

function Home({ beachList, deleteBeach }) {
  return (
    <>
      <AddBeach />
      <BeachList beachList={beachList} deleteBeach={deleteBeach} />
    </>
  );
}

export default Home;

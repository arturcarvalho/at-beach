import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { upsertBeach, deleteBeach } from "./utils/beachManager";
import "./App.css";
import BeachDetail from "./components/Beach/BeachDetail";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

const sampleData = [
  {
    id: "1",
    title: "Remich Sunny Beach",
    notes: "Like Miami Beach, but worse.",
    price: 700000,
    picture: 0
  },
  {
    id: "2",
    title: "Moselle Resort",
    notes: "Great resort. Picture not available.",
    price: 7000000,
    picture: null
  }
];

const emptyBeach = {
  title: "",
  notes: "",
  price: 0,
  picture: null,
  id: null
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beachList: sampleData,
      notification: ""
    };
  }

  upsertBeach = beach => {
    this.setState(state => {
      const [beachList, notification] = upsertBeach(state.beachList, beach);
      return {
        ...state,
        beachList,
        notification,
        notificationDate: new Date()
      };
    });
  };

  deleteBeach = id => {
    this.setState(state => {
      const [beachList, notification] = deleteBeach(state.beachList, id);
      return {
        ...state,
        beachList,
        notification,
        notificationDate: new Date()
      };
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            notification={this.state.notification}
            notificationDate={this.state.notificationDate}
          />

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  beachList={this.state.beachList}
                  deleteBeach={this.deleteBeach}
                />
              )}
            />
            <Route
              path="/beach/:id?"
              render={props => {
                const slugId = props.match.params.id;
                let beach = this.state.beachList.find(
                  beach => beach.id === slugId
                );

                if (!beach) beach = emptyBeach;

                return (
                  <BeachDetail beach={beach} upsertBeach={this.upsertBeach} />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

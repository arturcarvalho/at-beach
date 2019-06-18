import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import BeachItem from "./BeachItem";

const testBeach = {
  id: "1",
  title: "title1",
  notes: "notes1",
  price: 10,
  picture: 1
};

describe("DOM testing BeachItem", () => {
  it("Checks deleteBeach is called.", () => {
    const fn = jest.fn();
    const wrapper = mount(
      <Router>
        <BeachItem deleteBeach={fn} beach={testBeach} />
      </Router>
    );

    wrapper.find("button").simulate("click");
    expect(fn.mock.calls.length).toBe(1);
  });
});

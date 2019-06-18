import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import BeachList from "./BeachList";
import BeachItem from "../Beach/Item/BeachItem";

const testData = [
  {
    id: "1",
    title: "title1",
    notes: "notes1",
    price: 10.1,
    picture: 0
  },
  {
    id: "2",
    title: "title2",
    notes: "notes2",
    price: 0,
    picture: null
  }
];

describe("DOM testing BeachList", () => {
  it("Checks BeachList has 2 elements.", () => {
    const wrapper = shallow(<BeachList beachList={testData} />);
    expect(wrapper.find(BeachItem).length).toBe(2);
  });
});

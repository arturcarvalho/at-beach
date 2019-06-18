import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Notification from "./Notification";

describe("Notification testing", () => {
  it("Check notification doesn't show message, show message, hides after 2 secs", () => {
    const wrapper = mount(
      <Notification message={""} notificationDate={new Date("1970")} />
    );

    jest.useFakeTimers();
    // Empty
    expect(wrapper.find("section").text()).toBe("");

    // Show message
    wrapper.setProps({ message: "bla", notificationDate: new Date("1980") });
    expect(wrapper.find("section").text()).toBe("bla");

    // Message after setInterval is ran.
    jest.advanceTimersByTime(2000);

    expect(wrapper.find("section").text()).toBe("");
    expect(wrapper.state("showNotification")).toBe(false);
  });
});

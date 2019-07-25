import React from "react";
import Enzyme, { shallow } from "enzyme";
import LandingPageDashboard from "./LandingPageDashboard"

it('renders correctly', () => {
    const wrapper = shallow(
        <LandingPageDashboard />
    );
    expect(wrapper).toMatchSnapshot();
});
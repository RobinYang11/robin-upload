

import React from "react";

import Upload from ".";
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });
import { render, fireEvent, getByText } from '@testing-library/react';
describe("robin", () => {


	it("test", () => {

		const wrapper = shallow(<Upload url="robin" name="test" onClick={() => { console.log("robin") }} />);
		const button = wrapper.find('div');
		button.simulate('click');
		expect(wrapper.text()).toEqual('robin');
	})
})

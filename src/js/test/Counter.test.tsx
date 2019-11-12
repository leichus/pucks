import { shallow } from 'enzyme';
import Counter from '../Counter';
import React from 'react';

// describe('<Counter />', () => {
//   test(`displays a button that says "Click me... "`, () => {
//     const wrapper = shallow(<Counter value={0}/>);
//     expect(wrapper.text()).toContain('Click me... 0');
//   });
//   test(`after clicking button displays "Click me... 1"`, () => {
//     const wrapper = shallow(<Counter value={0}/>);
//     wrapper.find('button').simulate('click');
//     expect(wrapper.text()).toContain('Click me... 1');
//   });
// });
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  test(`displays a header that says "Welcome to my counter!"`, () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toContain('Welcome to my counter!');
  });
});

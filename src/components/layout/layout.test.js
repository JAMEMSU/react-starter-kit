import React from 'react';
import { shallow } from 'enzyme';
import Layout from './layout';

describe('<Layout />', () => {
  test('renders', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
});

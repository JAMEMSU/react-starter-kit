import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from './breadcrumb';

describe('<Breadcrumb />', () => {
  test('renders', () => {
    const wrapper = shallow(<Breadcrumb />);
    expect(wrapper).toMatchSnapshot();
  });
});

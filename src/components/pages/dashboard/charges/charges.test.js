import React from 'react';
import { shallow } from 'enzyme';
import Charges from './charges';

describe('<Charges />', () => {
  test('renders', () => {
    const wrapper = shallow(<Charges />);
    expect(wrapper).toMatchSnapshot();
  });
});

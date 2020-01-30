import React from 'react';
import { shallow } from 'enzyme';
import Recordwork from './recordwork';

describe('<Recordwork />', () => {
  test('renders', () => {
    const wrapper = shallow(<Recordwork />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchResultItem from '../SearchResultItem';

describe('SearchResultItem', () => {
  test('renders without crashing', () => {
    const component = shallow(<SearchResultItem />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
  });
});

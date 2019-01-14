import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

beforeEach(() => {
  jest.resetModules();
});

describe('App', () => {
  it('renders App', () => {
    const instance = shallow(<App />);
    expect(instance).toMatchSnapshot();
  });

  it('renders App with props', () => {
    const instance = shallow(<App blah="1"/>);
    expect(instance).toMatchSnapshot();
  });
});
import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  expect(renderer.create(<App />)).toMatchSnapshot();
});

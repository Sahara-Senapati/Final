import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import Plotly from "react-plotly.js";

describe('App component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<App/>).toJSON();
     
    expect(tree).toMatchSnapshot();
  })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})
});

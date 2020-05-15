/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);

function rand() { 
    return Math.random();
  }


class Line extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
            {
              y: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(rand),
              mode: 'lines+markers',
              line: {color: '#80CAF6'}
            }
        ]}
        layout={ {width: 750, height: 520, title: 'Line'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Line </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> The standard way to show a changing time series. If data are ireegular, consider markers to represent data points </td>
          </tr>
          <tr>
            <th> Mode </th>
            <td> Lines + Markers </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data</th>
            <td> 
            <tr> 
            y: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(rand) where rand is a function for generating random values             
            </tr> 
             </td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}
export default Line;

/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Timeline extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
            {
  x: [2, 3.5, 6],
  y: [1, 1.5, 1],
  
  mode: 'text'
}
        ]}
        layout={ {
  title: 'Vertical and Horizontal Lines Positioned Relative to the Axes',
  xaxis: {
    range: [0, 7]
  },
  yaxis: {
    range: [0, 2.5]
  },
  width: 720,
  height: 550,
  shapes: [

    

    //Line Horizontal

    {
      type: 'line',
      x0: 0,
      y0: 2,
      x1: 6,
      y1: 2,
      line: {
        color: 'rgb(50, 171, 96)',
        width: 4,
        
      }
    }
  ]
} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Scatterplot </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> The standard way to show the relationship between two continuous variables, each of which has its own axis</td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Bar </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data </th>
            <td> 
            <tr> x: [1,2,3,4,5,6,7,8,9]
            </tr> 
             <tr> y: [1,7,3,6,2,5,4,2,6] 
              </tr>
             </td>
          </tr>
          <tr>
            <th> Marker size </th>
            <td> 12 </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}
export default Timeline;
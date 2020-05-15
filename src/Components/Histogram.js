/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);

var x = [];
for (var i = 0; i < 100; i ++) {
	x[i] = Math.random();
}


class Histogram extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {
             type: 'histogram',
             x: x
             
          }
        ]}
        layout={ {width: 750, height: 520, title: 'Histogram'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Histogram </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> The standard way to show a statistical distribution - keep the gaps between columns small to highlight the 'shape' of the data </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> histogram </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data </th>
            <td> 
            <tr> x: random values using Math.random()
           </tr>
             </td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Histogram;

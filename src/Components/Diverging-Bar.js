/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Diverge extends Component {
  render() {
    return (
      <div>
       <Plot className="plot"
        data={[
          {
             type: 'bar',
             x: [20, 14, 23],
             y: [5,10,15],
             orientation: 'h'
          },
          {
             type: 'bar',
             x: [-5, -14, -13],
             y: [5,10,15],
             orientation: 'h'
          }
        ]}
        layout={ {width: 750, height: 520, title: 'Diverging Bar Graph'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Diverging Bar Graph </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A simple standard bar chart that can handle both negative and positive magnitude values </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> x: [20, 14, 23] </tr> 
             <tr> y: [5,10,15]  </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr> x: [-5, -14, -13] </tr> 
             <tr> y: [5,10,15]  </tr>
             </td>
          </tr>
          <tr>
            <th> Orientation </th>
            <td>h</td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Bar </td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default Diverge;

/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Spine extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {  name:'Men',
             type: 'bar',
             x: [43, 35, 22, 11, 3, 7],
             y: [5, 10, 15, 20, 25, 30],
             orientation: 'h'
          },
          {  name:'Women',
             type: 'bar',
             x: [-8, -5, -13, -24, -32, -45],
             y: [5, 10, 15, 20, 25, 30],
             orientation: 'h'
          }
        ]}
        layout={ {width: 750, height: 520, title: 'Spine', barmode:'relative'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Spine </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Splits a single value into two contrasting components (eq male/female) </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> x: [43, 35, 22, 11, 3, 7] </tr> 
             <tr> y: [5, 10, 15, 20, 25, 30] </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr> x: [-8, -5, -13, -24, -32, -45] </tr> 
             <tr> y: [5, 10, 15, 20, 25, 30]  </tr>
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

export default Spine;

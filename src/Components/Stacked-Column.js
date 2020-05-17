/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Stacked extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Stacked Column
      </h1>
      <Plot className="plot"
        data={[
            {
              x: [1, 2, 3, 4, 5, 6],
              y: [20, 34, 23, 15, 8, 37],
              name: '2016 Sales ',
              type: 'bar'
              },
              {
              x: [1, 2, 3, 4, 5, 6],
              y: [42, 18, 29,30, 51, 11],
              name: '2017 Sales',
              type: 'bar'
              }
        ]}
        layout={ {width: 750, height: 520, barmode:'relative'} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Stacked Column </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A simple way of showing part-to whole relationships but can be difficult to read with more than a few components </td>
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
            <th> Trace 1 </th>
            <td> 
            <tr>  x: [1, 2, 3, 4, 5, 6] </tr> 
             <tr>  y: [20, 34, 23, 15, 8, 37] </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr> x: [1, 2, 3, 4, 5, 6] </tr> 
             <tr> y: [42, 18, 29,30, 51, 11] </tr>
             </td>
          </tr>
          <tr>
            <th> Barmode </th>
            <td> relative </td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Stacked;

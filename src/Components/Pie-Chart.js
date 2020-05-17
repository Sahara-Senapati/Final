/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Pie extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Pie Chart
      </h1>
      <Plot className="plot"
        data={[
            {
              values: [30, 43, 8, 19],
              labels: ['Summer', 'Winter', 'Spring', 'Autumn'],
              type: 'pie'
            }
        ]}
        layout={ {width: 750, height: 520} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Pie Chart </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A common way of showing part-to-whole data - but be aware that its difficult to accurately compare the size of the segments</td>
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
            <th>  Values </th>
            <td> 
            <tr>  [30, 43, 8, 19]</tr>
             </td>
          </tr>
          <tr>
            <th> Labels </th>
            <td> 
            <tr> ['Summer', 'Winter', 'Spring', 'Autumn'] </tr> 
             </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Pie;

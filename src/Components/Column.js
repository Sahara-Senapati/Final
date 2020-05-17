/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Column extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Column
      </h1>
      <Plot className="plot"
        data={[
            {
             x: [1, 2, 3, 4, 5, 6, 7],
             y: [60, 23, 47, 40, 70, 17, 38],
             type: 'bar'
             }
            
        ]}
        layout={ {width: 750, height: 520} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Column</td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> The standard way to compare the size of things. Must always start at 0 on the axis </td>
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
            <tr> x: [1, 2, 3, 4, 5, 6, 7]             
             </tr> 
             <tr>  y: [60, 23, 47, 40, 70, 17, 38] </tr>
             </td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Column;

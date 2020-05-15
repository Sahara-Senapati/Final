/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class BoxPlot extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
            {
              x: [1, 2, 2, 3],
              type: 'box',
              name: 'Set 1'
            },
            {
              x: [2, 3, 3, 4, 4, 4.5, 4.7, 5, 5, 7],
              type: 'box',
              name: 'Set 2'
            },
            {
              x: [5, 5, 6, 6, 6, 7, 8, 9, 10],
              type: 'box',
              name: 'Set 3'
            },
            {
              x: [6, 7, 7, 7, 8, 9, 9, 9, 11, 12],
              type: 'box',
              name: 'Set 4'
            }

        ]}
        layout={ {width: 750, height: 520, title: 'Box Plot'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Boxplot </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Summarise multiple distributions by showing the median (centre) and range of the data </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> box </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> x: [1, 2, 2, 3]
           </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr> x: [2, 3, 3, 4, 4, 4.5, 4.7, 5, 5, 7]
           </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 3 </th>
            <td> 
            <tr> x: [5, 5, 6, 6, 6, 7, 8, 9, 10]
           </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 4 </th>
            <td> 
            <tr> x: [6, 7, 7, 7, 8, 9, 9, 9, 11, 12]
           </tr>
             </td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
  }
}
export default BoxPlot;

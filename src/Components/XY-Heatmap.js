/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Heatmap extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
            {
              z: [[1, 20, 30, 50, 5, 73, 42 ], [20, 1, 60, 80, 30, 53, 8], [30, 60, 1, -10, 20, 9, 48],[1, 20, 30, 50, 5, 73, 42 ], [20, 1, 60, 80, 30, 53, 8], [30, 60, 1, -10, 20, 9, 48], [1, 20, 30, 50, 5, 73, 42 ]],
              x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
              y: ['Jan', 'Feb', 'March','April','May','June','July'],
              type: 'heatmap',
              hoverongaps: false
            }
        ]}
        layout={ {width:650, height: 650, title: 'XY Heatmap'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> XY Heatmap </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A good way of showing the patterns between 2 categories of data, less effective at showing fine differences in amounts </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Heatmap </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data </th>
            <td> 
            <tr>x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
            </tr> 
             <tr> y: ['Jan', 'Feb', 'March','April','May','June','July']
              </tr>
              <tr> z: [[1, 20, 30, 50, 5, 73, 42 ]
              [20, 1, 60, 80, 30, 53, 8], 
              [30, 60, 1, -10, 20, 9, 48],
              [1, 20, 30, 50, 5, 73, 42 ], 
              [20, 1, 60, 80, 30, 53, 8], 
              [30, 60, 1, -10, 20, 9, 48], 
              [1, 20, 30, 50, 5, 73, 42 ]]
              </tr>
             </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Heatmap;

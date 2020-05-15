/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);

class Frequency extends Component {
  render() {
    return (
        <div>
      <Plot className="plot"
        data={[
            {
              x: [1, 2, 2.5, 3, 4, 5, 6, 7],
              y: [1, 2, 5, 4, 4.5, 1, 2, 2.5],
              mode: 'lines+markers',
              line: {
                width: 6
              },
              marker:{
                  size:15
              }
            },

             {
              x: [1, 2, 3, 4, 4.5, 5, 6, 7],
              y: [1.5, 2.5, 2, 5, 3.5, 4, 0.5],
              
              mode:'lines+markers',
              line: {
                width: 6
              },
              marker:{
                  size:15
              }
            }
        ]}
        layout={ {width: 750, height: 520, title: 'Frequency Polygons'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Frequency Polygons </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A standard way for showing the age and sex breakdown of a population distrbution; effectively, back to back histograms </td>
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
            <th> Trace 1</th>
            <td> 
            <tr> 
              x: [1, 2, 2.5, 3, 4, 5, 6, 7]              
            </tr> 
             <tr> y: [1, 2, 5, 4, 4.5, 1, 2, 2.5]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr>  x: [1, 2, 3, 4, 4.5, 5, 6, 7]          
              </tr> 
             <tr>   y: [1.5, 2.5, 2, 5, 3.5, 4, 0.5]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Line width </th>
            <td> 6 </td>
          </tr>
          <tr>
            <th> Marker size </th>
            <td> 15 </td>
          </tr>
          
          
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Frequency;

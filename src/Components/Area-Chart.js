/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Area extends Component {
  render() {
    return (
      <div> 
      <Plot className="plot"
        data={[
          {
            x: [1, 2, 3, 4],
            y: [0, 2, 3, 5],
            fill: 'tozeroy',
            type: 'scatter'
          },

           {
            x: [1, 2, 3, 4],
            y: [3, 5, 4, 7],
            fill: 'tonexty',
            type: 'scatter'
          },
          {
            x: [1, 2, 3, 4],
            y: [4.5, 6, 5.5, 8],
            fill: 'tonexty',
            type: 'scatter'
          }

        ]}
        layout={ {width: 750, height: 520, title: 'Area Chart'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Area chart </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Use with care - these are good at showing changes to total, but seeing change in components can be very difficult </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Scatter </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> 
            x: [1, 2, 3, 4]                             
            </tr> 
             <tr>  y: [0, 2, 3, 5]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr>  x: [1, 2, 3, 4]                      
              </tr> 
             <tr>    y: [3, 5, 4, 7]    
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 3 </th>
            <td> 
            <tr> x: [1, 2, 3, 4]                           
              </tr> 
             <tr> y: [4.5, 6, 5.5, 8]      
              </tr>
             </td>
          </tr>
          <tr>
            <th> Fill </th>
            <td> tonexty and tozeroy </td>
          </tr>
                
          </tbody>
      </table> 
      </div>
    );
  }
}
export default Area;
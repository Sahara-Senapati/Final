/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Dot extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Dot Strip Plot
      </h1>
      <Plot className="plot"
        data={[{
                 x: [1, 2, 3, 4, 5,6, 7, 8 , 9, 10],
                 y: [2, 2, 2, null, null,null, 2, 2, 2, 2],
                 mode: 'markers',
                 type: 'scatter',
                 marker:{
                   size:10
                 }
               },
               { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 y: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                 mode: 'markers',
                 type: 'scatter',
                 marker:{
                   size:10
                 }
               },
               { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 y: [4, 4, null, 4, 4, 4, 4, null, null, 4],
                 mode: 'markers',
                 type: 'scatter',
                 marker:{
                   size:10
                 }
               },
               { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 y: [5, 5, 5, 5, 5, null, null, 5, 5, 5],
                 mode: 'markers',
                 type: 'scatter',
                 marker:{
                   size:10
                 }
               }
        ]}
        layout={ {width: 750, height: 520} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Dot Strip Plot </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Dots placed in order on a strip are a space-efficient method of laying out ranks across multiple categories </td>
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
            <th> Mode </th>
            <td> Markers </td>
          </tr>
          <tr>
            <th> Trace 1 </th>
            <td> 
            <tr> x: [1, 2, 3, 4, 5,6, 7, 8 , 9, 10]
                  </tr> 
             <tr> y: [2, 2, 2, null, null,null, 2, 2, 2, 2]  </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr> x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                  </tr> 
             <tr> y: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]  </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 3 </th>
            <td> 
            <tr> x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                 </tr> 
             <tr>  y: [4, 4, null, 4, 4, 4, 4, null, null, 4] </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 4 </th>
            <td> 
            <tr> x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
           </tr> 
             <tr> y: [5, 5, 5, 5, 5, null, null, 5, 5, 5]  </tr>
             </td>
          </tr>
          <tr>
            <th> Marker size </th>
            <td> 10 </td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Dot;

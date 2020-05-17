/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Lollipop extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Lollipop 
      </h1>
      <Plot className="plot"
        data={[
            {
              x: [1, 2],
              y: [1, 1],
              mode: 'lines',
              
              line: {
                color: 'rgb(128, 0, 128)',
                width: 5
              }
            },
            {
              x: [1, 2, 3],
              y: [2, 2, 2],
              mode: 'lines',
             
              line: {
                color: 'rgb(128, 0, 128)',
                width: 5
              }
            },
            {
              x: [1, 2, 3, 4],
              y: [3, 3, 3, 3],
              mode: 'lines',
                line: {
                color: 'rgb(128, 0, 128)',
                width: 5
              }
            },
            {
              x: [1, 2, 3, 4, 5],
              y: [4, 4, 4, 4, 4],
              mode: 'lines',
              
              line: {
                color: 'rgb(128, 0, 128)',
                width: 5
              }
            },
            {
              x: [1, 2, 3, 4, 5, 6],
              y: [5, 5, 5, 5, 5, 5],
              mode: 'lines',
              
              line: {
                color: 'rgb(128, 0, 128)',
                width: 5
              }
            },
            
            {
              x: [2, 3, 4, 5, 6],
              y: [1, 2, 3, 4, 5],
              mode: 'markers',
              marker: {
              color: 'rgb(128, 0, 128)',
              size: 20
              }
            }
            
        ]}
        layout={ {width: 750, height: 520,showlegend: false} }
      />
      <table id="data" >
      <tbody>
        <tr>
            <th> Title </th>
            <td> Lollipop </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td>  Lollipops draw more attention to the data value than standard bar/column and can also show rank and value effectively </td>
          </tr>
          <tr>
            <th> Mode </th>
            <td> Lines and Markers </td>
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
            <th> Lines Data 1 </th>
            <td> 
            <tr> x: [1, 2]             
            </tr> 
             <tr>  y: [1, 1] </tr>
             </td>
          </tr>
          <tr>
            <th> Lines Data 2 </th>
            <td> 
            <tr> x: [1, 2, 3]             
                  </tr> 
             <tr>  y: [2, 2, 2] </tr>
             </td>
          </tr>
          <tr>
            <th> Lines Data 3 </th>
            <td> 
            <tr> x: [1, 2, 3, 4]             
                 </tr> 
             <tr>   y: [3, 3, 3, 3] </tr>
             </td>
          </tr>
          <tr>
            <th> Lines Data 4 </th>
            <td> 
            <tr> x: [1, 2, 3, 4, 5]
           </tr> 
             <tr> y: [4, 4, 4, 4, 4] </tr>
             </td>
          </tr>
          <tr>
            <th> Lines Data 5 </th>
            <td> 
            <tr> x: [1, 2, 3, 4, 5, 6]
           </tr> 
             <tr> y: [5, 5, 5, 5, 5, 5] </tr>
             </td>
          </tr>
          <tr>
            <th> Markers Data </th>
            <td> 
            <tr>  x: [2, 3, 4, 5, 6]
           </tr> 
             <tr> y: [1, 2, 3, 4, 5] </tr>
             </td>
          </tr>
          <tr>
            <th> Line width</th>
            <td> 5 </td>
          </tr>
          <tr>
            <th> Marker size</th>
            <td> 20 </td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Lollipop;

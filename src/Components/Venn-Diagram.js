/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Venn extends Component {
  render() {
    return (
      <div className="body"> 
      <h1>
        Venn Diagram
      </h1>
      <Plot className="plot"
        data={[
            {
  x: [1, 1.75, 2.5],
  y: [1, 1, 1],
  type: 'scatter',
  mode: 'text',
  text: ['A', 'A+B', 'B'],
  textfont: {
    color: 'black',
    size: 18,
    family: 'Arial'
  }
            }

        ]}
        layout={ {width: 750, height: 520, 
  xaxis: {
    showticklabels: false,
    autotick: false,
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    showticklabels: false,
    autotick: false,
    showgrid: false,
    zeroline: false
  },
  shapes: [{
    opacity: 0.3,
    xref: 'x',
    yref: 'y',
    fillcolor: 'blue',
    x0: 0,
    y0: 0,
    x1: 2,
    y1: 2,
    type: 'circle',
    line: {
      color: 'blue'
    }
  }, {
    opacity: 0.3,
    xref: 'x',
    yref: 'y',
    fillcolor: 'gray',
    x0: 1.5,
    y0: 0,
    x1: 3.5,
    y1: 2,
    type: 'circle',
    line: {
      color: 'gray'
    }
  }],
  margin: {
    l: 20,
    r: 20,
    b: 100
  }
}} 
      />
      <table id="data" >
        
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
export default Venn;
/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Radar extends Component {
  render() {
    return (
        <div className="body">
        <h1>
        Radar
        </h1>
      <Plot className="plot"
        data={[{
                 type: 'scatterpolar',
                 r: [39, 28, 8, 7, 28, 39],
                 theta: ['A','B','C', 'D', 'E', 'A'],
                 fill: 'toself'
               }
        ]}
        
        layout={ {polar: {
                   radialaxis: {
                     visible: true,
                     range: [0, 50]
                   }
                 },
                 showlegend: false,
                 width: 750, height: 520} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Radar </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A space-efficient way of showing value of multiple variables - but make sure they are organised in a way that makes sense to reader </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Scatterpolar </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data</th>
            <td> 
            <tr> r: [39, 28, 8, 7, 28, 39]                
            </tr> 
             <tr>  theta: ['A','B','C', 'D', 'E', 'A']
              </tr>
             </td>
          </tr>
          
          
          
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Radar;

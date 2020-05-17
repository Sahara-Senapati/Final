/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Pyramid extends Component {
  render() {
    return (
        <div className="body">
        <h1>
        Population Pyramid
        </h1>
      <Plot className="plot"
        data={[{
                 
                 name: 'Men', 
                 type: 'bar', 
                 x: [600, 623, 653, 650, 670, 578, 541, 360, 312, 170], 
                 y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
                 marker: {color: 'powderblue'}, 
                 
                 orientation: 'h'
               },
               {
                name: 'Women', 
                type: 'bar', 
                x: [-600, -623, -653, -650, -670, -578, -541, -411, -322, -230], 
                y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
                marker: {color: 'seagreen'}, 
                
                orientation: 'h'
            }
            
        ]}
        
        layout={ {width: 750, height: 520, barmode: 'relative'} }
      />
      <table id="data">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Population pyramid </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A standard way for showing the age and sex breakdown of a population distrbution; effectively, back to back histograms </td>
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
            <th> Trace 1</th>
            <td> 
            <tr> x: [600, 623, 653, 650, 670, 578, 541, 360, 312, 170]
            </tr> 
             <tr> y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 </th>
            <td> 
            <tr>  x: [-600, -623, -653, -650, -670, -578, -541, -411, -322, -230]
              
            </tr> 
             <tr>   y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
              </tr>
             </td>
          </tr>
          
          
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Pyramid;

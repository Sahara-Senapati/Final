/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Connected extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Connected Scatter Plot
       </h1>
      <Plot className="plot"
        data={[
          {
            x: [1,2,3,4,5,6,7,8,9],
            y: [1,7,3,6,2,5,4,2,6],
            type: 'lines+scatter',
            marker: {
             color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)'],
             size: 12 },

        }
        ]}
        layout={ {width: 750, height: 520} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Connected scatterplot </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Usually used to show how the relationship between 2 variables has changed over time </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Lines + Scatter </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data </th>
            <td> 
            <tr> x: [1,2,3,4,5,6,7,8,9]
            </tr> 
             <tr> y: [1,7,3,6,2,5,4,2,6] 
              </tr>
             </td>
          </tr>
          <tr>
            <th> Marker size </th>
            <td> 12 </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
      
    );
  }
}
export default Connected;

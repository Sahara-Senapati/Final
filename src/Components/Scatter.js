/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Scatter extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
          {
            x: [1,2,3,4,5,6,7,8,9],
            y: [1,7,3,6,2,5,4,2,6],
            mode: 'markers',
            type: 'scatter',
            marker: {
             color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)'],
             size: 12 },

        }
        ]}
        layout={ {width: 750, height: 520, title: 'Scatter Plot'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Scatterplot </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> The standard way to show the relationship between two continuous variables, each of which has its own axis</td>
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
export default Scatter;

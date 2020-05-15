/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Ordered extends Component {
  render() {
    return (
      <div>
      <Plot className="plot"
        data={[
            {
              x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
              y: [80, 54, 50, 35, 24, 10, 3],
              type: 'bar',
              marker: {
             color: ['rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)']
              }
            }
        ]}
        layout={ {width: 750, height: 520, title: 'Ordered Column'} }
      />
      <table id="data" class="table table-bordered">
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Ordered bar </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Standard bar charts display the ranks of values much more easily when sorted into order </td>
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
            <tr> x: [2014, 2015, 2016, 2017, 2018, 2019, 2020]
             </tr> 
             <tr>  y: [80, 54, 50, 35, 24, 10, 3] </tr>
             </td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Ordered;

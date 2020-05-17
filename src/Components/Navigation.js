import React, {Component} from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export class Navigation extends Component{
  render(){
    return(
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/Diverging-Bar-Chart"> React Plotly.js </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <NavDropdown title="Charts" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Diverging-Bar-Chart">Diverging Bar Chart </NavDropdown.Item>
            <NavDropdown.Item href="/Spine">Spine</NavDropdown.Item>
            <NavDropdown.Item href="/Scatter-Plot">Scatter Plot</NavDropdown.Item>
            <NavDropdown.Item href="/Connected-Scatter-Plot"> Connected Scatter Plot</NavDropdown.Item>
            <NavDropdown.Item href="/XY-Heatmap"> XY Heatmap</NavDropdown.Item>
            <NavDropdown.Item href="/Ordered-Column"> Ordered Column</NavDropdown.Item>
            <NavDropdown.Item href="/Dot-Strip-Plot"> Dot Strip Plot</NavDropdown.Item>
            <NavDropdown.Item href="/Lollipop"> Lollipop</NavDropdown.Item>
            <NavDropdown.Item href="/Histogram"> Histogram</NavDropdown.Item>
            <NavDropdown.Item href="/Box-Plot"> Box Plot</NavDropdown.Item>
            <NavDropdown.Item href="/Pyramid"> Pyramid</NavDropdown.Item>
            <NavDropdown.Item href="/Frequency"> Frequency Polygons</NavDropdown.Item>
            <NavDropdown.Item href="/Line"> Line </NavDropdown.Item>
            <NavDropdown.Item href="/Column+Line"> Column + Line</NavDropdown.Item>
            <NavDropdown.Item href="/Area"> Area Chart</NavDropdown.Item>
            <NavDropdown.Item href="/Calendar"> Calendar Heatmap</NavDropdown.Item>
            <NavDropdown.Item href="/Timeline"> Circle Timeline</NavDropdown.Item>
            <NavDropdown.Item href="/Column"> Column</NavDropdown.Item>
            <NavDropdown.Item href="/Paired-Column"> Paired Column</NavDropdown.Item>
            <NavDropdown.Item href="/Radar"> Radar</NavDropdown.Item>
            <NavDropdown.Item href="/Bullet"> Bullet Chart</NavDropdown.Item>
            <NavDropdown.Item href="/Stacked"> Stacked Column</NavDropdown.Item>
            <NavDropdown.Item href="/Pie"> Pie Chart</NavDropdown.Item>
            <NavDropdown.Item href="/Treemap"> Treemap</NavDropdown.Item>
            <NavDropdown.Item href="/Sankey"> Sankey</NavDropdown.Item>
            <NavDropdown.Item href="/Venn"> Venn Diagram</NavDropdown.Item>
            
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    )
  }
}
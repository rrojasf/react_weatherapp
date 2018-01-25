import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Cali, CO',
  'Buenos Aires, AR',
  'Santiago, CL',
  'Jerusalem, IL',
  'La Paz, BO'
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    //console.log(`handleSelectedLocation ${city}`);
    this.setState({ city });
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row><Col xs={12}><AppBar title="WeatherAPP" /></Col></Row>
          <Row>
            <Col xs={12} md={6}>
              <div className="App">
                <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
              <div className="detail">
              {
                city === null ? 
                <h1>No hay ciudad!</h1> :
                <ForecastExtended city={city}></ForecastExtended>
              }
                
              </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;

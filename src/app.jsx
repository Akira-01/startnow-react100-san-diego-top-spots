import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }


  render() {
    return (
      <div className='App' >

        <div className='container'>
          <div className='card'>
            <h1>San Diego Top Spots</h1>
            <div className='card-body' />
          </div>
          {this.state.topspots.map(topspot => (
            <div>
              <TopSpot
                key={ topspot.id }
                name={ topspot.name }
                description={ topspot.description }
                location={ topspot.location }
              />
            </div>
          )
          )
          }
        </div>
      </div>
    );
  }
}

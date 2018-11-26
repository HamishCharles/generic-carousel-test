import React, { Component } from 'react';
import Card from './Card';

class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <p>I contain the carousel</p>
        <Card/>
      </div>
    );
  }
}

export default Carousel;

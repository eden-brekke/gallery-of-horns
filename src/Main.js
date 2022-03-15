import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  render() {
    let beast = [];
    this.props.data.forEach((animal, index) => {
      beast.push(
        <HornedBeast
          title={animal.title}
          name={animal.name}
          image_url={animal.image_url}
          description={animal.description}
          key={index}
        />
      )
    })

    return (
      <main>
        {beast}
      </main>
    );
  }
}

export default Main;


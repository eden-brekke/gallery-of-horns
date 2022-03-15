import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';



class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: 0,
    }
  }
  handleFaves = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
  }; 

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p> 😻I have {this.state.favorites} favorites!💖</p>
        <Button onClick={this.handleFaves} className="fave-button">I love these horns!</Button>
        <img src={this.props.image_url}
          alt={this.props.title}
        />
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default HornedBeast;
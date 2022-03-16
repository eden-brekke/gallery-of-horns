import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';



class HornedBeast extends React.Component {
  constructor(props) {
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
  handleClick = ()=>{
    // this.handleFaves();
    this.props.handleOpenModal(this.props.beast);
  };

  render() {
    return (
      <article>
        <Card style={{ width: '18rem' }} className = "h-100">

          <Card.Body>
            <Card.Title className = "card-head">{this.props.title}</Card.Title>

            <Card.Text>😻I have {this.state.favorites} favorites!💖</Card.Text>
            <Button onClick={this.handleFaves} className="fave-button">I love these horns!</Button>
            <Card.Img
              onClick={this.handleClick}
              className ="card-img"
              variant="top"
              src={this.props.image_url}
              alt={this.props.title}
            />
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </article>
    );
  }
}

export default HornedBeast;
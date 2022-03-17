import React from 'react';
import HornedBeast from './HornedBeast.js';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SelectedBeast from './SelectedBeast.js'
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      showModal: false,
      beast: {},
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOpenModal = (beast) => {
    this.setState({
      showModal: true,
      beast,
    });
  };

  render() {
    return (
      <main>

        <SelectedBeast
          showModal={this.state.showModal}
          beast={this.state.beast}
          handleCloseModal={this.handleCloseModal}
        />

        <Container>
          <Row xs={1} sm={2} md={3} lg={3}>
            {this.state.data.map((beast, index) => (
              <Col key={index}>
                <HornedBeast
                  beast={beast}
                  title={beast.title}
                  name={beast.name}
                  image_url={beast.image_url}
                  description={beast.description}
                  key={index}
                  handleOpenModal={this.handleOpenModal}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;


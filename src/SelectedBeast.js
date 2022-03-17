import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './selectedBeast.css';


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal} className="modal">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">
            {this.props.beast.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <img
          className = "modal-img"
          style={{width: '100%'}}
          src={this.props.beast.image_url}
          alt={this.props.beast.description}
          />
          <ul>
            <li>
              {this.props.beast.title}
            </li>
            <li>
              {this.props.beast.description}
            </li>
            <li>
              Number of Horns: {this.props.beast.horns}
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;
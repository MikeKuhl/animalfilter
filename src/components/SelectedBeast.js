import React, { Component } from "react";
import { Button, Card, Modal } from "react-bootstrap";
export default class SelectedBeast extends Component {
  handleClose = () => {
    this.props.closeModal();
  };

  render() {
    console.log(this.props.title);
    return (
      <Modal show={this.props.shouldShowModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant='top'
              src={this.props.modalImageSrc}
              alt={this.props.imageDescription}
            />
            <Card.Text> {this.props.imageDescription}</Card.Text>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

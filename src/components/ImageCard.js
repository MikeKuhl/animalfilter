import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      shouldShowModal: false,
      modalImageSrc: "",
      imageDescription: "",
      title: "",
    };
  }
  openModal = (title) => (props) => {
    this.setState({ shouldShowModal: true });
    this.setState({ modalImageSrc: props.target.src });
    this.setState({ imageDescription: props.target.alt });

    this.setState({ title: title });
    console.log(title);
  };

  closeModal = () => {
    this.setState({ shouldShowModal: false });
    this.setState({ modalImageSrc: "" });
    this.setState({ imageDescription: "" });
    this.setState({ imageTitle: "" });
  };

  handleClick = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  };

  render() {
    return (
      <div className='beasts' key={this.props.id}>
        <Card.Img
          variant='top'
          src={this.props.modalImageSrc}
          alt={this.props.imageDescription}
          onClick={this.props.openModal}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description} </Card.Text>
          <Card.Text>Number of horns {this.props.horns}</Card.Text>
          <Card.Text>
            This beast has been favorited {this.state.favorites}
          </Card.Text>
          <Button variant='primary' onClick={this.handleClick}>
            <span role='img' aria-label='Sparkle Hear'>
              Favorite 💖
            </span>
          </Button>
        </Card.Body>
      </div>
    );
  }
}

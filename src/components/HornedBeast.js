import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import jsonGallery from "../data/data.json";
import SelectedBeast from "./SelectedBeast";
export default class HornedBeast extends Component {
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

  // reference https://linguinecode.com/post/how-to-pass-parameter-values-to-onclick-react-function
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
      <div>
        <SelectedBeast
          closeModal={this.closeModal}
          shouldShowModal={this.state.shouldShowModal}
          modalImageSrc={this.state.modalImageSrc}
          imageDescription={this.state.imageDescription}
          title={this.state.title}
        />

        <Card style={{ width: "18rem" }}>
          {jsonGallery.map((image, i) => (
            <div className='beasts' key={i}>
              <Card.Img
                variant='top'
                src={image.image_url}
                alt={image.description}
                key={i}
                onClick={this.openModal(image.title)}
              />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                {/* TODO: Add description */}
                <Card.Text>{image.description} </Card.Text>
                <Card.Text>Number of horns {image.horns}</Card.Text>
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
          ))}
        </Card>
      </div>
    );
  }
}

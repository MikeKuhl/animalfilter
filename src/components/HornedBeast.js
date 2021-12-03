import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import jsonGallery from "../data/data.json";
import ImageCard from "./ImageCard";
import SelectedBeast from "./SelectedBeast";
export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            <ImageCard
              image={image}
              key={i}
              favorites={this.state.favorites}
              handleClick={this.handleClick}
              openModal={this.openModal}
              imageDescription={image.imageDescription}
              title={image.title}
              horns={image.horns}
              modalImageSrc={image.image_url}
            />
          ))}
        </Card>
      </div>
    );
  }
}

import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Card, Form } from "react-bootstrap";
import jsonGallery from "../data/data.json";
import ImageCard from "./ImageCard";

const listOfHorns = [1, 2];
export default class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowModal: false,
      modalImageSrc: "",
      imageDescription: "",
      title: "",
      horns: listOfHorns,
    };
  }
  handleChange = (event) => {
    const selection = event.target.value;
    let newHornList;

    if (selection === "1") {
      newHornList = listOfHorns[0];
    } else if (selection === "2") {
      newHornList = listOfHorns[1];
    } else if (selection === "all") {
      newHornList = 0;
    }
    this.setState({ horns: newHornList });
  };

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
        <Form>
          <Form.Select onChange={this.handleChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='all'>All</option>
          </Form.Select>
        </Form>

        {/* <SelectedBeast
          shouldShowModal={this.state.shouldShowModal}
          modalImageSrc={this.state.modalImageSrc}
          imageDescription={this.state.imageDescription}
          title={this.state.title}
          closeModal={this.closeModal}
        /> */}

        <Card style={{ width: "18rem" }}>
          {jsonGallery
            .filter(
              (image) =>
                image.horns === this.state.horns || this.state.horns === 0
            )
            .map((image, i) => (
              <ImageCard
                image={image}
                id={image.keyword}
                key={i}
                favorites={this.state.favorites}
                handleClick={this.handleClick}
                openModal={this.openModal}
                imageDescription={image.imageDescription}
                title={image.title}
                horns={image.horns}
                modalImageSrc={image.image_url}
                shouldShowModal={this.state.shouldShowModal}
              />
            ))}
        </Card>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import jsonGallery from "../data/data.json";

export default class HornedGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  handleClick = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  };
  render() {
    return (
      <Container fluid='md'>
        <Row>
          <div>
            <Col lg={true}>
              {jsonGallery.map((image, i) => (
                <div className='beasts' key={i}>
                  <img
                    src={`${image.image_url}`}
                    alt={image.description}
                    key={i}
                  />
                  <li>
                    {image.title}
                    <br />
                    {image.description}
                    <br />
                    Number of horns {image.horns}
                    <br />
                    <p>
                      {" "}
                      This beast has been favorited {
                        this.state.favorites
                      } times{" "}
                    </p>
                    <button onClick={this.handleClick}> Favorites</button>
                  </li>
                </div>
              ))}
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

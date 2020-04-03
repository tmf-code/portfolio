/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import Slider, { Settings } from 'react-slick';
import css from 'styled-jsx/css';

export type ProjectImageProps = {
  images: { src: string; alt?: string }[];
};

export class SimpleSlider extends Component<ProjectImageProps> {
  render() {
    const settings: Settings = {
      dots: true,
      arrows: false,
      accessibility: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div className="container">
        <style jsx>{style}</style>
        <Slider {...settings}>
          {this.props.images.map((image, index) => (
            <div key={index}>
              <div className="slider-image" style={{ backgroundImage: `url(${image.src})` }} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const style = css`
  .container {
    margin-bottom: 5%;
    width: 100%;
  }
  .slider-image {
    background: black;
    width: 100%;
    height: 45vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

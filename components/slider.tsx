import { Component } from 'react';
import Slick, { Settings } from 'react-slick';
import css from 'styled-jsx/css';

export type ProjectImageProps = {
  images: string[];
};

export class Slider extends Component<ProjectImageProps> {
  render() {
    const settings: Settings = {
      dots: true,
      arrows: false,
      accessibility: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    };
    return (
      <div className="container">
        <style jsx>{style}</style>
        <Slick {...settings}>
          {this.props.images.map((image, index) => (
            <div key={index}>
              <div className="slider-image" style={{ backgroundImage: `url(${image})` }} />
            </div>
          ))}
        </Slick>
      </div>
    );
  }
}

const style = css`
  .container {
    margin-top: 15px;
    margin-bottom: 5%;
    width: 100%;
  }
  .slider-image {
    background: black;
    width: 100%;
    height: 56.25vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

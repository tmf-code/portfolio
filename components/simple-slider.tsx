/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import css from 'styled-jsx/css';

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'turquoise' }}
      role="button"
      tabIndex={-1}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'turquoise' }}
      role="button"
      tabIndex={-1}
      onClick={onClick}
    />
  );
}

export type ProjectImageProps = {
  images: { src: string; alt?: string }[];
};

export class SimpleSlider extends Component<ProjectImageProps> {
  render() {
    const settings: Settings = {
      dots: true,
      arrows: true,
      accessibility: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="container">
        <style jsx>{style}</style>
        <Slider {...settings}>
          {this.props.images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} height="500px" />
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
`;

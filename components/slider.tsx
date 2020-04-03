import { Component } from 'react';
import Slick, { Settings } from 'react-slick';
import styles from '../styles/slider.module.scss';

export type ProjectImageProps = {
  images: string[];
};

export class Slider extends Component<ProjectImageProps> {
  render() {
    const settings: Settings = {
      dots: true,
      arrows: false,
      accessibility: true,
      lazyLoad: 'progressive',
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    };
    return (
      <div className={styles['slider']}>
        <Slick {...settings}>
          {this.props.images.map((image, index) => (
            <div key={index}>
              <div
                className={styles['slider-image']}
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </Slick>
      </div>
    );
  }
}

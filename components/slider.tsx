import { Component } from 'react';
import Slick, { Settings } from 'react-slick';
import styles from '../styles/slider.module.scss';

export type ProjectImageProps = {
  images?: ProjectImageData[];
};

type ProjectImageData = {
  src: string;
  caption?: string;
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
    if (!this.props.images) {
      return null;
    }
    return (
      <div className={styles['slider']}>
        <Slick {...settings}>
          {this.props.images.map(({ src, caption }, index) => (
            <div key={index}>
              <div className={styles['slider-image']} style={{ backgroundImage: `url(${src})` }} />
              {caption && <div className={styles['slider-caption']}>{caption}</div>}
            </div>
          ))}
        </Slick>
      </div>
    );
  }
}

import React from 'react';
import { Slide } from 'react-slideshow-image';
import classes from './Slider.module.css';

const slideImages = [
  'https://d3r06h67fvmy8.cloudfront.net/media/wysiwyg/sale/sale-header_1.jpg',
  'https://cdn.bmstores.co.uk/images/hpcSliderImage/imgSource/2019-6-26-summer-sale-cat1.gif',
  'https://matalan-content.imgix.net/uploads/asset_file/asset_file/247767/1570546923.259551-Sept_Sale_-_Further_Reducations_v2_DP_DT.jpg?ixlib=rails-2.1.4&auto=format%2Ccompress&cs=tinysrgb&w=1140&dpr=2&q=30&s=f3480a6bb3f74a5de84bd15b36f6ff26'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const slideshow = () => {
    return (
      <div className={classes.slideContainer}>
        <Slide {...properties}>
          <div className={classes.eachSlide}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>

            </div>
          </div>
          <div className={classes.eachSlide}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`, }}>

            </div>
          </div>
          <div className={classes.eachSlide}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`, }}>

            </div>
          </div>
        </Slide>
      </div>
    )
}
export default slideshow;
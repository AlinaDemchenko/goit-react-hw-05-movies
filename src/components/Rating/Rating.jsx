// import { Component } from 'react';
import StarRatings from 'react-star-ratings';

export const Rating = ({rating}) => {
      return (
        <StarRatings
          rating={rating / 2}
          starDimension="40px"
          starSpacing="15px"
          starRatedColor="#d2dc1d"
        />
      );
    }

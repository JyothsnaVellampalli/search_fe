import React from 'react';
import './card.css';
import styles from'./App.css';

function Card({add}) {
    console.log(add);
  return (
    <div className='card-container'>
      <div className='card-header'>
        {add.heading}
      </div>
      <div className='text-primary'>{add.text}</div>
      <div className='image-container'>
        <img src={add.image} height="300" width="300" alt='Invalid source' />
      </div>
      <div className='description'>{add.description}</div>
      <button className='button'>{add.CTA ? add.CTA : 'Shop Now'}</button>
    </div>
  )
}

export default Card;
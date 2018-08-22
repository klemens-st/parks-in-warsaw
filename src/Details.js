import React from 'react';
import { string } from 'prop-types';

import './Details.css';

Details.propTypes = {
  name: string.isRequired,
  url: string,
  imgUrl: string,
  imgSource: string
};

function Details({name, url, imgUrl, imgSource}) {
  return (
    <div>
      <h3>{name}</h3>
      <figure>
        <img src={imgUrl} alt={'Picture of ' + name}/>
        <figcaption>Source: {imgSource}</figcaption>
      </figure>
      {url && <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        See details on Foursquare
      </a>}
    </div>
  );
}

export default Details;
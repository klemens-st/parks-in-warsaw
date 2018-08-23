import React from 'react';
import { string, bool } from 'prop-types';

import './Details.css';

Details.propTypes = {
  loaded: bool,
  name: string,
  url: string,
  imgUrl: string,
  imgSource: string,
  msg: string
};

function Details({name, url, imgUrl, imgSource, loaded, msg}) {
  return (
    <div>
      {!loaded && <img
        // eslint-disable-next-line no-undef
        src={require('./img/Spinner-1s-200px.svg')}
        alt="Loading"
        className="loader"
      />}
      {loaded && msg &&
        <div role="alert">
          <p>{msg}</p>
        </div>
      }
      {loaded && !msg && <div>
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
      </div>}
    </div>
  );
}

export default Details;
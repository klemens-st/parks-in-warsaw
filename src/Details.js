import React from 'react';
import { string, bool, object } from 'prop-types';

import './Details.css';

Details.propTypes = {
  loaded: bool,
  name: string,
  url: string,
  imgUrl: string,
  imgSource: string,
  msg: string,
  heading: object.isRequired
};

function Details({name, url, imgUrl, imgSource, loaded, msg, heading}) {
  return (
    <section>
      {!loaded && <img
        // eslint-disable-next-line no-undef
        src={require('./img/Spinner-1s-200px.svg')}
        alt="Loading"
        className="loader"
      />}
      {loaded && msg &&
        <div className="alert" role="alert">
          <p>{msg}</p>
        </div>
      }
      {loaded && !msg && <div>
        <h3 tabIndex="-1" ref={heading}>{name}</h3>
        <figure>
          <img
            src={imgUrl}
            alt={'Picture of ' + name}
            className="featured"
          />
          <figcaption>Source: {imgSource}</figcaption>
        </figure>
        {url && <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {name} details on Foursquare
        </a>}
      </div>}
    </section>
  );
}

export default Details;
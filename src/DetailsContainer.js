import React, {Component} from 'react';
import { string, object } from 'prop-types';

import Details from './Details';

class DeatilsContainer extends Component {
  static propTypes = {
    title: string.isRequired,
    location: object.isRequired
  }

  state = {
    name: '',
    url: '',
    imgUrl: '',
    imgSource: ''
  }

  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo() {
    const {title, location} = this.props;
    const foursqCred = {
      clientId: '0HLZ2PIA5MYWCZ3XPS0R0KEYSLJZGCXYT2FP4UKU5KCVKPBA',
      clientSecret: 'RFNJE13QKC0TE3K1GNKNCBSQNFHLNYXGZTTDWCUPBRQ2CEJY'
    };

    fetch(`https://api.foursquare.com/v2/venues/search?client_id=${foursqCred.clientId}&client_secret=${foursqCred.clientSecret}&v=20180822&limit=1&intent=match&ll=${location.lat},${location.lng}&name=${title}`)
      .then((response) => response.json())
      .then((data) => data.response.venues[0].id)
      .then(id => (
        fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=${foursqCred.clientId}&client_secret=${foursqCred.clientSecret}&v=20180822`)
      ))
      .then((response) => response.json())
      .then((data) => {
        const venue = data.response.venue;
        this.setState({
          name: venue.name,
          url: venue.canonicalUrl,
          imgUrl: venue.bestPhoto.prefix + 'height190' + venue.bestPhoto.suffix,
          imgSource: venue.bestPhoto.source.name
        });
      });
  }

  render() {
    const {name, url, imgUrl, imgSource} = this.state;
    return (
      <Details
        name={name}
        url={url}
        imgUrl={imgUrl}
        imgSource={imgSource}
      />
    );
  }
}

export default DeatilsContainer;
import React, {Component} from 'react';
import { string, object } from 'prop-types';

import Details from './Details';

class DeatilsContainer extends Component {
  static propTypes = {
    title: string.isRequired,
    location: object.isRequired
  }

  state = {
    // 'loaded' is set to true when Foursquare data is loaded
    loaded: false,
    name: '',
    url: '',
    imgUrl: '',
    imgSource: '',
    msg: ''
  }

  // Ref to the heading of a 'loaded' infowindow
  // For managing focus.
  heading = React.createRef();

  focusHeading = () => {
    this.heading.current.focus();
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
      .then((response) => {
        // Need to filter statuses because fetch doesn't reject on 400 etc.
        if (response.status !== 200) {
          throw new Error('Failed loading data from Foursqare');
        }
        return response.json();
      })
      .then((data) => {
        if (data.response.venues.length === 0) {
          throw new Error('No matching locations found on Foursquare');
        }
        return data.response.venues[0].id;
      })
      .then(id => (
        fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=${foursqCred.clientId}&client_secret=${foursqCred.clientSecret}&v=20180822`)
      ))
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Failed loading data from Foursqare');
        }
        return response.json();
      })
      .then((data) => {
        const venue = data.response.venue;
        this.setState({
          loaded: true,
          name: venue.name,
          url: venue.canonicalUrl,
          imgUrl: venue.bestPhoto.prefix + 'height190' + venue.bestPhoto.suffix,
          imgSource: venue.bestPhoto.source.name
        }, this.focusHeading);
      })
      // All errors are caught here.
      .catch((err) => {
        this.setState({
          loaded: true,
          msg: err.message
        });
      });
  }

  render() {
    const {name, url, imgUrl, imgSource, loaded, msg} = this.state;
    return (
      <Details
        loaded={loaded}
        name={name}
        url={url}
        imgUrl={imgUrl}
        imgSource={imgSource}
        msg={msg}
        heading={this.heading}
      />
    );
  }
}

export default DeatilsContainer;
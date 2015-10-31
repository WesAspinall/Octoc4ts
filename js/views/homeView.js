import React from 'react';
export default React.createClass({

homePhotos(data) {
  return <li key={data.objectId} onClick={() => this.props.onItemClick(data.objectId)}>{data.Img}</li>;
}

  render() {
    return <ul>{this.props.collectionData.map(this.homePhotos)}</ul>;
  }

    
  }
}); 
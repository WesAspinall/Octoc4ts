import React from 'react';
export default React.createClass({

  goToEdit() {
    this.props.onEditClick();
  },

  render() {
    return(

    <div className='detailContainer'>

    <button className='editBtn' onClick={this.goToEdit}>Edit</button>

    </div>

    )
  }
}); 














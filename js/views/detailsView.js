import React from 'react';
export default React.createClass({

  goToEdit() {
    this.props.onEditClick();
  },

  render() {
    return(

    <div className='detailContainer'>
    <div className="detail-img">
          <img src={this.props.details.Img}/>  
    </div>   


    <button className='editBtn' onClick={this.goToEdit}>Edit</button>

    </div>

    )
  }
}); 














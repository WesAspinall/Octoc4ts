import React from 'react';
export default React.createClass({

   backClickHandler() {
    this.props.onBackClick();
  },
  editClickHandler() {
    this.props.onEditClick();
  },

  render() {
    return(

    <div className='detailsContainer'>
      <ul>
        <li><button onClick={this.backClickHandler}>back</button></li>
        <li><button onClick={this.editClickHandler}>edit photo</button></li>
      </ul>
        <div className="detail-img">
            <img src={this.props.details.Img}/>  
        </div>   
    </div>

    )
  }
}); 














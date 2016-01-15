import React from 'react';
export default React.createClass({

   backClickHandler() {
    this.props.onBackClick();
  },


  render() {
    return(

    <div className='detailsContainer'>
      <button onClick={this.backClickHandler}>back</button>
        <div className="detail-img">
            <img src={this.props.details.Img}/>  
        </div>   
      <button>edit</button>
    </div>

    )
  }
}); 














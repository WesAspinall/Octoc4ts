import React from 'react';
export default React.createClass({

backClickHandler() {
    this.props.onBackClick();
  },


  render() {
    return(
    <div className='editContainer'>
      <form>
        <input className="editUrl" placeholder="edit url here ..."/>
        <input className= "editDescription" placeholder="edit description here..."/>
        <button className="editSaveBtn">save</button>
      </form>
    <button onClick={this.backClickHandler}>back</button>
    </div>
    )
  }
}); 
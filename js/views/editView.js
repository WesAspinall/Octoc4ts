import React from 'react';
export default React.createClass({

  render() {
    return(
    <div className='editContainer'>
      <form>
        <input className="editUrl" placeholder="edit url here ..."/>
        <input className= "editDescription" placeholder="edit description here..."/>
        <button className="editSaveBtn">save</button>
      </form>
    </div>
    )
  }
}); 
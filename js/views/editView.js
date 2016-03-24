import React from 'react';
export default React.createClass({

backClickHandler() {
    this.props.onBackClick();
  },

getInitialState() {
    return {
     
      Img: this.props.record.Img,
      
    };
  }, 

saveHandler(event) {
    event.preventDefault();
    this.props.onSave(this.state.Img);
  },

updateUrl(event) {
    let newUrl = event.currentTarget.value;

    this.setState({
      Img: newUrl
    });
  },


  render() {
    return(
    <div className='editContainer'>
      <form>
        <input className="editUrl" onChange={this.updateUrl} type="url" value={this.state.Img}  placeholder="edit url here ..."/>
        <button className="editSaveBtn" onClick={this.saveHandler}>save</button>
      </form>
    <button onClick={this.backClickHandler}>back</button>
    </div>
    )
  }
}); 
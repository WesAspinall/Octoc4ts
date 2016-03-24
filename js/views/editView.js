import React from 'react';
export default React.createClass({

backClickHandler() {
    this.props.onBackClick();
  },

getInitialState() {
    return {
     
      Url: this.props.edit.Url,
      
    };
  }, 

submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.Url);
  },

updateUrl(event) {
    let newUrl = event.currentTarget.value;

    this.setState({
      Url: newUrl
    });
  },


  render() {
    return(
    <div className='editContainer'>
      <form>
        <input className="editUrl" onChange={this.updateUrl} type="url" value={this.state.Url}  placeholder="edit url here ..."/>
        <button className="editSaveBtn">save</button>
      </form>
    <button onClick={this.backClickHandler}>back</button>
    </div>
    )
  }
}); 
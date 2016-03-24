import React from 'react';
export default React.createClass({

//on submit, this function references Upload component's props
  submitHandler(event) {
  	event.preventDefault();
    this.props.onSubmitClick(this.state.Img);
  },

  updateUrl(event) {
    let newUrl = event.currentTarget.value;

    this.setState({
      Img: newUrl
    });
  },

  render() {
    return(

      <form className="uploadForm">
      	<span> Upload Photo </span>
        <input className='uploadInput' onChange={this.updateUrl} placeholder='type url . . .'/>
        <button className='uploadSubmit' onClick={this.submitHandler}>Submit</button>
      </form>

    )
  }
}); 
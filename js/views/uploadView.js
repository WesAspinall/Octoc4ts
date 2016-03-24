import React from 'react';
export default React.createClass({

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

      <form>
        <input className='uploadInput' onChange={this.updateUrl} placeholder='type url . . .'/>
        <button className='uploadSubmit' onClick={this.submitHandler}>Submit</button>
      </form>

    )
  }
}); 
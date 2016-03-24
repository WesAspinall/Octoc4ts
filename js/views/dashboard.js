import React from 'react';

export default React.createClass({
  render() {
  	return(

  		<div className="dash">
  			<div className="profilePic"></div>
  			<div className="dashContent">
	  			<ul>
		  			<li id="title">octocats</li>
		  			<li><button>Follow</button></li>
	  			</ul>
	  			<p>This is an instagram clone made with <span className="hashtag">#react.js</span> and <span className="hashtag">backbone</span>! Upload a photo by clicking "upload" in the top right corner.</p>
		  		<ul className="followers">
			  		<li> 4000 followers</li>
			  		<li> 44 following </li>
		  		</ul>
  			</div>

  		</div>




  	)
  }
}); 
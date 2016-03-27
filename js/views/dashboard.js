import React from 'react';

export default React.createClass({
  render() {
  	return(

  		<div className="dash">

  			<div className="profilePicContainer">
  				<div className="profilePic"></div>
  			</div>

  			<div className="dashContent">
	  			<ul>
		  			<li id="title">octocats</li>
		  			<li><button>Follow</button></li>
	  			</ul>
	  			<p>This is an instagram clone made with <span className="hashtag">#react.js</span> and <span className="hashtag">#backbone</span>! Upload a photo by clicking "upload" in the top right corner.</p>
	  			<p><a href="http://www.github.com/waspnx/instaReact">view github repo</a></p>
		  		<ul className="followers">
			  		<li> 4000 followers</li>
			  		<li> 44 following </li>
		  		</ul>
  			</div>


  		</div>




  	)
  }
}); 
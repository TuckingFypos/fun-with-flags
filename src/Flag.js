import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Flag extends React.Component {
	constructor(props) {    //to define initial state of component
		super(props);
	}

// or onFlagClick: () => {}
// onFlagClick() {
//   console.log('Click happened');
// };

	render() {
		return(
			<div>
		      <svg className="flag" xmlns="http://www.w3.org/2000/svg" width="1235"
		      xmlnsLink="http://www.w3.org/1999/xlink" height="650" fill="#FFF">
		        <path d="m0,0h1235v650H0"></path>
		        <path stroke="#B22234" strokeWidth="2470" strokeDasharray="50" d="m0,0v651"></path>
		        <path fill="#3C3B6E" d="m0,0h494v350H0"></path>
		        <g className="line1">
		          <path id="star0" d="m30,50 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star1" d="m112,50 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star2" d="m194,50 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star3" d="m276,50 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star4" d="m358,50 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star5" d="m440,50 12-36 12,36-30.8-22h37.8"></path>
		        </g>
		        <g className="line2">
		          <path id="star6" d="m72,88 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star7" d="m154,88 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star8" d="m236,88 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star9" d="m318,88 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star10" d="m400,88 12-36 12,36-30.8-22h37.8"></path>
		        </g>
		        <g className="line3">
		          <path id="star11" d="m30,122 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star12" d="m112,122 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star13" d="m194,122 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star14" d="m276,122 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star15" d="m358,122 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star16" d="m440,122 12-36 12,36-30.8-22h37.8"></path>
		        </g>
		        <g className="line4">
		          <path id="star17" d="m72,160 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star18" d="m154,160 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star19" d="m236,160 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star20" d="m318,160 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star21" d="m400,160 12-36 12,36-30.8-22h37.8"></path>

		        </g>
		        <g className="line5">
		          <path id="star22" d="m30,196 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star23" d="m112,196 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star24" d="m194,196 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star25" d="m276,196 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star26" d="m358,196 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star27" d="m440,196 12-36 12,36-30.8-22h37.8"></path>
		        </g>
		        <g className="line6">
		          <path id="star28" d="m72,230 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star29" d="m154,230 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star30" d="m236,230 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star31" d="m318,230 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star32" d="m400,230 12-36 12,36-30.8-22h37.8"></path>
		        </g>
		        <g className="line7">
		          <path id="star33" d="m30,264 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star34" d="m112,264 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star35" d="m194,264 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star36" d="m276,264 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star37" d="m358,264 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star38" d="m440,264 12-36 12,36-30.8-22h37.8"></path>
		        </g>
		        <g className="line8">
		          <path id="star39" d="m72,300 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star40" d="m154,300 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star41" d="m236,300 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star42" d="m318,300 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star43" d="m400,300 12-36 12,36-30.8-22h37.8"></path>
		        </g>
		        <g className="line9">
		          <path id="star44" d="m30,334 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star45" d="m112,334 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star46" d="m194,334 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star47" d="m276,334 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star48" d="m358,334 12-36 12,36-30.8-22h37.8"></path>
		          <path id="star49" d="m440,334 12-36 12,36-30.8-22h37.8"></path>
		        </g>
		      </svg>
		    </div>
		);
	}

};

export default Flag;
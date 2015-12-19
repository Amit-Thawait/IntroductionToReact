import React from 'react';

var Board = React.createClass({
	render: function() {
		var divStyle = {
			height:'100px',
			width:'100px',
			border:'solid'
		};
		return (
			<div style={divStyle}>
			  <span>{this.props.name}</span>
			</div>
		);
	}
});

module.exports = Board; 
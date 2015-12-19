import React from 'react';
import Board from './board.jsx';
import ReactDOM from 'react-dom';

var Dashboard = React.createClass({

	getInitialState: function() {
		return {
			boards: []
		}
	},

	createBoard: function() {
		var board = {title: this.refs.name.value};
		var boards = this.state.boards;
		boards.push(board);
		this.setState({boards: boards})
	},

	render: function() {
		return(
			<div>
				<input type="text" ref="name" className="board-name"></input>
				<button className="create-btn" onClick={this.createBoard}>Create Board</button>
				{
					this.state.boards.map((board, index) => {
						var className = "board-title" + index;
						//return <div className={className}>{board.title}</div>
						return <Board name={board.title} />;

					})
				}
			</div>
		)
	}
});

module.exports = Dashboard;
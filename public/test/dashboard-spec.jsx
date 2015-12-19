jest.dontMock('../js/dashboard.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Dashboard = require('../js/dashboard.jsx');
describe('Dashboard', () => {

	it('should be able to create a board', () => {
		var dashboard = TestUtils.renderIntoDocument(
            <Dashboard/>
        );

		var boardInput = TestUtils.findRenderedDOMComponentWithClass(dashboard, "board-name")
        boardInput.value = 'My Board';

		var createBoardBtn = TestUtils.findRenderedDOMComponentWithClass(dashboard, 'create-btn');
		TestUtils.Simulate.click(createBoardBtn);

		var board = TestUtils.findRenderedDOMComponentWithClass(dashboard, "board-title0");
		expect(board.textContent).toBe('My Board');
	})

})
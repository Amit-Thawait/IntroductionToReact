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

        var createBoardBtn = TestUtils.findRenderedDOMComponentWithClass(dashboard, "create-btn");

        expect(createBoardBtn.textContent).toBe('Create Board')
	})

})
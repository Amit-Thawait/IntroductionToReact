jest.dontMock('../js/hello-world.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var HelloWorld = require('../js/hello-world.jsx');

describe('HelloWorld', () => {

    it('prints hello world', () => {
        var helloWorld = TestUtils.renderIntoDocument(
            <HelloWorld/>
        );

        var helloWorldNode = ReactDOM.findDOMNode(helloWorld, "p");

         expect(helloWorldNode.textContent).toEqual("Hello World!!!"); 
    });

});
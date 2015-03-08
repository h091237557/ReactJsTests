/** @jsx React.DOM */
    var Core = React.createClass({
	render: function() {
		return (
			<div>Hello,{this.props.name}</div>
		);
	}

	});

      var targetDiv = document.getElementById('Test1');
      React.renderComponent(<Core name="Hello React Js"/>,targetDiv);

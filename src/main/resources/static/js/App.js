const {component} = require('./component')

const App = (() => {
	return component(function () {

	// Setup our template
	var template = '';

	// Loop through the todos
	for (var i = 0; i < this.state.todos.length; i++) {
		var todo = this.state.todos[i];

		// Check if it's completed
		var checked = todo.completed ? 'checked' : '';

		// Create the todo item
		template +=
			'<label>' +
				'<input type="checkbox" value="' + todo.item + '" ' + checked + '>' +
				todo.item +
			'</label>';
	}

	// Return completed template
	return template;

}, {
	todos: [
		{
			item: 'Eat',
			completed: false
		},
		{
			item: 'Take a nap',
			completed: true
		},
		{
			item: 'Eat again',
			completed: false
		}
	]
}, document.querySelector('#app'))
})()

module.exports = {
	App
}
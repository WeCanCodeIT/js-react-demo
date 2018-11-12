function component(template, props, elem) {

	// Add properties to our template
	Object.defineProperties(template, {

		// Set the element to render into
		elem: {
			value: elem,
			writable: true
		},

		// Add state
		state: {
			value: props,
			writable: true
		},

		// Add the `setState()` method
		setState: {
			value: function (props) {

				// Shallow merge new properties into state object
				for (var key in props) {
					if (props.hasOwnProperty(key)) {
						template.state[key] = props[key];
					}
				}

				// Render the element
				render(template, template.elem);

				// Return the elem for use elsewhere
				return template.elem;

			}
		},

		render: render

	});

	// Return the template so you can assign it to a variable if desired
	return template;

};

function render(template, node) {
    if (!node) return;
    node.innerHTML = template;
};

module.exports = {
	component
}
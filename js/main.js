var Todo = Backbone.Model.extend({
	initialize: function(){
		console.log('This model has been initialized.');
		this.on('change', function(){
			console.log('- Values for this model have changed.')
		})
	}, 
	defaults: {
		title: '',
		completed: false
	}
});

// We can then create our own concrete instance of a (Todo) model with no values at all
var todo1 = new Todo();

todo1.attributes.title = 'This is todo1.';

todo1.set('title', 'This is set through the set method.');

console.log(JSON.stringify(todo1));
console.log(todo1.get('completed'));

console.log(todo1.attributes);

// or with some arbitrary data
var todo2 = new Todo({
	title: 'This is todo2',
	completed: true
});

console.log(JSON.stringify(todo2));

// Validation

var Person = new Backbone.Model({name: 'Jeremy'});

// Validate the model name
Person.validate = function(attrs){
	if (!attrs.name) {
		return 'I need your name';
	}
};

// Change the name
Person.set({name: 'Samuel'});
console.log(Person.get('name'));

// Remove the name attribute, forcing validation
Person.unset('name', {validate: true});

console.log(Person.get('name'));


// Views

var TodoView = Backbone.View.extend({
	tagName: 'li',

	todoTpl: _.template("An example template."),

	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	}, 

	render: function(){
		this.$el.html( this.todoTpl( this.model.toJSON()));
		this.input = this.$('.edit');
		return this;
	}, 

	edit: function(){

	},

	close: function(){

	},

	updateOnEnter: function(){

	}

	});

var todoView = new TodoView();

console.log(todoView.el);
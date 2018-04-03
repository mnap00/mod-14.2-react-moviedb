var movies = [
    {
        title: 'Harry Potter',
        desc: 'A movie about a wizard'
    },
    {
        title: 'The Lion King',
        desc: 'A movie about a king of the Pride Lands'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc)
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Private Movie Database'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));

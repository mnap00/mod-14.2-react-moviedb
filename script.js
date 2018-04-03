var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Private Movie Database'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'A movie about a wizard')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'The Lion King'),
                React.createElement('p', {},
                    'A movie about a king of the Pride Lands')
            )
        )
    );

ReactDOM.render(element, document.getElementById('app'));

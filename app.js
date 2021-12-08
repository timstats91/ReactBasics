
// This new element named 'Title' below:
const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.' },
    'My first React Element!' 
);
// Creates this:
// <h1 id="main-title" title="This is a title">My first React Element!</h1>

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM.'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);
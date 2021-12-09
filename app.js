
const name = 'Tim';
const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';

const header = (
    <header>
        <h1 id={myTitleID}>{ name }'s first React Element!</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);
import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

// const reactHeading = React.createElement('h1', {}, 'Hello from JSX!');

// const reactSesondHeading = React.createElement('h2', {}, 'Wassup Beijing!');

// const header = React.createElement(                                             
//     'header',                   // type
//     {className: 'site-header'}, // property
//     reactHeading,               // children
//     reactSesondHeading              
// )

// function Footer() { // custom component
//     return React.createElement('div', 
//     {className: 'site-footer'}, 
//     'All rights reserved')
// }

var Footer = function Footer() {
    return React.createElement(
        'div',
        { className: 'site-footer' },
        React.createElement(
            'footer',
            null,
            'All rights reserved \xA9'
        )
    );
};

var headerJSX = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        { className: 'site-header' },
        React.createElement(
            'h1',
            null,
            'Hello from JSX!'
        ),
        React.createElement(
            'h2',
            null,
            'Wassup!'
        ),
        React.createElement(
            'p',
            null,
            'something else here'
        )
    ),
    React.createElement(Footer, null)
);

root.render(headerJSX);
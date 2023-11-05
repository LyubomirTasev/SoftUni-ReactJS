import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const rootDomElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDomElement); 

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

const Footer = () => ( 
    <div className='site-footer'>
        <footer>All rights reserved &copy;</footer>
    </div>
)

const headerJSX = (
    <div>
    <header className='site-header'>
        <h1>Hello from JSX!</h1>
        <h2>Wassup!</h2>

        <p>something else here</p>
    </header>
    
    <Footer/>
    </div>
);

root.render(headerJSX);


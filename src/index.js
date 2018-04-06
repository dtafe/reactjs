import React from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/header';

const App = () =>{
    //return React.createElement('h2', {className: 'title'}, React.createElement('div'));
    return (
        <div>
            <h2><Header/></h2>            
        </div>
    )
}
ReactDOM.render(<App/>, document.querySelector('#root'));
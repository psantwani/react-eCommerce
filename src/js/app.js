import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/style.css';
import keenImage from '../assets/keen.png';

export default class Hello extends Component{
    render(){
        return(
            <div>
                <h1>Commander Keen.</h1>
                <img src={ keenImage } alt='Commander Keen' />
            </div>
        );
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('app')
);
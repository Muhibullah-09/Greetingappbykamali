import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

let curDate = new Date().getHours();
let greeting = '';
const cssStyle = { };

if (curDate >= 1 && curDate < 12)
{
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}
else if (curDate >= 12 && curDate < 19)
{
  greeting = 'Good Afternoon';
}
else 
{
  greeting = 'Good Night';
}
ReactDOM.render(
  <>
  <div className = 'box'>
    <h1 className='head'>Hello Sir, <span style = {cssStyle}>{greeting}</span></h1>
  </div>
  <h3><a href="https://www.facebook.com/muheeb.kamali/" target="_blank" rel="noopener noreferrer">&copy;KamaliDesignX</a></h3>
  </>
  ,document.getElementById('root')
);
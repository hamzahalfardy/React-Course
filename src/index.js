import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {  NavBar, Restaurant, Taste, Recipes, Blog } from './Components/Foods/Food';
import App from './App';
import reportWebVitals from './reportWebVitals';


const navBar = ReactDOM.createRoot(document.querySelector('#Food-Restaurant'));
navBar.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)














// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// const good = ReactDOM.createRoot(document.querySelector('#good'));
//   good.render(
//     <React.StrictMode>
//       <Good />
//     </React.StrictMode>
//   )

// const keep = ReactDOM.createRoot(document.querySelector('.keepGoing'));
//   keep.render(
//     <React.StrictMode>
//       <Keep />
//     </React.StrictMode>
//   )

//   const intro = ReactDOM.createRoot(document.querySelector('#intro'));

//   intro.render(
//     <React.StrictMode>
//       <Introduction />
//     </React.StrictMode>
//   );

//   const study = ReactDOM.createRoot(document.querySelector('#study'));
//   study.render(
//     <React.StrictMode>
//       <Study />
//     </React.StrictMode>
//   );

//   const back = ReactDOM.createRoot(document.getElementById('back'));
//   back.render(
//     <React.StrictMode>
//       <Try />
//     </React.StrictMode>
//   )

reportWebVitals();

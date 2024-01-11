import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const h1 = React.createElement('h1', null, 'Hola mundo');
// const h1 = React.createElement('div', null, React.createElement('ul', null, React.createElement('li',null,'item1')));

const ul = /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "1"), /*#__PURE__*/React.createElement("li", null, "2"), /*#__PURE__*/React.createElement("li", null, "3"), /*#__PURE__*/React.createElement("li", null, "4"), /*#__PURE__*/React.createElement("li", null, "5"))));


const h1 = <div><ul><li>Hola mundo</li></ul></div>;
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  //   {/* <h1>Hola Mundo</h1> */}
  // </React.StrictMode>
  ul
  // h1
)

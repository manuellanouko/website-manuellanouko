import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// // App.js
// import React from 'react';
// import Parallax from './util-components/parallax';
//
// const App = () => {
//   return (
//     <div>
//       <Parallax>
//         <div className="parallax-content">
//           <h1>Your Parallax Section</h1>
//           <p>This is some content in the parallax section.</p>
//         </div>
//       </Parallax>
//
//       <div className="other-content">
//         <h2>Other Content</h2>
//         <p>This is some other content.</p>
//       </div>
//
//       {/* Add more sections as needed */}
//     </div>
//   );
// };
//
// export default App;

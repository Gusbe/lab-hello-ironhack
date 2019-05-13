import React from 'react';

const element = React.createElement;

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img src="./../images/ironhack-logo.svg" />
          <img src="./../images/menu-top.svg" />
        </nav>
        <header>
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become an Ninja Developer.</p>
          <a href="#">Awesome!</a>
        </header>
        <section className="overview">
          <div className="feature">
            <img src="./../images/icon1.png" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="feature">
            <img src="./../images/icon2.png" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>

          </div>
          <div className="feature">
            <img src="./../images/icon3.png" />
            <h3>Single Way</h3>
            <p>A set of immutable values are passed to the component's</p>

          </div>
          <div className="feature">
            <img src="./../images/icon4.png" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>

          </div>
        </section>

      </div>
    );
  }
}

export default App;
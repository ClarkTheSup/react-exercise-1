/* eslint-disable no-undef */
import React, { Component } from 'react';
import './App.scss';
import './assets/avatar.jpg';
import ResumeTable from './components/ResumeTable';

class App extends Component {
  render() {
    return (
      <main className="app">
        <img src={require('./assets/avatar.jpg')} />
        <p className="profile1">HELLO,</p>
        <p className="profile2">
          MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV
        </p>
        <hr noshade="true" />
        <section>
          <h3>ABOUT ME</h3>
          <p className="aboutMe">
            sdfhasfasf asdfasd tqwqwg hwerer qewqwerq asdgasdg qwqdhfg qwrqwe
            asdfa asdfasdf asdf
          </p>
          <h3>EDUCATION</h3>
          <ResumeTable />
        </section>
      </main>
    );
  }
}

export default App;

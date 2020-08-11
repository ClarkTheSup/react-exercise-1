/* eslint-disable no-undef */
import React, { Component } from 'react';
import './App.scss';
import './assets/avatar.jpg';

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
          <table>
            <tr>
              <td className="leftData">
                <b>1990</b>
              </td>
              <td className="rightData">
                <div>
                  <p>
                    <b>I was born in Katowice</b>
                  </p>
                  <p>d tqwqwg hwerer qewqwerq asdgasdg qwqdhfg qwrqwe</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="leftData">
                <b>2005</b>
              </td>
              <td className="rightData">
                <div>
                  <p>
                    <b>Secondary school specialising in artistic</b>
                  </p>
                  <p>d tqwqwg hwerer qewqwerq asdgasdg qwqdhfg qwrqwe</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="leftData">
                <b>2009</b>
              </td>
              <td className="rightData">
                <div>
                  <p>
                    <b>First level graduation in Graphic Design</b>
                  </p>
                  <p>d tqwqwg hwerer qewqwerq asdgasdg qwqdhfg qwrqwe</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="leftData">
                <b>2012</b>
              </td>
              <td className="rightData">
                <div>
                  <p>
                    <b>Second level graduation in Graphic Design</b>
                  </p>
                  <p>d tqwqwg hwerer qewqwerq asdgasdg qwqdhfg qwrqwe</p>
                </div>
              </td>
            </tr>
          </table>
        </section>
      </main>
    );
  }
}

export default App;

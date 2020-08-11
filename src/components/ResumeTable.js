import React from 'react';
import ResumeTableRow from './ResumeTableRow.js';

class ResumeTable extends React.Component {
  render() {
    return (
      <table>
        <ResumeTableRow
          year="1990"
          line1="I was born in Katowice"
          line2="d tqwqwg hwerer qewqwerq asdgasdg qwqdhfg qwrqwe"
        />
        <ResumeTableRow
          year="2005"
          line1="Secondary school specialising in artistic"
          line2="d tqwqwg hwerer qewqwerq asdgasdg qwqdhfg qwrqwe"
        />
        <ResumeTableRow
          year="2009"
          line1="First level graduation in Graphic Design"
          line2="d tqwqwg hwerer qewqwerq asdgasdg qwqdhfg qwrqwe"
        />
        <ResumeTableRow
          year="2012"
          line1="Second level graduation in Graphic Design"
          line2="d tqwqwg hwerer qewqwerq asdgasdg qwqdhfg qwrqwe"
        />
      </table>
    );
  }
}

export default ResumeTable;

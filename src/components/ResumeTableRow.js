import React from 'react';
import propTypes from 'prop-types';

class ResumeTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td className="leftData">
          <b>{this.props.year}</b>
        </td>
        <td className="rightData">
          <div>
            <p>
              <b>{this.props.line1}</b>
            </p>
            <p>{this.props.line2}</p>
          </div>
        </td>
      </tr>
    );
  }
}

ResumeTableRow.propTypes = {
  year: propTypes.string,
  line1: propTypes.string,
  line2: propTypes.string,
};

export default ResumeTableRow;

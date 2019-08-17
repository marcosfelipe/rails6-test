import React from "react"
import PropTypes from "prop-types"

export default class GreetUser extends React.Component {
  render () {
    return (
      <div>
        <h1> Hello {this.props.name}, </h1>
        <h3>Wow! </h3> 
      </div>
    );
  }
}

GreetUser.propTypes = {
  name: PropTypes.string
};

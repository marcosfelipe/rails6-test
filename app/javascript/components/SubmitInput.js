import React from "react"
import PropTypes from "prop-types"
import Input from '@material-ui/core/Input';

export default class SubmitInput extends React.Component {
  render () {
    return (
        <Input id={this.props.name} name={this.props.name} type="submit" value={this.props.name} aria-describedby="my-helper-text" />
    );
  }
}

SubmitInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string
};

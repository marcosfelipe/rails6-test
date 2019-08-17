import React from "react"
import PropTypes from "prop-types"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export default class TextInput extends React.Component {
  render () {
    return (
        <FormControl>
            <InputLabel htmlFor={this.props.name}>{this.props.label}</InputLabel>
            <Input type={this.props.type} id={this.props.name} name={this.props.name} aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">{this.props.error}</FormHelperText>
        </FormControl>
    );
  }
}

TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string
};

import React from "react"
import PropTypes from "prop-types"
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button'

export default class FlashMessage extends React.Component {

    render () {
        return (
            <Snackbar
                open
                autoHideDuration={4000}
                ContentProps={{
                    'aria-describedby': 'snackbar-fab-message-id',
                }}
                message={<span id="snackbar-fab-message-id">{this.props.text}</span>}
                action={
                    <Button color="inherit" size="small">
                        Ok
                    </Button>
                }
            />
        );
    }
}

FlashMessage.propTypes = {
    text: PropTypes.string
};

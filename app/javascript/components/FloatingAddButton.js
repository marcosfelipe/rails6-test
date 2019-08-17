import React from "react"
import PropTypes from "prop-types"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        position: 'relative',
        minHeight: 100,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));


export default function FloatingAddButton(props) {
    const { url } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Fab className={classes.fab} color="primary" aria-label="add" href={url}>
                <AddIcon />
            </Fab>
        </div>
    );
}

FloatingAddButton.propTypes = {
    url: PropTypes.string
};

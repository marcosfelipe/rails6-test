import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";


export default class SimpleTable extends React.Component {
    render() {
        let rows = JSON.parse(this.props.data);

        return (
            <Paper >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Score</TableCell>
                            <TableCell align="right">Game</TableCell>
                            <TableCell align="right">Created at</TableCell>
                            <TableCell align="right">Updated at</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.game}
                                </TableCell>
                                <TableCell align="right">{row.score}</TableCell>
                                <TableCell align="right">{row.created_at}</TableCell>
                                <TableCell align="right">{row.updated_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}


SimpleTable.propTypes = {
    data: PropTypes.string
};

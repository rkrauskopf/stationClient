import React from 'react';
import TableRow from './tableRow'
import StationTableOptions from './stationTableOptions'

export default React.createClass({
    renderRows() {
        var tableRow = [];

        this.props.stationData.forEach((station) => {
            tableRow.push(<TableRow station={station}/>);
        });

        return tableRow;
    },

    render() {
        return (
            <div>
                <StationTableOptions/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Settings</th>
                    </tr>
                    </thead>
                    {this.renderRows()}
                </table>
            </div>
        )
    }
})

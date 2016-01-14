import React from 'react';
import TableRow from './tableRow'
import StationTableOptions from './stationTableOptions'
import StationStore from '../stores/StationStore';

var dummyData = [
    {
        name: 'Station 1',
        address: '192.168.0.1',
        port: 8000,
        settings: {
            'pump': true,
            'input 1': 'hello world',
            'temperature': 90
        }
    },
    {
        name: 'Station 2',
        address: '192.168.0.1',
        port: 8000,
        settings: {
            'Beer Pump': true,
            'input 1': 'hi bob',
            'siphon yeast': false
        }
    }
];

export default React.createClass({

    renderRows() {
        var tableRow = [];

        this.stations = dummyData;

        this.stations.forEach((station) => {
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

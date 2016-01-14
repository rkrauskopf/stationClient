import React from 'react';
import Stations from './stations'

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


class Home extends React.Component {
    render() {
        return (
            <div>
                <Stations stationData={dummyData} />
            </div>
        );
    }
}

export default Home;

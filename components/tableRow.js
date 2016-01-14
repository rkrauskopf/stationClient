import React from 'react';

export default React.createClass({

    render() {
        var station = this.props.station;

        return (
            <tbody>
                <tr>
                    <td>{station.name}</td>
                    <td>{station.address}</td>
                    <td><a>Go To Settings</a></td>
                </tr>
            </tbody>
        )
    }
})

import React from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import StationStore from '../stores/StationStore';
import StationTable from './StationTable'

import stationActions from '../actions/stationActions';

var Stations = React.createClass( {

    contextTypes: {
        executeAction: React.PropTypes.func.isRequired
    },

    componentDidMount() {
      this.context.executeAction(stationActions.RetrievingStations, null);
    },

    render() {
        return (
            <div>
                <StationTable stationData={this.props.stationData}/>
            </div>
        );
    }
});

export default connectToStores(
    Stations,
    [StationStore],
    (context, props) => {
        return {
            stationData: context.getStore(StationStore).getStations()
        }
    }
);

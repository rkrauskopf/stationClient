let stationActions = {};

stationActions.RetrievingStations = (context, payload, done) => {
    context.dispatch('RECEIVED_STATIONS_START', {test: 'dummy payload'});

    context.service.read('stations', {}, {}, (err, stations) => {
        if (err) {
            context.dispatch('RECEIVED_STATIONS_ERROR');
        }

        context.dispatch('RECEIVED_STATIONS_SUCCESS', stations);
        done();


    });
};


export default stationActions;

import createStore from 'fluxible/addons/createStore';

export default createStore({
    storeName: 'StationStore',

    initialize() {
        this.stations = [];
    },

    handlers: {
        'RECEIVED_STATIONS_START': 'handleStationRetrievalStart',
        'RECEIVED_STATIONS_ERROR': 'handleStationRetrievalError',
        'RECEIVED_STATIONS_SUCCESS': 'handleStationRetrievalSuccess'
    },

    handleStationRetrievalStart(payload) {
        this.emitChange();
    },

    handleStationRetrievalError(error) {
        console.error(error);
        this.emitChange();
    },

    handleStationRetrievalSuccess(stations) {
        this.stations = JSON.parse(stations);
        this.emitChange();
    },

    getStations() {
        return this.stations;
    },

    dehydrate() {
        return {
            stations: this.stations
        }
    },

    rehydrate(state) {
        this.stations = state.stations;
    }
});

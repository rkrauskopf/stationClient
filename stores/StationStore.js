import createStore from 'fluxible/addons/createStore';

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


export default createStore ({
    storeName: 'StationStore',

    initialize() {
        this.stations = dummyData;
    },

    handlers: {
        'RECEIVED_STATIONS': 'handleStationRetrieval'
    },

    handleStationRetrieval(payload) {
        this.stations = dummyData;
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

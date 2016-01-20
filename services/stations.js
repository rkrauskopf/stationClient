var _stations = [
    {
        "name": "Station 1",
        "address": "192.168.0.1",
        "port": 8000,
        "settings": {
            "pump": true,
            "input 1": "hello world",
            "temperature": 90
        }
    },
    {
        "name": "Station 2",
        "address": "192.168.0.1",
        "port": 8000,
        "settings": {
            "Beer Pump": true,
            "input 1": "hi bob",
            "siphon yeast": false
        }
    }
];

export default {
    name: 'stations',
    read: (req, resource, params, config, callback) => {
        callback(null, JSON.stringify(_stations));
    }
}

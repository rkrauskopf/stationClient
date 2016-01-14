export default {
    stations: {
        path: '/',
        method: 'get',
        page: 'stations',
        title: 'Stations',
        handler: require('../components/Stations')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About')
    }
};

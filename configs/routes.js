export default {
    home: {
        path: '/',
        method: 'get',
        page: 'station',
        title: 'Station',
        handler: require('../components/Home')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About')
    }
};

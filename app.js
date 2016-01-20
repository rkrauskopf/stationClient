import Fluxible from 'fluxible';
import fetchrPlugin from 'fluxible-plugin-fetchr';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import StationStore from './stores/StationStore';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

//register plugins
app.plug(fetchrPlugin({
    corsPath: '*',
    xhrPath: '/api'
}));

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(StationStore);

module.exports = app;

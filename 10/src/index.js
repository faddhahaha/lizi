import dva from 'dva';
import './index.css';

const createHistory = require('history').createHashHistory;

const app = dva({history:createHistory()});
app.model(require('./model/global').default);
app.router(require('./route/index').default);
app.start('#root');


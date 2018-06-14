import {startApp} from 'web-app-scripts'
import app from './app'

const init = module.hot && (({replaceApp, replaceOptions}) => {
  module.hot.accept('./app', () => replaceApp(app))
})

startApp(app, {init})

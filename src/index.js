import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

/* eslint-disable */
import styles from '!style!css!less!./assets/index.less'
/* eslint-enable */

render(<App/>, document.getElementById('root'))
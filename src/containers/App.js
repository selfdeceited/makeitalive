import {teal700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import React, { Component } from 'react'

import ImageDropzone from './../components/dropzone'
import AppFooter from './../components/footer'

const muiTheme = getMuiTheme({
  palette: {
    textColor: teal700
  },
  appBar: {
    height: 50,
  }
})

export default class App extends Component {
  render() {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar title='MakeItAlive' showMenuIconButton={false}/>
        <ImageDropzone />
        <AppFooter/>
      </div>
    </MuiThemeProvider>
    )
  }
}


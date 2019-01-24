import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { Gopage, Tabs } from './router';

const AppContainer = createAppContainer(Gopage);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

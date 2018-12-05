import React, { Component } from 'react';
import { Drawer, Button ,Text} from 'native-base';
import SideBar from './SideBar';
import AppHeader from './AppHeader';
import AppBody from './AppBody'
export default class NativeDrawer extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar />}
                onClose={() => this.closeDrawer()} >

                <AppHeader
                    openDrawer={this.openDrawer.bind(this)}
                />
                <AppBody/>
                </Drawer>
    );
  }
}

module.exports = NativeDrawer;

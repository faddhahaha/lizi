import React, { Component } from 'react';
import {  Drawer } from 'antd';
import 'antd/dist/antd.css';
class ShoppingCart extends Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <div>
                
                <div style={{width:'80px',height:'80px',}}>
                           <img src={require('../img/bag-icon.png')} alt="" />
                </div>
                <Drawer
                    mask="false"
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                >
                    <p>Some contents...</p>
                </Drawer>
            </div>
        )
    }
}
export default ShoppingCart;
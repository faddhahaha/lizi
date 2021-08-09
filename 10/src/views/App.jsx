import React, { Component } from 'react';
import { Drawer, Badge, } from 'antd';
import 'antd/dist/antd.css';
import Size from './size';
import CommodityContent from './CommodityContent';
import './App.css';
import {connect} from 'dva';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false 
        }
    }
    //打开侧边栏
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    //关闭侧边栏
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '6' }}>
                        <Size />
                    </div>
                    
                    <div style={{ flex: '18' }}>
                        <CommodityContent />
                    </div>
                </div>
                {/* 侧边部分 */}
                <div style={{position:'absolute',top:'0',right:'0'}}>
                    <div onClick={this.showDrawer} style={{ width: '60px', height: '60px', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Badge count={0} showZero offset={[0, 27]} color="yellow" >
                            <img src={require('../img/bag-icon.png')} alt="" />
                        </Badge>
                    </div>
                </div>
                <Drawer
                    drawerStyle={{backgroundColor: '#1b1a20', color: '#ececec'}}
                    width="450px"
                    mask={false}
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    closeIcon={
                       this.state.visible ? <div className='close'  >X</div> : ''  
                      }
                    visible={this.state.visible}
                    getContainer={false}
                    style={{ position: 'absolute',color:'white' }}
                    // footer={
                        
                    // }
                >   
                    <div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'40px 0'}}>
                        <Badge count={0} showZero offset={[0, 27]} color="yellow" >
                            <img  src={require('../img/bag-icon.png')} alt="" />
                        </Badge>
                        <p style={{color:'white',fontSize:'24px',fontWeight:'650',margin:' 0  0 0 20px',padding:'0'}}>Cart</p>
                        </div>
                    </div>
                    
                </Drawer>


            </div>
        )
    }
}
const mapStaetToProps =({global,App})=>({global,App});
export default connect(mapStaetToProps)(App);
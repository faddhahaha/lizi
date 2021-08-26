import React, { Component } from 'react';
import { Drawer, Badge, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Size from './size';
import CommodityContent from './CommodityContent';
import ShoppingCar from './shoppingCar';
import './App.css';
import { connect } from 'dva';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
        }

    }
    

    componentDidMount(){ 
        const{dispatch} = this.props;
        console.log('app');
        let localvalue =JSON.parse(window.localStorage.getItem("value"));
        if(localvalue){
            dispatch({
            type: "commodityContent/localCarContent",
            payload:localvalue
            })
        }
        dispatch({
            type:'commodityContent/request'
        })
        
        
    }
    

    //打开侧边栏
    showDrawer = () => {
        const { dispatch } = this.props
        dispatch({
            type: "App/showDrawer",

        })
    };
    //关闭侧边栏
    onClose = () => {
        const { dispatch } = this.props
        dispatch({
            type: "App/onClose",

        })
    };
    CHECKOUTAlear=(price)=>{
        alert(`Checkout - Subtotal: $ ${price}`);
        const {dispatch}=this.props;
        dispatch({
            type:'commodityContent/carClear'
        })
        dispatch({
            type:'App/onClose'
        })
        window.localStorage.removeItem('value');  
        
    };
    render() {
        
        const { App,commodityContent } = this.props;
        console.log(commodityContent);
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
                <div style={{ position: 'absolute', top: '0', right: '0' }}>
                    <div onClick={this.showDrawer} style={{ width: '60px', height: '60px', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Badge count={commodityContent.sum} showZero offset={[0, 27]} color="yellow" >
                            <img src={require('../img/bag-icon.png')} alt="" />
                        </Badge>
                    </div>
                </div>
                <Drawer
                    className="element"
                    drawerStyle={{ backgroundColor: '#1B1A20', color: '#ececec', padding: '0' }}
                    width="430px"
                    mask={false}
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    closeIcon={
                        App.visible ? <div className='close' style={{ color: 'white', borderBottom: '3px solid #16151A' }}  >X</div> : ''
                    }
                    visible={App.visible}
                    getContainer={false}
                    footerStyle={{ border: '0', padding: '0' }}
                    footer={
                        <div style={{ backgroundColor: '#1B1A20', padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>SUBTOTAL</div>
                                <div style={{display: 'flex',flexDirection:'column'}}>
                                    <div style={{ color: '#eabf00', fontSize: '22px',textAlign:'right'}}>${commodityContent.price?commodityContent.price.toFixed(2):''} </div>
                                    <div>{`OR UP TO ${commodityContent.installments} x $ ${commodityContent.installments?(commodityContent.price/commodityContent.installments).toFixed(2):commodityContent.price.toFixed(2)}`}</div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                                <Button onClick={()=>{this.CHECKOUTAlear(commodityContent.price.toFixed(2))}} className='hover' size='large' style={{ width: '100%', backgroundColor: '#0c0b10', color: '#ececec', border: '0' }}>CHECKOUT</Button>
                            </div>
                        </div>
                    }
                >
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0' }}>
                            <Badge count={commodityContent.sum} showZero offset={[0, 27]} color="yellow" >
                                <img src={require('../img/bag-icon.png')} alt="" />
                            </Badge>
                            <p style={{ color: 'white', fontSize: '24px', fontWeight: '650', margin: ' 0  0 0 20px', padding: '0' }}>Cart</p>
                        </div>
                    </div>
                    
                    <div style={{ marginTop: '20px', borderTop: '1px solid #16151A' }}>
                        {commodityContent.store.length > 0 ? commodityContent.store.map((item,index) =>
                            
                            <ShoppingCar item={item} key={index} />
                        ) :
                            <div style={{ color: '#fff', textAlign: 'center', padding: '20px 0', fontSize: '20px' }}>
                                Add some products in the cart
                                <br />
                                :)
                            </div>
                        }
                    </div>
                </Drawer>


            </div>
        )
    }
}
const mapStaetToProps = ({ global, App, commodityContent }) => ({ global, App, commodityContent });
export default connect(mapStaetToProps)(App);
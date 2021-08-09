import React, { Component } from 'react';
import { Drawer, Badge,  } from 'antd';
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

                <div onClick={this.showDrawer} style={{ width: '100%', height:'80px', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    
                    <Badge count={0} showZero offset={[0,27]} color="yellow" >
                        <img  src={require('../img/bag-icon.png')} alt="" />
                    </Badge>

                </div>
                <Drawer
                    width='1000px'    
                    mask="false"
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{ position: 'absolute' }}
                >
                    <p>Some contents...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis itaque non earum aliquid optio consequatur ex expedita doloribus fuga assumenda perferendis voluptas, enim eligendi, dolore deleniti rem libero voluptate odit illo corrupti commodi odio et! Illum non ratione sint et debitis eum totam, delectus accusamus minima nostrum culpa, repudiandae ad facere sapiente a excepturi adipisci maiores nemo iure ut? Debitis eligendi adipisci mollitia! Aut alias ipsum incidunt repellendus commodi. Debitis eveniet error nesciunt delectus nobis rem sapiente officiis, consequatur quis itaque quia natus molestias explicabo modi libero architecto, quasi nisi dolorem autem veritatis tenetur esse! Doloribus veniam temporibus vitae labore!
                        </p>
                </Drawer>
            </div>
        )
    }
}
export default ShoppingCart;
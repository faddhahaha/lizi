import React,{Component} from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Size from './size';
import CommodityContent from './CommodityContent';
import ShoppingCart from './ShoppingCart';

class App extends Component {
    constructor (props){
        super(props);
        this.state= { }
    }
    render (){
        return(
            <div>
                <Row >
                    <Col span={6} ><Size /></Col>
                    <Col span={17}> <CommodityContent /></Col>
                    <Col span={1}><ShoppingCart /></Col> 
                </Row>
                
            </div>
        )
    }
}
export default App;
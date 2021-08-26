import React, { Component } from 'react';
import {  Row, Col, Button} from 'antd';
import 'antd/dist/antd.css';
import './shoppingCar.css';
import { connect } from 'dva';

class ShoppingCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mouseOver:false,
     
        }
    }

    //删除
    delectItem=(item)=>{
      const{dispatch,commodityContent} =this.props;
      dispatch({
        type:'commodityContent/carDelectItem', 
        payload: item 
      })
      if(commodityContent.store.length === 0){
           dispatch({
                type:'App/onClose'
            })
          window.localStorage.removeItem('value');  
      }
     
      this.installment();
 
    }
    //分期
    installment=()=>{
        const { dispatch} = this.props;
        dispatch({
            type:'commodityContent/carInstallment', 
        })
       
    }
    handleMouseOver = () => {
        this.setState({
            mouseOver: true
        })
    }
    handleMouseOut = () => {
        this.setState({
            mouseOver: false
        })
    }
  
    //合计操作
    carPrice=(item)=>{
        const { dispatch} = this.props;
        dispatch({
            type:'commodityContent/carPriceReduction',
            payload: item 
        })
       
    }
    //加操作
    carAddPrice=(item)=>{
        const { dispatch } = this.props;
        dispatch({
            type:'commodityContent/carAddPrice',
            payload:item
        })
    }
    //减操作
    reduction=(item)=>{
        const { dispatch } = this.props;
        dispatch({
            type:'commodityContent/carReduction',
            payload:item.id
        })
        this.carPrice(item);
        this.installment();
    }
    render() {
        const item = this.props.item ;
    
        const {mouseOver} = this.state
        return (
          <Row key={item.id} style={{ position: 'relative', backgroundColor: this.state.mouseOver ? '#1B1A20' : '', padding: '10px' }}>
          <div className='line'></div>
          <div className='delete'
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              onClick={()=>{this.delectItem(item)}}
          >X</div>
          <Col span={5}>
              <img src={require(`../img/${item.id + 1}.jpg`)} style={{ width: '100%' }} />
          </Col>
          <Col span={14} style={{ paddingLeft: '20px' }}>
              <div className={mouseOver ? 'deleteLine' : ''}>{item.title}</div>
              <div className={mouseOver ? 'deleteLine' : ''}>{item.availableSizes[0]} | {item.style}</div>
              <div className={mouseOver ? 'deleteLine' : ''} >Quantity：{item.sum}</div>
          </Col>
          <Col span={5} style={{ marginTop: '40px', textAlign: 'right' }}>
              <div className={mouseOver ? 'deleteLine' : ''} style={{ color: '#eabf00', fontSize: '16px' }}>$ {item.price.toFixed(2)}</div>
              <div style={{ marginTop: '10px' }}>
                  <Button size='small' className='btn' style={{ marginRight: '2px' }} disabled={item.sum === 1} onClick={()=>{this.reduction(item)}}>-</Button>
                  <Button size='small' className='btn' onClick={()=>{this.carAddPrice(item)}} >+</Button>
              </div>
          </Col>
      </Row>
        );
          
       
    }
}
const mapStaetToProps =({global, App, commodityContent})=>({global, App, commodityContent});
export default connect(mapStaetToProps)(ShoppingCar);

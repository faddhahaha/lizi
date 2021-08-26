import React, { Component } from 'react';
import { Row, Col, Select, Card, Button,message } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'dva'
const { Option } = Select;
const { Meta } = Card;
class CommodityContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    //分期
    installment=()=>{
        const { dispatch} = this.props;
        dispatch({
            type:'commodityContent/carInstallment', 
        })
       
    }
    //打开
    open=()=>{
        const {dispatch} =this.props;
         dispatch({
            type: "App/showDrawer",
           
        })
    }
    //合计金额
    carPrice=(item)=>{
        const {dispatch} =this.props;

         dispatch({
            type: "commodityContent/carPrice",
            payload:item
        })
        this.installment();
    }
    //点击添加
    showDrawer=(item)=>{
        this.open();
        this.carPrice(item);
        const {dispatch} =this.props;
        dispatch({
            type: "commodityContent/carContent",
            payload:item
        })
        this.installment();
        this.setState();
    }
   
    //排序选择
    onChange=value=>{
        const {dispatch} =this.props;
        dispatch({
            type:'commodityContent/sort',
            payload:value
        })
    }
    error = (e) => {
        message.error(e);
    };
      
    render() {
        const { commodityContent } = this.props;
       
        return (
            <div style={{ marginLeft: '40px', marginTop: "100px" }}>
                <Row>
                    <Col span={12} style={{ display: 'flex', alignItems: 'center' }}><span>{commodityContent.commodityStore?commodityContent.commodityStore.length:''} Product(s) found</span> </Col>
                    <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <span style={{ fontSize: '16px', marginRight: '10px' }}>Order by</span>
                        <Select defaultValue="Select" style={{ width: '200px' }}  onChange={this.onChange}>
                            <Option value="Select">Select</Option>
                            <Option value="LowestToHighest">Lowest to highest</Option>
                            <Option value="HighestToLowest">Highest to lowest</Option>
                        </Select>
                    </Col>
                </Row>
                <Row style={{ marginTop: 30 }} gutter={[20, 20]}>

                    {commodityContent.commodityStore?commodityContent.commodityStore.map(item => {
                        return (
                            < Col style={{ position: 'relative' }} span={5}>
                                {item.isFreeShipping ?
                                    <div style={{
                                        position: 'absolute',
                                        color: '#ececec',
                                        backgroundColor: '#1b1a20',
                                        top: '10px',
                                        right: '10px',
                                        zIndex: '10',
                                        padding: '5px',
                                        fontSize: '14px'
                                    }}>Free shipping</div> :
                                    ''}
                                <Card
                                    className='card'
                                    bodyStyle={{ padding: ' 20px', }}
                                    hoverable
                                    cover={<img src={require(`../img/${item.id + 1}.jpg`)} style={{ width: '100%' }} />}
                                >
                                    <Meta title={<div style={{ textAlign: 'center', whiteSpace: 'pre-wrap', height: '45px', position: 'relative', margin: '10px' }}>
                                        {item.title}
                                        <div style={{ height: '2px', width: '20px', backgroundColor: '#eabf00', position: 'absolute', bottom: '-8px', left: '50%', marginLeft: '-10px' }}></div>
                                    </div>}
                                        description={<div style={{ textAlign: 'center' }}>
                                            <div style={{ textAlign: 'center' }}>Size: {item.availableSizes.join(',')}</div>
                                            <div style={{ textAlign: 'center', color: '#1b1a20' }}>
                                                $ <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.price.toFixed(2)}</span>
                                            </div>   
                                            <div style={{ textAlign: 'center',visibility:item.installments ===0 ?"hidden":'' }}>or {item.installments}X ${(item.price / item.installments).toFixed(2)}</div>
                                            <Button onClick={() => { this.showDrawer(item) }} className='btn1' size='large' style={{ marginTop: '10px', width: '100%', backgroundColor: '#1b1a20', color: '#fff' }}>Add to cart</Button>
                                        </div>}
                                    />
                                </Card>

                            </Col>
                        )

                    }):''
                    }
                    <Col span={4}></Col>
                </Row>
            </div>
        )
    }

}
const mapStaetToProps = ({ global, commodityContent, App }) => ({ global, commodityContent, App })
export default connect(mapStaetToProps)(CommodityContent);
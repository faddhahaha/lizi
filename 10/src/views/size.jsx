import React, { Component } from 'react';
import { Row, Col,Button } from 'antd';
import 'antd/dist/antd.css';
import {StarOutlined } from '@ant-design/icons';
import "./size.css"
class Size extends Component {
    render() {
        return (
            <div style={{ marginTop: "100px" }}>
                <Row>
                    <Col span={24}>
                        <p style={{ fontSize: '22px', fontWeight: '650', textAlign: 'center',marginBottom:'11px' }}>Size:</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}></Col>
                    <Col span={13} style={{ display: 'flex', flexWrap: 'wrap', }}>
                        <div className="sizeItem">
                            <span>XS</span>
                        </div>
                        <div className="sizeItem">
                            <span>S</span>
                        </div>
                        <div className="sizeItem">
                            <span>M</span>
                        </div>
                        <div className="sizeItem">
                            <span>ML</span>
                        </div>
                        <div className="sizeItem">
                            <span>L</span>
                        </div>
                        <div className="sizeItem">
                            <span>XL</span>
                        </div>
                        <div className="sizeItem">
                            <span>XXL</span>
                        </div>
                    </Col>
                   
                </Row>
                <Row>
                    <Col span={11}></Col>
                    <Col span={13} >
                        <p style={{textAlign:'center',fontSize:'16px',color:'#aaa',marginTop:'5px'}}>Leave a star on Github if this repository was useful :)</p>
                    </Col>
                </Row>
                <Row>
                <Col span={14}></Col>
                    <Col span={10} >
                    <Button  style={{backgroundColor:'#eff3f6',borderRadius:'6px 0 0 6px'}}   icon={<StarOutlined />}  >Star</Button>    
                    <Button style={{borderRadius:' 0 6px 6px 0'}} >1,746</Button>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Size;
import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import { StarOutlined } from '@ant-design/icons';
import "./size.css"
import { connect } from 'dva'
class Size extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    btnClickHandler = (e) => {
        const { dispatch } = this.props
        dispatch({
            type: "size/changeSize",
            payload: e.target.innerText
        })

    }
    render() {
        const { size } = this.props
        return (
            <div style={{ marginTop: "100px" }}>
                <Row>
                    <Col span={24}>
                        <p style={{ fontSize: '22px', fontWeight: '650', textAlign: 'center', marginBottom: '11px' }}>Size:</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}></Col>
                    <Col span={13} style={{ display: 'flex', flexWrap: 'wrap', }}>
                        {size.map(item => {
                            return (
                                <div onClick={this.btnClickHandler} 
                                     className="sizeItem"  
                                     key={item.name}
                                     style={{backgroundColor: item.action ? '#1b1a20' : '#ececec',
                                     color: item.action ? '#ececec' : '#1b1a20',}}
                                
                                >
                                    {item.name}
                                </div>
                            )

                        })
                        }
                        
                    </Col>

                </Row>
                <Row>
                    <Col span={11}></Col>
                    <Col span={13} >
                        <p style={{ textAlign: 'center', fontSize: '16px', color: '#aaa', marginTop: '5px' }}>Leave a star on Github if this repository was useful :)</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={14}></Col>
                    <Col span={10} >
                        <Button style={{ backgroundColor: '#eff3f6', borderRadius: '6px 0 0 6px' }} icon={<StarOutlined />}  >Star</Button>
                        <Button style={{ borderRadius: ' 0 6px 6px 0' }} >1,746</Button>
                    </Col>
                </Row>
            </div>
        )
    }

}
const mapStaetToProps = ({ global, CommodityContent, size }) => ({ global, CommodityContent, size })
export default connect(mapStaetToProps)(Size);
import React, { Component } from 'react';
import { Row, Col, Select } from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;
class CommodityContent extends Component {
    

    render() {
        return (
            <div style={{ marginLeft: '40px', marginTop: "100px" }}>
                <Row>
                    <Col span={12} style={{display:'flex',alignItems:'center'}}><span>0 Product(s) found</span> </Col>
                    <Col span={12} style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                        <span style={{fontSize: '16px',marginRight:'10px' }}>Order by</span>
                        <Select defaultValue="Select" style={{ width: '200px' }} >
                            <Option value="Select">Select</Option>
                            <Option value="Lowest to highest">Lowest to highest</Option>
                            <Option value="Yiminghe">Highest to lowest</Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                        
                </Row>
            </div>
        )
    }

}
export default CommodityContent;
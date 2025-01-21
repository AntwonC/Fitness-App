import { useState } from 'react';
import { Button, Col, Row, Input } from 'antd';




import '../styles/Dashboard.css'


const Dashboard = () => {
    return (
        
        <div className="square">
            <Row gutter={[16, 8]} justify="center" align="middle">
                <Col span={24} offset={12}><Input size="small" placeholder="Username" style={ {width: '10em'}}/></Col>
                <Col span={24} offset={12}><Input.Password size="small" placeholder="Password" style={ { width: '10em' }} /></Col>
               

                <Col>
                    <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}}>Register</Button>
                    <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}}>Login</Button>
                </Col>
            </Row>



        </div>  
    )
}

export default Dashboard;

/*           <div className="button-container">
            <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}}>Register</Button>
            <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}}>Login</Button>
           </div> */ 
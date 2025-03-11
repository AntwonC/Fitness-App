import { useState } from 'react';
import { Button, Col, Row, Input } from 'antd';
import { useNavigate } from 'react-router';




import '../styles/Dashboard.css'




const Dashboard = () => {
    let navigate = useNavigate();

    const registerButtonClicked = () => {
        console.log("register button clicked");
        console.log("Creating navigate variable for useNavigate()...");
        
        
        console.log("Navigating....");
        
        navigate(`/register`);
        
        console.log("Navigation done!");
        
        
    }

    return (
        
        <div className="square">
            <div className="grid-container">
                <Row gutter={[16, 16]} justify="center" align="middle" >
                    <Col span={24} offset={12}><Input size="small" placeholder="Username" style={ {width: '10em'}}/></Col>
                    <Col span={24} offset={12}><Input.Password size="small" placeholder="Password" style={ { width: '10em' }} /></Col>
                

                    <Col>
                        <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}} onClick={registerButtonClicked}>Register</Button>
                        
                    </Col>

                    <Col>
                        <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}}>Login</Button>
                    </Col>
                </Row>
            </div>

  



        </div>  
    )
}



export default Dashboard;

/*           <div className="button-container">
            <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}}>Register</Button>
            <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}}>Login</Button>
           </div> */ 
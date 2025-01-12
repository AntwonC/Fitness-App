import { useState } from 'react';
import { Button } from 'antd';




import '../styles/Dashboard.css'


const Dashboard = () => {
    return (
        
        <div className="square">
            This is Dashboard
            <div>An Input goes Here</div>
            <div>Another Input goes Here</div>
            <div>Another Input goes here</div>
           <div className="button-container">
            <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}}>Register</Button>
            <Button variant="outlined" color="default" size="small"  style={{ width: '7em'}}>Login</Button>
           </div>
        </div>  
    )
}

export default Dashboard;
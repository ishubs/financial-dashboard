import Card from "antd/es/card/Card";
import './FinancialDashboard.css';
import { Input, Button } from 'antd';
import { useState } from "react";
import LineChart from "./LineChart";
import { useList } from '../../context/SubIndexContext';

export default function FinancialDashboard() {
    const { subIndices, addItem, removeItem } = useList();
    const [subIndex, setSubIndex] = useState('');
    console.log(subIndices, 'subIndices')
    return (
        <div className="FinancialDashboard">
            <Card style={{ width: 'fit-content' }}>
                <div className="body">
                    <div className="title">Enter SubIndices</div>
                    <div className="subIndex-container">
                        {subIndices.map((subIndex, index) => (
                            <div className="remove-subIndex">
                                <div className="name"> {subIndex.name} </div>
                                <Button onClick={() => removeItem(index)}>Remove</Button>
                            </div>
                        ))}
                        <div className="add-subIndex">
                            <Input value={subIndex} onChange={(e) => setSubIndex(e.target.value)} type="text" placeholder="Enter SubIndex" />
                            <Button onClick={() => { addItem(subIndex); setSubIndex('') }}>Add</Button>
                        </div>
                    </div>
                </div>

            </Card >
        </div >
    );
}   
import Card from "antd/es/card/Card";
import './FinancialDashboard.css';
import { Input, Button } from 'antd';
import { useRef, useState } from "react";
import LineChart from "./LineChart";
import { useList } from '../../context/SubIndexContext';

export default function FinancialDashboard() {
    const { subIndices, addItem, removeItem } = useList();
    const [subIndex, setSubIndex] = useState('');
    const inputRef = useRef(null);
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
                            <Input ref={inputRef} value={subIndex} onChange={(e) => setSubIndex(e.target.value)} type="text" placeholder="Enter SubIndex" />
                            <Button onClick={() => { addItem(subIndex); setSubIndex(''); inputRef?.current?.focus() }}>Add</Button>
                        </div>
                    </div>
                </div>

            </Card >
        </div >
    );
}   
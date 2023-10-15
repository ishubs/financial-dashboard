import { useEffect } from "react";
import LineChart from "./LineChart";
import useRealTimeStockIndex from "../../customhooks/useRealTimeStockIndex";
const SubIndex = ({ updateSubIndex, subIndex, index }) => {

    const [stockName, value, change, stock_data] = useRealTimeStockIndex(subIndex.name, subIndex?.data || []);
    const isPositiveChange = Number(change) > 0;
    const changeClass = isPositiveChange ? 'green' : 'red';


    return (
        <div className={`subIndex ${changeClass}`} key={index}>
            <div className="name">{subIndex.name}</div>
            <div className='data'>
                <div className='values'>
                    <div className="value">{value}</div>
                    <div className={`change ${changeClass}`}>{change}</div>
                </div>
                <LineChart stock_data={stock_data} updateSubIndex={updateSubIndex} color={isPositiveChange ? '#00C48C' : '#FF452C'} />
            </div>
        </div>
    )
}

export default SubIndex
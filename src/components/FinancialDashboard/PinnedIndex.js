import useRealTimeStockIndex from "../../customhooks/useRealTimeStockIndex";
import LineChart from "./LineChart";

const PinnedIndex = () => {

    const [stockName, value, change, stock_data] = useRealTimeStockIndex('NEPSE', [1234, 1236, 1238, 1235, 1356, 1466, 1567, 1678, 1789, 1890, 1900, 2000]);

    return (
        <div className={`subIndex pinned`} key={"1"}>
            <div className="name">NEPSE</div>
            <div className='data'>
                <div className='values'>
                    <div className="value">{value}</div>
                    <div className={`change`}>{change}</div>
                </div>
                <LineChart stock_data={stock_data} color={"white"} />
            </div>
        </div>
    )

}

export default PinnedIndex 
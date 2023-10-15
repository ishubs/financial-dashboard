import React, { useState, useEffect } from 'react';

const useRealTimeStockIndex = (name, defaultData) => {
    const [data, setData] = useState([...defaultData]);
    const [scenario, setScenario] = useState(Math.random() < 0.5 ? 1 : -1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedData = [...data];
            const lastValue = updatedData[updatedData.length - 1];

            const change = scenario === 1 ? 1 : -1;
            let newValue = lastValue + change;
            newValue = Math.max(1000, newValue);
            updatedData.shift();
            updatedData.push(newValue);

            setData(updatedData);

            if (Math.random() < 0.5) {
                setScenario(scenario === 1 ? -1 : 1);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [data, scenario]);

    const currentValue = data[data.length - 1];
    const change = currentValue - data[data.length - 2];

    return [name, currentValue, change, data];
};

export default useRealTimeStockIndex;

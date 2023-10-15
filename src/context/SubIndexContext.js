import React, { createContext, useContext, useState } from 'react';

export const ListContext = createContext();

export function useList() {
    return useContext(ListContext);
}

export function ListProvider({ children }) {
    const [subIndices, setSubIndices] = useState([]);

    const addItem = (item) => {
        const newSubIndex = {
            name: item,
            value: 1234.56,
            change: 12.34,
            data: generateRandomStockValues(11),
        };
        setSubIndices((prevSubIndices) => [...prevSubIndices, newSubIndex]);
    };

    const removeItem = (index) => {
        setSubIndices((prevSubIndices) => {
            const updatedSubIndices = [...prevSubIndices];
            updatedSubIndices.splice(index, 1);
            return updatedSubIndices;
        });
    };

    return (
        <ListContext.Provider value={{ subIndices, addItem, removeItem }}>
            {children}
        </ListContext.Provider>
    );
}


function generateRandomStockValues(count) {
    const stockValues = [];
    for (let i = 0; i < count; i++) {
        const randomValue = Math.floor(Math.random() * (100001 - 100) + 100);
        stockValues.push(randomValue);
    }
    return stockValues;
}



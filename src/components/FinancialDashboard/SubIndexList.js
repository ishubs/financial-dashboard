import './SubIndexList.css';
import React, { useState, useEffect } from "react";
import { useList } from '../../context/SubIndexContext';
import SubIndex from './SubIndex';
import PinnedIndex from './PinnedIndex';
export default function SubIndexList() {

    const { subIndices } = useList();
    const [combinedSubIndices, setCombinedSubIndices] = useState([...defaultSubIndices, ...subIndices])

    useEffect(() => {
        setCombinedSubIndices([...defaultSubIndices, ...subIndices])
    }, [subIndices])


    function updateSubIndex(name, value, change) {
        let _combinedSubIndices = [...combinedSubIndices];
        const updatedSubIndices = _combinedSubIndices.map((subIndex) => {

            if (subIndex.name === name) {
                console.log(name, 'name')

                return {
                    ...subIndex,
                    value: value,
                    change: change,
                };
            }
            return subIndex;
        });
        setCombinedSubIndices(updatedSubIndices);
    }

    return (
        <div>
            <PinnedIndex />
            <div className='subIndexClass'>
                <div className="SubIndexList" >
                    {combinedSubIndices.map((subIndex, index) => {
                        const isPositiveChange = Number(subIndex.change) > 0;
                        const changeClass = isPositiveChange ? 'green' : 'red';
                        return (
                            <SubIndex subIndex={subIndex} index={index} updateSubIndex={updateSubIndex} />
                        );
                    })}
                </div>
                <div className="SubIndexList" >
                    {combinedSubIndices.map((subIndex, index) => {
                        const isPositiveChange = Number(subIndex.change) > 0;
                        const changeClass = isPositiveChange ? 'green' : 'red';
                        return (
                            <SubIndex subIndex={subIndex} index={index} updateSubIndex={updateSubIndex} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


const defaultSubIndices =
    [
        {
            name: "Trading",
            value: 1234.56,
            change: 12.34,
            data: [1000, 205, 500, 700, 110, 55, 22, 11, 200, 100, 2]
        },
        {
            name: "Banking",
            value: 1234.56,
            change: 12.34,
            data: [358, 10, 634, 812, 165, 186, 856, 346, 781, 304, 743]
        },
        {
            name: "Hotel & Tourism",
            value: 1234.56,
            change: 12.34,
            data: [7654, 4212, 2998, 1134, 2211, 4321, 1111, 1876, 2365, 921, 3972]
        },
        {
            name: "Development Bank",
            value: 1234.56,
            change: -12.34,
            data: [1200, 6543, 1789, 4421, 3210, 8999, 1098, 1209, 2876, 2343, 3987]
        },
        {
            name: "Hydropower",
            value: 1234.56,
            change: 12.32,
            data: [12423, 14456, 13444, 13422, 14324, 154434, 134343, 14434, 34344, 13233, 32323]
        },
        {
            name: "Non-Life Insurance",
            value: 1234.56,
            change: 12.34,
            data: [3636, 2522, 7895, 6544, 7123, 5234, 7683, 9897, 5674, 1223, 4988]
        }

    ]
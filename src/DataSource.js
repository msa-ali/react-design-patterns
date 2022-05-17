import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await getDataFunc();
            setData(data);
        })();
    }, [getDataFunc]);

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: data });
                }
                return child;
            })}
        </>
    );

}
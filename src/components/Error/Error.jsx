import React from 'react';
import { useRouteError } from "react-router-dom";



const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div id='error-page'>
            <h2>404 not found</h2>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Error;
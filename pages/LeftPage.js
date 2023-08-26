import React from 'react';
import Toolbar from "../components/Toolbar";
import Left from "../components/Left";

const LeftPage = () => {
    return (
        <div className="container d-flex flex-column">
            <Toolbar/>
            <div className="grow1 d-flex gap10">
                <Left/>
            </div>
        </div>
    );
};

export default LeftPage;
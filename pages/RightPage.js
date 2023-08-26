import React from 'react';
import Toolbar from "../components/Toolbar";
import Right from "../components/Right";

const RightPage = () => {
    return (
        <div className="container d-flex flex-column">
            <Toolbar/>
            <div className="grow1 d-flex gap10">
                <Right/>
            </div>
        </div>
    );
};

export default RightPage;
import React from 'react';
import {useSelector} from "react-redux";
import {Link, useHref} from "react-router-dom";

const Toolbar = () => {
    const favoriteUsers = useSelector(state => state.users.favoriteUsers)
    const href = useHref()

    return (
        <div className="toolbar d-flex a-center j-between">
            <h3>Favorite users: ({favoriteUsers.length})</h3>
            <h3>
                {
                    href === "/" ?
                        <Link to="/favorite">Favorite Users</Link> :
                        <Link to="/">Back to all</Link>
                }
            </h3>
        </div>
    );
};

export default Toolbar;
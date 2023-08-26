import React from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {updateFavoriteUsers} from "../features/users";

const Right = () => {
    const users = useSelector(state => state.users.allUsers)
    const favoriteUsers = useSelector(state => state.users.favoriteUsers)
    const dispatch = useDispatch()

    function remove(index) {
        const newUsers = favoriteUsers.filter(x => x !== index)
        dispatch(updateFavoriteUsers(newUsers))
    }

    return (
        <div className="grow1 d-flex wrap gap10 a-start">
            {favoriteUsers.map((x, i) =>
                <div className="box d-flex flex-column a-center" key={i}>
                    <img src={users[x].image} alt=""/>
                    <h3>{users[x].username}</h3>
                    <button onClick={() => remove(x)}>Remove favorite</button>
                </div>)}
        </div>
    );
};

export default Right;
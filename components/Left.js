import React from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {updateFavoriteUsers} from "../features/users";

const Left = () => {
    const users = useSelector(state => state.users.allUsers)
    const favoriteUsers = useSelector(state => state.users.favoriteUsers)
    const dispatch = useDispatch()

    function add(index) {
        let newUsers = []
        if (!favoriteUsers.includes(index)) {
            newUsers = [...favoriteUsers, index]
        }
        dispatch(updateFavoriteUsers(newUsers))
    }

    function remove(index) {
        const newUsers = favoriteUsers.filter(x => x !== index)
        dispatch(updateFavoriteUsers(newUsers))
    }

    return (
        <div className="grow1 d-flex wrap gap10">
            {users.map((x, i) =>
                <div className="box d-flex flex-column a-center" key={i}>
                    <img src={x.image} alt=""/>
                    <h3>{x.username}</h3>
                    {!favoriteUsers.includes(i) ?
                        <button onClick={() => add(i)}>Add favorite</button> :
                        <button onClick={() => remove(i)}>Remove favorite</button>
                    }
                </div>)}
        </div>
    );
};

export default Left;
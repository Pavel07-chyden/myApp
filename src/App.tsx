import React, { useEffect, useState } from 'react';
import './App.module.css'
import { Route, Switch } from 'react-router-dom';
import classes from './App.module.css'
import UserInfo from './User/UserInfo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUsersAC, changeTitleAC, initialStateType, removeUsersAC } from './redux/reponsReduser';
import { AppStoreType } from './redux/store';
import AddUsers from './User/AddUsers';

export const PATCH = {
USER_INFO:'/dialog/:userId',
}

export default function App() {

    const users = useSelector<AppStoreType, Array<initialStateType> >((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])


    const setUsers = (user: initialStateType) => {
        dispatch(addUsersAC(user))
    }
    const change = (user: initialStateType) => {
        dispatch(changeTitleAC(user))
    }
    const remove = (id: number) => {
        dispatch(removeUsersAC(id))
    }


    return (
        <div>
            <div className={classes.navbar}>
                <div className={classes.navbar__links}>
                </div>
            </div>

            <Switch>
                <Route exact path={'/'} render={() => <AddUsers users={users} setUsers={setUsers} remove={remove}
                />} />
                <Route path={PATCH.USER_INFO} render={() =>  <UserInfo users={users} change={change} />} />
                {/* <Route path="/dialog/:userId" render={() => <UserInfo users={users} change={change} />} /> */}

            </Switch>

        </div>
    )
}






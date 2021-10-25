import React, { ChangeEvent } from 'react';
import { useState } from "react";
import PostItem from './PostItem';
import { AppStoreType } from '../redux/store';
import { initialStateType } from '../redux/reponsReduser';
import s from './AddUsers.module.css'

type addUserType = {
   user?: initialStateType
   firstLastName?: string,
   post?: string,
   employment?: string
   setUsers: (user: initialStateType) => void
   users: Array<initialStateType>
   remove: (id: number) => void
}

export const AddUsers: React.FC<addUserType> = (props) => {
   const [state, setState] = React.useState({
      firstLastName: "",
      post: "",
      employment: "",
      gender: "",
      birth: ''
   });

   const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
      const nameValue = evt.target.value
      setState({
         ...state,
         [evt.target.name]: nameValue,
      });
      console.log(evt.target.name);
      
   }
   const addPost = () => {
      const user = {
         ...state,
      };
      props.setUsers({ id: 3, ...user });

      setState({ ...state, firstLastName: '', employment: '', post: '' })
   }
   const remove = (user: initialStateType) => {
   }
   return (
      <div className={s.app} >
         <div className={s.wrapper}>
            <label>
               <div className={s.heading}> First Name </div>
               < input
                  type="text"
                  name="firstLastName"
                  value={state.firstLastName}
                  onChange={evt => handleChange(evt)}
               />
            </label>
            < label >
               <div className={s.heading}> Post </div>
               < input
                  type="text"
                  name="post"
                  value={state.post}
                  onChange={evt => handleChange(evt)}
               />
            </label>
            < label >
               <div className={s.heading}> Employment </div>
               < input
                  type="text"
                  name="employment"
                  value={state.employment}
                  onChange={evt => handleChange(evt)}               />
            </label>

            < div >
               <button className={s.myBtn} onClick={addPost}>button</button>
            </div>
            {
               props.users.map((user, index) =>
                  <PostItem remove={remove} number={index + 1} user={user} key={user.id} state={state} />)
            }
         </div>
      </div>
   )
}
export default AddUsers;

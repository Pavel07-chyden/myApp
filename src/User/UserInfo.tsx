import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import s from '../App.module.css';
import { initialStateType } from '../redux/reponsReduser';
import { EditableSpan } from './EditableSpan';
import { useParams } from 'react-router-dom';


export type UserInfoType = {
   users: Array<initialStateType>,
   change: (user: initialStateType) => void
}

const UserInfo = (props: UserInfoType) => {
   const { userId } = useParams<{ userId: string }>()

   let user = props.users.find((user) => user.id === +userId ? { ...user } : {})

   const changFerstLast = (firstLastName: string) => {
      if (user) {
         user = { ...user, firstLastName: firstLastName }
         props.change(user)
      }
   }
   const changePost = (post: string, user: initialStateType) => {
      user = { ...user, post: post }
      props.change(user)
   }
   const changeEmployment = (employment: string, user: initialStateType) => {
      user = { ...user, employment: employment }
      props.change(user)
   }
   const changeGender = (gender: string) => {
      if (user) {
         user = { ...user, gender: gender }
         props.change(user)
      }
   }
   const changeBirth = (birth: string) => {
      if (user) {
         user = { ...user, birth: birth }
         props.change(user)
      }
   }
   console.log('user', props.users);

   return (
      <>
         <div className={s.app}>
            {user ? <div className={s.wrapper}>
               <h2>First Name:<EditableSpan value={user.firstLastName} onChange={changFerstLast} /></h2>
               <h2>Post:<EditableSpan value={user.post} onChange={changePost} /></h2>
               <h2>Employment:<EditableSpan value={user.employment} onChange={changeEmployment} /></h2>
               <h2>Gender:<EditableSpan value={user.gender} onChange={changeGender} /></h2>
               <h2>Birth:<EditableSpan value={user.birth} onChange={changeBirth} /></h2>
            </div> : ''}
         </div>
      </>
   )
}
export default UserInfo;
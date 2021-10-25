import React from "react";
import { NavLink } from "react-router-dom";
import s from './PostItem.module.css'
import { initialStateType } from "../redux/reponsReduser";

type postitemType = {
   remove: (user: initialStateType) => void
   key: number,
   number: number,
   user: initialStateType
   state: { firstLastName: string, post: string, employment: string }
}

const PostItem = (props: postitemType) => {

   return (
      <div>
         <div className={s.app}>
            <div className={s.post}>
               <div className={s.post_content}>
                  <NavLink to={`/dialog/${props.user.id}`}>
                     {props.user.firstLastName}
                  </NavLink>
                  <div>
                     {props.user.employment}
                  </div>
               </div>
               <div className='post_btns'>
                  <button onClick={() => props.remove(props.user)}>
                     Delete
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}
export default PostItem;

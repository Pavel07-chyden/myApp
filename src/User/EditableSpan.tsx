import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { initialStateType } from '../redux/reponsReduser';

type EditableSpanType ={
   onChange:(value: any, user?:any)=>void
   value: string
}

export function EditableSpan(props:EditableSpanType) {
   let [editMode, setEditMode] = useState(false);
   let [title, setTitle] = useState(props.value);

   const activateEditMode = () => {
      setEditMode(true);
      setTitle(props.value);
   }
   const activateViewMode = () => {
      setEditMode(false);
      props.onChange(title);
   }
   const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
   }


   return editMode
      ? <input value={title} onChange={(e) => changeTitle(e)} autoFocus onBlur={activateViewMode} />
      : <span onDoubleClick={activateEditMode}>{title ? title : "Введите текст"}</span>
}

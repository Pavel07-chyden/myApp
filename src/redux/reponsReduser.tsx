
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const CHANGE_TASK_TITLE = 'CHANGE-TASK-TITLE'; 


export type initialStateType = {
   id: number,
   firstLastName:string,
   post: string,
   employment:string
   gender: string
   birth: string
}

const initialState: Array<initialStateType> = [
   { id: 1, firstLastName: "JavaScript", post: "Description", employment: "POST", gender: '', birth: ''  },
   { id: 2, firstLastName: "Java", post: "Position", employment: "NewPost",  gender: '', birth: '' },
]

export const removeUsersAC = (id: number) => ({ type: "REMOVE_USER", id } as const)
export const changeTitleAC = (user: initialStateType) => ({ type: 'CHANGE-TASK-TITLE', user} as const)
export const addUsersAC = (user: initialStateType) => ({ type: 'ADD_USER', user } as const)

export type addUsersACType = ReturnType<typeof addUsersAC>
export type ChangeTitleType = ReturnType<typeof changeTitleAC>
export type removeUsersType = ReturnType<typeof removeUsersAC>


export const reponsReduser = (state: Array<initialStateType> = initialState, action:ReducerActionType): Array<initialStateType> => {
   switch (action.type) {
      case ADD_USER: {
         return [...state, action.user];
      }
      case REMOVE_USER: {
         return state.filter(u => u.id !== action.id)
      }
      case CHANGE_TASK_TITLE: {
         let ofStatus = state.find(u => u.id === action.user.id);
         if (ofStatus) {
            ofStatus.firstLastName = action.user.firstLastName;
            ofStatus.post = action.user.post;
            ofStatus.employment = action.user.employment;
            ofStatus.gender = action.user.gender;
            ofStatus.birth = action.user.birth;
         }
         return ([...state]);

      }
      default: {
         return state;
      }
   }
}



export type ReducerActionType = addUsersACType | ChangeTitleType | removeUsersType;
import { createStore, combineReducers } from 'redux';
import { reponsReduser } from './reponsReduser';
// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const reducers = combineReducers({
   users:reponsReduser
})

// непосредственно создаём store
const store = createStore(reducers)
// определить автоматически тип всего объекта состояния
// export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof reducers>
export default store
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;



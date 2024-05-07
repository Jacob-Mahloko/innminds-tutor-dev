import { handleActions } from "redux-actions";
import { IStudentStateContext} from "./context";
import { StudentActionEnum } from "./action";
import { ReducerAction } from "react";


export const reducer = handleActions({
    [StudentActionEnum.GetSubjects]:(state:IStudentStateContext,action:ReduxActions.Action<IStudentStateContext>)=>({...state,...action.payload}),
    [StudentActionEnum.GetProfile]:(state:IStudentStateContext,action:ReduxActions.Action<IStudentStateContext>)=>({...state,...action.payload}),
    [StudentActionEnum.GetLessons]:(state:IStudentStateContext,action:ReduxActions.Action<IStudentStateContext>)=>({...state,...action.payload})
},{});
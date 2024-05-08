import { handleActions } from "redux-actions";
import { AdminStateContext, IAdminStateContext} from "./context";
import { AdminActionEnum } from "./action";


export const reducer = handleActions({
    [AdminActionEnum.GetSubjectByGrade]:(state:IAdminStateContext,action:ReduxActions.Action<IAdminStateContext>)=>({...state,...action.payload}),
    [AdminActionEnum.GetAllRegistrationApplications]:(state:IAdminStateContext,action:ReduxActions.Action<IAdminStateContext>)=>({...state,...action.payload}),
    [AdminActionEnum.GetRequests]:(state:IAdminStateContext,action:ReduxActions.Action<IAdminStateContext>)=>({...state,...action.payload}),
    [AdminActionEnum.SearchStudent]:(state:IAdminStateContext,action:ReduxActions.Action<IAdminStateContext>)=>{console.log(action);return{...state,...action.payload}},
    [AdminActionEnum.SearchTutor]:(state:IAdminStateContext,action:ReduxActions.Action<IAdminStateContext>)=>({...state,...action.payload}),
    [AdminActionEnum.GetGradeStat]:(state:IAdminStateContext,action:ReduxActions.Action<IAdminStateContext>)=>({...state,...action.payload}),
    [AdminActionEnum.GetSubjectStat]:(state:IAdminStateContext,action:ReduxActions.Action<IAdminStateContext>)=>({...state,...action.payload})
},{});
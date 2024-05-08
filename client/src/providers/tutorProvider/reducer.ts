import { handleActions } from "redux-actions";
import { ITutorStateContext, TutorStateContext} from "./context";
import { TutorActionEnum } from "./action";


export const reducer = handleActions({
    [TutorActionEnum.GetAllSubject]:(state:ITutorStateContext,action:ReduxActions.Action<ITutorStateContext>)=>({...state,...action.payload})
},{});
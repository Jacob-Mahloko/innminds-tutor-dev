import { createAction } from 'redux-actions';

import { ITutorStateContext, TutorStateContext } from './context';
import { ISubject } from '../../../models/interface';

export enum TutorActionEnum{
    GetAllSubject='GET_ALL_SUBJECTS'
}

export const GetAllSubjectsAction=createAction<ITutorStateContext,ISubject[]>(TutorActionEnum.GetAllSubject,(allSubjects)=>({allSubjects}))
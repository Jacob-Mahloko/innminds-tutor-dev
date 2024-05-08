import { createAction } from 'redux-actions';
import { IStudentStateContext } from './context';
import { ILesson, IStudent, ISubject } from '../../../models/interface';

export enum StudentActionEnum{
    GetSubjects='GET_SUBJECT',
    GetProfile='GET_PROFILE',
    GetLessons='GET_LESSON'
}

export const GetSubject=createAction<IStudentStateContext,ISubject[]>(StudentActionEnum.GetSubjects,(subjects)=>({subjects}))
export const GetProfile=createAction<IStudentStateContext,IStudent>(StudentActionEnum.GetProfile,(profile)=>({profile}))
export const GetLesson=createAction<IStudentStateContext,ILesson[]>(StudentActionEnum.GetLessons,(lessons)=>({lessons}))

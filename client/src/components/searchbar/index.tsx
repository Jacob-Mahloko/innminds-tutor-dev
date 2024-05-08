import { Button, Form, Input, message } from 'antd';
import {FC, useEffect} from 'react';
import { IQuery } from '../../../models/interface';
import { useStyles } from './styles';
import { useSearchParams } from 'next/navigation';
import {useRouter} from 'next/navigation';
import { validateEscapeScequence } from '@/utilis/validator/validator';
import { useAdmin } from '@/providers/adminProvider';

const SearchBar:FC =()=>{
    const {styles} = useStyles();
    const {push} =useRouter();
    const type=useSearchParams().get('type');
    const searchTerm=useSearchParams().get('searchTerm');
    const {searchStudent,searchTutor}=useAdmin();

    useEffect(()=>{
      if(searchTerm!=' '||searchTerm!=null){
        if(searchTerm!='null'|| searchTerm!=null){
          //push(`/user?type=${type}&searchTerm=${searchTerm}`);
          searchStudent({searchTerm})
        }else{
          push(`/user?type=${type}`);}
      }else{
        push(`/user?type=${type}`);
      }
    },[])

    const onFinish=(value:IQuery)=>{
        if(value.searchTerm==''||value.searchTerm==null){message.error('please enter keyword to search');push(`/user?type=${type}`);return;}
        if(type=='Student'){
          push(`/user?type=${type}&searchTerm=${value.searchTerm}`);
          searchStudent(value);

        }else if(type=='Tutor'){
          push(`/user?type=${type}&searchTerm=${value.searchTerm}`);
          searchTutor(value);
        }else{
          message.error("Invalid Search");
        }
    }
    return (
        <Form layout='inline'  
              className={styles.FormStyle} 
              onFinish={onFinish}
              initialValues={{searchTerm:searchTerm!==null?searchTerm:''}}
              >
             <Form.Item <IQuery>  
              name="searchTerm" 
              rules={[{validator:validateEscapeScequence}]}
              >
              <Input  placeholder="Use keyword to search" className={styles.searchInput}/>
            </Form.Item>
            <Form.Item  wrapperCol={{ span: 8, offset: 0 }}>
              <Button type="primary" htmlType='submit'>Search</Button>
            </Form.Item>
          </Form>
    );
}

export default SearchBar;
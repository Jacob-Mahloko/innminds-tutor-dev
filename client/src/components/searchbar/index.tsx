import { Button, Form, Input } from 'antd';
import {FC} from 'react';
import { IQuery } from '../../../models/interface';
import { useStyles } from './styles';
import { useSearchParams } from 'next/navigation';

const SearchBar:FC =()=>{
    const {styles} = useStyles();
    const type=useSearchParams().get('type');
    const searchTerm=useSearchParams().get('searchTerm');

    const onFinish=()=>{
        
    }
    return (
        <Form layout='inline'  
              className={styles.FormStyle} 
              onFinish={onFinish}
              initialValues={{searchTerm:searchTerm!==null?searchTerm:''}}
              >
             <Form.Item <IQuery>  name="searchTerm">
              <Input  placeholder="Use keyword to search" className={styles.searchInput}/>
            </Form.Item>
            <Form.Item  wrapperCol={{ span: 8, offset: 0 }}>
              <Button type="primary" htmlType='submit'>Search</Button>
            </Form.Item>
          </Form>
    );
}

export default SearchBar;
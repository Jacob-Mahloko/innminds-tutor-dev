import { RequestEnum } from '@/utilis/defaults/default';
import { Select } from 'antd';
const {Option}=Select;

export const useSearch=()=>{
    const columns = [
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'infnameo',
        },
        {
          title: 'Surname',
          dataIndex: 'surname',
          key: 'surname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render:(status:string,req:any )=>
              (
              <Select
                key={status}
                defaultValue={status}
              >
                <Option value={RequestEnum.Await}>{RequestEnum.Await}</Option>
                <Option value={RequestEnum.Process}>{RequestEnum.Process}</Option>
                <Option value={RequestEnum.Completed}>{RequestEnum.Completed}</Option>
              </Select>
              )
        
          },
      ];
    return {columns};
}
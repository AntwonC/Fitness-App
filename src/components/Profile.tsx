import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import  LogoutButton from './LogoutButton';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker, Select, TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import { Button } from 'antd';
import App from '../App';

import '../styles/Profile.css';

interface DataType {
    key: string;
    name: string;
    age: number; 
    tags: string[];
}

const { Option } = Select;

type PickerType = 'time' | 'date';

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps['onChange'];
}) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};


const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tags: ['cool', 'teacher'],
    },
  ];

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [addButtonState, setAddButtonState] = useState(false);

    const [type, setType] = useState<PickerType>('time');


    console.log(user); 
    console.log(isAuthenticated);
    console.log(isLoading);

    const addButtonClicked = () => {
      console.log("Add button clicked!");
      console.log("This should prompt a popup box to put information and add.");
      setAddButtonState(prevState => !prevState);
      console.log(`addButtonState: ${addButtonState}`);
    }

    if(user === undefined) {
        console.log("user is undefined");
    }

    if( isLoading ) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated && (
            <div>

                <div className="ProfileContainer">
                    <img className="ProfileImage" src={user.picture} alt={user.name} />
                    <h2 className="ProfileName">{user.nickname}</h2>
                </div>

                <div className="MainMenu">
                <Space>
                  <Select aria-label="Picker Type" value={type} onChange={setType}>
                    <Option value="time">Time</Option>
                    <Option value="date">Date</Option>
                    <Option value="week">Week</Option>
                    <Option value="month">Month</Option>
                    <Option value="quarter">Quarter</Option>
                    <Option value="year">Year</Option>
                  </Select>
                  <PickerWithType type={type} onChange={(date, dateString) => console.log(dateString)} />
                </Space>
                    <Table<DataType> scroll={{x: 'max-content'}} columns={columns} dataSource={data} />
                    <Button onClick={addButtonClicked}>Add</Button>
                </div>

                  {(addButtonState ? <div><App /></div> : <div></div>)}
                
                
                
                    <LogoutButton />
            </div>
        )
    );
};

export default Profile;
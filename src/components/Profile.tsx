import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import  LogoutButton from './LogoutButton';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

import '../styles/Profile.css';

interface DataType {
    key: string;
    name: string;
    age: number; 
    tags: string[];
}

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

    console.log(user); 
    console.log(isAuthenticated);
    console.log(isLoading);

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
                    <Table<DataType> scroll={{x: 'max-content'}} columns={columns} dataSource={data} />
                </div>
                    <LogoutButton />
            </div>
        )
    );
};

export default Profile;
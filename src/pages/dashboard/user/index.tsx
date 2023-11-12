import React from 'react'
import { Table, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import './index.less'
interface DataType {
  key: string
  name: string
  account: number
  role: '普通用户' | '管理员'
}
const columns: ColumnsType<DataType> = [
  {
    dataIndex: 'key',
    rowScope: 'row',
    align: 'center'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: '150px'
  },
  {
    title: '账号',
    dataIndex: 'account'
  },
  {
    title: '角色',
    dataIndex: 'role'
  },
  {
    title: '操作',
    dataIndex: 'controls',
    align: 'center',
    width: '200px',
    render: () => (
      <div className="controls">
        <Button type="primary" ghost>
          编辑
        </Button>
        <Button danger>删除</Button>
      </div>
    )
  }
]
const data: DataType[] = [
  {
    key: '1',
    name: 'lucy',
    account: 111111111,
    role: '普通用户'
  },
  {
    key: '2',
    name: 'lucy',
    account: 111111111,
    role: '普通用户'
  },
  {
    key: '3',
    name: 'lucy',
    account: 111111111,
    role: '普通用户'
  },
  {
    key: '4',
    name: 'lucy',
    account: 111111111,
    role: '普通用户'
  }
]
const user: React.FC = () => {
  return (
    <div className="home-user">
      <div className="home-user-content">
        <div className="top">
          <div className="title">用户列表</div>
          <Button type="primary">添加用户+</Button>
        </div>
        <Table
          className="table"
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
      </div>
    </div>
  )
}

export default user

import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import './index.less'
interface DataType {
  key: string
  name: string
  room: number
  target: string
  time: string
}
const columns: ColumnsType<DataType> = [
  {
    dataIndex: 'key',
    rowScope: 'row',
    align: 'center'
  },
  {
    title: '姓名',
    dataIndex: 'name'
  },
  {
    title: '会议室',
    dataIndex: 'room'
  },
  {
    title: '预约目的',
    dataIndex: 'target'
  },
  {
    title: '预约时间',
    dataIndex: 'time'
  }
]
const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    room: 1,
    target: '课题讨论',
    time: '9.00 am'
  },
  {
    key: '2',
    name: 'Jim Green',
    room: 1,
    target: '课题讨论',
    time: '9.00 am'
  },
  {
    key: '3',
    name: 'Joe Black',
    room: 1,
    target: '课题讨论',
    time: '9.00 am'
  },
  {
    key: '4',
    name: 'Jim Red',
    room: 1,
    target: '课题讨论',
    time: '9.00 am'
  }
]

const history: React.FC = () => {
  return (
    <div className="history">
      <div className="main-content">
        <h3 className="title">会议室预约记录</h3>
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

export default history

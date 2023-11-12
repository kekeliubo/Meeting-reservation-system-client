import React from 'react'
import { DatePicker, Select, Input, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import './index.less'
interface DataType {
  key: string
  room: number
  target: string
  date: string
  time: string
}
const columns: ColumnsType<DataType> = [
  {
    dataIndex: 'key',
    rowScope: 'row',
    align: 'center'
  },
  {
    title: '会议室房间号',
    dataIndex: 'room',
    width: '150px'
  },
  {
    title: '预约目的',
    dataIndex: 'target'
  },
  {
    title: '预约日期',
    dataIndex: 'date'
  },
  {
    title: '预约时间',
    dataIndex: 'time'
  }
]
const data: DataType[] = [
  {
    key: '1',
    room: 1,
    target: '课题讨论',
    date: '2023-08-30',
    time: '9.00 am'
  },
  {
    key: '2',
    room: 1,
    target: '课题讨论',
    date: '2023-08-30',
    time: '9.00 am'
  },
  {
    key: '3',
    room: 1,
    target: '课题讨论',
    date: '2023-08-30',
    time: '9.00 am'
  },
  {
    key: '4',
    room: 1,
    target: '课题讨论',
    date: '2023-08-30',
    time: '9.00 am'
  }
]

const reserve: React.FC = () => {
  return (
    <div className="reverse">
      <div className="reverse-content">
        <div className="advance">
          <div className="advance-title">预约登记</div>
          <div className="advance-list">
            <div className="advance-item">
              <span className="title">会议室号:</span>
              <Select
                placeholder="请选择会议室号"
                options={[
                  { value: '01', label: '01' },
                  { value: '02', label: '02' },
                  { value: '03', label: '03' },
                  { value: '04', label: '04' }
                ]}
              />
            </div>
            <div className="advance-item">
              <span className="title">预约目的:</span>
              <div>
                <Input placeholder="请输入预约目的" />
              </div>
            </div>
          </div>
          <div className="advance-list">
            <div className="advance-item">
              <span className="title">预约日期:</span>
              <DatePicker />
            </div>
            <div className="advance-item">
              ;<span className="title">预约时间:</span>
              <Select
                placeholder="请选择预约时段"
                options={[
                  { value: '09:00-11:00', label: '09:00-11:00' },
                  { value: '11:00-13:00', label: '11:00-13:00' },
                  { value: '13:00-15:00', label: '13:00-15:00' },
                  { value: '15:00-17:00', label: '15:00-17:00' },
                  { value: '17:00-19:00', label: '17:00-19:00' },
                  { value: '19:00-21:00', label: '19:00-21:00' }
                ]}
              />
            </div>
          </div>
          <div className="metting-room-list"></div>
        </div>
        <div className="order">
          <div className="order-title">我的预约</div>
          <Table
            className="table"
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
          />
        </div>
      </div>
    </div>
  )
}

export default reserve

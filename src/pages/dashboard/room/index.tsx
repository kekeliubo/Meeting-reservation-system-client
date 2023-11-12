import React, { useState } from 'react'
import { Table, Button, Modal } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import './index.less'
interface DataType {
  key: string
  room: string
  size: number // 容纳人数
  content: string // 设施
}
const columns: ColumnsType<DataType> = [
  {
    dataIndex: 'key',
    rowScope: 'row',
    align: 'center'
  },
  {
    title: '会议室',
    dataIndex: 'room',
    width: '150px'
  },
  {
    title: '容量(人)',
    dataIndex: 'size'
  },
  {
    title: '设施',
    dataIndex: 'content'
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
    room: '会议室01',
    size: 10,
    content: '两张圆桌，十把椅子，一台白板'
  },
  {
    key: '2',
    room: '会议室01',
    size: 10,
    content: '两张圆桌，十把椅子，一台白板'
  },
  {
    key: '3',
    room: '会议室01',
    size: 10,
    content: '两张圆桌，十把椅子，一台白板'
  },
  {
    key: '4',
    room: '会议室01',
    size: 10,
    content: '两张圆桌，十把椅子，一台白板'
  }
]
const room: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  return (
    <div className="home-room">
      <div className="home-room-content">
        <div className="top">
          <div
            className="title"
            onClick={() => {
              setIsModalOpen(true)
            }}
          >
            会议室列表
          </div>
          <Button type="primary">添加会议室+</Button>
        </div>
        <Table
          className="table"
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
      </div>
      <Modal
        title="添加会议室"
        centered
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false)
        }}
        onCancel={() => {
          setIsModalOpen(false)
        }}
      >
        <p>11111</p>
      </Modal>
    </div>
  )
}

export default room

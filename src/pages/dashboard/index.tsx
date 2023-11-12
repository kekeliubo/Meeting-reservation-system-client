import React, { useState, useEffect } from 'react'
import {
  ExpandOutlined,
  MessageOutlined,
  BulbOutlined
} from '@ant-design/icons'
import { Layout, Breadcrumb, Avatar, Popover } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import './index.less'

const { Sider } = Layout
const routes = [
  { key: 'chart', name: '报表统计' },
  { key: 'history', name: '历史记录' },
  { key: 'reverse', name: '预约管理' },
  { key: 'date', name: '日程管理' },
  { key: 'user', name: '用户管理' },
  { key: 'room', name: '会议室管理' }
]

const DashBoard: React.FC = () => {
  const [Bread, setBread] = useState<string>('报表统计')

  const navigate = useNavigate()
  const handleLInk = (item: { key: string; name: string }): void => {
    const { key, name } = item
    setBread(name)
    navigate('/home/' + key, { replace: true })
  }

  useEffect(() => {
    const url = new URL(location.href)
    const pathname = url.pathname // 获取 pathname 属性
    const routename = pathname.split('/').pop() // 获取最后一个 / 分隔的字符串
    routes.forEach((route) => {
      if (route.key === routename) {
        setBread(route.name)
      }
    })
  }, [location.href])

  const content = (
    <ul className="avatar-list">
      <li
        onClick={() => {
          navigate('/user', { replace: true })
        }}
      >
        个人中心
      </li>
      <li
        onClick={() => {
          navigate('/login', { replace: true })
        }}
      >
        退出登录
      </li>
    </ul>
  )
  return (
    <div className="home">
      <Layout>
        <Sider
          trigger={null}
          collapsible
          style={{ height: '100vh', backgroundColor: 'white' }}
        >
          <div className="demo-logo-vertical" />
          <div className="slide">
            <div className="slide-title">
              <img src="/public/metting.png" alt="" style={{ width: '22px' }} />
              <span>会议室预约系统</span>
            </div>
            <div className="img"></div>
            <ul>
              {routes.map((item) => (
                <li
                  key={item.key}
                  onClick={() => {
                    handleLInk(item)
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </Sider>
        <Layout>
          <div className="header">
            <Breadcrumb
              items={[
                {
                  title: '会议室预约系统'
                },
                {
                  title: Bread
                }
              ]}
              style={{ fontSize: '18px', cursor: 'pointer' }}
            />
            <div className="right">
              <ExpandOutlined />
              <MessageOutlined className="message" />
              <BulbOutlined className="idea" />
              <Popover placement="bottom" content={content} trigger="hover">
                <Avatar
                  shape="square"
                  className="avatar"
                  src="/src/assets/avatar.png"
                />
              </Popover>
            </div>
          </div>
          <div className="main">
            <Outlet />
          </div>
        </Layout>
      </Layout>
    </div>
  )
}

export default DashBoard

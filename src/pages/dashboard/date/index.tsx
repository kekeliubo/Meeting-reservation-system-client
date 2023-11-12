import React from 'react'
import { Select, Calendar } from 'antd'
import './index.less'

const date: React.FC = () => {
  return (
    <div className="home-date">
      <div className="home-date-content">
        <div className="title">查询会议室可选时间</div>
        <div className="search">
          <div className="search-room">
            <Select
              defaultValue={'01'}
              style={{ width: '300px', border: 'none' }}
              options={[
                { value: '01', label: '会议室一' },
                { value: '02', label: '会议室二' },
                { value: '03', label: '会议室三' },
                { value: '04', label: '会议室四' }
              ]}
            />
          </div>
          <div className="search-time">
            <div className="date">
              <div className="date-title">请选择查询日期</div>
              <div className="calendar">
                <Calendar fullscreen={false} />
              </div>
            </div>
            <div className="time">
              <div className="time-title">可选时间段</div>
              <div className="time-list">
                <div className="time-item">
                  <span>09:00-11:00</span>
                  <span>已选</span>
                </div>
                <div className="time-item">
                  <span>11:00-13:00</span>
                  <span>已选</span>
                </div>
                <div className="time-item">
                  <span>13:00-15:00</span>
                  <span>已选</span>
                </div>
                <div className="time-item">
                  <span>15:00-17:00</span>
                  <span>已选</span>
                </div>
                <div className="time-item">
                  <span>17:00-19:00</span>
                  <span>已选</span>
                </div>
                <div className="time-item">
                  <span>19:00-21:00</span>
                  <span>已选</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default date

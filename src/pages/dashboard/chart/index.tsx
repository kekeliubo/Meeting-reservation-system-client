import React from 'react'
import ReactEcharts from 'echarts-for-react'
import './index.less'
import DataItem from '../../../components/data-item'
const data = [
  { month: '一月', count: 50 },
  { month: '二月', count: 80 },
  { month: '三月', count: 120 },
  { month: '四月', count: 90 },
  { month: '五月', count: 150 },
  { month: '六月', count: 200 },
  { month: '七月', count: 180 },
  { month: '八月', count: 160 },
  { month: '九月', count: 120 },
  { month: '十月', count: 90 },
  { month: '十一月', count: 70 },
  { month: '十二月', count: 60 }
]
const xAxisData = data.map((item) => item.month)
const seriesData = data.map((item) => item.count)
const chart: React.FC = () => {
  const option = {
    title: {
      text: '预约人次统计图', // 添加标题
      left: 'center',
      bottom: 10
    },
    color: '#FFA500', // 橙色
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
          type: 'dashed'
        }
      }
    },
    xAxis: {
      type: 'category',
      data: xAxisData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'bar',
        data: seriesData,
        label: {
          show: true,
          position: 'top'
        },
        emphasis: {
          itemStyle: {
            color: '#FFA500' // 高亮显示橙色
          }
        }
      },
      {
        type: 'line',
        smooth: true,
        data: seriesData,
        symbol: 'circle', // 折线图上的图标为圆圈
        lineStyle: {
          color: '#0df3a3' // 折线颜色为橙色
        }
      }
    ]
  }
  return (
    <div>
      <div className="top">
        <DataItem
          backgroundColor=" linear-gradient(to right, #6f42c1, #a342c1)"
          reverseNum={1000}
          reverseText="预约次数"
          updateTime="2.30 am"
        ></DataItem>
        <DataItem
          backgroundColor=" linear-gradient(to right, #007bff, #01dbdf)"
          reverseNum="80%"
          reverseText="使用率"
          updateTime="9.35 am"
        ></DataItem>
        <DataItem
          backgroundColor=" linear-gradient(to right, #FF292D, #fe909d)"
          reverseNum={13}
          reverseText="剩余会议室"
          updateTime="4.22 pm"
        ></DataItem>
        <DataItem
          backgroundColor=" linear-gradient(to right, #fe9365, #feb798)"
          reverseNum={510}
          reverseText="单日总人流量"
          updateTime="5.30 pm"
        ></DataItem>
      </div>
      <div className="bottom">
        <ReactEcharts
          option={option}
          style={{ height: '400px', width: '100%' }}
          className={'react_for_echarts'}
        />
      </div>
    </div>
  )
}

export default chart

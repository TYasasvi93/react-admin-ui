//import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './barChartBox.scss'

type Props={
    title:string;
    color:string;
    dataKey:string;
    chartData:object[];
}
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const BarChartBox = (props :Props) => {
  // console.log(props.chartData,props.dataKey,props.color,props.chartData)
  return (
    <div className='barChartBox'>
        <h1>{props.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="90%" height="75%">
        <BarChart data={data}>
            <Tooltip 
            contentStyle={{backgroundColor:"#000",borderRadius:"5px"}}
            labelStyle={{display:'none'}}
            cursor={{fill:'none'}}/>
          <Bar dataKey="uv" fill={props.color} />
        </BarChart>
        {/* <BarChart width={150} height={40} data={data}>
        <Tooltip 
            contentStyle={{backgroundColor:"#000",borderRadius:"5px"}}
            labelStyle={{display:'none'}}
            cursor={{fill:'none'}}/>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart> */}
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox
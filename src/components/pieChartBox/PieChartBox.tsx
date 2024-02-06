//import React from 'react'
import './pieChartBox.scss';

import * as recharts from "recharts";

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" }
];

const PieChartBox = () => {
    return (
        <div className='pieChartBox'>
            <h1>Leads BY Source</h1>
            <div className="chart">
                <recharts.ResponsiveContainer>
                    <recharts.PieChart width={100} height={100}>
                        <recharts.Pie
                            data={data}
                            cx={150}
                            cy={140}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value" >
                            {data.map((item) => (
                                <recharts.Cell key={item.name} fill={item.color} />
                            ))}
                        </recharts.Pie>

                    </recharts.PieChart>
                </recharts.ResponsiveContainer>

            </div>
            <div className="options">
                {data.map(item=>(
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{backgroundColor:item.color}} />
                            <span>{item.name}</span>                            
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PieChartBox
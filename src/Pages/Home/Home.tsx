//import React from 'react'
import './home.scss'
import { TopBox } from '../../components/topbox/TopBox'
import CharBox from '../../components/charBox/CharBox';
import { chartBoxUser,chartBoxProduct, chartBoxRevenue, chartBoxConversion,barChartBoxVisit,barChartBoxRevenue } from '../../data';
import BarChartBox from '../../components/barChartBox/BarChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import { BigChartBox } from '../../components/bigChartBox/BigChartBox';

export const Home = () => (
  <div className='home'>
    <div className="box box1"><TopBox /> </div>
    <div className="box box2"><CharBox {...chartBoxUser} /></div>
    <div className="box box3"><CharBox {...chartBoxProduct}/></div>
        <div className="box box4"><PieChartBox /></div>
        <div className="box box5"><CharBox {...chartBoxRevenue}/></div>
        <div className="box box6"><CharBox {...chartBoxConversion}/></div>
    <div className="box box7"> <BarChartBox {...barChartBoxVisit} /></div>
    <div className="box box8"><BigChartBox /></div>
    <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
  </div>
)

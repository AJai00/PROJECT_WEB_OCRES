import "./widgets.css";
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import "./Courbe.css";






const data = [
  {
    name: '2010', décès_routiers_en_france: 992,
  },
  {
    name: '2011', décès_routiers_en_france: 963,
  },
  {
    name: '2012', décès_routiers_en_france: 653,
  },
  {
    name: '2013', décès_routiers_en_france: 268,
  },
  {
    name: '2014', décès_routiers_en_france: 384
  },
  {
    name: '2015', décès_routiers_en_france: 461,
  },
  {
    name: '2016', décès_routiers_en_france: 477,
  },
  {
    name: '2017', décès_routiers_en_france: 448,
  },
  {
    name: '2018', décès_routiers_en_france: 248,
  },
  {
    name: '2019', décès_routiers_en_france: 244,
  },
];

class CustomizedLabel extends PureComponent {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10}  textAnchor="middle">{value}</text>;
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

export default class Courbe extends PureComponent {

  render() {
    return (
      <LineChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="décès_routiers_en_france" stroke="red" label={<CustomizedLabel />} />
        </LineChart>
    );
  }
}


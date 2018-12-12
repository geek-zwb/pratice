import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/visualMap';
import './index.css';
import {getStudent, getTimeRandom} from './data';

const data = getStudent();
const timeData = getTimeRandom();

const scatter = echarts.init(document.querySelector('.scatter'));

scatter.setOption({
  dataset: {
    source: data
  },
  series: [{
    type: 'scatter',
    encode: {
      x: 'id',
      y: 'height',
    }
  }],
  xAxis: {
    type: 'category',
    name: '学号',
    nameLocation: 'middle',
    nameGap: 30
  },
  yAxis: {
    type: 'value',
    scale: true,
    name: '身高',
  },
  visualMap: {
    // 视觉映射
    type: 'piecewise', // piecewise 分段式， continuous 连续式
    dimension: 'gender',
    pieces: [
      {value: 'male', label: '男生', color: '#1890ff'},
      {value: 'female', label: '女生', color: '#f5222d'},
    ],
    orient: 'horizontal'
  }
});

const lineChart = echarts.init(document.querySelector('.line'));
lineChart.setOption({
  dataset: {
    source: timeData
  },
  series: {
    type: 'line',
    encode: {
      x: 'time',
      y: 'value'
    },
    smooth: true
  },
  xAxis: {
    type: 'value',
    name: '秒',
    nameLocation: 'middle',
    nameGap: 30
  },
  yAxis: {
    type: 'value',
    scale: true
  }
});
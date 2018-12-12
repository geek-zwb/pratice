import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markLine';
import './index.css';
import {getStudent, getTimeRandom, getSchoolData} from './data';

const data = getStudent();
const timeData = getTimeRandom();
const timeData2 = getTimeRandom();

const scatter = echarts.init(document.querySelector('.scatter'));
scatter.setOption({
  dataset: {
    source: data,
  },
  series: [
    {
      type: 'scatter',
      encode: {
        x: 'id',
        y: 'height',
      },
    }],
  xAxis: {
    type: 'category',
    name: '学号',
    nameLocation: 'middle',
    nameGap: 30,
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
    orient: 'horizontal',
  },
});

const lineChart = echarts.init(document.querySelector('.line'));
lineChart.setOption({
  dataset: {
    source: timeData,
  },
  series: [
    {
      name: 'line1',
      type: 'line',
      encode: {
        x: 'time',
        y: 'value',
      },
      smooth: true,
    }, {
      name: 'line2',
      type: 'line',
      encode: {
        x: 'time',
        y: 'value',
      },
      smooth: true,
      data: timeData2.map(item => [item.time, item.value]),
    }, {
      name: 'line2',
      type: 'line',
      encode: {
        x: 'time',
        y: 'value',
      },
      smooth: true,
      data: getTimeRandom().map(item => [item.time, item.value]),
    }],
  xAxis: {
    type: 'value',
    name: '秒',
    nameLocation: 'middle',
    nameGap: 30,
  },
  yAxis: {
    type: 'value',
    scale: true,
  },
});

const barChart = echarts.init(document.querySelector('.bar'));
barChart.setOption({
  dataset: {
    source: getSchoolData().data,
  },
  series: [
    {
      type: 'bar',
      encode: {
        x: 'id',
        y: 'N'
      },
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      markLine: {
        data: [
          {
            type: 'average',
            name: '平均值',
            lineStyle: {
              color: '#ffa39e'
            }
          },
        ]
      }
    },
    {
      type: 'bar',
      yAxisIndex: 1,
      encode: {
        x: 'id',
        y: 'P'
      },
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      markLine: {
        data: [
          {
            type: 'average',
            name: '平均值',
            lineStyle: {
              color: '#096dd9'
            }
          }
        ]
      }
    }
  ],
  xAxis: {
    type: 'category',
  },
  yAxis: [{
    type: 'value',
  }, {
    type: 'value',
    name: '本科率'
  }],
});

const pieChart = echarts.init(document.querySelector('.pie'));
pieChart.setOption({
  /*series: {
    type: 'pie',
    label: {
      formatter: '{@name}: {@N} ({d}%)'
    },
    data: getSchoolData().data.map(item => ({
      value: item.N,
      name: item.name,
    })),
  }*/
  dataset: {
    source: getSchoolData().data
  },
  series: {
    type: 'pie',
    label: {
      formatter: '{@name}: {@N} ({d}%)'
    },
    encode: {
      value: 'N',
      itemName: 'name'
    }
  }
});
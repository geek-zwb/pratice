import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/boxplot';
import 'echarts/lib/chart/graph';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/dataZoom';
import './index.css';
import {getStudent, getTimeRandom, getSchoolData, getYiTai, getGraphData, getMultipleDimensionData} from './data';

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
        y: 'N',
      },
      label: {
        normal: {
          show: true,
          position: 'top',
        },
      },
      markLine: {
        data: [
          {
            type: 'average',
            name: '平均值',
            lineStyle: {
              color: '#ffa39e',
            },
          },
        ],
      },
    },
    {
      type: 'bar',
      yAxisIndex: 1,
      encode: {
        x: 'id',
        y: 'P',
      },
      label: {
        normal: {
          show: true,
          position: 'top',
        },
      },
      markLine: {
        data: [
          {
            type: 'average',
            name: '平均值',
            lineStyle: {
              color: '#096dd9',
            },
          },
        ],
      },
    },
  ],
  xAxis: {
    type: 'category',
  },
  yAxis: [
    {
      type: 'value',
    }, {
      type: 'value',
      name: '本科率',
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
    source: getSchoolData().data,
  },
  series: {
    type: 'pie',
    label: {
      formatter: '{@name}: {@N} ({d}%)',
    },
    encode: {
      value: 'N',
      itemName: 'name',
    },
  },
});

// 箱线图
const boxPlotsChart = echarts.init(document.querySelector('.box-plots'));
const boxPlotsDatas = [
  [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
  [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
  [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
  [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
  [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870],
];
const boxPlotsData = boxPlotsDatas.map(
    (data, i) => Object.assign({id: i}, getYiTai(data)));
const outliersData = boxPlotsData.map(function({id, outliers}) {
  return outliers.map(outlier => [id, outlier]);
}).reduce((left, right) => left.concat(right));
boxPlotsChart.setOption({
  dataset: [
    {
      source: boxPlotsData
    },
    {
      source: outliersData
    }
  ],
  xAxis: {
    type: 'category'
  },
  yAxis: {
    type: 'value',
    scale: true
  },
  series: [
    {
      type: 'boxplot',
      datasetIndex: 0,
      encode: {
        x: 'id',
        y: [ 'min', 'Q1', 'median', 'Q3', 'max' ]
      }
    },
    {
      type: 'scatter',
      datasetIndex: 1,
      encode: {
        x: 0,
        y: 1
      }
    }
  ]
});

// 关系图
const graphChart = echarts.init(document.querySelector('.graph'));
graphChart.setOption({
  series: {
    type: 'graph',
    data: getGraphData().vertices,
    links: getGraphData().edges,
    layout: 'circular',
    symbolSize: 50,
    label: {
      normal: {
        show: true
      }
    },
    edgeSymbol: ['circle', 'arrow'],
    edgeSymbolSize: [4, 10]
  }
});

const mulDimensionChart = echarts.init(document.querySelector('.mul-dimension'));
mulDimensionChart.setOption({
  dataset: [
    {
      source: getMultipleDimensionData().filter(item => item[0] === '北京'),
    }, {
      source: getMultipleDimensionData().filter(item => item[0] === '广州'),
    },{
      source: getMultipleDimensionData().filter(item => item[0] === '上海'),
    }
  ],
  series: [
    {
      name: '北京',
      datasetIndex: 0,
      type: 'scatter',
      encode: {
        x: 1,
        y: 2
      }
    },
    {
      name: '广州',
      datasetIndex: 1,
      type: 'scatter',
      encode: {
        x: 1,
        y: 2
      }
    },
    {
      name: '上海',
      datasetIndex: 2,
      type: 'scatter',
      encode: {
        x: 1,
        y: 2
      }
    },
  ],
  xAxis: {
    type: 'category'
  },
  yAxis: {
    type: 'value'
  },
  legend: {
    right: 10,
    data: ['北京', '广州', '上海']
  },
  visualMap: [
    {
      type: 'continuous',       // 定义为连续型数据
      text: [ 'PM2.5' ],
      dimension: 3,     // 绑定到 PM2.5 数据
      inRange: {                // 范围内的图元样式
        symbolSize: [ 10, 70 ]  // 图元大小范围
      },

      // 定义图例位置
      left: 'right',
      top: '10%',
      calculable: true
    }
  ],
  dataZoom: [
    {
      type: 'slider', // 定义为独立的、可操作的滑动组件
      startValue: 15,
      endValue: 31
    }
  ]
});

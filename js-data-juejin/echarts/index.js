import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import './index.css';

const scatter = echarts.init(document.querySelector('.scatter'));

const empsRows = [
  { RowId: '001', EmpId: '10', LastName: 'Smith', FirstName: 'Joe', Salary: 40000 },
  { RowId: '002', EmpId: '12', LastName: 'Jones', FirstName: 'Mary', Salary: 50000 },
  { RowId: '003', EmpId: '11', LastName: 'Johnson', FirstName: 'Cathy', Salary: 44000 },
  { RowId: '004', EmpId: '22', LastName: 'Jones', FirstName: 'Bob', Salary: 55000 },
  { RowId: '005', EmpId: '24', LastName: 'Steve', FirstName: 'Mike', Salary: 62000 }
];

scatter.setOption({
  dataset: {
    source: empsRows
  },
  series: [{
    type: 'scatter',
    encode: {
      x: 'FirstName',
      y: 'Salary'
    }
  }],
  xAxis: {
    type: 'category'
  },
  yAxis: {
    type: 'value',
    scale: true
  }
});
function getRandomInt(min, max) {
  return Math.round(min + Math.random() * (max - min));
}
/**
 * get the coefficient range (-r, r)
 * @param r
 * @returns {number}
 */
function randomCoefficient(r) {
  const rand = Math.random();
  return (rand - 0.5) * 2 * r; // get the coefficient range (-r, r)
}

function quantile4(data, pos) {
  if (pos < 1 || pos > 3 || pos % 1 !== 0) {
    throw 'the second argument pos should be an interger and should be 1, 2 or 3'
  }

  const sortedData = data.sort(function(a, b) {
    return a - b
  })

  const n = sortedData.length;

  if ((n + 1) * pos / 4 % 1 === 0) {
    return sortedData[(n + 1) * pos / 4 - 1]
  } else {
    return (pos / 4) * (sortedData[Math.floor(pos * n / 4) - 1]) + ((4 - pos) / 4) * (sortedData[Math.floor(pos * n / 4)])
  }
}

export function getStudent() {
  const students = [];
  const n = 50;

  const heightRanges = {
    male: [155, 180],
    female: [145, 170]
  };

  for (let i = 0; i < n; i++) {
    const gender = Math.random() > 0.5 ? 'male' : 'female';
    const [min, max] = heightRanges[gender];

    const student = {
      gender,
      id: i + 1,
      height: getRandomInt(min, max)
    };

    students.push(student);
  }

  return students;
}

export function getTimeRandom() {
  const n = 60 - 1;
  const temp = [100];
  const r = 0.2;

  for (let i = 0; i < n; i++) {
    const coffiecient = randomCoefficient(r);
    temp.push(temp[i]*(1 + coffiecient));
  }

  return temp.map(function (item, index) {
      return {time: index + 1, value: item};
  });
}

export function getSchoolData() {
  let N = [],
      P = [],
      data = [];
  for (let i = 0; i < 5; i++) {
    const n = getRandomInt(1000, 1500);
    const p = getRandomInt(85, 100) / 100;
    N.push(n);
    P.push(p);
    data.push({name: String.fromCharCode(65 + i), N: n, P: p});
  }
    return {N, P, data};
}

export function getYiTai(data) {
  const sortData = data.slice().sort((a, b) => a -b);
  const Q1 = quantile4(sortData, 1);
  const Q3 = quantile4(sortData, 3);
  const median = quantile4(sortData, 2);
  const IQR = Q3 - Q1;

  // 内限 & 离群值
  const limit = [
      Q1 - 1.5 * IQR,
      Q3 + 1.5 * IQR,
  ];
  const outliers = data.filter(function (k) {
      return k < limit[0] || k > limit[1];
  });

    return {
      Q1, // 第一四分位
      Q3,// 第三四分位
      data,
      sortData,
      median, // 中位数
      IQR, // 四分位距
      limit,
      outliers,
      min: Math.min(...data),
      max: Math.max(...data),
    }
}

export function getGraphData() {
    return {
      vertices : [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },
        { name: 'D' },
        { name: 'E' }
      ],
      edges : [
        { source: 'A', target: 'B' },
        { source: 'A', target: 'C' },
        { source: 'B', target: 'D' },
        { source: 'C', target: 'D' },
        { source: 'A', target: 'A' },
        { source: 'C', target: 'E' },
        { source: 'D', target: 'E' }
      ]
    }
}


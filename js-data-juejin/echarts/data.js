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



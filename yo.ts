const fs = require('fs');

const { parse } = require('csv-parse');

type OutputType = {
  [j: number]: { [k: number]: { front: string; back: string } };
};

let res: OutputType = {};
let shuffled: string[];

let SET_COUNT = 8;
let QUESTION_COUNT = 15;

fs.createReadStream('./yo.csv')
  .pipe(parse({ delimiter: ';' }))
  .on('data', (row: string[]) => {
    shuffled = shuffleArray(row);

    for (let i = 1; i <= SET_COUNT; i++) {
      for (let j = 1; j <= QUESTION_COUNT; j++) {
        const split = row[j + 15 * (i - 1)]?.split(',');
        res[i] = {
          ...res[i],
          [j]: { front: split[0], back: split[1] },
        };
      }
    }
  })
  .on('end', () => {
    console.log(res);
  });

function shuffleArray(array: Array<any>) {
  for (let i = array?.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MapToObj(map: Map<any, any>) {
  let obj = Object.fromEntries(map);
  return JSON.stringify(obj, null, 2);
}

const csv = require("fast-csv");
const path = require("path");
const fs = require('fs');

let result = [];
let brivo = [];
let SF4 = [];
let SF6 = [];


let rows = 12;

const stream = fs.createWriteStream(path.join(__dirname, '/output/new.csv'));
let counter = 1;
let canWrite = true;

let str;

const write = (num) => {
  while (counter < num && canWrite) {
      str = ''; 
      str += brivo[counter].join(',') + ',';
      str += SF4[counter].join(',') + ',';
      str += SF6[counter].join(',') + '\n';
      
      debugger;
      canWrite = stream.write(str);
      
      counter += 1;
  }

  if (counter < num) {
    canWrite = true;
    stream.once('drain', () => write(num));
  } else {
    stream.end();
    console.log(`Finished adding spaces !`);
  }
};
      
        // for(let k = biggest - 1; k >= smallest; k -= 1) {
        //   if (brivo[i][0] !== smallest) {
        //     brivo.splice(i, 0, [k, '']);
        //   }
          
        //   if (SF4[i][0] !== smallest) {
        //     SF4.splice(i, 0, [k, '']);
        //   }
          
        //   if (SF6[i][0] !== smallest) {
        //     SF6.splice(i, 0, [k, '']);
        //   }
        // }

csv
 .fromPath(__dirname + '/input/my.csv')
 .on("data", function(data){
  // Convert csv values into 3 separate arrays
  // Column 1: Badge number
  // Column 2: Name
  brivo.push([parseInt(data[0]), data[1]]);
  SF4.push([parseInt(data[2]), data[3]]);
  SF6.push([parseInt(data[4]), data[5]]);
 })
 .on("end", function(){
  console.log('done');
  let i = 1;
  while(i < 100) { 
      // If all three rows dont have the same value
      // let offset = 1;

      if(i === 8) {
        debugger;
      }

      if (brivo[i][0] !== SF4[i][0] || brivo[i][0] !== SF6[i][0] || SF4[i][0] !== SF6[i][0]) {
        debugger;
        let smallest = Math.min(brivo[i][0],SF4[i][0], SF6[i][0]);
        let biggest = Math.max(brivo[i][0],SF4[i][0], SF6[i][0]);
        offset = biggest - smallest;

        for (let k = brivo[i][0] - 1; k >= smallest; k -= 1) {
          brivo.splice(i, 0, [k, '']);
        }

        for (let k = SF4[i][0] - 1; k >= smallest; k -= 1) {
          SF4.splice(i, 0, [k, '']);
        }
        
        for (let k = SF6[i][0] - 1; k >= smallest; k -= 1) {
          SF6.splice(i, 0, [k, '']);
        }
      }

      i += 1;
    }

    
    let row = 1;
    while(brivo[row] && SF4[row] && SF6[row]) {
      //debugger;
      if(brivo[row][1] === '' && SF4[row][1] === '' && SF6[row][1] === '') {
        brivo.splice(row,1);
        SF4.splice(row,1);
        SF6.splice(row,1);
        row -= 1;
      }

      row += 1;
    }
      
    let remaining_rows = Math.min(brivo.length, SF4.length, SF6.length);

    debugger;
    stream.write('Brivo Badge Number, Brivo Name, SF4 Badge Number, SF4 Name, SF6 Badge Number, SF6 Name \n');
    write(remaining_rows);
 });


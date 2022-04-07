let formatDate = date => {
  let result = date.replace(/^(\d\d\d\d)([-/])(\d\d)\2(\d\d)/g, '$4.$3.$1.');
  console.log(result);
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2017/05/03'); // -> '03.05.2017'
formatDate('2015/01-31'); // -> '2015/01-31' (no change)
let formatDate = date => {
  let result = date.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)/g, '$3.$2.$1.');
  console.log(result);
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)
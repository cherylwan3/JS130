let url = text => {
  let result = !!text.match(/^https?:\/\/\S+$/);
  console.log(result);
};

url('http://launchschool.com')   // # -> true
url('https://example.com')       //# -> true
url('https://example.com hello') // # -> false
url('   https://example.com')    //# -> false
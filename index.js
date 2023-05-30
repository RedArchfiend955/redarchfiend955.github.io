const {writeFile} = require(FileSystem);

$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
    var ip = data.ip;
    fs.writeFile('ip.txt', ip, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
      
//console.log(JSON.stringify(data, null, 2));
});

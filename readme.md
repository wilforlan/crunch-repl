
## Crunch REPL

**Getting Started**

      npm install crunch-repl --save
      npm install request --save

      Command List:
      .getTime [function] --> The Gets the Time Taken to Execute That Function
      .mapRequest [url] --> This Allows to Perform CURL Request From Command Line. Note v0.1 Only Supports GET Requests.

You need to require crunch-repl in your file First


      file.js
      const repl = require('crunch-repl').start();


Go CLI and Run:


      node file.js


You should have:


      crunch-$


To see Version of REPL You are running, Run:

      crunch-$ version

**Check Time Taken to Run Function**

      Having this function to get Largest Number from an Array

      function getLarge(list){
        if (Object.prototype.toString.call(list) === '[object Array]') {
          var big = [0];
          for (var i = 0; i < list.length; i++) {
            if (big[0] < list[i]) {
              big.pop();
              big.push(list[i]);
            };
          }
          return big[0];
        }
        else {
          console.log('Cannot Work type of %s', list);
        }
      }

      To Test It, Copy and Run Command on CLI like so:

      crunch-$ function getLarge(list){
        if (Object.prototype.toString.call(list) === '[object Array]') {
          var big = [0];
          for (var i = 0; i < list.length; i++) {
            if (big[0] < list[i]) {
              big.pop();
              big.push(list[i]);
            };
          }
          return big[0];
        }
        else {
          console.log('Cannot Work type of %s', list);
        }
      }

      crunch-$ .getTime getLarge([2,4])

      The .getTime command should print:

      Exec-Time: 0.036ms

**Making CURL Requests**

      crunch-$ .mapRequest http://states-and-cities.com/api/v1/state/kano/lgas

      The .mapRequest command should print:

      [{"name": "Ajingi"}, {"name": "Albasu"}, {"name": "Bagwai"}, {"name": "Bebeji"}, {"name": "Bichi"}, {"name": "Bunkure"}, {"name": "Dala"}, {"name": "Dambatta"}, {"name": "Dawakin Kudu"}, {"name": "Dawakin Tofa"}, {"name": "Doguwa"}, {"name": "Fagge"}, {"name": "Gabasawa"}, {"name": "Garko"}, {"name": "Garun Mallam"}, {"name": "Gezawa"}, {"name": "Gaya"}, {"name": "Gwale"}, {"name": "Gwarzo"}, {"name": "Kabo"}, {"name": "Kano Municipal"}, {"name": "Karaye"}, {"name": "Kibiya"}, {"name": "Kiru"}, {"name": "Kumbotso"}, {"name": "Kunchi"}, {"name": "Kura"}, {"name": "Madobi"}, {"name": "Makoda"}, {"name": "Minjibir"}, {"name": "Nasarawa"}, {"name": "Rano"}, {"name": "Rimin Gado"}, {"name": "Rogo"}, {"name": "Shanono"}, {"name": "Takai"}, {"name": "Sumaila"}, {"name": "Tarauni"}, {"name": "Tofa"}, {"name": "Tsanyawa"}, {"name": "Tudun Wada"}, {"name": "Ungogo"}, {"name": "Warawa"}, {"name": "Wudil"}]

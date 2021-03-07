var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://www.helloworld-it.com/',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(response.status);
})
.catch(function (error) {
  if (error.response) {
    console.log(error.response.status);
  }
});

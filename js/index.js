(function() {
    // key temporarily pulls from apiKey.js
    // will eventually equal to user unique API key
    var key = apiKey;

    // reqwest variables
    var r = reqwest;
    var url = 'https://api.digitalocean.com/v2/';

    function getData(action) {
        r({
            url: url + action,
            method: 'get',
            headers: {
              'Authorization': 'Bearer ' + key
            },
            success: function(data) {
                console.log(data);
            },
            error: function(error) {
                console.log(error);
            }
        })
    }

    getData('droplets');
})();
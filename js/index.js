(function() {
    // key temporarily pulls from apiKey.js
    // will eventually equal to user unique API key
    var apiKey = document.getElementById('apiKey');
    var key = apiKey;

    // reqwest variables
    var r = reqwest;
    var url = 'https://api.digitalocean.com/v2/';

    // dom variables
    var dropletSubmit = document.getElementById('dropletSubmit');
    var apiKeyStatus = document.getElementById('apiKeyStatus');

    var dropletId = document.getElementById('dropletId');
    var dropletName = document.getElementById('dropletName');
    var dropletStatus = document.getElementById('dropletStatus');
    var dropletMemory = document.getElementById('dropletMemory');
    var dropletDisk = document.getElementById('dropletDisk');

    function clearDropletInfo() {
        // clears the droplet information
        // from the dom
        dropletId.innerHTML = '';
        dropletName.innerHTML = '';
        dropletStatus.innerHTML = '';
        dropletMemory.innerHTML = '';
        dropletDisk.innerHTML = '';
    }

    function getDropletsStatus() {
        r({
            url: url + 'droplets',
            method: 'get',
            headers: {
              'Authorization': 'Bearer ' + key.value
            },
            success: function(data) {
                // update key status
                apiKeyStatus.innerHTML = 'Success!';

                // clear droplet info from dom
                clearDropletInfo();

                // iterates through droplets to get
                // name and status and push each item
                // into the dom
                data.droplets.forEach(function(droplet) {
                    dropletId.innerHTML = droplet.id;
                    dropletName.innerHTML = droplet.name;
                    dropletStatus.innerHTML = droplet.status;
                    dropletMemory.innerHTML = droplet.memory + 'MB';
                    dropletDisk.innerHTML = droplet.disk + 'GB';
                    console.log(droplet);
                });
            },
            error: function(error) {
                // update key status
                apiKeyStatus.innerHTML = error.statusText + ', incorrect API key.';

                // clear droplet info from dom
                clearDropletInfo();
            }
        });
    }

    dropletSubmit.addEventListener('click', function(e) {
        // prevent page refreshing
        e.preventDefault();

        // get droplets status
        getDropletsStatus();
    });
})();
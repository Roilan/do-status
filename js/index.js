(function() {
    // key temporarily pulls from apiKey.js
    // will eventually equal to user unique API key
    var key = apiKey;

    // reqwest variables
    var r = reqwest;
    var url = 'https://api.digitalocean.com/v2/';

    // dom variables
    var dropletSubmit = document.getElementById('dropletSubmit');

    var dropletId = document.getElementById('dropletId');
    var dropletName = document.getElementById('dropletName');
    var dropletStatus = document.getElementById('dropletStatus');
    var dropletMemory = document.getElementById('dropletMemory');
    var dropletDisk = document.getElementById('dropletDisk');

    function getDropletsStatus() {
        r({
            url: url + 'droplets',
            method: 'get',
            headers: {
              'Authorization': 'Bearer ' + key
            },
            success: function(data) {
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
                console.log(error);
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
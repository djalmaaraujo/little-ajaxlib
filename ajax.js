/*
* Little AjaxLib
* No external lib needed.
* has no conflict with other libs
* Made just fot fun!
*
*/

var AjaxLib = (function (window) {
  var availablesRequests = ['GET', 'POST', 'JSONP'];

  return {
    ajax: function () {
      var params =  {
        method: 'GET',
        url: 'request.html',
        async: true,
        username: false,
        password: false,
        callbacks: false
      };

      return this.send(params);
    },

    createXHR: function () {
      return (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    },

    send: function (params) {
      p   = params;
      xhr = this.createXHR();
      this.parseRequest(xhr);

      xhr.open(p.method, p.url, p.async, p.username, p.password);
      return xhr.send();

    },

    parseResponse: function (response) {
      // Do what ever you want here!
      document.getElementById('target').innerHTML = response;
    },

    parseRequest: function (xhr) {
      var self = this;
      xhr.onreadystatechange = function () {
        var state   = xhr.readyState;

        switch (state) {
          case 0:
            // request not initialized
            break;

          case 1:
            // server connection established
            break;

          case 2:
            // request received
            break;

          case 3:
            // processing request
            break;

          case 4:
            // request finished and response is ready
            if ((xhr.status == 200) && (xhr.statusText == 'OK')) {
              self.parseResponse(xhr.response);
            }
            break;

          default:
            console.log('READYSTATE NOT FOUND');
        }
      }
    }
  }
})(window);
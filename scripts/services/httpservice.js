let makeRequest = function (method, url, data, dataType, withCredentials) {
  var data = data || '';

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.withCredentials = false;

    if (withCredentials){
        xhr.withCredentials = true;
    }

    if (dataType == 'form') {
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      var obj = data;
      data = '';
      for (var prop in obj) {
        if (data !== '') {
          data += '&';
        }
        data += prop + '=' + encodeURIComponent(obj[prop]);
      }
    } else if (dataType == 'json') {
      xhr.setRequestHeader('Content-type', 'application/json');
      data = JSON.stringify(data);
    } else if (dataType == 'xml') {
      xhr.setRequestHeader('Content-type', 'text/xml');
    }

    xhr.onload = function () {
      var validResponse = xhr.status === 200 || xhr.status === 204
      if (validResponse && dataType === "xml") {
        resolve(xhr.responseXML ? xhr.responseXML.documentElement : null);
        return;
      }
      else if (validResponse) {
        resolve(xhr.responseText);
        return;
      }
      else {
        reject(Error(xhr.status));
      }
    };

    xhr.onerror = function () {
      reject(Error("An error occurred during HTTP request"));
    };

    xhr.send(data);
  });
}

export class HttpService {
  constructor() {

  }

  get(url, data, outputType, withCredentials) {
    return makeRequest("GET", url, data, outputType, withCredentials);
  }

  post(url, data, type, withCredentials) {
    return makeRequest("POST", url, data, type, withCredentials);
  }
}

export let httpService = new HttpService();

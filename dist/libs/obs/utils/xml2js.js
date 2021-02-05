'use strict';
function Xml2Json() {
    var json2Str = function (jsonObj) {
        var rejsn = JSON.stringify(jsonObj, undefined, 2)
            .replace(/(\\t|\\r|\\n)/g, '')
            .replace(/"",[\n\t\r\s]+""[,]*/g, '')
            .replace(/(\n[\t\s\r]*\n)/g, '')
            .replace(/[\s\t]{2,}""[,]{0,1}/g, '')
            .replace(/"[\s\t]{1,}"[,]{0,1}/g, '');
        return rejsn.indexOf('"parsererror": {') === -1
            ? rejsn
            : 'Invalid XML format';
    };
    var setJsonObj = function (xmlDoc) {
        var jsonObj = {};
        if (xmlDoc.nodeType === 1) {
            if (xmlDoc.attributes.length > 0) {
                jsonObj['@attributes'] = {};
                for (var j = 0; j < xmlDoc.attributes.length; j++) {
                    var attribute = xmlDoc.attributes.item(j);
                    jsonObj['@attributes'][attribute.nodeName] = attribute.value;
                }
            }
        }
        else if (xmlDoc.nodeType === 3) {
            jsonObj = xmlDoc.nodeValue;
        }
        if (xmlDoc.hasChildNodes()) {
            for (var i = 0; i < xmlDoc.childNodes.length; i++) {
                var item = xmlDoc.childNodes.item(i);
                var nodeName = item.nodeName;
                if (jsonObj[nodeName] === undefined) {
                    jsonObj[nodeName] = setJsonObj(item);
                }
                else {
                    if (jsonObj[nodeName].push === undefined) {
                        var old = jsonObj[nodeName];
                        jsonObj[nodeName] = [];
                        jsonObj[nodeName].push(old);
                    }
                    jsonObj[nodeName].push(setJsonObj(item));
                }
            }
        }
        return jsonObj;
    };
    var self = this;
    self.parseString = function (xml, rstr) {
        var xmlDoc;
        if (window.DOMParser) {
            xmlDoc = new window.DOMParser().parseFromString(xml, 'text/xml');
        }
        else {
            xmlDoc = new window.ActiveXObject('Microsoft.XMLDOM');
            xmlDoc.async = 'false';
        }
        var ret = json2Str(setJsonObj(xmlDoc));
        return rstr === undefined ? JSON.parse(ret) : ret;
    };
}
module.exports = new Xml2Json();

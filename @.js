!(function () {
    window.atJs = function (conf) {
        if (!conf.baseUrl) {
            throw "@js : You should define a -baseUrl- .";
        }
        if (typeof conf.text == undefined || typeof conf.tagName == undefined) {
            throw "@Js : You forgot to define a -text- or -tagName-";
        }
        if (conf.tagName && conf.text) {
            throw "@Js: You can't have a -text- and -tagName- together , you should make use of one of them.";
        }
        if (conf.text && conf.changeDom) {
            throw "@Js : you can't have -text- and -changeDom- together , -changeDom- is only allowed with tagName";
        }
        var tagName = document.querySelector(conf.tagName);
        var tagContent = tagName.innerText;
        var atRegex = /@[^\s]+(?=\s)/g;
        var getAllMatches = tagContent.match(atRegex);

        for (var i = 0; i < getAllMatches.length; i++) {
            var regy = new RegExp(getAllMatches[i], "g");
            var userName = getAllMatches[i].substr(1 , getAllMatches[i].length);
            tagContent = tagContent.replace(regy, "<a href=" + conf.baseUrl + userName+ ">" + getAllMatches[i] + "</a>");
        }
        if (conf.changeDom) {
            tagName.innerHTML = tagContent;
        } else {
            return tagContent;
        }
    }
})()
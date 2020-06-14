let html

function updateCamsMenu(cams) {
    html = '';
    console.log(cams["id"]);
    console.log(cams["rtsp"]);
    parseIssues(cams.children);
    document.getElementById('a').innerHTML = html;
}

function parseIssues(issues) {
    console.log(issues);
    html += "<ul>";
    for (var i = 0; i < issues.length; i++) {
        var issue = issues[i],
            input = createCheck(issue); // Creates the html for the checkbox
        html += "<li style='margin:5px;'>" + input;
        if (typeof issue.children !== "undefined" && issue.children.length > 0) {
            parseIssues(issue.children); // Calls a function which does similar to this for with the children.
        }
        html += "</li>";
    }
    html += "</ul>";
    return html;
}


function createCheck(issue) {
    if (issue.children) return "<span>" + issue.code + "</span>";


    return "<span><input class='cbx' style='display:none;' type='checkbox' id='" + issue.id + "' value='" + issue.id + "' onclick='handleSelectedCam(this);'/>" +
        "<label class='toggle' for='" + issue.id + "'>  " +
        "<span> </span>" + "</label>" + "<span>" + issue.code + "</span> </span>";
}

exports.updateCamsMenu = updateCamsMenu
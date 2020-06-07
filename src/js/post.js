
var postCount = 1;

class PostItem {

    constructor(contributor, text) {
        this.contributor = contributor;
        this.text = text;
    }

    create() {

    }
}

window.onload = function() {
    $(document).ready(function() {
        $('p').css('color', 'blue');
    });
}

function onClick() {

    var contributor = $("#contributor_input").val();
    var text = $("#contributor_textarea").val();

    $('#test p').text(text);

    // $(document).ready(function() {
    //     $('p').css('color', 'blue');
    // });
}
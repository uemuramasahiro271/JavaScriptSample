
var postCount = 1;

class PostItemCreator {

    constructor(contributor, text) {
        this.contributor = contributor;
        this.text = text;
    }

    create() {
        // var id = `content_${postCount}`;
        // var date = new Date();
        // $("#contents_area").append(`<article id="${id}"></article>`);
        // $(`#${id}`).append(`<div class="item"></div>`);
        // $(`#${id} div`).append(`<p>投稿者：${this.contributor}</p>`);
        // $(`#${id} div`).append(`内容：\n${this.text}`);
        // $(`#${id}`).append(`<div class="border"></div>`);

        var id = `content_${postCount}`;
        var date = new Date();
        var contributor = this.contributor;
        var text = this.text;
        $("#contents_area").append(`<article id="${id}"></article>`);
        $(`#${id}`).load("./parts/postItem.html", function() {
            $(`#${id} .contributor`).text(`投稿者：${contributor}`);
            $(`#${id} .date`).text(date.toLocaleString("ja"));
            $(`#${id} .text`).text(`内容：\n${text}`);
        });

        //$(`#contributor_aa`).text("aa");
    }
}

// window.onload = function() {
//     $(document).ready(function() {
//         $('p').css('color', 'blue');
//     });
// }

function onClick() {

    var contributor = $("#contributor_input").val();
    var text = $("#contributor_textarea").val();

    var creator = new PostItemCreator(contributor, text);
    creator.create();

    $("#contributor_input").val("");
    $("#contributor_textarea").val("");
    postCount++;

    // $('#test p').text(text);

    // $(document).ready(function() {
    //     $('p').css('color', 'blue');
    // });
}
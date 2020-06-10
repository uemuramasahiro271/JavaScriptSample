
var postCount = 1;

class PostItemCreator {

    constructor(contributor, text) {
        this.contributor = contributor;
        this.text = text;
    }

    create() {
        var count = `${postCount}`;
        var id = `content_${postCount}`;
        var date = new Date();
        var contributor = this.contributor;
        var text = this.text;
        $("#contents_area").append(`<article id="${id}"></article>`);
        $(`#${id}`).load("./parts/postItem.html", function() {
            // 各IDを設定
            $('#v_post_no').attr('id', `post_no${count}`);
            $('#v_date').attr('id', `data${count}`);
            $('#v_contributor').attr('id', `contributor${count}`);
            $('#v_text').attr('id', `text${count}`);
            $('#v_edit_btn').attr('id', `edit_btn${count}`);
            $('#v_delete_btn').attr('id', `delete_btn${count}`);

            // 投稿内容設定
            $(`#post_no${count}`).text(`No：${count}`);
            $(`#data${count}`).text(date.toLocaleString("ja"));
            $(`#contributor${count}`).text(`${contributor}`);
            $(`#text${count}`).text(`${text}`);
        });
    }
}

// window.onload = function() {
//     $(document).ready(function() {
//         $('p').css('color', 'blue');
//     });
// }

function post() {

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

function postEdit(id) {
    
}

function postDelete(id) {
    $(`#${id}`).parents('.item_container').remove();
}
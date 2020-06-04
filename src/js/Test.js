
window.onload = function() {
    var p = document.createElement('p');
    p.textContent = "window.onload";
    document.body.appendChild(p);

    setInterval(function() {
        var dd = new Date();
        document.getElementById("clock").innerHTML = dd.toLocaleString();
    }, 1000);
}

function test() {
    var div = document.getElementById('root');
    div.innerHTML += '<p>test</p>';
}
const url = "https://api.github.com/repos/jspoar/jspoar.github.io/contents/";
async function foo() {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)
    for(var i = 0; i<data.length; i++) {
        var a = data[i]['name']
            console.log(a)
            if (data[i]['type'] == 'dir') {
                var s = '<a href="https://jspoar.github.io/' + a +'" target="_blank"><li class="list-group-item">' + a + '</li></a>'
                document.getElementById("cont").innerHTML += s
            }
    }
}

foo();


    // console.log(data)
    // console.log(data.length)
    // for(var i = 0; i<data.length; i++) {
    //     console.log(data[i])
    // }
    // 

// const Http = new XMLHttpRequest();
// const url = "https://api.github.com/repos/jspoar/jspoar.github.io/contents/";
// Http.open("GET", url);
// Http.send();
// console.log(">>")
// Http.onreadystatechange = (e) => {
//     console.log(">>>")
//     // places = JSON.parse(Http.responseText);
//     // initMap();
//     const jsonStr = Http.responseText
//     var obj = JSON.parse(jsonStr)
//     for(var i = 0; i< obj.length; i++) {
//         console.log(obj[i].name)
//     }
//     console.log("<<")
// }

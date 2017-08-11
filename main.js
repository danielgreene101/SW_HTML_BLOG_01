/////////SET UP SWITCH ON PAGE////////
$('#entry').click(function (){
    console.log('button pressed');
    $('.addBlogEntry').css("display", "flex");
    $('.blogListView').css("display", "none");
    
});

$('#list').click(function (){
    console.log('button pressed');
    $('.addBlogEntry').css("display", "none");
    $('.blogListView').css("display", "flex");
    
});


/////////ADD NEW ENTRY SET UP///////
$('#add').click(function (){
    console.log('button pressed');
    var newEntry = $('.blogListView');
    var listItems = document.createElement('li')
    listItems.innerHTML += `<h1>` + $('#title').val() + `</h1>` + `<br>` + `<h3>` + $('#author').val()+ " " + $('#date').val() + `</h3>` + `<br>` + `<p>` + $('#content').val() + `</p>` +'<br>' + `<p>` + $('#keywords').val() + `</p>` + `<button class ="delete">Delete</button>`;
    newEntry.append(listItems);
    var del = document.getElementsByClassName('delete');
    for (var i = 0; i < del.length; i++){
    console.log("added event listeners");
    del[i].addEventListener('click', delt);
};

});

/////////LOAD IN JSON///////////
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status ==200){
        var printPoint = $('.blogListView')
        var result = JSON.parse(xhttp.responseText).posts;
        for (var i = 0; i < result.length; i++){
        var placeToGo = document.createElement('li');
            var title = document.createElement('h2');
            title.innerHTML = result[i].title;
            placeToGo.append(title);
            
            var author = document.createElement('h3');
            author.innerHTML = result[i].author + ': ' + result[i].date;
            placeToGo.append(author);
            
            var content = document.createElement('p');
            content.innerHTML = result[i].content;
            placeToGo.append(content);
            
            var keyW = document.createElement('p');
            keyW.innerHTML = result[i].keywords;
            placeToGo.append(keyW);
            
            var del = document.createElement('button');
            del.setAttribute("class", "delete");
            del.innerHTML = "Delete";
            placeToGo.append(del);
            
            printPoint.append(placeToGo);
            
            var del = document.getElementsByClassName('delete');
            for (var i = 0; i < del.length; i++){
                console.log("added event listeners");
                del[i].addEventListener('click', delt);
            };

    
        }
    }
}

xhttp.open("GET", "blogPost.json", true);
xhttp.send();


//////DELETE BUTTON EVENT///////
function delt(event){
    var toBeDelt = document.getElementById('helpDel');
    console.log('into function');
    toBeDelt.removeChild(event.target.parentNode);
};






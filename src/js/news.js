var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31', false);

xhr.send();
if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
} else {
    // xhr

    var event = JSON.parse(xhr.responseText);
    // console.log(event.articles[1].title)
    getListNews()
}
function getListNews() {
    var event = JSON.parse(xhr.responseText);
    for(var i=0; 1<event.articles.length; i++){
        var itemNews = event.articles[i];
        var name = itemNews.title;
        var description = itemNews.description;
        var link = itemNews.url;
        var srcImages = itemNews.urlToImage ;
        createItemNew(name,description,srcImages,link)
    }
}
function createItemNew(name,description,srcImages,link){
var description = '<div class="program-item">\n' +
    '                        <div class="program-images"><img src="'+srcImages+'" alt=""></div>\n' +
    '                        <div class="program-description-wrapper">\n' +
    '                            <div class="program-item-title">'+name+'</div>\n' +
    '                            <div class="program-item-description">'+description+'</div>\n' +
    '                            <a target="_blank" href="'+link+'" class="program-item-qualification">read mode</a>\n' +
    '                        </div>\n' +
    '                    </div>'

    var news = document.getElementById('news');//create new element
    var newNote = document.createElement('div');//create new element
    newNote.className += "section-col"; //add class for this(new) element
    newNote.innerHTML = description; //add value for this(new) element
    news.appendChild(newNote); //add new element after all elements in wrapper
}
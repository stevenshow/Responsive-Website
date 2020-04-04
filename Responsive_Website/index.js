function changePage(page) {
    let home = document.getElementById('home-page');
    let pictures = document.getElementById('pictures-page');
    let videos = document.getElementById('videos-page');

    home.style.display = 'none';
    pictures.style.display = 'none';
    videos.style.display = 'none';

    switch(page) {
        case 'home': 
            home.style.display = 'grid';
            break;
        case 'pictures':
            pictures.style.display = 'flex';
            break;
        case 'videos':
            videos.style.display = 'flex';
            break;
    }
}

const defaultColor = '#2f0e64';
const highlightColor ='white';
const highlightText = 'black';
var buttonFlag = true;

const new_defaultColor = '#2a85417a';
const new_highlightColor = 'black';
const new_highlightText = 'white';

function changeNavItemColor(page) {
    let home = document.getElementById('home-nav');
    let pictures = document.getElementById('pictures-nav');
    let videos = document.getElementById('videos-nav');

    if(buttonFlag == true){
    home.style.backgroundColor = defaultColor;
    pictures.style.backgroundColor = defaultColor;
    videos.style.backgroundColor = defaultColor;
    home.style.color = highlightColor;
    pictures.style.color = highlightColor;
    videos.style.color = highlightColor;

    switch(page) {
        case 'home': 
            home.style.backgroundColor = highlightColor;
            home.style.color = highlightText;
            break;
        case 'pictures':
            pictures.style.backgroundColor = highlightColor;
            pictures.style.color = highlightText;
            break;
        case 'videos':
            videos.style.backgroundColor = highlightColor;
            videos.style.color = highlightText;
            break;
        }
    }
    else {
    home.style.backgroundColor = new_defaultColor;
    pictures.style.backgroundColor = new_defaultColor;
    videos.style.backgroundColor = new_defaultColor;
    home.style.color = new_highlightColor;
    pictures.style.color = new_highlightColor;
    videos.style.color = new_highlightColor;

    switch(page) {
        case 'home': 
            home.style.backgroundColor = new_highlightColor;
            home.style.color = new_highlightText;
            break;
        case 'pictures':
            pictures.style.backgroundColor = new_highlightColor;
            pictures.style.color = new_highlightText;
            break;
        case 'videos':
            videos.style.backgroundColor = new_highlightColor;
            videos.style.color = new_highlightText;
            break;
        }
    }
}


function swapStyle(sheet){
    if(buttonFlag == true){
        document.getElementById("pagestyle").setAttribute('href', sheet);
        buttonFlag = false;
        changeNavItemColor();
    }
    else{
        document.getElementById("pagestyle").setAttribute('href', 'CSS/Styles.css');
        buttonFlag = true;
        changeNavItemColor();
    }
}
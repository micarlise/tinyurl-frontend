
function newEntry(key, url) {
    const entry = document.createElement('div');
    const key_div = document.createElement('div');
    const url_div = document.createElement('div');
    
    entry.className = "entry";
    key_div.className = "key";
    url_div.className = "url";

    url_div.innerText = url;
    key_div.innerText = key;

    entry.appendChild(key_div);
    entry.appendChild(url_div);

    return entry;
}

/*
let items = {
    'k3829k3k': 'https://www.google.com',
    'li9382kl': 'https://www.yahoo.com',
    'dk2849dl': 'https://www.bing.com',
    'aei38fga': 'https://www.mozilla.com'
};
*/

const tinyurls = document.querySelector('.tinyurls');
const server = 'http://localhost:3000/'

fetch(server)
.then((response) => {
    items = response.json();
    return items;
})
.then((items) => {

    for (const key in items) {
        tinyurls.appendChild(newEntry(key, items[key]));
    }
});
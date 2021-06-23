function searchHandler(event) {

if (event.keyCode == 13) {
    const search = document.getElementById('itemSearchBar').value;

    document.location.replace('/search?terms=' + encodeURIComponent(search))
}}

document.getElementById('itemSearchBar').addEventListener('keydown', searchHandler)
function userSearchHandler(event) {

    if (event.keyCode == 13) {
        const search = document.getElementById('userSearchBar').value;
    
        document.location.replace('/search/' + encodeURIComponent(search))
    }}

    document.getElementById('userSearchBar').addEventListener('keydown', userSearchHandler)
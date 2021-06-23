const deleteButtons = document.querySelectorAll('.deleteBtn')

async function deleteItemHandler(event) {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    const type = event.target.getAttribute('data-type')

    const response = await fetch(`/api/${type}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/inventory');
    } else {
        alert(response.statusText);
    }
}

for(each of deleteButtons) {
    each.addEventListener('click', deleteItemHandler);
}

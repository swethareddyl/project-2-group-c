const contactButtons = document.querySelectorAll('.contactBtn')

async function contactItemHandler(event) {
    event.preventDefault();
    
    const id = event.target.getAttribute('data-id')
    const type = event.target.getAttribute('data-type')
    const email = event.target.getAttribute('email')
    const username = event.target.getAttribute('username')

    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
            id,
            type,
            email,
            username
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        window.alert('Message sent successfully.')
    } else {
        alert(response.statusText);
    }
}

for(each of contactButtons) {
    each.addEventListener('click', contactItemHandler)
}
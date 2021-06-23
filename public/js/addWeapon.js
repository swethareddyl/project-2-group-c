async function weaponFormHandler(event) {
    event.preventDefault();

    const mainEffect = document.getElementById('main-effect').value;
    const majorEffect = document.getElementById('major-effect').value;
    const minorEffect = document.getElementById('minor-effect').value;
    const itemType = document.getElementById('weapon-type').value;
    const capsValue = document.getElementById('caps-value').value;

    const response = await fetch('/api/weapons', {
        method: 'POST',
        body: JSON.stringify({
            mainEffect,
            majorEffect,
            minorEffect,
            itemType,
            capsValue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    };
};

document.querySelector('.new-weapon-form').addEventListener('submit', weaponFormHandler);

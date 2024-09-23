let userType = null; // To track user type (buyer/seller)

function book(item) {
    alert(`Booking confirmed for: ${item}`);
}

function openEventPage(title) {
    // Set the title and image for the event page
    document.getElementById('event-title').innerText = title;
    document.getElementById('event-image').src = "https://via.placeholder.com/150"; // Placeholder image
    document.getElementById('event-page').style.display = 'block';
}

function closeEventPage() {
    document.getElementById('event-page').style.display = 'none';
}

function bookEvent() {
    alert(`Booking confirmed for: ${document.getElementById('event-title').innerText}`);
}

document.getElementById('login-btn').onclick = function() {
    showModal('Login');
};

document.getElementById('signup-btn').onclick = function() {
    showModal('Sign Up');
};

document.getElementById('close-modal').onclick = function() {
    closeModal();
};

document.getElementById('auth-form').onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    userType = document.getElementById('user-type').value;

    // Simple authentication logic (for demonstration purposes)
    if (username && password) {
        alert(`Welcome ${username}! You are logged in as a ${userType}.`);
        closeModal();

        // If the user is a seller, show the listing section
        if (userType === 'seller') {
            document.getElementById('listing').style.display = 'block';
        }
    } else {
        alert('Please fill in all fields.');
    }
};

function showModal(title) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('auth-form').reset();
}

function listEvent() {
    const eventTitle = document.getElementById('event-title').value;
    const eventType = document.getElementById('event-type').value;

    if (eventTitle) {
        const listedEvents = document.getElementById('listed-events');
        const eventDiv = document.createElement('div');
        eventDiv.innerText = `${eventType.charAt(0).toUpperCase() + eventType.slice(1)}: ${eventTitle}`;
        listedEvents.appendChild(eventDiv);
        document.getElementById('event-title').value = ''; // Clear input
    } else {
        alert('Please enter an event title.');
    }
}

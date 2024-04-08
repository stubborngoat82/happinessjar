document.getElementById('save-affirmation').addEventListener('click', function() {
    const affirmation = document.getElementById('affirmation-input').value;
    if (affirmation) {
        // Get existing affirmations or initialize empty array
        const affirmations = JSON.parse(localStorage.getItem('affirmations')) || [];
        affirmations.push(affirmation); // Add new affirmation
        localStorage.setItem('affirmations', JSON.stringify(affirmations)); // Save back to storage
        document.getElementById('affirmation-input').value = ''; // Clear input field
    }
});

document.getElementById('show-affirmation').addEventListener('click', function() {
    const affirmations = JSON.parse(localStorage.getItem('affirmations'));
    if (affirmations && affirmations.length) {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        const randomAffirmation = affirmations[randomIndex];
        document.getElementById('affirmation-display').textContent = randomAffirmation;
    } else {
        document.getElementById('affirmation-display').textContent = 'No affirmations saved yet.';
    }
});

document.addEventListener('keydown', function (event) {
    displayKeyAndCode(event);
});

function displayKeyAndCode(event) {
    const keyDisplay = document.getElementById('keyboardDisplay');
    
    // Display the pressed key and its keycode
    const keyInfo = `${event.key} (KeyCode: ${event.keyCode})`;
    keyDisplay.textContent = keyInfo;
}

document.getElementById('click').addEventListener('click', function () {
    const buttons = Array.from(document.querySelectorAll('#btn button'));
    const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
    randomButton.click();
});

document.querySelectorAll('#btn button').forEach(button => {
    button.addEventListener('click', function () {
        const buttonId = this.id; // Get the ID of the clicked button
        if (buttonId == 'button1') {
            alert('You won a personal tour around Barcelona with your mentor!');
        } else if (buttonId == 'button2') {
            alert('Your Mentor will pick you up at the Airport!');
        } else if (buttonId == 'button3') {
            alert('You won a welcome dinner with mentors and other students!');
        } else if (buttonId == 'button4') {
            alert('You get assistance with looking for accommodation!');
        } else if (buttonId == 'button5') {
            alert('You won a movie and game night with the mentors!');
        }
    });
});
document.getElementById('click').addEventListener('click', function () {
    const buttons = string.from(document.getElementById('button'));
});
if (buttonId == click) {
    alert(' Your suggestion has been successfully sent.')
}


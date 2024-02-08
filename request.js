document.getElementById('btn').addEventListener('click', function() {
    const hobbies = [];
    const programs = [];
    const gender = [];
    const personality = [];

    if (document.getElementById('hobby1').checked) {
        hobbies.push(document.getElementById('hobby1').value);
    }
    if (document.getElementById('hobby2').checked) {
        hobbies.push(document.getElementById('hobby2').value);
    }
    if (document.getElementById('hobby3').checked) {
        hobbies.push(document.getElementById('hobby3').value);
    }
    if (document.getElementById('hobby4').checked) {
        hobbies.push(document.getElementById('hobby4').value);
    }
    if (document.getElementById('hobby5').checked) {
        hobbies.push(document.getElementById('hobby5').value);
    }
    if (document.getElementById('hobby6').checked) {
        hobbies.push(document.getElementById('others').value);
    }

    if (document.getElementById('program1').checked) {
        programs.push(document.getElementById('program1').value);
    }
    if (document.getElementById('program2').checked) {
        programs.push(document.getElementById('program2').value);
    }
    if (document.getElementById('program3').checked) {
        programs.push(document.getElementById('program3').value);
    }
    if (document.getElementById('program4').checked) {
        programs.push(document.getElementById('program4').value);
    }
    if (document.getElementById('program5').checked) {
        programs.push(document.getElementById('program5').value);
    }
    if (document.getElementById('program6').checked) {
        programs.push(document.getElementById('program6').value);
    }

    if (document.getElementById('gender1').checked) {
        gender.push(document.getElementById('gender1').value);
    }
    if (document.getElementById('gender2').checked) {
        gender.push(document.getElementById('gender2').value);
    }
    if (document.getElementById('gender3').checked) {
        gender.push(document.getElementById('gender3').value);
    }

    if (document.getElementById('personality1').checked) {
        personality.push(document.getElementById('personality1').value);
    }
    if (document.getElementById('personality2').checked) {
        personality.push(document.getElementById('personality2').value);
    }
    if (document.getElementById('personality3').checked) {
        personality.push(document.getElementById('personality3').value);
    }

    const result = `Hobbies: ${hobbies.join(', ')}<br>
                    Programs: ${programs.join(', ')}<br>
                    Gender: ${gender.join(', ')}<br>
                    Personality: ${personality.join(', ')}`;

   alert('You have been successfully requested a mentor. You can return to the homepage')
});
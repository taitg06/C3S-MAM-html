document.getElementById('submit').addEventListener('click', function() {
    var username = "";
    var fname = "";
    var femail = "";
    var bday = "";
    var nati = "";
    var pass = "";

    if (document.getElementById('user-name').checked) {
        username = document.getElementById('user-name').value;
    }
    if (document.getElementById('fname').checked) {
        fname = document.getElementById('fname').value;
    }
    if (document.getElementById('f-email').checked) {
        femail = document.getElementById('f-email').value;
    }
    if (document.getElementById('bday').checked) {
        bday = document.getElementById('bday').value;
    }
    if (document.getElementById('nati').checked) {
        nati = document.getElementById('nati').value;
    }
    if (document.getElementById('pass').checked) {
        pass = document.getElementById('pass').value;
    }

    var result = `username: ${username}<br>
                     fname: ${fname}<br>
                    femail: ${femail}<br>
                      bday: ${bday}<br>
                      nati: ${nati}<br>
                      pass: ${pass}`;
                    
   alert('You have been successfully been registered. You can return to the homepage');
});
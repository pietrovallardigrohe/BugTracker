function submit() {

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    validate

}

function validate() {

    const empty;

}

const getPasswordHash = password => sjcl.encrypt('password', password)
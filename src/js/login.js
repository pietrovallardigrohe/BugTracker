function submit() {

    let username = document.getElementById('username').value
    let password = sjcl.encrypt("password", document.getElementById('password').value)

}
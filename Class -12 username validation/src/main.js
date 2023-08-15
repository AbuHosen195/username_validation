const userName = document.getElementById("username");
const msg = document.querySelector(".msg");




userName.onkeyup = (e) => {
    const value = e.target.value;

    if (value.length > 0 && value.length <= 5) {
        msg.innerHTML = `<span style = "color:red" ><i class = "fa fa-warning"></i> user name at least 5 characters</span>`
        
    } else if (value.length > 5 && value.length <= 10) {
        msg.innerHTML = `<span style = "color:green" ><i class = "fa fa-check"></i> user name is stable</span>`
    } else if (value.length > 10) {
        msg.innerHTML = `<span style = "color:red" ><i class = "fa fa-warning"></i> user name must not be more then Ten characters</span>`
    }

};
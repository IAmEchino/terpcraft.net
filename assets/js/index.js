//Cookies

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None; Secure";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// Switch Button
function switchButton() {
    if (getCookie("type") === "vanilla") {
        setCookie("type", "modded", 1)
    } else if (getCookie("type") === "modded") {
        setCookie("type", "vanilla", 1)
    } else if (getCookie("type") === null) {
        setCookie("type", "vanilla", 1)
    }
    document.cookie = "test2=World; SameSite=None; Secure";
}


function setHash (value) {
    window.location.hash = value;
}

function getHash () {
    return window.location.hash.slice(1);
}




function showTab(name) {
    let tab = document.getElementsByClassName('project-content-tab');
    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
        tab[i].ariaSelected = "false";
    }
    document.getElementById(name).style.display = "block";
    document.getElementById(name).ariaSelected = "true";
}
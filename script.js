

function showProject(ev) {
    let projectTabs = ev.target.dataset.project;
    let contentTabs = ev.target.dataset.content;
    let targetId = ev.target.dataset.target;
    showHeaderTab(projectTabs, ev);
    showContentTab(contentTabs, targetId);

}

function showHeaderTab(projectTabs, ev) {
    let tab = document.getElementsByClassName(projectTabs);
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
        tab[i].ariaSelected = "false";
    }
    ev.target.parentElement.classList.add("active");
    ev.target.parentElement.ariaSelected = "true";
}

function showContentTab(contentTabs, targetId) {
    let tab = document.getElementsByClassName(contentTabs);
    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
        tab[i].ariaSelected = "false";
    }
    document.getElementById(targetId).style.display = "flex";
    document.getElementById(targetId).ariaSelected = "true";
}

function scrollToTarget(targetId, ev) {
    ev.preventDefault();
    let target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth" })
    window.addEventListener("scrollend", () => {
        requestAnimationFrame(() => {
            bounceWholePage();
        });
    }, { once: true });
}

function bounceWholePage() {
    let main = document.querySelector("main");
    main.classList.add("bounce-page");
    setTimeout(() => {
        main.classList.remove("bounce-page");
    }, 600);
}
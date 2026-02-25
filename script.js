

function showProject(ev) {
    let projectTabs = ev.target.dataset.project;
    let contentTabs = ev.target.dataset.content;
    let targetId = ev.target.dataset.target;
    toggleClassActive(ev, projectTabs);
    showContentTab(contentTabs, targetId);
}

function setActiveAndScrollToTarget(ev, navTabs, targetId) {
    ev.preventDefault();
    toggleClassActive(ev, navTabs);
    scrollToTarget(ev, targetId);
}

function toggleClassActive(ev, tabs) {
    let tab = document.getElementsByClassName(tabs);
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
        tab[i].setAttribute("aria-selected", "false");
    }
    let targetElement = ev.currentTarget;
    if (targetElement.dataset.project){
        targetElement.parentElement.classList.add("active");
        targetElement.parentElement.setAttribute("aria-selected", "true");
    } else {
        targetElement.classList.add("active");
        targetElement.setAttribute("aria-selected", "true");
    }
}

function showContentTab(contentTabs, targetId) {
    let tab = document.getElementsByClassName(contentTabs);
    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
        tab[i].setAttribute("aria-selected", "false");
    }
    document.getElementById(targetId).style.display = "flex";
    document.getElementById(targetId).setAttribute("aria-selected", "true");
}

function scrollToTarget(ev, targetId) {
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
    }, 300);
}

let animationMeLocation = [
    '<img src="./assets/img/me_located_1.png" alt="icon showing a located needle">',
    '<span class="color-lightblue">I&nbsp;</span>',
    '<span class="color-lightblue">a</span>',
    '<span class="color-lightblue">m&nbsp;</span>',
    '<span>l</span>',
    '<span>o</span>',
    '<span>c</span>',
    '<span>a</span>',
    '<span>t</span>',
    '<span>e</span>',
    '<span>d</span>',
    '<span>&nbsp;</span>',
    '<span>i</span>',
    '<span>n&nbsp;</span>',
    '<span>M</span>',
    '<span>u</span>',
    '<span>n</span>',
    '<span>i</span>',
    '<span>c</span>',
    '<span>h&nbsp;</span>',
    '<span class="color-lightblue">.</span>',
    '<span class="color-lightblue">.</span>',
    '<span class="color-lightblue">.</span>'
];
let animationMeHybrid = [
    '<img src="./assets/img/me_remote.png" alt="icon PC indicating remote work">',
    '<span class="color-lightblue">I&nbsp;</span>',
    '<span class="color-lightblue">a</span>',
    '<span class="color-lightblue">m&nbsp;</span>',
    '<span>o</span>',
    '<span>p</span>',
    '<span>e</span>',
    '<span>n&nbsp;</span>',
    '<span>t</span>',
    '<span>o&nbsp;</span>',
    '<span>w</span>',
    '<span>o</span>',
    '<span>r</span>',
    '<span>k&nbsp;</span>',
    '<span>h</span>',
    '<span>y</span>',
    '<span>b</span>',
    '<span>r</span>',
    '<span>i</span>',
    '<span>d&nbsp;</span>',
    '<span class="color-lightblue">.</span>',
    '<span class="color-lightblue">.</span>',
    '<span class="color-lightblue">.</span>'
];
let animationBlinkingCursor = [
    '<span class="color-lightblue">&#124;</span>'
];
let meInteractive = document.getElementById('meInteractive');
let isVisible_meInteractive = false;
let isRunningAnimation = false;
let flipCard = document.getElementById('flipCard');
let burgerMenu = document.querySelector('.burger-menu');
let observerMeInteractive = new IntersectionObserver((entries) => {
    entries.forEach(async entry => {
        if (entry.isIntersecting) {
            isVisible_meInteractive = true;
            if (!isRunningAnimation) {
                isRunningAnimation = true;
                await runAnimationSequence();
                isRunningAnimation = false;
            }
        } else {
            isVisible_meInteractive = false;
        }
    });
});

observerMeInteractive.observe(meInteractive);
function showProject(ev) {
    let projectTabs = ev.target.dataset.project;
    let contentTabs = ev.target.dataset.content;
    let targetId = ev.target.dataset.target;
    toggleClassActive(ev, projectTabs);
    showContentTab(contentTabs, targetId);
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && flipCard.classList.contains('show')) {
        burgerMenu.classList.toggle("change");
        flipCard.classList.remove('show');
    }
});

function setActiveAndScrollToTarget(ev, navTabs, targetId) {
    ev.preventDefault();
    toggleClassActive(ev, navTabs);
    scrollToTarget(ev, targetId);
}

function toggleClassActive(ev, tabs) {
    let tab = document.getElementsByClassName(tabs);
    let targetElement = ev.currentTarget;
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
        // (targetElement.tagName !== "BUTTON") && tab[i].setAttribute("aria-selected", "false");
    }
    if (targetElement.dataset.project) {
        targetElement.parentElement.classList.add("active");
        // targetElement.parentElement.setAttribute("aria-selected", "true");
    } else {
        targetElement.classList.add("active");
        // (targetElement.tagName !== "BUTTON") && targetElement.setAttribute("aria-selected", "true");
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
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.addEventListener("scrollend", () => {
        requestAnimationFrame(() => {
            bounceWholePage();
        });
    }, { once: true });
    target.focus();
}

function bounceWholePage() {
    let main = document.querySelector("main");
    main.classList.add("bounce-page");
    setTimeout(() => {
        main.classList.remove("bounce-page");
    }, 300);
}

async function runAnimationSequence() {
    try {
        while (isVisible_meInteractive) {
            await writeAnimation(animationMeLocation);
            if (!isVisible_meInteractive) return;
            await blinkingCursor(animationMeLocation, animationBlinkingCursor);
            if (!isVisible_meInteractive) return;
            await eraseAnimation(animationMeLocation);
            if (!isVisible_meInteractive) return;
            await writeAnimation(animationMeHybrid);
            if (!isVisible_meInteractive) return;
            await blinkingCursor(animationMeHybrid, animationBlinkingCursor);
            if (!isVisible_meInteractive) return;
            await eraseAnimation(animationMeHybrid);
        }
    } catch (err) {
        console.error('current error: ', err);
    }
}

function writeAnimation(arr) {
    return new Promise((resolve) => {
        let index = 0;
        let writingInterval = setInterval(() => {
            if (checkIfVisibleAndStop(writingInterval, resolve)) return;
            meInteractive.innerHTML = arr.slice(0, index + 1).join('');
            index++;
            if (index >= arr.length) {
                clearInterval(writingInterval);
                resolve();
            }
        }, 125);
    });
}

function blinkingCursor(arrMain, arrBlink, times = 3) {
    return new Promise((resolve) => {
        let showCursor = true;
        let counter = 0;
        let blinkingInterval = setInterval(() => {
            if (checkIfVisibleAndStop(blinkingInterval, resolve)) return;
            meInteractive.innerHTML = '';
            meInteractive.innerHTML = showCursor ? (arrMain.join('') + arrBlink.join('')) : arrMain.join('');
            showCursor = !showCursor;
            counter++;
            stopBlinkingIfComplete(counter, times, blinkingInterval, resolve);
        }, 400);
    });
}

function stopBlinkingIfComplete(counter, times, blinkingInterval, resolve) {
    if (counter >= times * 2) {
        clearInterval(blinkingInterval);
        resolve();
    }
}

function eraseAnimation(arr) {
    return new Promise((resolve) => {
        let index = arr.length;
        let blup = setInterval(() => {
            if (checkIfVisibleAndStop(blup, resolve)) return;
            meInteractive.innerHTML = arr.slice(0, index).join('');
            index--;
            if (index < 1) {
                clearInterval(blup);
                resolve();
            }
        }, 40);
    });
}

function checkIfVisibleAndStop(intervalId, resolve) {
    if (!isVisible_meInteractive) {
        clearInterval(intervalId);
        resolve();
        return true;
    }
    return false;
}

function toggleMobileMenu(id) {
    let burgerMenu = document.getElementById(id);
    burgerMenu.classList.toggle("change");
    burgerMenu.setAttribute("aria-expanded", burgerMenu.classList.contains("change") ? "true" : "false");
    flipCard.classList.toggle('show');
    if (burgerMenu.classList.contains("change")) {
        setMenuTabbable(true);
        document.getElementById('mobileNavLinkOne').focus();
    } else {
        setMenuTabbable(false);
        burgerMenu.focus();
    }
}

function setMenuTabbable(isTabbable) {
    const menuLinks = document.querySelectorAll('#mobileNavMenu a, #mobileNavMenu button');
    menuLinks.forEach(link => {
        link.tabIndex = isTabbable ? 0 : -1;
    });
}

function handleKeydownEnterSpace(ev, thisElem) {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        const action = thisElem.getAttribute('data-action');
        if (action) {
            eval(action);
        }
    }
    if (ev.key === 'Escape' && thisElem.classList.contains("nav-links")) {
        toggleMobileMenu('burgerMenu');
    }
}

// function SETLANGUAGE() {}
// mind: aria-selected="" setzen
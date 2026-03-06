
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
/** Validates name format (with Unicode support) */
const isNameValid = val => /^[A-Z\-a-zÄÖÜäöüß\p{M}]{3,30}( [A-Z\-a-zÄÖÜäöüß\p{M}]{3,30})?$/u.test(val);
/** Validates email address format with length constraints */
const isEmailValid = val => /^(?=[a-zA-Z0-9@._%+-]{3,30}$)(?=[a-zA-Z0-9._%+-]{3,30}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(?!\.)[a-zA-Z]{2,3}(\.(?!\.)(?:uk|jp|in|au|at))?$/.test(val);
/** Validates checkbox is checked */
const isCheckboxValid = () => document.getElementById('chb-policy').checked;
/** Validates text field input with constraints */
const isTextFieldValid = val => val.length >= 12 && val.length <= 250 && !/<[^>]+>|[<>"'\/]|\\u00(?:3[cC]|3[eE]|3[dD]|2[fF]|2[2]|2[7])|\\x3[cC]|\\x3[eE]|\\x3[dD]|\\x2[fF]|\\x22|\\x27|&lt;|&gt;|&quot;|&apos;|&#0*60;|&#0*62;|&#0*34;|&#0*39;|&#0*47;|&#x0*3[cC];|&#x0*3[eE];|&#x0*3[dD];|&#x0*2[fF];|&#x0*22;|&#x0*27;|(style|script|onerror|onclick|javascript:)/i.test(val);
let bool = [0, 0, 0, 0]

/**
 * Validates an input field using a provided validation function
 * @param {string} inputId - The ID of the input element
 * @param {string} errMsgId - The ID of the error message element
 * @param {Function} validateFn - The validation function to use
 * @param {number} boolIndex - The index in the bool array to update
 * @param {string} errMsg - The error message to display
 * @param {boolean} shouldCheckAll - Whether to check all validations after this one
 * @returns {number} The validation result (0 or 1)
 */
function validateField(inputId, errMsgId, validateFn, boolIndex, errMsg, shouldCheckAll = true) {
    let input = document.getElementById(inputId);
    let errMsgElem = document.getElementById(errMsgId);
    if (validateFn(input.value.trim())) {
        actionsWhenValidationIsTrue_validateField(errMsgElem, boolIndex, input, inputId);
    } else {
        actionWhenValidationIsFalse_validateField(errMsgElem, errMsg, boolIndex, input, inputId);
    }
    if (shouldCheckAll) { checkAllValidations_validateField() };
    return bool[boolIndex];
}

function actionsWhenValidationIsTrue_validateField(errMsgElem, boolIndex, input, inputId) {
    errMsgElem.innerText = '';
    bool[boolIndex] = 1;
    input.classList.remove('errorBorder');
    let label = document.querySelector('label[for="chb-policy"]');
    inputId === 'chb-policy' && label.classList.remove('invalid');
}

function actionWhenValidationIsFalse_validateField(errMsgElem, errMsg, boolIndex, input, inputId) {
    errMsgElem.innerText = errMsg;
    bool[boolIndex] = 0;
    input.classList.add('errorBorder');
    let label = document.querySelector('label[for="chb-policy"]');
    inputId === 'chb-policy' && label.classList.add('invalid');
}

/**
 * Checks all validations and enables/disables the form send button
 */
function checkAllValidations_validateField() {
    let signUpBtn = document.getElementById('form-btn-send');
    let allBoolEqualOne = bool.every(el => el === 1);
    if (allBoolEqualOne) {
        signUpBtn.disabled = false;
        signUpBtn.setAttribute('aria-disabled', 'false');
    } else {
        signUpBtn.disabled = true;
        signUpBtn.setAttribute('aria-disabled', 'true');
    }
}

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
    }
    if (targetElement.dataset.project) {
        targetElement.parentElement.classList.add("active");
    } else {
        targetElement.classList.add("active");
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
            bounceWholePage(target);
        });
    }, { once: true });
}

function bounceWholePage(target) {
    let main = document.querySelector("main");
    main.classList.add("bounce-page");
    setTimeout(() => {
        main.classList.remove("bounce-page");
        target.focus();
        target.blur();
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

function sendForm() {
    if (bool.every(el => el === 1)) {
    console.log('Testing SEND FORM, sendForm()');
    document.getElementById('text').value = '';
    document.getElementById('email').value = '';
    document.getElementById('textarea').value = '';
    document.getElementById('checkbox').checked = false;
    } else {
        console.log('Form is not valid, cannot send.');
    }
}

// function SETLANGUAGE() {}
// mind: aria-selected="" setzen
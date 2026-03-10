let flipCard = document.getElementById('flipCard');
let burgerMenu = document.querySelector('.burger-menu');
let isEnglish = false;
let tranlations= {
    
}

/** Validates name format (with Unicode support) */
const isNameValid = val => /^[A-Z\-a-zÄÖÜäöüß\p{M}]{3,30}( [A-Z\-a-zÄÖÜäöüß\p{M}]{3,30})?$/u.test(val);
/** Validates email address format with length constraints */
const isEmailValid = val => /^(?=[a-zA-Z0-9@._%+-]{3,30}$)(?=[a-zA-Z0-9._%+-]{3,30}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(?!\.)[a-zA-Z]{2,3}(\.(?!\.)(?:uk|jp|in|au|at))?$/.test(val);
/** Validates checkbox is checked */
const isCheckboxValid = () => document.getElementById('chb-policy').checked;
/** Validates text field input with constraints */
const isTextFieldValid = val => val.length >= 12 && val.length <= 250 && !/<[^>]+>|[<>"'\/]|\\u00(?:3[cC]|3[eE]|3[dD]|2[fF]|2[2]|2[7])|\\x3[cC]|\\x3[eE]|\\x3[dD]|\\x2[fF]|\\x22|\\x27|&lt;|&gt;|&quot;|&apos;|&#0*60;|&#0*62;|&#0*34;|&#0*39;|&#0*47;|&#x0*3[cC];|&#x0*3[eE];|&#x0*3[dD];|&#x0*2[fF];|&#x0*22;|&#x0*27;|(style|script|onerror|onclick|javascript:)/i.test(val);
let bool = [0, 0, 0, 0]

function init() {
    getFromLocalStorageIsEnglish();
    setDocumentLanguage();
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
        (targetElement.id === 'selectMobileDE' || targetElement.id === 'selectDE') ? isEnglish = false : isEnglish = true;
        (targetElement.id === 'selectMobileEN' || targetElement.id === 'selectEN') ? isEnglish = true : isEnglish = false;
        setToLocalStorageIsEnglish();
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
    let sendFormBtn = document.getElementById('form-btn-send');
    let allBoolEqualOne = bool.every(el => el === 1);
    if (allBoolEqualOne) {
        sendFormBtn.disabled = false;
        sendFormBtn.setAttribute('aria-disabled', 'false');
    } else {
        sendFormBtn.disabled = true;
        sendFormBtn.setAttribute('aria-disabled', 'true');
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



/**
 * Set language settings to local storage.
 */
function setToLocalStorageIsEnglish() {
    localStorage.setItem('isEnglish', JSON.stringify(isEnglish));
}

/**
 * Load language settings from local storage.
 */
function getFromLocalStorageIsEnglish() {
    let isEnglishLocalStorage = JSON.parse(localStorage.getItem('isEnglish'));
    isEnglishLocalStorage && (isEnglish = isEnglishLocalStorage);
}

function setDocumentLanguage() {
    if (isEnglish) {
        document.documentElement.lang = 'en';
    } else {
        document.documentElement.lang = 'de';
    }
}

// function SETLANGUAGE() {}
// mind: bei DE/EN aria-selected="" setzen

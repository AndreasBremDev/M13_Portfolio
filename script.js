
/**
 * Reference to the flip card element for mobile menu animation.
 * @type {HTMLElement|null}
 */
const flipCard = document.getElementById('flipCard');

/**
 * Reference to the burger menu element for mobile navigation.
 * @type {HTMLElement|null}
 */
const burgerMenu = document.querySelector('.burger-menu');

/**
 * Validates name format (with Unicode support)
 * @param {string} val - The name value to validate
 * @returns {boolean}
 */
const isNameValid = val => /^[A-Z\-a-zÄÖÜäöüß\p{M}]{3,30}( [A-Z\-a-zÄÖÜäöüß\p{M}]{3,30})?$/u.test(val);

/**
 * Validates email address format with length constraints
 * @param {string} val - The email value to validate
 * @returns {boolean}
 */
const isEmailValid = val => /^(?=[a-zA-Z0-9@._%+-]{3,30}$)(?=[a-zA-Z0-9._%+-]{3,30}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(?!\.)[a-zA-Z]{2,3}(\.(?!\.)(?:uk|jp|in|au|at))?$/.test(val);

/**
 * Validates if the policy checkbox is checked
 * @returns {boolean}
 */
const isCheckboxValid = () => document.getElementById('chb-policy').checked;

/**
 * Validates text field input with constraints (length, no HTML/script)
 * @param {string} val - The text value to validate
 * @returns {boolean}
 */
const isTextFieldValid = val => val.length >= 12 && val.length <= 250 && !/<[^>]+>|[<>"'\/]|\\u00(?:3[cC]|3[eE]|3[dD]|2[fF]|2[2]|2[7])|\\x3[cC]|\\x3[eE]|\\x3[dD]|\\x2[fF]|\\x22|\\x27|&lt;|&gt;|&quot;|&apos;|&#0*60;|&#0*62;|&#0*34;|&#0*39;|&#0*47;|&#x0*3[cC];|&#x0*3[eE];|&#x0*3[dD];|&#x0*2[fF];|&#x0*22;|&#x0*27;|(style|script|onerror|onclick|javascript:)/i.test(val);

/**
 * Array to track validation state for form fields.
 * @type {number[]}
 */
let bool = [0, 0, 0, 0]

/**
 * Initializes language settings and applies translation on page load.
 */
function init() {
    getFromLocalStorageIsEnglish();
    isEnglish ? setLanguage(true) : setLanguage(false);
}

/**
 * Handles project tab switching and content display.
 * @param {Event} ev - The click event
 */
function showProject(ev) {
    let projectTabs = ev.target.dataset.project;
    let contentTabs = ev.target.dataset.content;
    let targetId = ev.target.dataset.target;
    toggleClassActive(ev, projectTabs);
    showContentTab(contentTabs, targetId);
}

/**
 * Handles responsive menu and card state on window resize.
 */
window.addEventListener('resize', () => {
    if (!window.location.pathname.includes('legal')) {
        if (window.innerWidth > 960 && flipCard.classList.contains('show')) {
            burgerMenu.classList.toggle("change");
            flipCard.classList.remove('show');
        }
    }
});

/**
 * Sets active navigation tab and scrolls smoothly to the target section.
 * @param {Event} ev - The event object
 * @param {string} navTabs - The class name of navigation tabs
 * @param {string} targetId - The id of the target element
 */
function setActiveAndScrollToTarget(ev, navTabs, targetId) {
    ev.preventDefault();
    toggleClassActive(ev, navTabs);
    scrollToTarget(ev, targetId);
}

/**
 * Toggles the 'active' class for navigation or tab elements.
 * @param {Event|HTMLElement} eventOrDOMElem - The event or DOM element
 * @param {string} tabs - The class name of tab elements
 */
function toggleClassActive(eventOrDOMElem, tabs) {
    let tab = document.getElementsByClassName(tabs);
    let targetElement = eventOrDOMElem.currentTarget ? eventOrDOMElem.currentTarget : eventOrDOMElem;
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    }
    if (targetElement.dataset && targetElement.dataset.project) {
        targetElement.parentElement.classList.add("active");
    } else {
        targetElement.classList.add("active");
    }
}

/**
 * Shows the selected content tab and hides others.
 * @param {string} contentTabs - The class name of content tab elements
 * @param {string} targetId - The id of the target element to show
 */
function showContentTab(contentTabs, targetId) {
    let tab = document.getElementsByClassName(contentTabs);
    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
        tab[i].setAttribute("aria-selected", "false");
    }
    document.getElementById(targetId).style.display = "flex";
    document.getElementById(targetId).setAttribute("aria-selected", "true");
}

/**
 * Smoothly scrolls to the target element and triggers bounce animation.
 * @param {Event} ev - The event object
 * @param {string} targetId - The id of the target element
 */
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

/**
 * Adds a bounce animation to the main element and briefly focuses/blurs the target.
 * @param {HTMLElement} target - The target element
 */
function bounceWholePage(target) {
    let main = document.querySelector("main");
    main.classList.add("bounce-page");
    setTimeout(() => {
        main.classList.remove("bounce-page");
        target.focus();
        target.blur();
    }, 300);
}

/**
 * Toggles the mobile menu open/close state and accessibility attributes.
 * @param {string} id - The id of the burger menu element
 */
function toggleMobileMenu(id) {
    let burgerMenu = document.getElementById(id);
    burgerMenu.classList.toggle("change");
    burgerMenu.setAttribute("aria-expanded", burgerMenu.classList.contains("change") ? "true" : "false");
    flipCard.classList.toggle('show');
    if (burgerMenu.classList.contains("change")) {
        setMenuTabbable(true);
        document.getElementById('mobileNavLinkMe').focus();
    } else {
        setMenuTabbable(false);
        burgerMenu.focus();
    }
}

/**
 * Sets the tabIndex for all mobile menu links/buttons for accessibility.
 * @param {boolean} isTabbable - Whether the menu links should be tabbable
 */
function setMenuTabbable(isTabbable) {
    const menuLinks = document.querySelectorAll('#mobileNavMenu a, #mobileNavMenu button');
    menuLinks.forEach(link => {
        link.tabIndex = isTabbable ? 0 : -1;
    });
}

/**
 * Handles keyboard navigation for Enter/Space/Escape on interactive elements.
 * @param {KeyboardEvent} ev - The keyboard event
 * @param {HTMLElement} thisElem - The element receiving the event
 */
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
function validateField(inputId, errMsgId, validateFn, boolIndex, shouldCheckAll = true) {
    let input = document.getElementById(inputId);
    let errMsg = input.getAttribute('data-errMsg');
    let errMsgElem = document.getElementById(errMsgId);
    if (validateFn(input.value.trim())) {
        actionsWhenValidationIsTrue_validateField(errMsgElem, boolIndex, input, inputId);
    } else {
        actionWhenValidationIsFalse_validateField(errMsgElem, errMsg, boolIndex, input, inputId);
    }
    if (shouldCheckAll) { checkAllValidations_validateField() };
    return bool[boolIndex];
}

/**
 * Handles UI and state updates when a field is valid.
 * @param {HTMLElement} errMsgElem - The error message element
 * @param {number} boolIndex - The index in the bool array to update
 * @param {HTMLElement} input - The input element
 * @param {string} inputId - The ID of the input element
 */
function actionsWhenValidationIsTrue_validateField(errMsgElem, boolIndex, input, inputId) {
    errMsgElem.innerText = '';
    bool[boolIndex] = 1;
    input.classList.remove('errorBorder');
    let label = document.querySelector('label[for="chb-policy"]');
    inputId === 'chb-policy' && label.classList.remove('invalid');
}

/**
 * Handles UI and state updates when a field is invalid.
 * @param {HTMLElement} errMsgElem - The error message element
 * @param {string} errMsg - The error message to display
 * @param {number} boolIndex - The index in the bool array to update
 * @param {HTMLElement} input - The input element
 * @param {string} inputId - The ID of the input element
 */
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

/**
 * Handles form submission: resets fields if valid, logs otherwise.
 */
function sendForm() {
    // if (bool.every(el => el === 1)) {
        let jsonFormData = createJsonObject();
        postJsonData(jsonFormData)
    // } else {
    //     console.log('Form is not valid, cannot send.');
    // }
}

function createJsonObject() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('textarea').value.trim();
    let data = { 
        name: name, 
        email: email, 
        message: message };
    const jsonFormData = JSON.stringify(data);
    return jsonFormData;
}

function postJsonData(jsonFormData) {
    fetch('mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonFormData
    })
    .then(response => response.text())
    .then(text => {
        let result;
        try {
            result = JSON.parse(text);
        } catch (e) {
            throw new Error('Server returned no valid JSON: ' + text);
        }
        if (result.success) {
            clearForm_sendForm();
            alert('Nachricht erfolgreich gesendet!');
        } else {
            alert('Fehler beim Senden: ' + (result.error || 'Unbekannter Fehler'));
        }
    })
    .catch(error => {
        alert('Netzwerkfehler: ' + error);
    });
}

/**
 * Clears form fields and resets checkbox state after successful form submission.
 */
function clearForm_sendForm() {
    document.getElementById('text').value = '';
    document.getElementById('email').value = '';
    document.getElementById('textarea').value = '';
    document.getElementById('checkbox').checked = false;
}
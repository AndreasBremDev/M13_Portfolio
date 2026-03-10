const flipCard = document.getElementById('flipCard');
const burgerMenu = document.querySelector('.burger-menu');
const whyMe = { 'en': "Why me", 'de': "Warum ich" };
const skills = { 'en': "Skills", 'de': "Fähigkeiten" };
const projects = { 'en': "Projects", 'de': "Projekte" };
const contact = { 'en': "Contact", 'de': "Kontakt" };
const letsTalk = { 'en': "Let's talk", 'de': "Lass uns reden" };
const projectHeader = { 'en': "About the project", 'de': "Über das Projekt" };
const projectProcess = { 'en': "Work process", 'de': "Arbeitsprozess" };
const projectDuration = { 'en': "Duration", 'de': "Projektdauer" };
const projectTechnologies = { 'en': "Technologies", 'de': "Technologien" };

let tranlations = {
    "mobileNavLinkMe": whyMe,
    "mobileNavLinkSkills": skills,
    "mobileNavLinkProjects": projects,
    "mobileNavLinkContact": contact,
    "navLinkMe": whyMe,
    "navLinkSkills": skills,
    "navLinkProjects": projects,
    "navLinkContact": contact,
    "sectionMeH2": whyMe,
    "sectionMeText": {
        'en': "When the opportunity to learn frontend development arose, I seized it immediately. I am highly motivated and eager to take the next step toward becoming a backend developer. Once I commit to a goal, I am determined to see it through. To me, development is a lifelong journey of learning, and I am excited to continue on this path.",
        'de': "Als sich das erste Mal die Gelegenheit bot, Frontend-Entwicklung zu lernen, ergriff ich diese Chance sofort. Ich bin hoch motiviert und freue mich darauf, den nächsten Schritt mit Backend-Entwicklung ebenso zu gehen. Immer, wenn ich mir ein Ziel setze, ziehe ich dies auch durch. Das Leben bedeutet stetige Entwicklung, und für soll zukünftig das Entwickeln und Coden auch mit dazu gehören."
    },
    "sectionMeBtn": letsTalk,
    "mobileSectionSkillsBtn": letsTalk,
    "sectionSkillsH2": { 'en': "My Skills", 'de': "Meine Fähigkeiten" },
    "sectionSkillsH3": {
        'en': "I am currently learning",
        'de': "Was ich gerade lerne"
    },
    "sectionSkillsText": {
        'en': "The journey just goes on and on. I'm keen to constantly gain knowledge. Development is driven by new challenges; overcoming them is what builds new skills.",
        'de': "Lernen ist ein kontinuierlicher Prozess. Ich nöchte mein Wissen stets erweitern. Weiterentwicklung bedeutet neue Herausforderungen und mit der Bewältigung dieser folgen neue Kompetenzen."
    },
    "sectionProjectH2": { 'en': "My Projects", 'de': "Meine Projekte" },
    "tab-project-1": { 'en': "1. Project", 'de': "1. Projekt" },
    "tab-project-2": { 'en': "2. Project", 'de': "2. Projekt" },
    "tab-project-3": { 'en': "3. Project", 'de': "3. Projekt" },
    "projectHeader1": projectHeader,
    "projectDescr1": {
        'en': "Join is a TASK MANAGEMENT business app, inspired by Kanban, and implemented as a Team project. You can create and organize tasks using drag and drop functions, assign users and categories. Furthermore edit the task-card and add subtasks as well.",
        'de': "Join ist eine, durch Kanban inspirierte, Business-App zur Task Verwaltung. Als Teamprojekt umgesetzt, können Sie Aufgaben und Unteraufgaben erstellen, Benutzer und Kategorien zuweisen und die Karten per Drag-and-Drop umsortieren. Ändern der Tasks ist ebenso möglich."
    },
    "projectProcess1": projectProcess,
    "projectProcessDescr1": {
        'en': "Within the three member team we assigned epics to each individual. Then handled via git-branching each user storys, features and tasks. Once a user story was completed, we always merged as team, thus no code was deleted by mistake. This way development process was clean and team collaboration easy.",
        'de': "Mit drei Team Mitgliedern haben wir jedem die großen Epics zugewiesen. Anschließend haben wir die einzelnen User Stories, Features und Tasks mithilfe von Git-Branching abgearbeitet. Sobald eine User Story abgeschlossen war, haben wir sie immer als Team 'gemerged', sodass kein Code versehentlich gelöscht wurde. So war der Entwicklungsprozess sauber und die Teamzusammenarbeit unkompliziert."
    },
    "projectExperience1": {
        'en': "My group work experience",
        'de': "Gruppenarbeit Erfahrungen"
    },
    "projectExperienceDescr1": {
        'en': "I really enjoyed collaboration and cooperation within the team. We installed daily calls, in order to keep track of progress and whole process. I sometimes helped out my colleagues, as well as we tested together in the end of the project.",
        'de': "Mir hat die Zusammenarbeit im Team sehr gefallen. Wir haben tägliche calls gemacht, um den Fortschritt und den gesamten Prozess im Auge zu behalten. Ich habe meinen Kollegen, wenn nötig, Hilfe angeboten. Und am Ende des Projekts haben wir gemeinsam getestet."
    },
    "projectDuration1": projectDuration,
    "projectDurationDescr1": { 'en': "1.5 Months", 'de': "1,5 Monate" },
    "projectTechnologies1": projectTechnologies,
    "mobileProjectTechnologies1": { 'en': "Technologies: JavaScript, HTML, CSS", 'de': "Technologien: JavaScript, HTML, CSS" },
    "mobileProjectDuration1": { 'en': "Duration: 1.5 Months", 'de': "Projektdauer: 1,5 Monate" },
    "projectHeader2": projectHeader,
    "projectDescr2": {
        'en': "El Pollo Loco is a 2D JUMP'n'RUN game, based on objectoriented programming. Help Pepe to fight through the level, throwing bottles of hot salsa sauce and defeat the endboss.",
        'de': "El Pollo Loco ist ein 2D JUMP'n'RUN Spiel, basierend auf objektorientierter Programmierung. Hilf Pepe, sich durch das Level zu kämpfen, indem du Flaschen mit scharfer Salsa Sauce wirfst und den Endboss besiegst."
    },
    "projectProcess2": projectProcess,
    "projectProcessDescr2": {
        'en': "While having the project split into various user stories, OOP helped me keeping methods tied up to relevent classes, in order to make use of all OOP principles: encapsulation, abstraction, inheritance and polymorphism.",
        'de': "Ich habe das Projekts in verschiedene User Stories aufgeteilt. Objektorientierte Programmierung hat mir geholfen, passende Methoden mit entsprechenden Klassen zu verknüpfen oder anzupassen. So konnte ich alle OOP Prinzipien anwenden: Kapselung, Abstraktion, Vererbung und Polymorphismus."
    },
    "projectExperience2": { 'en': "My lessons learned", 'de': "Meine Erkenntnisse" },
    "projectExperienceDescr2": {
        'en': "Designing and implementing classes and methods significantly improved my development skills. This approach allowed me to write more modular, flexible, and reusable code.",
        'de': "Das Designen und Implementieren von Klassen und Methoden hat meine Entwickler-Fähigkeiten deutlich verbessert. Dieser Ansatz ermöglichte es mir, noch modulareren, flexibleren und wiederverwendbareren Code zu schreiben."
    },
    "projectDuration2": projectDuration,
    "projectDurationDescr2": { 'en': "1 Month", 'de': "1 Monat" },
    "projectTechnologies2": projectTechnologies,
    "mobileProjectTechnologies2": { 'en': "Technologies: JavaScript, OOP, Canvas", 'de': "Technologien: JavaScript, OOP, Canvas" },
    "mobileProjectDuration2": { 'en': "Duration: 1 month", 'de': "Projektdauer: 1 Monat" },
    "projectHeader3": { 'en': "About the projects", 'de': "Über die Projekte" },
    "projectDescr3": {
        'en': "My next projects will be showcases of Angular and Typescript in general.",
        'de': "Meine nächsten Projekte werden Beispiele für Angular und Typescript im Allgemeinen sein."
    },
    "projectHeader3SubHeader1": { 'en': "Memory Game", 'de': "Memory Spiel" },
    "projectHeader3SubDescr1": { 'en': "Advancing my frontend expertise through TypeScript and SCSS.", 'de': "Erweiterung meiner Kenntnisse um TypeScript und SCSS." },
    "projectHeader3SubHeader2": { 'en': "Poll App", 'de': "Umfrage App" },
    "projectHeader3SubDescr2": {
        'en': "Developing a real-time Poll App built with Angular and Supabase. The application enables users to create surveys and track live results as they happen.",
        'de': "Entwicklung einer Echtzeit-Umfrage-App mit Angular und Supabase. Die Anwendung ermöglicht es Benutzern, Umfragen zu erstellen und Live-Ergebnisse in Echtzeit zu verfolgen."
    },
    "projectHeader3SubHeader3": { 'en': "Goals", 'de': "Ziele" },
    "projectHeader3SubDescr3_1": {
        'en': "Continuous Learning: Dedicated to expanding my tech stack and deepening my architectural knowledge.",
        'de': "Kontinuierliches Lernen: Engagiert, meinen Tech-Stack zu erweitern und mein Architekturwissen zu vertiefen."
    },
    "projectHeader3SubDescr3_2": {
        'en': "Methodical Approach: Strong focus on planning and organization to deliver structured, high-quality code.",
        'de': "Methodischer Ansatz: Starke Fokussierung auf Planung und Organisation, um strukturierten, hochwertigen Code zu liefern."
    },
    "projectHeader3SubDescr3_3": {
        'en': "Growth Mindset: Embracing change and lifelong learning as core professional values.",
        'de': "Wachstumsorientierung: Veränderung und lebenslanges Lernen als zentrale berufliche Werte annehmen."
    },
    "projectTechnologies3": projectTechnologies,
    "mobileProjectTitle3": { 'en': "Upcoming", 'de': "Demnächst" },
    "mobileProjectTechnologies3": { 
        'en': "Technologies: Angular, TypeScript, JS", 
        'de': "Technologien: Angular, TypeScript, JS" 
    },
    "mobileProjectDuration3": { 'en': "Duration: 1-2 months", 'de': "Projektdauer: 1-2 Monate" },
    "projectImageDiv3": { 'en': "Coming soon", 'de': "Demnächst verfügbar" },
    "projectImageDiv3Aria": { 'en': "Image placeholder with text 'Coming soon'", 'de': "Platzhalterbild mit Text 'Demnächst verfügbar'" },
    "mobileReferenceH2": { 'en': "Need a teamplayer?", 'de': "Teamplayer gesucht?" },
    "mobileReferenceSubtext": { 
        'en': "Here is what my colleagues said about me",
        'de': "Das sagen meine Kollegen über mich"
    },
    "referenceHeader": { 'en': "Need a teamplayer? Here is what my colleagues said about me", 
        'de': "Teamplayer gesucht? Das sagen meine Kollegen über mich"
    }
    
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
    isEnglish ? setLanguage(true) : setLanguage(false);
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
        document.getElementById('mobileNavLinkMe').focus();
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
function setToLocalStorageIsEnglish(isEnglishValue) {
    localStorage.setItem('isEnglish', JSON.stringify(isEnglishValue));
}

/**
 * Load language settings from local storage.
 */
function getFromLocalStorageIsEnglish() {
    let isEnglishLocalStorage = JSON.parse(localStorage.getItem('isEnglish'));
    if (isEnglishLocalStorage !== null) {
        isEnglish = isEnglishLocalStorage
        return isEnglish;
    } else {
        return isEnglish = true;
    }
}

function setDocumentLanguage() {
    if (isEnglish) {
        document.documentElement.lang = 'en';
    } else {
        document.documentElement.lang = 'de';
    }
}

function translatePage(array) {
    for (let key in array) {
        let elem = document.getElementById(key.replace(/Aria$/, ''));
        if (!elem) continue;
        if (key.endsWith('Aria')) {
            elem.setAttribute('aria-label', isEnglish ? array[key].en : array[key].de);
        } else {
            elem.innerText = isEnglish ? array[key].en : array[key].de;
        }
    }
}

function setLanguage(isEnglishValue) {
    isEnglish = isEnglishValue;
    if (isEnglish) {
        toggleClassActive(document.getElementById('selectEN'), 'language-tab');
        toggleClassActive(document.getElementById('selectMobileEN'), 'language-mobile-tab');

    } else {
        toggleClassActive(document.getElementById('selectDE'), 'language-tab');
        toggleClassActive(document.getElementById('selectMobileDE'), 'language-mobile-tab');
    }
    translatePage(tranlations);
    setDocumentLanguage();
    setToLocalStorageIsEnglish(isEnglishValue);
}
// function SETLANGUAGE() {}

// mind: bei DE/EN aria-selected="" setzen


/**
 * Translation objects for static text in English and German.
 * @typedef {{ en: string, de: string }} TranslationObject
 */

/** @type {TranslationObject} */
const heroTopOfPage_Aria = { 'en': "Go to top of the page", 'de': "Zum Seitenanfang springen" };
const mobileHeroTopLinkLegal_Aria = { 'en': "go back to A.Brem developer main page", 'de': "Zurück zur Hauptseite von Entwickler A.Brem" };
const whyMe = { 'en': "Why me", 'de': "Warum ich" };
const whyMe_Aria = { 'en': "Learn more about me", 'de': "Erfahre mehr über mich" };
const skills = { 'en': "Skills", 'de': "Fähigkeiten" };
const skills_Aria = { 'en': "Go to skills section", 'de': "Gehe zum Abschnitt Fähigkeiten" };
const projects = { 'en': "Projects", 'de': "Projekte" };
const projects_Aria = { 'en': "Go to projects section", 'de': "Gehe zum Abschnitt Projekte" };
const contact = { 'en': "Contact", 'de': "Kontakt" };
const contact_Aria = { 'en': "Send me a message", 'de': "Schreib mir eine Nachricht" };
const switchToGerman = { 'en': "DE switches page to German language", 'de': "DE wechselt die Seite auf deutsche Sprache" };
const switchToEnglish = { 'en': "EN switches page to English language", 'de': "EN wechselt die Seite auf englische Sprache" };
const socialGit_Aria = { 'en': "Visit my GitHub profile", 'de': "Besuche mein GitHub Profil" };
const socialLinkedIn_Aria = { 'en': "Visit my LinkedIn profile", 'de': "Besuche mein LinkedIn Profil" };
const letsTalk = { 'en': "Let's talk", 'de': "Lass uns reden" };
const projectHeader = { 'en': "About the project", 'de': "Über das Projekt" };
const projectProcess = { 'en': "Work process", 'de': "Arbeitsprozess" };
const projectDuration = { 'en': "Duration", 'de': "Projektdauer" };
const projectTechnologies = { 'en': "Technologies", 'de': "Technologien" };
const referenceLink = { 'en': "LinkedIn Profile", 'de': "LinkedIn Profil" };
const referenceCodingSession = { 'en': "Coding sessions", 'de': "Programmier-Sessions" };

/**
 * Main translation mapping for all UI keys.
 * @type {Object.<string, TranslationObject|Object<string, string>>}
 */
let tranlations = {
    "mobileHeroTopSection_Aria": { 'en': "Mobile Header", 'de': "Mobiler Header" },
    "mobileHeroTopLink_Aria": heroTopOfPage_Aria,
    "mobileHeroTopLinkLegal_Aria": mobileHeroTopLinkLegal_Aria,
    "mobileHeroBtnBackLegal_Aria": mobileHeroTopLinkLegal_Aria,
    "heroTopLinkLegal_Aria": mobileHeroTopLinkLegal_Aria,
    "heroH2": { 'en': "FRONTEND DEVELOPER", 'de': "FRONTEND ENTWICKLER" },
    "burgerMenu_Aria": { 'en': "toggle mobile menu", 'de': "Mobiles Menü öffnen/schließen" },
    "mobileNavLinkMe": whyMe,
    "mobileNavLinkMe_Aria": whyMe_Aria,
    "mobileNavLinkSkills": skills,
    "mobileNavLinkSkills_Aria": skills_Aria,
    "mobileNavLinkProjects": projects,
    "mobileNavLinkProjects_Aria": projects_Aria,
    "mobileNavLinkContact": contact,
    "mobileNavLinkContact_Aria": contact_Aria,
    "mobileLanguage_Aria": { 'en': "Mobile menu for language selection", 'de': "Mobiles Menü für Sprachauswahl" },
    "selectMobileDE_Aria": switchToGerman,
    "selectMobileEN_Aria": switchToEnglish,
    "heroTopLink_Aria": heroTopOfPage_Aria,
    "navLinkMe": whyMe,
    "navLinkMe_Aria": whyMe_Aria,
    "navLinkMeLegal_Aria": { 'en': "Learn more about me on main page", 'de': "Erfahre mehr über mich auf der Hauptseite" },
    "navLinkSkills": skills,
    "navLinkSkills_Aria": skills_Aria,
    "navLinkSkillsLegal_Aria": { 'en': "Go to skills section on main page", 'de': "Gehe zum Abschnitt Fähigkeiten auf der Hauptseite" },
    "navLinkProjects": projects,
    "navLinkProjects_Aria": projects_Aria,
    "navLinkProjectsLegal_Aria": { 'en': "Go to projects section on main page", 'de': "Gehe zum Abschnitt Projekte auf der Hauptseite" },
    "navLinkContact": contact,
    "navLinkContact_Aria": contact_Aria,
    "navLinkContactLegal_Aria": { 'en': "Send me a message on main page", 'de': "Schreib mir eine Nachricht auf der Hauptseite" },
    "selectDE_Aria": switchToGerman,
    "selectEN_Aria": switchToEnglish,
    "sectionMeH2": whyMe,
    "heroBtn_Aria": whyMe_Aria,
    "heroSocialEmail_Aria": contact_Aria,
    "heroSocialGit_Aria": socialGit_Aria,
    "heroSocialLinkedIn_Aria": socialLinkedIn_Aria,
    "sectionMeText": {
        'en': "Are you looking to strengthen your team with a developer who combines solid frontend skills with a deep drive for backend logic? While I have successfully built responsive user interfaces, I am currently expanding my expertise into backend development to provide even more holistic, end-to-end solutions. I am eager to bring this dual perspective to a Junior Role where I can contribute immediately while growing into a versatile fullstack asset. Let’s connect and talk about how my dedication to continuous learning can add value to your next project!",
        'de': "Suchst Du Verstärkung für Dein Team durch einen Entwickler, der fundierte Frontend-Kenntnisse mit einer Leidenschaft für Backend-Logik verbindet? Nachdem ich erfolgreich responsive Benutzeroberflächen realisiert habe, vertiefe ich derzeit meine Expertise im Backend, um ganzheitliche End-to-End-Lösungen anbieten zu können. Ich brenne darauf, diese duale Perspektive in eine Junior-Rolle einzubringen, in der ich sofort unterstützen und mich gleichzeitig zu einem vielseitigen Fullstack-Entwickler weiterentwickeln kann. Lass uns vernetzen und darüber sprechen, wie meine Lernbereitschaft Dein nächstes Projekt voranbringt!"
    },
    "sectionMeBtn": letsTalk,
    "sectionMeBtn_Aria": contact_Aria,
    "mobileSectionSkillsBtn": letsTalk,
    "mobileSectionSkillsBtn_Aria": contact_Aria,
    "sectionSkillsH2": { 'en': "My Skills", 'de': "Meine Fähigkeiten" },
    "sectionSkillsH3": {
        'en': "I am currently learning",
        'de': "Was ich gerade lerne"
    },
    "sectionSkillsText": {
        'en': "The journey never ends. I'm eager to continuously expand my knowledge. New challenges require new skills, so there will always be more to learn.",
        'de': "Lernen ist ein kontinuierlicher Prozess. Ich möchte mein Wissen stetig erweitern. Neue Herausforderungen bringen neue Kompetenzen mit sich."
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
    "projectImageDiv3_Aria": { 'en': "Image placeholder with text 'Coming soon'", 'de': "Platzhalterbild mit Text 'Demnächst verfügbar'" },
    "mobileReferenceH2": { 'en': "Need a team player?", 'de': "Teamplayer gesucht?" },
    "mobileReferenceSubtext": {
        'en': "Here's what my colleagues say about me",
        'de': "Das sagen meine Kollegen über mich"
    },
    "referenceHeader": {
        'en': "Need a teamplayer? Here's what my colleagues say about me",
        'de': "Teamplayer gesucht? Das sagen meine Kollegen über mich"
    },
    "reference1_1": { 'en': "Project", 'de': "Projekt" },
    "reference1_2": {
        'en': "Working with Andreas was an absolute enrichment to our group project. He proactively took responsibility and pitched in wherever help was needed and was fully committed to the team's success.",
        'de': "Die Zusammenarbeit mit Andreas war eine absolute Bereicherung für unser Gruppenprojekt. Er hat proaktiv Verantwortung übernommen, wo immer Hilfe benötigt wurde, und seine Ausrichtung war voll und ganz der Erfolg des Teams."
    },
    "reference1_3": referenceLink,
    "reference1_3_Aria": {
        'en': "link to linkedin profile of Emin Fatih Halici",
        'de': "Link zum LinkedIn Profil von Emin Fatih Halici"
    },
    "reference2_1": referenceCodingSession,
    "reference2_2": {
        'en': "While studying with Andreas, I was impressed by his desire to deeply understand things and how thoroughly he records his knowledge. Thanks to his deep expertise and friendly personality, he is a fantastic addition to any development team.",
        'de': "Beim gemeinsamen Lernen mit Andreas hat mich beeindruckt, wie tief er Dinge durchdringen möchte und wie akribisch er sein Wissen dokumentiert. Durch dieses tiefe Verständnis und seine sympathische Art ist er ein wertvoller Partner für jedes Team."
    },
    "reference2_3": referenceLink,
    "reference2_3_Aria": {
        'en': "link to linkedin profile of Simon Fuchs",
        'de': "Link zum LinkedIn Profil von Simon Fuchs"
    },
    "reference3_1": referenceCodingSession,
    "reference3_2": {
        'en': "I encountered him through conversations about our projects. I came to know him as a very pleasant and helpful colleague who remains calm even in challenging situations and brings clarity with his structured approach.",
        'de': "Durch den Austausch über unsere Projekte habe ich Andreas als äußerst angenehmen und hilfsbereiten Kollegen kennengelernt. Selbst in herausfordernden Situationen bewahrt er Ruhe und schafft durch seine strukturierte Arbeitsweise Klarheit."
    },
    "reference3_3": referenceLink,
    "reference3_3_Aria": {
        'en': "link to linkedin profile of Martin Bock",
        'de': "Link zum LinkedIn Profil von Martin Bock"
    },
    "contactHeader": { 'en': "Contact me", 'de': "Kontakt" },
    "mobileContactSubtext": {
        'en': "Let's work together",
        'de': "Lass uns zusammenarbeiten"
    },
    "contactText": {
        'en': "Ready for the next project? I look forward to hearing from you!",
        'de': "Bereit für das nächste gemeinsame Projekt? Ich freue mich auf Deine Nachricht!"
    },
    "contactPhone": { 'en': "Phone: +49 170 89 534 80", 'de': "Telefon: +49 170 89 534 80" },
    "contactFormName": { 'en': "Your Name", 'de': "Dein Name" },
    "name": { 'en': "Your Name", 'de': "Dein Name" },
    "contactFormEmail": { 'en': "Your Email", 'de': "Deine E-Mail" },
    "email": { 'en': "Your Email", 'de': "Deine E-Mail" },
    "contactFormMessage": { 'en': "Your Message", 'de': "Deine Nachricht" },
    "textarea": { 'en': "Your Message", 'de': "Deine Nachricht" },
    "chb-policy": { 'en': "Checkbox Input", 'de': "Checkbox Eingabe" },
    "contactFormPolicy1_1": { 'en': "I've read the", 'de': "Ich habe die" },
    "contactFormPolicy1_2": { 'en': "privacy policy", 'de': "rechtlichen Hinweise" },
    "contactFormPolicy1_3": { 'en': "and agree to the processing of my data as outlined.", 'de': "gelesen und bin mit der beschriebenen Verarbeitung meiner Daten einverstanden." },
    "contactFormBtn": { 'en': "Send", 'de': "Senden" },
    "contactFormBtn_Aria": { 'en': "send message", 'de': "Nachricht senden" },
    "contactBtnUp_Aria": heroTopOfPage_Aria,
    "footerPolicy": { 'en': "Legal notice", 'de': "Rechtliche Hinweise" },
    "footerPolicy_Aria": { 'en': "Link to legal notice", 'de': "Link zu den rechtlichen Hinweisen" },
    "footerTopSection_Aria": heroTopOfPage_Aria,
    "footerTopSectionLegal_Aria": mobileHeroTopLinkLegal_Aria,
    "footerSocialEmail_Aria": contact_Aria,
    "footerSocialEmailLegal_Aria": { 'en': "Send me a message on main page", 'de': "Schreib mir eine Nachricht auf der Hauptseite" },
    "footerSocialGit_Aria": socialGit_Aria,
    "footerSocialLinkedIn_Aria": socialLinkedIn_Aria
}

/**
 * Set language settings to local storage.
 * @param {boolean} isEnglishValue - Whether English is selected
 */
function setToLocalStorageIsEnglish(isEnglishValue) {
    localStorage.setItem('isEnglish', JSON.stringify(isEnglishValue));
}

/**
 * Load language settings from local storage.
 * @returns {boolean} The language setting (true for English, false for German)
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

/**
 * Sets the document's language attribute based on current language.
 */
function setDocumentLanguage() {
    if (isEnglish) {
        document.documentElement.lang = 'en';
    } else {
        document.documentElement.lang = 'de';
    }
}

/**
 * Translates all elements on the page based on the translation mapping.
 * @param {Object.<string, TranslationObject|Object<string, string>>} array - The translation mapping
 */
function translatePage(array) {
    for (let key in array) {
        let elem = document.getElementById(key.replace(/_Aria$/, ''));
        if (!elem) continue;
        if (key.endsWith('_Aria')) {
            elem.setAttribute('aria-label', isEnglish ? array[key].en : array[key].de);
        } else if (key === 'name' || key === 'email' || key === 'textarea' || key === 'chb-policy') {
            setPlaceholderAndErrorMessages(elem, array, key);
        } else {
            elem.innerText = isEnglish ? array[key].en : array[key].de;
        }
    }
}

/**
 * Sets placeholder and error messages for form fields.
 * @param {HTMLElement} elem - The input element
 * @param {Object} array - The translation mapping
 * @param {string} key - The translation key
 */
function setPlaceholderAndErrorMessages(elem, array, key) {
    elem.setAttribute('placeholder', isEnglish ? array[key].en : array[key].de);
    key === 'name' && elem.setAttribute('data-errMsg', isEnglish ? "name: at least 3 letters" : "Name: mindestens 3 Buchstaben");
    key === 'email' && elem.setAttribute('data-errMsg', isEnglish ? "email: invalid format" : "Email: ungültiges Format");
    key === 'textarea' && elem.setAttribute('data-errMsg', isEnglish ? "message: write me more" : "Nachricht: Schreib mir mehr");
    key === 'chb-policy' && elem.setAttribute('data-errMsg', isEnglish ? "policy: kindly accept" : "Richtlinien: Bitte akzeptieren");
}

/**
 * Sets the language for the page and updates UI accordingly.
 * @param {boolean} isEnglishValue - Whether English is selected
 */
function setLanguage(isEnglishValue) {
    isEnglish = isEnglishValue;
    isEnglish ? setEnglishLanguageTabActive_setLanguage() : setGermanLanguageTabActive_setLanguage();
    window.location.pathname.includes('legal') && renderLegalContent_setLanguage();
    translatePage(tranlations);
    setDocumentLanguage();
    setToLocalStorageIsEnglish(isEnglishValue);
}

/**
 * Activates the German language tab in the UI.
 */
function setGermanLanguageTabActive_setLanguage() {
    toggleClassActive(document.getElementById('selectDE'), 'language-tab');
    if (!document.getElementById('selectMobileDE')) { }
    else { toggleClassActive(document.getElementById('selectMobileDE'), 'language-mobile-tab'); }
}

/**
 * Activates the English language tab in the UI.
 */
function setEnglishLanguageTabActive_setLanguage() {
    toggleClassActive(document.getElementById('selectEN'), 'language-tab');
    if (!document.getElementById('selectMobileEN')) { }
    else { toggleClassActive(document.getElementById('selectMobileEN'), 'language-mobile-tab'); }
}

/**
 * Renders the legal content in the selected language.
 */
function renderLegalContent_setLanguage() {
    let legalContentDiv = document.getElementById('renderLegalContent');
    isEnglish ? legalContentDiv.innerHTML = renderLegalHtmlEN() : legalContentDiv.innerHTML = renderLegalHtmlDE();
}
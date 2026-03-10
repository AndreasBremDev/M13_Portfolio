let isEnglish;
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
let animationMeLocationDE = [
    '<img src="./assets/img/me_located_1.png" alt="icon showing a located needle">',
    '<span class="color-lightblue">I</span>',
    '<span class="color-lightblue">c</span>',
    '<span class="color-lightblue">h&nbsp;</span>',
    '<span class="color-lightblue">w</span>',
    '<span class="color-lightblue">o</span>',
    '<span class="color-lightblue">h</span>',
    '<span class="color-lightblue">n</span>',
    '<span class="color-lightblue">e&nbsp;</span>',
    '<span>i</span>',
    '<span>n&nbsp;</span>',
    '<span>M</span>',
    '<span>ü</span>',
    '<span>n</span>',
    '<span>c</span>',
    '<span>h</span>',
    '<span>e</span>',
    '<span>n&nbsp;</span>',
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
let animationMeHybridDE = [
    '<img src="./assets/img/me_remote.png" alt="icon PC indicating remote work">',
    '<span class="color-lightblue">I</span>',
    '<span class="color-lightblue">c</span>',
    '<span class="color-lightblue">h&nbsp;</span>',
    '<span class="color-lightblue">a</span>',
    '<span class="color-lightblue">r</span>',
    '<span class="color-lightblue">b</span>',
    '<span class="color-lightblue">e</span>',
    '<span class="color-lightblue">i</span>',
    '<span class="color-lightblue">t</span>',
    '<span class="color-lightblue">e&nbsp;</span>',
    '<span>g</span>',
    '<span>e</span>',
    '<span>r</span>',
    '<span>n</span>',
    '<span>e&nbsp;</span>',
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


async function runAnimationSequence() {
    try {
        while (isVisible_meInteractive) {
            isEnglish ? await writeAnimation(animationMeLocation) : await writeAnimation(animationMeLocationDE);
            if (!isVisible_meInteractive) return;
            isEnglish ? await blinkingCursor(animationMeLocation, animationBlinkingCursor) : await blinkingCursor(animationMeLocationDE, animationBlinkingCursor);
            if (!isVisible_meInteractive) return;
            isEnglish ? await eraseAnimation(animationMeLocation) : await eraseAnimation(animationMeLocationDE);
            if (!isVisible_meInteractive) return;
            isEnglish ? await writeAnimation(animationMeHybrid) : await writeAnimation(animationMeHybridDE);
            if (!isVisible_meInteractive) return;
            isEnglish ? await blinkingCursor(animationMeHybrid, animationBlinkingCursor) : await blinkingCursor(animationMeHybridDE, animationBlinkingCursor);
            if (!isVisible_meInteractive) return;
            isEnglish ? await eraseAnimation(animationMeHybrid) : await eraseAnimation(animationMeHybridDE);
        }
    } catch (err) {
        console.error('current error: ', err);
    }
}

function writeAnimation(arr) {
    return new Promise((resolve) => {
        let index = 0;
        isEnglish ? meInteractive.setAttribute("aria-label","I am located in Munich... and I am open to work hybrid...") : meInteractive.setAttribute("aria-label","Ich wohne in München... und ich arbeite gerne hybrid...");
        let writing = setInterval(() => {
            if (checkIfVisibleAndStop(writing, resolve)) return;
            meInteractive.innerHTML = arr.slice(0, index + 1).join('');
            index++;
            if (index >= arr.length) {
                clearInterval(writing);
                resolve();
            }
        }, 125);
    });
}

function blinkingCursor(arrMain, arrBlink, times = 3) {
    return new Promise((resolve) => {
        let showCursor = true;
        let counter = 0;
        let blinking = setInterval(() => {
            if (checkIfVisibleAndStop(blinking, resolve)) return;
            meInteractive.innerHTML = '';
            meInteractive.innerHTML = showCursor ? (arrMain.join('') + arrBlink.join('')) : arrMain.join('');
            showCursor = !showCursor;
            counter++;
            stopBlinkingIfComplete(counter, times, blinking, resolve);
        }, 400);
    });
}

function stopBlinkingIfComplete(counter, times, blinking, resolve) {
    if (counter >= times * 2) {
        clearInterval(blinking);
        resolve();
    }
}

function eraseAnimation(arr) {
    return new Promise((resolve) => {
        let index = arr.length;
        let erase = setInterval(() => {
            if (checkIfVisibleAndStop(erase, resolve)) return;
            meInteractive.innerHTML = arr.slice(0, index).join('');
            index--;
            if (index < 1) {
                clearInterval(erase);
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

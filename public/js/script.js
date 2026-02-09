const answers_no = {
    english: [
        "No", "Are you sure?", "Really sure??", "Think again?", 
        "Last chance!", "Surely not?", "You might regret this!", 
        "Give it another thought!", "Are you absolutely sure?", 
        "This could be a mistake!", "Have a heart!", "Don't be so cold!", 
        "Change of heart?", "Wouldn't you reconsider?", "Is that your final answer?", 
        "Ok, Let's just start over.."
    ],
    tamil: [
        "இல்லை", "உறுதியா?", "நிச்சயமா??", "மீண்டும் யோசி?",
        "கடைசி வாய்ப்பு!", "நிச்சயம் இல்லையா?", "வருத்தப்படலாம்!",
        "இன்னொரு முறை யோசி!", "முழுமையாக உறுதியா?",
        "இது தவறாக இருக்கலாம்!", "சிறிது மனசு வையேன்!", "இவ்வளவு குளிர்ச்சியா?",
        "மனசு மாறிட்டதா?", "மீண்டும் சிந்திக்க மாட்டியா?", "இதுதான் இறுதி பதிலா?",
        "சரி, மீண்டும் தொடங்கலாம்.."
    ]
};

const answers_yes = {
    english: "Yes",
    tamil: "ஆம்"
};

let language = "english";
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;

    // Growth logic
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];
    
    yes_button.style.height = `${size}px`;
    // yes_button.style.minWidth = `${size}px`;
    yes_button.style.maxWidth = `${100}%`;
    yes_button.style.width = 'auto';
    // yes_button.style.padding = `${(size/50) * 10}px ${(size/50) * 20}px`;
    yes_button.style.fontSize = `${(size/50) * 18}px`; // Scale font with button

    let total = answers_no[language].length;

    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.minWidth = "70px";
        yes_button.style.width = "auto";
        yes_button.style.padding = "10px 20px";
        yes_button.style.fontSize = "18px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();

    document.getElementsByClassName('buttons')[0].style.display = "none";
    document.getElementsByClassName('message')[0].style.display = "block";
    
    createHearts();
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage(lang) {
    language = lang;

    const questionHeading = document.getElementById("question-heading");
    const successMessage = document.getElementById("success-message");

    if (language === "tamil") {
        questionHeading.innerHTML = "திவ்யா, <br> நீ என் வாலண்டைன் ஆகிறாயா?";
        successMessage.textContent = "யேய்! விரைவில் சந்திப்போம் 🥰";
    } else {
        questionHeading.innerHTML = "Dhivya, <br> Will you be my valentine?";
        successMessage.textContent = "Hurray! See you soon 🥰";
    }

    yes_button.innerHTML = answers_yes[language];
    no_button.innerHTML = answers_no[language][0];
    i = 1; // Reset counter
}

function createHearts() {
    const container = document.getElementById('heart-container');
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}
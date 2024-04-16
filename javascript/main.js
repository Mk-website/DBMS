
let iframe = document.getElementById('iframe');
    function loadLinkInIframe(link) {
        iframe.src = link;
    }
   
            //let linkSelector = document.getElementById('linkSelector');
            //linkSelector.addEventListener('click', () => {
            //    let selectedLink = linkSelector.value;
            //    loadLinkInIframe(selectedLink);
//
            //});
    
            let linkSelecto = document.getElementById('linkSelecto');
            linkSelecto.addEventListener('click', () => {
                let selectedLink = linkSelecto.value;
                loadLinkInIframe(selectedLink);
            });
            let linkSelector2 = document.getElementById('linkSelector2');
    
            linkSelector2.addEventListener('click', () => {
                let selectedLink = linkSelector2.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector3 = document.getElementById('linkSelector3');
    
            linkSelector3.addEventListener('click', () => {
                let selectedLink = linkSelector3.value;
                loadLinkInIframe(selectedLink);
            });
    
           
            let linkSelector4 = document.getElementById('linkSelector4');
    
            linkSelector4.addEventListener('click', () => {
                let selectedLink = linkSelector4.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector5 = document.getElementById('linkSelector5');
    
            linkSelector5.addEventListener('click', () => {
                let selectedLink = linkSelector5.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector6 = document.getElementById('linkSelector6');
    
            linkSelector6.addEventListener('click', () => {
                let selectedLink = linkSelector6.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector7 = document.getElementById('linkSelector7');
    
            linkSelector7.addEventListener('click', () => {
                let selectedLink = linkSelector7.value;
                loadLinkInIframe(selectedLink);
            });
    
            let linkSelector8 = document.getElementById('linkSelector8');
    
            linkSelector8.addEventListener('click', () => {
                let selectedLink = linkSelector8.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector9 = document.getElementById('linkSelector9');
    
            linkSelector9.addEventListener('click', () => {
                let selectedLink = linkSelector9.value;
                loadLinkInIframe(selectedLink);
            });
          let linkSelector11 = document.getElementById('linkSelector11');
    
            linkSelector11.addEventListener('click', () => {
                let selectedLink = linkSelector11.value;
                loadLinkInIframe(selectedLink);
            });
            let linkSelector12 = document.getElementById('linkSelector12');
    
            linkSelector12.addEventListener('click', () => {
                let selectedLink = linkSelector12.value;
                loadLinkInIframe(selectedLink);
            });
            let linkSelector13 = document.getElementById('linkSelector13');
    
            linkSelector13.addEventListener('click', () => {
                let selectedLink = linkSelector13.value;
                loadLinkInIframe(selectedLink);
            });
            let linkSelector14 = document.getElementById('linkSelector14');
    
            linkSelector14.addEventListener('click', () => {
                let selectedLink = linkSelector14.value;
                loadLinkInIframe(selectedLink);
            });
//----------------------------------------------------
        function countProgramLinks() {
    const linkSelectors = document.querySelectorAll('.op');
    linkSelectors.forEach((selector, index) => {
        const options = selector.querySelectorAll('option');
        const linkCount = options.length;
        console.log(`Category ${index + 1}: ${linkCount} program links`);
    });
}
countProgramLinks();
function countTotalProgramLinks() {
    const linkSelectors = document.querySelectorAll('.op');
    let totalLinkCount = 0;
    
    linkSelectors.forEach((selector) => {
        const options = selector.querySelectorAll('option');
        const linkCount = options.length;
        totalLinkCount += linkCount;
    });
    
    console.log(`Total number of program links: ${totalLinkCount}`);
}

// Call the function to count the total program links
countTotalProgramLinks();
//--------------------------------------
// voice assistent
/*
console.log('Hello World!');
const btn = document.querySelector('.btn');
const content = document.querySelector('.form-input');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }
else if(hr > 17 && hr <=23)
{
    speak("Good Night");
}
    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating JARVIS");
    speak("Going online");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    processVoiceCommand(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Jarvis";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
function processVoiceCommand(command) {
    if (command.includes('search')) {
        const searchTerm = command.replace('search', '').trim();
        searchProgramByVoice(searchTerm);
    } else {
        speakThis("I did not understand the command. Please try again.");
    }
}

function searchProgramByVoice(searchTerm) {
    // Filter programs based on voice search input
    const filteredPrograms = Object.keys(programLinks).filter(program => program.toLowerCase().includes(searchTerm));

    // Populate datalist with filtered programs
    const datalist = document.getElementById('program-list');
    datalist.innerHTML = '';
    filteredPrograms.forEach(program => {
        const option = document.createElement('option');
        option.value = program;
        datalist.appendChild(option);
    });

    // If there's only one matching program, automatically load it in the iframe
    if (filteredPrograms.length === 1) {
        loadLinkInIframe(programLinks[filteredPrograms[0]]);
    }
}
*/
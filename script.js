// ============================================================================
// RTO MASTER GUIDE - Complete JavaScript Logic
// ============================================================================

// Quiz Questions Database
const quizQuestions = [
    {
        id: 1,
        question: "STOP संकेत का आकार क्या है?",
        options: ["वृत्त", "अष्टकोण", "त्रिभुज", "आयत"],
        correct: 1,
        explanation: "STOP संकेत का आकार अष्टकोण (Octagon) होता है और यह लाल रंग में होता है।"
    },
    {
        id: 2,
        question: "ट्रैफिक सिग्नल पर लाल लाइट का मतलब क्या है?",
        options: ["आगे बढ़ें", "रुक जाएं", "तैयारी करें", "सावधान रहें"],
        correct: 1,
        explanation: "लाल लाइट का मतलब है कि वाहन को स्टॉप लाइन से पहले पूरी तरह रुकना चाहिए।"
    },
    {
        id: 3,
        question: "चेतावनी संकेत किस आकार में होते हैं?",
        options: ["वृत्त", "आयत", "त्रिभुज", "अष्टकोण"],
        correct: 2,
        explanation: "चेतावनी संकेत हमेशा समबाहु त्रिभुज (Equilateral Triangle) आकार में होते हैं और लाल बॉर्डर होती है।"
    },
    {
        id: 4,
        question: "शहर/नगर पालिका मार्ग में कार की गति सीमा क्या है?",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        correct: 1,
        explanation: "शहर/नगर पालिका मार्ग में कार (LMV) की अधिकतम गति सीमा 50 km/h है।"
    },
    {
        id: 5,
        question: "बिना हेलमेट दोपहिया चलाने का जुर्माना क्या है?",
        options: ["₹500", "₹1,000", "₹2,000", "₹5,000"],
        correct: 1,
        explanation: "बिना हेलमेट दोपहिया चलाने का जुर्माना ₹1,000 और 3 महीने DL निलंबन है।"
    },
    {
        id: 6,
        question: "शराब पीकर गाड़ी चलाने का दंड क्या है?",
        options: ["₹5,000 जुर्माना", "₹10,000 जुर्माना एवं/या 6 महीने जेल", "केवल चेतावनी", "DL रद्द करना"],
        correct: 1,
        explanation: "शराब पीकर गाड़ी चलाना (Drunken Driving) एक गंभीर अपराध है जिसका दंड ₹10,000 जुर्माना और/या 6 महीने जेल है।"
    },
    {
        id: 7,
        question: "ओवरटेकिंग करते समय कौन सी बात ध्यान रखनी चाहिए?",
        options: ["बाईं ओर से ओवरटेक करें", "दाहिनी ओर से ओवरटेक करें", "कहीं से भी करें", "हॉर्न दे सकते हैं"],
        correct: 1,
        explanation: "ओवरटेकिंग का गोल्डन रूल: हमेशा आगे चल रहे वाहन के दाहिनी (Right) ओर से ओवरटेक करें।"
    },
    {
        id: 8,
        question: "स्कूल/अस्पताल जोन में कार की गति सीमा कितनी है?",
        options: ["20 km/h", "25 km/h", "30 km/h", "40 km/h"],
        correct: 1,
        explanation: "स्कूल/अस्पताल जोन में कार (LMV) की गति सीमा 25 km/h है।"
    },
    {
        id: 9,
        question: "GIVE WAY संकेत का आकार क्या है?",
        options: ["वृत्त", "अष्टकोण", "उल्टा त्रिभुज", "सीधा त्रिभुज"],
        correct: 2,
        explanation: "GIVE WAY संकेत उल्टे त्रिभुज (Inverted Triangle) के आकार में होता है।"
    },
    {
        id: 10,
        question: "सूचनात्मक संकेत किस आकार में होते हैं?",
        options: ["त्रिभुज", "आयत/वर्ग", "वृत्त", "अष्टकोण"],
        correct: 1,
        explanation: "सूचनात्मक संकेत आयताकार (Rectangular/Square) आकार में होते हैं और आमतौर पर नीले रंग में होते हैं।"
    }
];

// Flashcard Data
const flashcards = [
    {
        id: 1,
        front: "STOP संकेत",
        back: "आकृति: अष्टकोण (Octagon)\nरंग: लाल\nअर्थ: वाहनों को स्टॉप लाइन से पहले पूरी तरह रोकना अनिवार्य है।"
    },
    {
        id: 2,
        front: "GIVE WAY संकेत",
        back: "आकृति: उल्टा त्रिभुज (Inverted Triangle)\nरंग: लाल बॉर्डर\nअर्थ: मुख्य मार्ग या दाहिनी ओर से आ रहे यातायात को रास्ता देना चाहिए।"
    },
    {
        id: 3,
        front: "अनिवार्य संकेत की विशेषता",
        back: "आकृति: मुख्य रूप से वृत्ताकार (Circular)\nअपवाद: STOP (अष्टकोण) और GIVE WAY (उल्टा त्रिभुज)\nपालन: कानूनन अनिवार्य है"
    },
    {
        id: 4,
        front: "चेतावनी संकेत",
        back: "आकृति: समबाहु त्रिभुज (Equilateral Triangle)\nरंग: लाल बॉर्डर, सफेद पृष्ठभूमि\nउदाहरण: Right Curve, Pedestrian Crossing, School Ahead"
    },
    {
        id: 5,
        front: "ट्रैफिक लाइट - लाल",
        back: "अर्थ: वाहन को स्टॉप लाइन से पहले पूरी तरह रुकना चाहिए\nक्रिया: रुकें और प्रतीक्षा करें\nदूरी: सुरक्षित दूरी पर रुकें"
    },
    {
        id: 6,
        front: "ओवरटेकिंग का नियम",
        back: "गोल्डन रूल: हमेशा दाहिनी (Right) ओर से ओवरटेक करें\nबाईं ओर से ओवरटेक करना सख्त मना है\nओवरटेक करने से पहले सुनिश्चित करें कि रास्ता साफ है"
    }
];

// Global Variables
let currentQuizIndex = 0;
let quizScore = 0;
let userAnswers = new Array(quizQuestions.length).fill(null);
let currentFlashcardIndex = 0;
let isFlipped = false;

// ============================================================================
// SIDEBAR & TAB MANAGEMENT
// ============================================================================

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            sidebar?.classList.remove('-translate-x-full');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar?.classList.add('-translate-x-full');
        });
    }

    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                sidebar?.classList.add('-translate-x-full');
            }
        });
    });
}

function switchTab(tab) {
    const studyTab = document.getElementById('tab-content-study');
    const quizTab = document.getElementById('tab-content-quiz');
    const flashcardTab = document.getElementById('tab-content-flashcards');

    const btnStudy = document.getElementById('tab-btn-study');
    const btnQuiz = document.getElementById('tab-btn-quiz');
    const btnFlashcards = document.getElementById('tab-btn-flashcards');

    // Hide all tabs
    if (studyTab) studyTab.classList.add('hidden');
    if (quizTab) quizTab.classList.add('hidden');
    if (flashcardTab) flashcardTab.classList.add('hidden');

    // Reset button styles
    [btnStudy, btnQuiz, btnFlashcards].forEach(b => {
        if (b) b.className = "flex-1 py-1.5 text-xs font-semibold rounded-lg text-slate-400 hover:text-white transition-all";
    });

    // Show selected tab
    if (tab === 'study') {
        if (studyTab) studyTab.classList.remove('hidden');
        if (btnStudy) btnStudy.className = "flex-1 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-slate-900 shadow transition-all";
    } else if (tab === 'quiz') {
        if (quizTab) quizTab.classList.remove('hidden');
        if (btnQuiz) btnQuiz.className = "flex-1 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-slate-900 shadow transition-all";
        renderQuiz();
    } else if (tab === 'flashcards') {
        if (flashcardTab) flashcardTab.classList.remove('hidden');
        if (btnFlashcards) btnFlashcards.className = "flex-1 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-slate-900 shadow transition-all";
        renderFlashcard();
    }
}

// ============================================================================
// QUIZ FUNCTIONALITY
// ============================================================================

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    container.innerHTML = '';
    quizQuestions.forEach((q, idx) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'bg-white border border-slate-200 rounded-xl p-5 shadow-sm';
        questionDiv.innerHTML = `
            <h4 class="font-bold text-slate-900 mb-3 text-sm">प्रश्न ${idx + 1}: ${q.question}</h4>
            <div class="space-y-2">
                ${q.options.map((option, optIdx) => `
                    <label class="flex items-center p-2 cursor-pointer border border-slate-200 rounded-lg hover:bg-amber-50 transition-colors">
                        <input type="radio" name="q${idx}" value="${optIdx}" 
                            ${userAnswers[idx] === optIdx ? 'checked' : ''} 
                            onchange="selectAnswer(${idx}, ${optIdx})"
                            class="w-4 h-4 text-amber-500">
                        <span class="ml-3 text-slate-700 text-sm">${option}</span>
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(questionDiv);
    });

    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.className = 'w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors mt-4';
    submitBtn.textContent = 'परिणाम देखें';
    submitBtn.onclick = submitQuiz;
    container.appendChild(submitBtn);
}

function selectAnswer(questionIdx, optionIdx) {
    userAnswers[questionIdx] = optionIdx;
}

function submitQuiz() {
    // Check if all answers are selected
    if (userAnswers.includes(null)) {
        alert('कृपया सभी प्रश्नों का उत्तर दें।');
        return;
    }

    // Calculate score
    quizScore = 0;
    userAnswers.forEach((answer, idx) => {
        if (answer === quizQuestions[idx].correct) {
            quizScore++;
        }
    });

    // Show results
    const container = document.getElementById('quiz-container');
    const resultDiv = document.getElementById('quiz-result');
    const resultText = document.getElementById('result-text');
    const scoreDisplay = document.getElementById('quiz-score');

    if (container) container.style.display = 'none';
    if (resultDiv && resultText && scoreDisplay) {
        const percentage = (quizScore / quizQuestions.length) * 100;
        let message = '';

        if (percentage >= 60) {
            message = `बधाई हो! आपने ${quizScore}/10 अंक प्राप्त किए। आप RTO परीक्षा के लिए तैयार हैं! 🎉`;
        } else if (percentage >= 40) {
            message = `अच्छा प्रयास! आपने ${quizScore}/10 अंक प्राप्त किए। और अधिक अभ्यास करें। 📚`;
        } else {
            message = `कृपया और अधिक अभ्यास करें। आपने ${quizScore}/10 अंक प्राप्त किए। 💪`;
        }

        resultText.textContent = message;
        scoreDisplay.textContent = `स्कोर: ${quizScore} / 10`;
        resultDiv.classList.remove('hidden');
    }
}

function resetQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    const container = document.getElementById('quiz-container');
    const resultDiv = document.getElementById('quiz-result');
    const scoreDisplay = document.getElementById('quiz-score');

    if (container) container.style.display = 'block';
    if (resultDiv) resultDiv.classList.add('hidden');
    if (scoreDisplay) scoreDisplay.textContent = 'स्कोर: 0 / 10';

    renderQuiz();
}

// ============================================================================
// FLASHCARD FUNCTIONALITY
// ============================================================================

function renderFlashcard() {
    const card = flashcards[currentFlashcardIndex];
    if (!card) return;

    const frontContent = document.getElementById('flashcard-front-content');
    const backContent = document.getElementById('flashcard-back-content');
    const counter = document.getElementById('flashcard-counter');
    const inner = document.getElementById('flashcard-inner');

    if (frontContent) frontContent.textContent = card.front;
    if (backContent) backContent.textContent = card.back;
    if (counter) counter.textContent = `${currentFlashcardIndex + 1} / ${flashcards.length}`;
    if (inner) {
        inner.classList.remove('rotate-y-180');
        isFlipped = false;
    }
}

function flipFlashcard() {
    const inner = document.getElementById('flashcard-inner');
    if (!inner) return;

    isFlipped = !isFlipped;
    if (isFlipped) {
        inner.classList.add('rotate-y-180');
    } else {
        inner.classList.remove('rotate-y-180');
    }
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
    renderFlashcard();
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcards.length) % flashcards.length;
    renderFlashcard();
}

// ============================================================================
// GLOBAL SEARCH FUNCTIONALITY
// ============================================================================

function initSearch() {
    const searchInput = document.getElementById('global-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        performSearch(query);
    });
}

function performSearch(query) {
    if (!query) {
        resetSearch();
        return;
    }

    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.sign-card, .bg-white');

    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display = text.includes(query) ? 'block' : 'none';
    });

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.opacity = text.includes(query) ? '1' : '0.3';
    });
}

function resetSearch() {
    document.querySelectorAll('section').forEach(s => s.style.display = 'block');
    document.querySelectorAll('.sign-card, .bg-white').forEach(c => c.style.opacity = '1');
}

// ============================================================================
// KEYBOARD SHORTCUTS
// ============================================================================

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for search focus
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('global-search');
            if (searchInput) searchInput.focus();
        }

        // Arrow keys for flashcard navigation
        if (e.key === 'ArrowRight') {
            const flashcardTab = document.getElementById('tab-content-flashcards');
            if (flashcardTab && !flashcardTab.classList.contains('hidden')) {
                nextFlashcard();
            }
        }
        if (e.key === 'ArrowLeft') {
            const flashcardTab = document.getElementById('tab-content-flashcards');
            if (flashcardTab && !flashcardTab.classList.contains('hidden')) {
                prevFlashcard();
            }
        }
    });
}

// ============================================================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================================================

function improveAccessibility() {
    // Add aria-labels to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        if (!btn.getAttribute('aria-label')) {
            btn.setAttribute('aria-label', btn.textContent.trim());
        }
    });

    // Add role to sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.setAttribute('role', 'navigation');
        sidebar.setAttribute('aria-label', 'विषय सूची');
    }

    // Add role to main content
    const main = document.querySelector('main');
    if (main) {
        main.setAttribute('role', 'main');
    }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initSearch();
    initKeyboardShortcuts();
    improveAccessibility();
    renderFlashcard();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        quizQuestions,
        flashcards,
        switchTab,
        renderQuiz,
        submitQuiz,
        resetQuiz,
        renderFlashcard,
        nextFlashcard,
        prevFlashcard
    };
}

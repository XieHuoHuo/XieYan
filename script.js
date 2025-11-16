// Language switching functionality
let currentLanguage = 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update button states
    document.getElementById('en-btn').classList.remove('active');
    document.getElementById('zh-btn').classList.remove('active');
    document.getElementById(`${lang}-btn`).classList.add('active');
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-en][data-zh]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            // Check if element is an input or textarea
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const isChinese = browserLang.startsWith('zh');
    
    // Use saved preference, or browser language, or default to English
    const initialLang = savedLanguage || (isChinese ? 'zh' : 'en');
    
    // Only switch if not already in English (default in HTML)
    if (initialLang !== 'en') {
        switchLanguage(initialLang);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

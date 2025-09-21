// نظام تبديل اللغة المركزي
class LanguageSwitcher {
    constructor() {
        this.currentLang = document.documentElement.lang || 'en'; // الافتراضي إنجليزي إذا لم يتم تعيين lang
        this.init();
    }

    init() {
        // تحميل تفضيلات اللغة من localStorage
        this.loadLanguagePreference();
        
        // إضافة event listeners
        this.addEventListeners();
        
        // تعيين السمات الصحيحة للصفحة
        this.setPageAttributes();
    }

    loadLanguagePreference() {
        if (LanguageSwitcher.supportsLocalStorage()) {
            const savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang && savedLang !== this.currentLang) {
                this.switchToLanguage(savedLang);
            }
        }
    }

    addEventListeners() {
        // زر التبديل الرئيسي
        const mainToggle = document.getElementById('languageToggle');
        const mobileToggle = document.getElementById('mobileLanguageToggle');

        if (mainToggle) {
            mainToggle.addEventListener('click', () => this.toggleLanguage());
        }

        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.switchToLanguage(newLang);
    }

    switchToLanguage(lang) {
        if (LanguageSwitcher.supportsLocalStorage()) {
            // حفظ التفضيل في localStorage
            localStorage.setItem('preferredLanguage', lang);
        }
        
        // التوجيه إلى الصفحة المناسبة
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const targetPage = lang === 'ar' ? 'Ar.html' : 'index.html';
        
        // تجنب إعادة التوجيه إذا كانت الصفحة الحالية هي الصفحة المستهدفة
        if (currentPage !== targetPage) {
            window.location.href = targetPage;
        }
    }

    setPageAttributes() {
        // تعيين اتجاه الصفحة بناءً على اللغة
        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.currentLang;
    }

    // وظيفة مساعدة للتحقق من دعم localStorage
    static supportsLocalStorage() {
        try {
            return 'localStorage' in window && window.localStorage !== null;
        } catch (e) {
            return false;
        }
    }
}

// تهيئة نظام تبديل اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});

// وظيفة عامة للاستدعاء من onClick
function switchLanguage(lang) {
    const switcher = new LanguageSwitcher();
    switcher.switchToLanguage(lang);
}
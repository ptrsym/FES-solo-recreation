document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            this.classList.toggle('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

// add slide in animation for each alternating section
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    threshold: 0
  };

  sections.forEach((section, index) => {
    if (index % 2 === 0) {
        section.classList.add('left');
    } else {
        section.classList.add('right');
    }
  });

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            if (entry.target.classList.contains('left')) {
                entry.target.classList.add('animate-from-left');
            } else if (entry.target.classList.contains('right')) {
                entry.target.classList.add('animate-from-right');
            }
            entry.target.classList.add('animated');
            observerInstance.unobserve(entry.target);
        }
    });
  }, observerOptions);


  sections.forEach(section => {
    observer.observe(section);
  });

    //toggles FAQ section questions
  const faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });
      this.classList.toggle("active");
    });
  });

  // cycles through user testimonials when right/left buttons are clicked
  const testimonials = document.querySelectorAll(".testimonials__user");
  let currentIndex = 0;

  //show initial user testimonial
  testimonials[currentIndex].classList.add("active");

  //Event listener for next/previous
  document.querySelector(".right-button").addEventListener("click", function () {
      showNextTestimonial();
    });

  document.querySelector(".left-button").addEventListener("click", function () {
    showPreviousTestimonial();
  });

  function showNextTestimonial() {
    const currentTestimonial = testimonials[currentIndex];
    const nextIndex = (currentIndex + 1) % testimonials.length;
    const nextTestimonial = testimonials[nextIndex];

    nextTestimonial.classList.add('slide-in-right');
    currentTestimonial.classList.add('slide-out-left');

    setTimeout(() => {
        currentTestimonial.classList.remove('active', 'slide-out-left');
        nextTestimonial.classList.add('active');
        nextTestimonial.classList.remove('slide-in-right');
        currentIndex = nextIndex;
    }, 300);
  }

  function showPreviousTestimonial() {
    const currentTestimonial = testimonials[currentIndex];
    const previousIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const previousTestimonial = testimonials[previousIndex];
 
    previousTestimonial.classList.add('slide-in-left');
    currentTestimonial.classList.add('slide-out-right');

    setTimeout(() => {
        currentTestimonial.classList.remove('active', 'slide-out-right')
        previousTestimonial.classList.add('active');
        previousTestimonial.classList.remove('slide-in-left');
        currentIndex = previousIndex;
      }, 300);
  }
});

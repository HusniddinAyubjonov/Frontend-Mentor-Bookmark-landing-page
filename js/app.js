const tabLinks = document.querySelectorAll('.features-container .tab-menu .tab-link'),
      tabContents = document.querySelectorAll('.features-container .tab-content');

tabLinks.forEach((tabLink, index) => {
    tabLink.addEventListener('click', function() {
        removeActive(tabLinks);
        removeActive(tabContents);
        toggleActive(tabLink);
        toggleActive(tabContents[index]);
    });
});

const faqTabs = document.querySelectorAll('.faq-container .faqs .faq');

faqTabs.forEach((faqTab) => {
    faqTab.addEventListener('click', function() {
        if (faqTab.classList.contains('active')) {
            toggleActive(faqTab);
        } else {
            removeActive(faqTabs);
            toggleActive(faqTab);
        }
    });
});

const formElement = document.querySelector('.form-container form'),
      inputElement = document.querySelector('.form-container form input'),
      submitBtn = document.querySelector('.form-container form button');

submitBtn.onclick = (e) => {
    e.preventDefault();

    const email = inputElement.value;
    if (! validateEmail(email)) {
        formElement.classList.add('form-error');
    } else {
        formElement.classList.remove('form-error');
    }
}

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(email) {
    return String(email).toLowerCase().match(re);
};

const menu = document.querySelector('.mobile-menu'),
      menuBtn = document.querySelector('.mobile-menu .mobile-menu-icon'),
      menuCloseBtn = document.querySelector('.mobile-menu .mobile-menu-content .mobile-menu-close');

menuBtn.onclick = () => {
    toggleActive(menu);
}
menuCloseBtn.onclick = () => {
    toggleActive(menu);
}

function removeActive(elements) {
    elements.forEach((element) => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    })
}
function toggleActive(element) {
    element.classList.toggle('active');
}
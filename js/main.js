const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const burgerDark = document.querySelector('.burgerDark');
const burgerExit = document.querySelector('.burger-exit');
const modalBg = document.querySelector('.modal-bg');
const headerDisplayNone = $('.header-ul').css('display');

// Nav - Scroll to section

$('li').on('click', function () {
  const sectionName = $(this).attr('class');

  if (sectionName != 's0') {
    modalBg.style.display = 'none';
    $(header).removeClass('activeHead');
    header.classList.remove('hideHead');

    $('body, html').animate({
      scrollTop: $(`[data-section = ${sectionName}]`).offset().top + 30
    })

  } else {
    modalBg.style.display = 'none';
    $(header).removeClass('activeHead');
    header.classList.remove('hideHead');

    $('body, html').animate({
      scrollTop: $('body').offset().top
    })
  }
});

// Stick nav on desktop

$(document).on('scroll', function () {
  const scrollPosition = $(this).scrollTop();
  const headerHeight = $(header).outerHeight();
  const headerDisplayNone = $('.header-ul').css('display');

  if (scrollPosition > headerHeight / 2) {
    $(header).addClass('activeHead');

    if (headerDisplayNone === 'none') {
      burgerDark.style.display = 'block';
    }
  }

  if (scrollPosition < headerHeight / 2) {
    $(header).removeClass('activeHead');
    burgerDark.style.display = 'none';
  }
})

// Modal nav
const openMenu = () => {
  header.classList.add('hideHead');
  modalBg.style.display = 'block';
};

const closeMenu = () => {
  header.classList.remove('hideHead');
  modalBg.style.display = 'none';
};

hamburger.addEventListener('click', openMenu);
burgerDark.addEventListener('click', openMenu);
burgerExit.addEventListener('click', closeMenu);
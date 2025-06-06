// Custom Scripts
@@include('main.js')

// Партнеры анимация
document.addEventListener('DOMContentLoaded', function() {
  const partners = {
    'general-partner': 'general-partner--info',
    'diamond-partner': 'diamond-partner--info',
    'platinum-hookah-partner': 'platinum-hookah-partner--info',
    'platinum-terrace-partner': 'platinum-terrace-partner--info',
    'gold-partner': 'gold-partner--info'
};

function setPartnerStyles() {
    const isMobile = window.innerWidth < 768;
    Object.keys(partners).forEach(partnerClass => {
        const partnerElement = document.querySelector(`.${partnerClass}`);
        if (partnerElement) {
            if (isMobile) {
                partnerElement.style.width = '100%';
                partnerElement.style.height = '80px';
            } else {
                partnerElement.style.width = '180px';
                partnerElement.style.height = '';
            }
        }
    });
}

// Вызываем при загрузке
setPartnerStyles();

// И при изменении размера окна
window.addEventListener('resize', setPartnerStyles);

// Обработчики кликов
Object.keys(partners).forEach(partnerClass => {
    const partnerElement = document.querySelector(`.${partnerClass}`);
    const infoElement = document.querySelector(`.${partners[partnerClass]}`);

    if (partnerElement && infoElement) {
        partnerElement.addEventListener('click', () => {
            Object.values(partners).forEach(infoClass => {
                const info = document.querySelector(`.${infoClass}`);
                if (info) {
                    info.style.display = 'none';
                    info.style.opacity = '0';
                }
            });

            Object.keys(partners).forEach(pClass => {
                const p = document.querySelector(`.${pClass}`);
                if (p) {
                    p.classList.remove(`${pClass}-active`);
                    if (window.innerWidth < 768) {
                        p.style.height = '80px';
                    } else {
                        p.style.width = '156px';
                        p.style.height = '';
                    }
                }
            });

            infoElement.style.display = 'flex';
            setTimeout(() => {
                infoElement.style.opacity = '1';
            }, 10);

            partnerElement.classList.add(`${partnerClass}-active`);
            if (window.innerWidth < 768) {
                partnerElement.style.height = '130px';
            } else {
                partnerElement.style.width = '280px';
            }
        });
    }
});

(function() {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    if (burger && mobileMenu) {
      burger.addEventListener('click', function() {
        burger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });
  
      // Закрытие меню по клику вне или по ссылке
      mobileMenu.addEventListener('click', function(e) {
        if (e.target.classList.contains('mobile-menu')) {
          burger.classList.remove('open');
          mobileMenu.classList.remove('open');
        }
      });
    }
  })();


    // Переключение между info и slider с активными иконками
    document.querySelectorAll('.map__item--info').forEach(function(item) {
        const infoIcon = item.querySelector('.map__item--info-left-icon--info');
        const sliderIcon = item.querySelector('.map__item--info-left-icon--slider');
        const infoBlock = item.querySelector('.map__item--info-right--info');
        const sliderBlock = item.querySelector('.map__item--info-right--slider');

        if (infoIcon && sliderIcon && infoBlock && sliderBlock) {
            infoIcon.addEventListener('click', function(e) {
                e.stopPropagation();
                infoBlock.classList.add('map__item--info-right--info-active');
                sliderBlock.classList.remove('map__item--info-right--slider-active');
                infoIcon.classList.add('map__item--info-left-icon--info-active');
                sliderIcon.classList.remove('map__item--info-left-icon--info-active');
            });
            sliderIcon.addEventListener('click', function(e) {
                e.stopPropagation();
                infoBlock.classList.remove('map__item--info-right--info-active');
                sliderBlock.classList.add('map__item--info-right--slider-active');
                infoIcon.classList.remove('map__item--info-left-icon--info-active');
                sliderIcon.classList.add('map__item--info-left-icon--info-active');
            });
        }
    });

    var elms = document.getElementsByClassName('splide');

for (var i = 0; i < elms.length; i++) {
  var splide = new Splide(elms[i], {
    // type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '20px',
    pagination: false,
    autoplay: true,
  });

  splide.on('mounted updated move', function () {
    // Удаляем data-fancybox у клонов
    document.querySelectorAll('.splide__slide.is-clone [data-fancybox]').forEach(el => {
      el.removeAttribute('data-fancybox');
    });
  });

  splide.mount();
}

// Инициализируем Fancybox только на оригинальных
Fancybox.bind('.splide__slide:not(.is-clone) [data-fancybox="gallery5"]', {
  // ваши опции
});
    // Маппинг иконок и модалок
    const modalMap = [
        {
            icon: '.map__item--info-left-icon-general-map',
            modal: '.general-partner-modal',
        },
        {
            icon: '.map__item--info-left-icon-diamond-map',
            modal: '.diamond-partner-modal',
        },
        {
            icon: '.map__item--info-left-icon-platinum-hookah-map',
            modal: '.platinum-hookah-partner-modal',
        },
        {
            icon: '.map__item--info-left-icon-platinum-terrace-map',
            modal: '.platinum-terrace-partner-modal',
        },
        {
            icon: '.map__item--info-left-icon-gold-map',
            modal: '.gold-partner-modal',
        },
    ];

    modalMap.forEach(function(pair) {
        document.querySelectorAll(pair.icon).forEach(function(icon) {
            icon.addEventListener('click', function(e) {
                e.stopPropagation();
                const modal = document.querySelector(pair.modal);
                if (modal) {
                    modal.classList.add(pair.modal.replace('.', '') + '--active');
                }
            });
        });

        // Закрытие модального окна
        const modal = document.querySelector(pair.modal);
        if (modal) {
            // Клик по крестику
            const closeBtn = modal.querySelector(pair.modal + '--close');
            if (closeBtn) {
                closeBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    modal.classList.remove(pair.modal.replace('.', '') + '--active');
                });
            }
            // Клик вне блока картинок
            const inner = modal.querySelector(pair.modal + '__inner');
            const images = modal.querySelector(pair.modal + '--images');
            if (inner && images) {
                inner.addEventListener('click', function(e) {
                    if (!images.contains(e.target)) {
                        modal.classList.remove(pair.modal.replace('.', '') + '--active');
                    }
                });
            }
        }
    });

    // Языковое меню
(function() {
    // Для всех выпадающих меню на странице (десктоп и мобильное)
    document.querySelectorAll('.menu__dropdown').forEach(function(dropdown) {
      const toggle = dropdown.querySelector('.menu__lang-toggle');
      const langList = dropdown.querySelector('.menu__lang-list');
      const langItems = dropdown.querySelectorAll('.menu__lang-item');
  
      // Открытие/закрытие выпадающего меню
      if (toggle && langList) {
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.toggle('menu__dropdown--open');
        });
        document.addEventListener('click', function(e) {
          if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('menu__dropdown--open');
          }
        });
      }
  
      // Смена языка
      langItems.forEach(function(item) {
        item.addEventListener('click', function() {
          // Снимаем активность у всех языков в этом меню
          langItems.forEach(function(i) {
            i.classList.remove('menu__lang-item--active');
          });
          item.classList.add('menu__lang-item--active');
      
          // Синхронизируем оба меню
          const lang = item.getAttribute('data-lang');
          document.querySelectorAll('.menu__lang-item').forEach(function(i) {
            if (i.getAttribute('data-lang') === lang) {
              i.classList.add('menu__lang-item--active');
            } else {
              i.classList.remove('menu__lang-item--active');
            }
          });
      
          // Обновляем текст кнопки (вместо "LANG" показываем текущий язык)
          document.querySelectorAll('.menu__lang-toggle').forEach(function(toggle) {
            toggle.textContent = lang.toUpperCase();
          });
      
          // Показываем нужный язык
          if (lang === 'ru') {
            document.querySelectorAll('.ru-text').forEach(function(el) {
              el.style.display = 'flex';
            });
            document.querySelectorAll('.en-text').forEach(function(el) {
              el.style.display = 'none';
            });
          } else if (lang === 'en') {
            document.querySelectorAll('.ru-text').forEach(function(el) {
              el.style.display = 'none';
            });
            document.querySelectorAll('.en-text').forEach(function(el) {
              el.style.display = 'flex';
            });
          }
        });
      });
      
      // По умолчанию RU
      document.querySelectorAll('.ru-text').forEach(function(el) {
        el.style.display = 'flex';
      });
      document.querySelectorAll('.en-text').forEach(function(el) {
        el.style.display = 'none';
      });
      // Устанавливаем начальный текст кнопки
      document.querySelectorAll('.menu__lang-toggle').forEach(function(toggle) {
        toggle.textContent = 'RU';
      });
    });
  })();


    
});

document.addEventListener('DOMContentLoaded', function() {
  // Регистрируем плагины GSAP
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Плавный скролл
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener("click", function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute("href");
          const targetElement = document.querySelector(id);
          
          gsap.to(window, {
              duration: 1,
              scrollTo: {
                  y: targetElement,
                  offsetY: 0
              },
              ease: "power2.inOut"
          });

          setTimeout(() => {
              history.pushState(null, null, id);
          }, 100);
      });
  }

  // Анимации появления элементов при скролле
  document.querySelectorAll('.gsap-fade-in-left').forEach(el => {
      gsap.fromTo(el, 
          {opacity: 0, x: -60}, 
          {
              opacity: 1, x: 0, 
              duration: 0.7, 
              ease: "power2.out",
              scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none none"
              }
          }
      );
  });

  document.querySelectorAll('.gsap-fade-in-right').forEach(el => {
      gsap.fromTo(el, 
          {opacity: 0, x: 60}, 
          {
              opacity: 1, x: 0, 
              duration: 0.7, 
              ease: "power2.out",
              scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none none"
              }
          }
      );
  });

  document.querySelectorAll('.gsap-fade-in-up').forEach(el => {
      gsap.fromTo(el, 
          {opacity: 0, y: 60}, 
          {
              opacity: 1, y: 0, 
              duration: 0.7, 
              ease: "power2.out",
              scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none none"
              }
          }
      );
  });

  // Смена языка
  const langItems = document.querySelectorAll('.menu__lang-item');
  langItems.forEach(function(item) {
      item.addEventListener('click', function() {
          // Снимаем активность у всех языков в этом меню
          langItems.forEach(function(i) {
              i.classList.remove('menu__lang-item--active');
          });
          item.classList.add('menu__lang-item--active');

          // Синхронизируем оба меню
          const lang = item.getAttribute('data-lang');
          document.querySelectorAll('.menu__lang-item').forEach(function(i) {
              if (i.getAttribute('data-lang') === lang) {
                  i.classList.add('menu__lang-item--active');
              } else {
                  i.classList.remove('menu__lang-item--active');
              }
          });

          // Обновляем текст кнопки
          document.querySelectorAll('.menu__lang-toggle').forEach(function(toggle) {
              toggle.textContent = lang.toUpperCase();
          });

          // Показываем нужный язык
          if (lang === 'ru') {
              document.querySelectorAll('.ru-text').forEach(function(el) {
                  el.style.display = 'flex';
              });
              document.querySelectorAll('.en-text').forEach(function(el) {
                  el.style.display = 'none';
              });
          } else if (lang === 'en') {
              document.querySelectorAll('.ru-text').forEach(function(el) {
                  el.style.display = 'none';
              });
              document.querySelectorAll('.en-text').forEach(function(el) {
                  el.style.display = 'flex';
              });
          }
      });
  });

  // По умолчанию RU
  document.querySelectorAll('.ru-text').forEach(function(el) {
      el.style.display = 'flex';
  });
  document.querySelectorAll('.en-text').forEach(function(el) {
      el.style.display = 'none';
  });
  // Устанавливаем начальный текст кнопки
  document.querySelectorAll('.menu__lang-toggle').forEach(function(toggle) {
      toggle.textContent = 'RU';
  });
});

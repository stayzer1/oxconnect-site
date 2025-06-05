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

    // Устанавливаем начальную ширину для всех партнеров
    Object.keys(partners).forEach(partnerClass => {
        const partnerElement = document.querySelector(`.${partnerClass}`);
        if (partnerElement) {
            partnerElement.style.width = '180px';
        }
    });

    // Добавляем обработчики кликов для каждого партнера
    Object.keys(partners).forEach(partnerClass => {
        const partnerElement = document.querySelector(`.${partnerClass}`);
        const infoElement = document.querySelector(`.${partners[partnerClass]}`);

        if (partnerElement && infoElement) {
            partnerElement.addEventListener('click', () => {
                // Закрываем все открытые блоки
                Object.values(partners).forEach(infoClass => {
                    const info = document.querySelector(`.${infoClass}`);
                    if (info) {
                        info.style.display = 'none';
                        info.style.opacity = '0';
                    }
                });

                // Убираем активный класс и устанавливаем ширину 156px у всех партнеров
                Object.keys(partners).forEach(pClass => {
                    const p = document.querySelector(`.${pClass}`);
                    if (p) {
                        p.classList.remove(`${pClass}-active`);
                        p.style.width = '156px';
                    }
                });

                // Показываем нужный блок с анимацией
                infoElement.style.display = 'flex';
                setTimeout(() => {
                    infoElement.style.opacity = '1';
                }, 10);

                // Добавляем активный класс и устанавливаем ширину 280px
                partnerElement.classList.add(`${partnerClass}-active`);
                partnerElement.style.width = '280px';
            });
        }
    });


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

    var elms = document.getElementsByClassName( 'splide' );

    for ( var i = 0; i < elms.length; i++ ) {
      new Splide( elms[ i ], {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '20px',
        pagination: false,
        autoplay: true,
      } ).mount();
}
});

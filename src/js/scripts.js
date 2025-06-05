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
});

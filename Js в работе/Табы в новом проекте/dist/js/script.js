//  window.addEventListener('DOMContentLoaded', () => {


//      const tabs = document.querySelectorAll('.tabheader__item'),
//          tabsContent = document.querySelectorAll('.tabcontent'),
//          tabsParent = document.querySelector('.tabheader__items');

//      function hideTabContent() {
//          tabsContent.forEach(item => {
//              item.style.display = 'none';
//          });
//          tabs.forEach(item => {
//              item.classList.remove('tabheader__item_active');
//          });
//      }

//      function showTabContent(i = 0) {
//          tabsContent[i].style.display = 'block';
//          tabs[i].classList.add('tabheader__item_active');
//      }

//      hideTabContent();
//      showTabContent();

//      tabsParent.addEventListener('click', (event) => {
//          const target = event.target;
//          if (target && target.classList.contains('.tabheader__item')) {
//              tabs.forEach((item, i) => {
//                  if (target == item) {
//                      hideTabContent();
//                      showTabContent(i);
//                  }
//              });
//          }
//      });
//  });
window.addEventListener('DOMContentLoaded', function () {

    // Tabs

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');



    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // Timer 

    //const deadline = '2022-02-20';
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 3);

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);

    // Modal


    const modalWindow = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('[data-close]');

    // btns.addEventListener('click', () => {
    //     btns.forEach(() => {
    //         display.style.display = 'block';
    //     });
    // });

    function openModal() {

        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTime);
    }

    modalWindow.forEach(btn => {
        btn.addEventListener('click', () => {
            //modal.classList.toggle('show');// Переключатель, альт. вариант
            openModal();
        });
    });



    function closeModal() {
        //modal.classList.toggle('show');
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    close.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTime = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    
    window.addEventListener('scroll', showModalByScroll);
    // close.addEventListener('click', () => {
    //     modalWindow.classList.add('hide');
    //     modalWindow.classList.remove('show');
    // });
    // close.addEventListener('click', () => {
    //     display.style.display = 'none';
    // });
    // btn2.addEventListener('click', () => {
    //     display.style.display = 'block';
    // });
    // close.addEventListener('click', () => {
    //     display.style.display = 'none';
    // });

});
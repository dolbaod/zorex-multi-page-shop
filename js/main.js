const swiper = new Swiper('.main-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 700,
});

// const shopSwiper = new Swiper('.shop-swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-shop-button-next",
//         prevEl: ".swiper-shop-button-prev",
//     },
//     // autoplay: {
//     //     delay: 5000,
//     //     disableOnInteraction: false,
//     //   },
//     // speed: 1000,
// });

let delay = 10000;
let counter = 0;
const data = [
    {
        title: 'Faux shearling double-breasted coat',
        where: 'Moscow, Russia'
    },
    {
        title: 'Title of product 2', where: 'Kiev, Ukraine'
    },
    {
        title: 'Title of product 3',
        where: 'Rome, Italy'
    },
];


const changeMarketingData = () => {

    setTimeout(() => {
        document.querySelector('.marketing').classList.remove('marketing--visible');
    }, delay);

    setTimeout(() => {
        document.querySelector('.marketing').classList.add('marketing--visible');
    }, delay + 2000);


    const stringTitle = `${data[counter].title}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;
    

    document.querySelector('.marketing').querySelector('.marketing__heading').textContent = stringTitle;  

    document.querySelector('.marketing').querySelector('.marketing__text-time-place').textContent = stringWhere;

    
    counter++;

    if (counter === data.length) {
        counter = 0;
    }
}

changeMarketingData();

setInterval(changeMarketingData, delay+3000);


const closeMarketing = () => {
    document.querySelector('.marketing').classList.add('none');
}

const marketingNone = () => {
    document.querySelector('.marketing').classList.remove('marketing--visible');
}

document.querySelector('.marketing').addEventListener('click', (e) => {
    if (e.target.classList.contains('marketing__close')) {
        closeMarketing();
    }
    if (e.target.classList.contains('marketing__eye')) {
        marketingNone();
    }
})

// document.querySelector('.filters__item').forEach(el =>{
//     el.addEventListener('click', (e) => {
//         e.currentTarget.classList.toggle('filters__item--open');
//     });
// })

class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
      elLinkTarget.classList.add('tabs__btn_active');
      elPaneTarget.classList.add('tabs__pane_show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }
const tabs = document.querySelectorAll('.tabs');
for (let i = 0, length = tabs.length; i < length; i++) {
  new ItcTabs(tabs[i]);
}

// document.querySelector('.goods__list-item').onclick = function(){
//     document.querySelector('.goods__list-item').classList.toggle('goods__list-item--active');
    
// }
document.querySelectorAll('.goods__list-item').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains('.goods__list-item--active')) {
      }
      else{
        document.querySelectorAll('.goods__list-item').forEach(el => {
          el.classList.remove('goods__list-item--active');
          e.currentTarget.classList.add('goods__list-item--active');
        });
      }
    });
})

document.querySelector('.load-more-btn').onclick = function(){
    document.querySelectorAll('.goods__item').forEach(el => {
        el.classList.remove('goods__item--invisible');
    })
    document.querySelector('.load-more-btn').style.display = 'none';
}
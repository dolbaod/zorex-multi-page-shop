
const shopSwiper = new Swiper('.shop-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: ".swiper-shop-button-next",
        prevEl: ".swiper-shop-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
});

document.querySelectorAll('.filters__item-line').forEach(el => {
    el.addEventListener('click', (e) => {
        e.currentTarget.closest('.filters__item').classList.toggle('filters__item--open');
    });
})

document.querySelector('.filters__hide').addEventListener('click', (e) => {
    document.querySelectorAll('.filters__item').forEach(el => {
        el.classList.remove('filters__item--open');
    });
})

// Column changer

document.querySelector('.column-btns').addEventListener('click', (e) => {
    if (e.target.classList.contains('.column-btn') || e.target.closest('.column-btn')) {
        let columns = e.target.dataset.columns;
        let $columnsBtn = document.querySelectorAll('.column-btn');

        $columnsBtn.forEach(el => {
            el.classList.remove('column-btn--active');
        });

        e.target.classList.add('column-btn--active');

        document.querySelector('.catalog__grid').dataset.gridColumns = columns;
    }
});


//Filter-toggle

const createChoiceItem = (text) => {
    return (
        `
            <button class="catalog__top-filter-btn" data-choice-text="${text}">${text}</button>
            <button class="btn-reset catalog-choice__item"  
        `
    );  
};

document.querySelectorAll('.filters__list-item').forEach(el => {
    el.querySelector('input').addEventListener('change', (e) => {
        console.log(el.querySelector('input'))
        let checked = el.querySelector('input').checked;

        if (checked) {
            console.log('qwe');
            el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
            let text = el.querySelector('.custom-checkbox__text').textContent;

            document.querySelector('.catalog__top-filter-btns').insertAdjacentHTML('afterbegin', createChoiceItem(text));
            // document.querySelector('.catalog__top-filter-btns').style.display = 'block';

        } 
        // else {
        //     el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');

        //     let text = el.querySelector('.custom-checkbox').dataset.text;

        //     document.querySelector(`[data-choice-text="${text}"]`).remove();
        // }

        // el.closest('.catalog-filter').querySelector('.catalog-filter__quantity').textContent = el.closest('.catalog-filter__items').querySelectorAll('.custom-checkbox--active').length;

        let activeCheckboxes = document.querySelector('.custom-checkbox--active');

        if (activeCheckboxes.length > 0) {
            document.querySelector('.catalog__top-filter-btns').style.display = 'block';
        }  
        // else {
        //     // document.querySelectorAll('.filters__list-item').style.display = 'none';
        // }

    });
});

//Select

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// Close-btn

document.querySelector('.top-block__btn').onclick = function(){
    document.querySelector('.top-block').classList.add('top-block--invisible');
    
}

document.querySelector('.filters-reveal').onclick = function(){
  document.querySelector('.filters').classList.toggle('fil-visible');
  
}

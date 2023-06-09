/*====================================================================================================*/
//!---------BODY AND HTML ELEMS-----------------------------------------------------------------------*/
/*====================================================================================================*/
export const mainElems = {
  html: document.documentElement,
  body: document.body,
};
/*====================================================================================================*/

/*====================================================================================================*/
//!---------isWebp FUNCTION---------------------------------------------------------------------------*/
/*====================================================================================================*/
import { isWebp } from './dev/isWebp.js';
isWebp();
/*====================================================================================================*/

/*====================================================================================================*/
//!---------BURGER------------------------------------------------------------------------------------*/
/*====================================================================================================*/
// import { burger } from './dev/burger.js';
// burger();
/*====================================================================================================*/

/*====================================================================================================*/
//!---------CHANGE THEME------------------------------------------------------------------------------*/
/*====================================================================================================*/
// import { changeTheme } from './dev/changeTheme.js';
// changeTheme();
/*====================================================================================================*/

/*====================================================================================================*/
//!---------MODAL-------------------------------------------------------------------------------------*/
/*====================================================================================================*/
// import { modal } from './dev/modal.js';
// modal();
/*====================================================================================================*/

/*====================================================================================================*/
//!---------DROPDOWN----------------------------------------------------------------------------------*/
/*====================================================================================================*/
// import { dropdown } from './dev/dropdown.js';
// dropdown();
/*====================================================================================================*/

/*====================================================================================================*/
//!---------SWIPER------------------------------------------------------------------------------------*/
/*====================================================================================================*/
// import { swiper } from './dev/swiper/swiper.js';
/*====================================================================================================*/

/*====================================================================================================*/
//!---------ANCHOR SCROLL-----------------------------------------------------------------------------*/
/*====================================================================================================*/
import { anchorScroll } from './dev/scroll.js';
anchorScroll();
/*====================================================================================================*/

/*====================================================================================================*/
//!---------TABS--------------------------------------------------------------------------------------*/
/*====================================================================================================*/
// import { tabs } from './dev/tabs.js';
// tabs();
/*====================================================================================================*/

function simpleDropdown() {
  const dropdownToggler = document.querySelector('#dropdownToggler');
  const list = dropdownToggler.nextElementSibling;

  if (dropdownToggler) {
    dropdownToggler.addEventListener('click', (e) => {
      if (dropdownToggler.classList.contains('is-active')) {
        dropdownToggler.classList.remove('is-active');
        list.removeEventListener('click', listClick);
      } else {
        dropdownToggler.classList.add('is-active');
        list.addEventListener('click', listClick);
      }
    });

    function listClick(e) {
      if (e.target.closest('.item-navbar__item')) {
        dropdownToggler.classList.remove('is-active');
        e.currentTarget.removeEventListener('click', listClick);
      }
    }
  }
}

simpleDropdown();

const reloadPage = () => {
  const logos = document.querySelectorAll('.logo');

  if (logos.length > 0) {
    logos.forEach((logo) => {
      logo.addEventListener('click', (e) => {
        e.preventDefault();

        location.reload();
      });
    });
  }
};

reloadPage();

/*====================================================================================================*/
//!---------SPOILER-----------------------------------------------------------------------------------*/
/*====================================================================================================*/
import { spoiler } from './dev/spoiler.js';
spoiler();
/*====================================================================================================*/

import * as $  from 'jquery';
import { Header } from './components/header';
import { MobileMenu } from './components/mobile-menu';
import { MainSlider } from './components/main-slider';
import { Effects} from './components/effects';
import {
    SectionsSelect,
    ApartmentsSelect,
    ApartmentView,
    ApartmentsSearch,
    ApartmentsHorizontalSearch,
    BuildingProgressSlider,
    LocationMap
} from './components/residential-complex';
import {
    CommercialSectionsSelect,
    CommercialApartmentSelect,
} from './components/commercial';
import {
    ObjectsMap
} from './components/common';
import {
    RealizedObjectsSlider
} from './components/realized-objects';
import {
   ParkingSelect,
   ParkingChoices,
   ParkingGallery
} from './components/parking';
import { ModalWindowFullScreen } from './components/modal-window-fullscreen';
import {
    initMaskedInput,
    initFormWithValidate,
    initFillControlInput,
    initPlaceholders
} from './components/form'
import {
    InitFeedbackForm,
    InitFeedbackModalForm
} from './components/feedback-form'

import {
    InitReserveForm
} from './components/reserve-form';


import {Selects} from './components/form';

import {videoOptimization, CustomControls, ResizeMainVideo} from './components/video'

$(function () {
    // скрываем прелоадер страницы если он есть
    const $pagePreloader = $('#page_preloader');
    if ($pagePreloader.length) {
        $pagePreloader.addClass('animate-start');

        setTimeout(() => {
            hidePreloaderPage();
            initScripts();
            $pagePreloader.remove();
        }, 3000);

    } else {
        hidePreloaderPage();
        initScripts();
    }

    function hidePreloaderPage() {
        $('.preloader-page').removeClass('preloader-page');
        setTimeout(() => {
            $('.preloader-page-pxl').remove();
        }, 600);
    }
});


// инициализация скриптов
function initScripts() {
    // инициализация функционала хедера
    new Header();

    // инициализация мобильного меню
    const mobileMenu = new MobileMenu();
    $('body').on('click', '.mobile-menu-toggle-button', function () {
        mobileMenu.toggle();
        return false;
    });

    // слайдер на главной
    new MainSlider();

    // эффекты
    new Effects();

    // расположение и инфраструктура карты
    new LocationMap();

    // расположение и инфраструктура карты с объектами
    new ObjectsMap();

    // выбор секции на странице ЖК
    new SectionsSelect($('#rc_sections'));

    //Выбор квартиры
    new ApartmentsSelect($('#apartments_select'));

    //Просмотр квартиры
    new ApartmentView($('#apartment_view'))

    //Поиск квартир
    new ApartmentsSearch($('#apartments_search'));

    //Горизонатальный блок с фильтром
    new ApartmentsHorizontalSearch($('#apartments_search_filter_horizontal'));

    // выбор секции на странице Коммерческая
    new CommercialSectionsSelect($('#rc_sections-commercial'));

    // выбор апартаментов в секции на странице Коммерческая
    new CommercialApartmentSelect($('#commercial-apartments'));

    // выбор гаражей и паркингов
    new ParkingSelect($('#parking-select'));

    // Кастомизированный select для гаражей и паркингов
    new ParkingChoices();

    // галерея прогресс строительства
    new BuildingProgressSlider('rc_building_progress_slider');

    // галерея ипотека
    new BuildingProgressSlider('mortgage_slider');

    // Слайдер реализованные объекты
    new RealizedObjectsSlider();

    // Форма обратной связи в модалке
    new InitFeedbackModalForm();

    // Форма обратной связи
    new InitFeedbackForm();

    //Форма заявки на бронирование
    new InitReserveForm();

    //Оптимизация видео
    videoOptimization();

    //Кастомные кнопки на видео
    new CustomControls();


    new ResizeMainVideo();


    new ParkingGallery();

    // Инициализация плейсхолдеров и масок
    initMaskedInput();
    initPlaceholders();

    // кноики показать ещё
    $('body').on('click', '[data-show_more_button]', function () {
        const id = $(this).attr('data-show_more_button');
        $(`[data-show_more="${id}"]`).removeClass('hide');
        $(this).remove();
        return false;
    });

    //плавный скролл к якорю
    $('a[href*="#"]').click(function() {
        let $page = $('html, body');

        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 500);
        return false;
    });

    // модальные окна фулскрин
    const modalWindow = new ModalWindowFullScreen();

    if ($('[data-modal="main_info_modal"]').length && !sessionStorage.getItem('promo-modal')) {
        modalWindow.open('main_info_modal', 'open-modal-fade-effect')
        sessionStorage.setItem('promo-modal', 'show')
    }

    const selects = new Selects({searchEnabled:false, itemSelectText: ''});





   //
}

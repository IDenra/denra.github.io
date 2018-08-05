function mainPanelAlignment() {
    let nav = $('.navbar-menu-wrapper');
    let mainPanelMarginTop = nav.offset().top;
    $('.main-panel').css({"margin-top": mainPanelMarginTop});
}
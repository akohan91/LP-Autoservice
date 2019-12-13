window.addEventListener('load', () => {
    let showMenu = $('.show-menu');
    let menu = $(".menu");
    let menuLinks = $('.menu__link');

    showMenu.on('click', (e) => {
        e.preventDefault();
        menu.toggleClass("menu burger-menu-active");
        menuLinks.toggleClass("menu__link burger-menu-link-active");
        showMenu.toggleClass("show-menu-active")
    })
    menuLinks.on('click', menuLinksEvent);

    function menuLinksEvent() {
        if (window.innerWidth < 1024) { 
            menu.toggleClass("menu burger-menu-active ");
            menuLinks.toggleClass("menu__link burger-menu-link-active");
            showMenu.toggleClass("show-menu-active");
        }
    }

        /** При скроле страницы отображает шапку сайта */
        let top = document.querySelector('.top');
        let nav =$('.nav');
        let navHeight = nav.height();
        
        document.addEventListener('scroll', function(){
            if(window.pageYOffset >= navHeight * 3){
                if(!nav.hasClass('fixed')){
                    nav.addClass('fixed');
                    nav.hide();
                    top.style.marginBottom = navHeight + 'px';
                    nav.fadeIn(500);
                }
            }
            else {
                nav.removeClass('fixed');
                top.style.marginBottom = '';
            }
        })
});
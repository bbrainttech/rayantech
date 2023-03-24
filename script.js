const q = (x, y) => {
    return (y == null) ? document.querySelector(x) : document.querySelectorAll(x);
},
    change_my_pic = () => {
        let images = ['m1', 'me3', 'her1_e', 'me_edited-Phopng'],
            i = 0;
        setInterval(() => {
            if (i > images.length - 1) { i = 0 }
            me.innerHTML = `<img src="img/my_self/${images[i]}.png" data-aos="fade-up" data-aos-duration="2000">`;
            i++;
        }, 10000)
    }, loading_and_toggle_menu = () => {
        const loader = q('.loading');
                loader.classList.add('off');

        const menu_btn = q("header nav .menu button");

        menu_btn.onmousedown = function () {
            this.classList.toggle('press');
            lst.classList.toggle('off')
        }
    }, update_btn = () => {
        let btn1 = q('#nice_btn'), btn2 = q('#gst'), swap = btn1.innerHTML;
        const change_btn = () => {
            if (window, innerWidth <= 600) {
                btn1.id = 'off'
                btn1.classList.add('hide')
                btn2.innerHTML = swap;
                btn2.id = 'nice_btn'
            } else {
                btn1.id = 'nice_btn'
                btn1.classList.remove('hide')
                btn2.id = 'gst'
                btn2.innerHTML = 'Get Started <span><i class="fa fa-arrow-right"></i></span>'
            }
            customize_theme();
        }
        change_btn();
        window.onresize = () => { change_btn(); }
        window.onload = () =>{change_btn();}

    },
    customize_theme = () => {
        const get_started = q('#nice_btn'),
            theme_dialog = q(".theme_customizer"),
            close_modal = q('.close_modal');
        get_started.onmousedown = () => {
            theme_dialog.showModal();
        }
        close_modal.onmousedown = () => {
            theme_dialog.close();
        }
        theme_dialog.onmousedown = function(){
            this.close();
        }
    };


AOS.init({
    duration: 1000
});
window.onscroll = () => {
    if (window.pageYOffset > 10) {
        q('.scroll_to_top').classList.add('show')
        q('nav').classList.add('show')
        q('#lst').classList.add('fix');
        if(q('.abt_txt')){
            q('.abt_txt').style.top = '0';
        }
    } else {
        q('nav').classList.remove('show')
        q('.scroll_to_top').classList.remove('show')
        q('#lst').classList.remove('fix')
        if(q('.abt_txt')){
            q('.abt_txt').style.top = 'var(--abt)';
        }
    }
}
update_btn()
loading_and_toggle_menu();
change_my_pic();



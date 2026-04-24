window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})
/* Код для анимации прокрутки страницы к якорю */
var $page = $('html, body')
$('a[href*="#"]').click(function () {
	$page.animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top,
		},
		750
	)
	return false
})
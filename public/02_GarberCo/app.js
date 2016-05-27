window.onload = function() {
	console.log('Page loaded.');

	window.setTimeout(function() {
		var myBody = document.getElementsByTagName('body')[0];
		myBody.classList.remove('loading');
	}, 1000);
};

function showAboutPage() {
	var aboutPage = document.getElementsByTagName('section')[0];
	var mainPage = document.getElementsByTagName('main')[0];
	var body = document.getElementsByTagName('body')[0];

	movePage(body, aboutPage, mainPage);
};

function movePage(body, aboutPage, mainPage) {
	var onAboutPage = body.classList.contains('about');

	if(onAboutPage) {
		aboutPage.style.left = '-100%';
		mainPage.style.left = '0%';
		body.classList.remove('about');
	} else {
		aboutPage.style.left = '0%';
		mainPage.style.left = '100%';
		body.classList.add('about');
	}
}

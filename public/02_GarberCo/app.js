window.onload = function() {
	console.log('Page loaded.');

	window.setTimeout(function() {
		var myBody = document.getElementsByTagName('body')[0];
		myBody.className = removeClassName(myBody.className, 'loading');
	}, 1000);
};

function removeClassName(classList, classToRemove) {
	return classList.replace(new RegExp(classToRemove), '');
};

function showAboutPage() {
	var aboutPage = document.getElementsByTagName('section')[0];
	var mainPage = document.getElementsByTagName('main')[0];

	movePage(window.Page, aboutPage, mainPage);
	updatePageStatus();
};

function movePage(pageStatus, aboutPage, mainPage) {
	var body = document.getElementsByTagName('body')[0];

	if(pageStatus === 'left') {
		aboutPage.style.left = '-100%';
		mainPage.style.left = '0%';
		body.classList = '';
	} else {
		aboutPage.style.left = '0%';
		mainPage.style.left = '100%';
		body.classList = 'about';
	}
}

function updatePageStatus() {
	if(window.Page === 'left') {
		window.Page = 'right';
	} else {
		window.Page = 'left';
	}
}

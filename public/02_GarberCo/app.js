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

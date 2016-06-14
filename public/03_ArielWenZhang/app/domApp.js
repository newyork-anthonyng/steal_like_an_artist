var domApp = (function(textTracker, typingDisplay) {

	var intervalId;

	function init(textArray) {
		if(!Array.isArray(textArray)) return false;

		textTracker.set(textArray);
		typingDisplay.set(textTracker.next());
	}

	function next() {
		var text = typingDisplay.getNext();

		if(text === false) typingDisplay.set(textTracker.next());

		return text;
	}

	function setElementText(ele, text) {
		ele.textContent = text;
	}

	function play(params) {
		var missingParams = !(params['element'] && params['typingSpeed'] && params['pauseDelay']);
		if(missingParams) return false;

		intervalId = createNewInterval(params);
	}

	function createNewInterval(params) {
		return setInterval(function() {
			var text = next();

			if(text === false) {
				createDelay(params);
				return;
			}

			setElementText(params['element'], text);
		}, params['typingSpeed']);
	}

	function createDelay(params) {
		clearInterval(intervalId);
		setTimeout(function() {
			intervalId = createNewInterval(params);
		}, params['pauseDelay']);
	}

	function hoverOverImage(myEvent, myElement) {
		var xPercentage = ((myEvent.pageX - $(myElement).offset().left) / $(myElement).width()) * 100 + '%';
		var yPercentage = ((myEvent.pageY - $(myElement).offset().top) / $(myElement).height()) * 100 + '%';

	return xPercentage + ' ' + yPercentage;
	}

	return {
		init: init,
		next: next,
		setElementText: setElementText,
		play: play,
		hoverOverImage: hoverOverImage
	};
})(textTracker, typingDisplay);

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

		intervalId = setInterval(function() {
			var text = next();

			if(!text) {
				setTimeout(function() {}, params['pauseDelay']);
				return;
			}

			setElementText(params['element'], text);
		}, params['typingSpeed']);
	}

	return {
		init: init,
		next: next,
		setElementText: setElementText,
		play: play
	};
})(textTracker, typingDisplay);

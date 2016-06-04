var textTracker = (function() {

	var _text;
	var _currentIndex;

	function set(text) {
		if(!Array.isArray(text)) return false;

		_text = text;
		_currentIndex = 0;
	};

	function get() {
		return _text;
	};

	function clear() {
		_text = undefined;
	};

	function next() {
		var result = _text[_currentIndex];

		_currentIndex++;
		if(_currentIndex >= _text.length) _currentIndex = 0;

		return result;
	};

	return {
		set: set,
		get: get,
		clear: clear,
		next: next
	};
})();

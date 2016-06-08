describe('textTracker', function() {

	describe('#set', function() {
		afterEach(function() {
			textTracker.clear();
		});

		it('should set array of text', function() {
			expect(textTracker.get()).not.toBeDefined();
			textTracker.set(['a', 'b', 'c']);
			expect(textTracker.get()).toEqual(['a', 'b', 'c']);
		});

		it('should only accept arrays', function() {
			textTracker.set('abc');
			expect(textTracker.get()).not.toBeDefined();
		});
	});

	describe('#get', function() {
		it('should get an array of text', function() {
			textTracker.set(['foo', 'bar']);
			expect(textTracker.get()).toEqual(['foo', 'bar']);
		});
	});

	describe('#clear', function() {
		it('should set array of text to undefined', function() {
			textTracker.set(['foo']);
			expect(textTracker.get()).toBeDefined();

			textTracker.clear();
			expect(textTracker.get()).not.toBeDefined();
		});
	});

	describe('#next', function() {
		var result;

		it('should get first text element when first called', function() {
			textTracker.set(['1', '2', '3']);

			result = textTracker.next();
			expect(result).toEqual('1');
		});

		it('should get second text element when called again', function() {
			result = textTracker.next();
			expect(result).toEqual('2');
		});

		it('should get third text element when called again', function() {
			result = textTracker.next();
			expect(result).toEqual('3');
		});

		it('should loop the text array and get the first text element', function() {
			result = textTracker.next();
			expect(result).toEqual('1');
		});
	});
});

describe('#typingDisplay', function() {

	describe('#set', function() {
		afterEach(function() {
			typingDisplay.clear();
		});

		it('should set current text', function() {
			expect(typingDisplay.getFullText()).not.toBeDefined();
			typingDisplay.set('abc');

			expect(typingDisplay.getFullText()).toEqual('abc');
		});

		it('should only accept strings', function() {
			var result = typingDisplay.set(123);
			expect(result).toBe(false);

			expect(typingDisplay.getFullText()).not.toBeDefined();
		});
	});

	describe('#getFullText', function() {

		it('should get full current text', function() {
			typingDisplay.set('abc');
			expect(typingDisplay.getFullText()).toEqual('abc');
		});
	});

	describe('#clear', function() {

		it('should clear current text', function() {
			typingDisplay.set('abc');
			expect(typingDisplay.getFullText()).toBeDefined();

			typingDisplay.clear();
			expect(typingDisplay.getFullText()).not.toBeDefined();
		});
	});

	describe('#getNext', function() {

		it('should return only first character of string', function() {
			typingDisplay.set('abc');
			var result = typingDisplay.getNext();

			expect(result).toEqual('a');
		});

		it('should include second character of string', function() {
			var result = typingDisplay.getNext();

			expect(result).toEqual('ab');
		});

		it('should include third character of string', function() {
			var result = typingDisplay.getNext();

			expect(result).toEqual('abc');
		});

		it('should return false after entire string is displayed', function() {
			var result = typingDisplay.getNext();

			expect(result).toBe(false);
		});
	});
});

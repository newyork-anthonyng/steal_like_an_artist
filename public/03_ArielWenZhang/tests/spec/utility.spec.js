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

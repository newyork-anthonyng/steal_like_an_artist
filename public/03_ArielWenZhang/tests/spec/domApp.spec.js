describe('domApp', function() {

	describe('#setElementText', function() {
		it('should set textContent of element', function() {
			var ele = document.createElement('div');
			document.body.appendChild(ele);

			domApp.setElementText(ele, 'foo');
			expect(ele.textContent).toEqual('foo');

			document.body.removeChild(ele);
		});
	});

	describe('#init', function() {
		it('should accept an array of text', function() {
			spyOn(textTracker, 'set');
			domApp.init(['a', 'b', 'c']);

			expect(textTracker.set).toHaveBeenCalledTimes(1);
		});

		it('should only accept arrays', function() {
			var result = domApp.init('abc');

			expect(result).toBe(false);
		});

		it('should set up typingDisplay with an initial word', function() {
			spyOn(typingDisplay, 'set');
			domApp.init(['a', 'b', 'c']);

			expect(typingDisplay.set).toHaveBeenCalledTimes(1);
		});
	});

	describe('#next', function() {
		it('should get the next typing animation text', function() {
			domApp.init(['abcd', 'efg']);
			var result = domApp.next();

			expect(result).toEqual('a');
		});

		it('should get all subsequent letters of the first string', function() {
			var result = domApp.next();
			expect(result).toEqual('ab');
			result = domApp.next();
			expect(result).toEqual('abc');
			result = domApp.next();
			expect(result).toEqual('abcd');
		});

		it('should return false after finishing a word', function() {
			var result = domApp.next();
			expect(result).toBe(false);
		});

		it('should get all subsequent letters of the second string', function() {
			var result = domApp.next();
			expect(result).toEqual('e');
			result = domApp.next();
			expect(result).toEqual('ef');
			result = domApp.next();
			expect(result).toEqual('efg');
		});

		it('should loop over after finishing the last string', function() {
			var result = domApp.next();
			expect(result).toBe(false);
			domApp.next();
			domApp.next();
			domApp.next();
			result = domApp.next();
			expect(result).toEqual('abcd');
		});
	});

	describe('#play', function() {
		var timerCallback;
		var ele;

		beforeEach(function() {
			domApp.init(['abcd', 'efgh']);

			timerCallback = jasmine.createSpy('timerCallback');
			jasmine.clock().uninstall();
			jasmine.clock().install();
		});

		beforeEach(function() {
			ele = document.createElement('div');
			document.body.appendChild(ele);
		});

		afterEach(function() {
			document.body.removeChild(ele);
		});

		it('should return false if element parameter isn\'t passed', function() {
			var result = domApp.play({
				typingSpeed: 0,
				pauseDelay: 0
			});

			expect(result).toBe(false);
		});

		it('should return false if typingSpeed parameter isn\'t passed', function() {
			var result = domApp.play({
				element: document.createElement('div'),
				pauseDelay: 0
			});

			expect(result).toBe(false);
		});

		it('should return false if pauseDelay parameter isn\'t passed', function() {
			var result = domApp.play({
				element: document.createElement('div'),
				typingSpeed: 0
			});

			expect(result).toBe(false);
		});

		it('should set the element text with the next typing animation', function() {
			domApp.play({
				element: ele,
				typingSpeed: 500,
				pauseDelay: 1000
			});

			expect(ele.textContent).toEqual('');

			jasmine.clock().tick(501);
			expect(ele.textContent).toEqual('a');
			jasmine.clock().tick(500);
			expect(ele.textContent).toEqual('ab');
			jasmine.clock().tick(500);
			expect(ele.textContent).toEqual('abc');
			jasmine.clock().tick(500);
			expect(ele.textContent).toEqual('abcd');
		});

		it('should have a pause between words', function() {
			domApp.play({
				element: ele,
				typingSpeed: 500,
				pauseDelay: 1000
			});

			jasmine.clock().tick(2000);
			expect(ele.textContent).toEqual('abcd');

			jasmine.clock().tick(999);
			expect(ele.textContent).toEqual('abcd');

			jasmine.clock().tick(1);
			expect(ele.textContent).toEqual('e');

			jasmine.clock().tick(1500);
			expect(ele.textContent).toEqual('efgh');

			jasmine.clock().tick(999);
			expect(ele.textContent).toEqual('efgh');

			jasmine.clock().tick(1);
			expect(ele.textContent).toEqual('a');
		});
	});
});

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* I let all of the tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	//This the first part of the test and check if all of Feed are empty or not.
	describe('RSS Feeds', function() {
		//check if var all is defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		//Check if names of feeds are defined.
        it("name are defined", function(){
            for( i =0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
		//Check if url of feeds are defined
        it("URL are defined", function(){
            for( i =0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });
    });
	//Secondly we check the hamburger menu if it works good.
    describe('The menu', function(){
		//Check if he start hide when we oppen the wweb page
        it('menu hidden', function(){
          expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
		//Check if it hide or show when we click on it.
        it('menu changes', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    });

    describe('initial Entries', function(){
		//This is for asynchronus function load the first feed before begin the test
        beforeEach(function (done) {
            loadFeed(0, function(){
                done();
            });
        });
		//Check if entry has more than 0 entries
        it('define if entry has more than 0 entries', function(){
            expect($('.feed')).not.toBeNull();
			expect($('.entry')).not.toBeNull();
			expect($('.entry')).toBeDefined();
        });
    });
	//Check if it changes content when new feed is load
    describe('New Feed Selection', function(){
		let prevUrl;
		let newUrl;
		//load first feed in prevUrl variable
        beforeEach(function(done){
            loadFeed(0, function () {
                prevUrl = $('.feed').find(allFeeds.url);
                done();
            });
			//load second feed in next variable.
            loadFeed(1, function () {
                newUrl = $('.feed').find(allFeeds.url);
				
                done();   
            });
        });
		//And check that prevUrl and newUrl if they are diffrent
		it('changes content when new feed is load', function(){
				expect(prevUrl).not.toEqual(newUrl);
				});

    });

});
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it("name are defined", function(){
            for( i =0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });

        it("URL are defined", function(){
            for( i =0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });
    });

    describe('The menu', function(){

        it('menu hidden', function(){
          expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        it('menu changes', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    });

    describe('initial Entries', function(){

        beforeEach(function (done) {
            loadFeed(0, function(){
                done();
            });
        });

        it('define if entry has more than 0 entries', function(){
            expect($('.entry .Feed')).toBeDefined();
        });
    });

    describe('New Feed Selection', function(){

        beforeEach(function(done){
            $('.feed').empty();
            loadFeed(0, function () {
                entriesStart = $('.feed').find(allFeeds.url);
                done();
            });
            loadFeed(1, function () {
                entriesStart = $('.feed').find(allFeeds.url);
                done();   
            });
        });

    });

});
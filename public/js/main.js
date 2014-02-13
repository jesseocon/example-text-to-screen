// this is the main file with the document ready statement

$(document).ready(function(e){
    $('#mo-section').textToScreen({
        base_url: 'https://connect.mogreet.com/displays',
        campaignId: 25013,
        maxMessageLength: 120, 
        messageEndString: '***',
        brokenImageSrc: 'img/gallery/sample.jpg',
        phoneImageSrc: 'img/phone.png',
        instagramImageSrc: 'img/instagram.png',
        twitterImageSrc: 'img/twitter.png',
        photoInterval: 10000,
        messageInterval: 10000
    });
});

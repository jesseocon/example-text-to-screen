// this is the main file with the document ready statement

$(document).ready(function(e){
    $('#mo-section').textToScreen({
        base_url: 'https://3e724f07.ngrok.com/displays',
        campaignId: 23900,
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

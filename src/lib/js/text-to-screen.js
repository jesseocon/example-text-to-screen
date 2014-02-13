(function($){
    // text-to-screen.js version 1.0.2    
    $.fn.textToScreen = function(options) {
       
        if ($(this).length > 0) 
        {
            var $this           = $(this),
                brokenImage     = new Image();
                instagramImage  = new Image();
                phoneImage      = new Image();
                twitterImage    = new Image();
            
            var defaults = {
                base_url: '/displays',
                jsonp_url: 'http://localhost:3000/displays',
                twitterImageSrc: '../img/twitter.png',
                instagramImageSrc: '../img/instagram.png',
                phoneImageSrc: '../img/phone.png',
                brokenImageSrc: '../img/sample.jpg',
                logoImageTarget: '#tweet-context img',
                messageTextTarget: '#tweet',
                imageTarget: '#mo-section',
                campaignId: '55555',
                maxMessageLength: 35,
                messageEndString: '...',
                messageInterval: 10000,
                photoInterval: 10000,
                matchingPhotos: [],
                matchingTexts: [],
                messagePageNo: 1,
                imagePageNo: 1,  
            };
             
            var options = $.extend(defaults, options);
            var messageWaitTime = 10000;
            var imageWaitTime   = 10000;
            
            brokenImage.src     = defaults.brokenImageSrc;
            instagramImage.src  = defaults.instagramImageSrc;
            phoneImage.src      = defaults.phoneImageSrc;
            twitterImage.src    = defaults.twitterImageSrc;
            
            function getMessages(){
                
                var jqxhr = $.ajax({
                    url: defaults.base_url,
                    type: 'GET',
                    data: { 
                        campaign_id: defaults.campaignId,
                        page: defaults.messagePageNo,
                        status: 'approved'
                    },
                    dataType: 'jsonp',
                    
                })
                .done(function(data){
                    if (data.mos.length == 0 && data.sponsored_messages.length == 0)
                    {
                        var ta = messageWaitTime;
                        messageWaitTime = messageWaitTime * 2
                        sleepNoMessages(ta);
                    }
                    else
                    {
                        var messageItems        = [],
                            curMessageIndex     = 0,
                            currentPageNo       = parseInt(data.prefs.page_no),
                            nextPageNo          = currentPageNo + 1;
                            bigArray            = data.sponsored_messages.concat(data.mos)
                        defaults.messagePageNo = nextPageNo;
                      
                        $.each(bigArray, function(index, value){
                            var message = value.message,
                                handle = value.handle;
                            
                            // checks if the tweet is longer than the defaults.maxTweetLength
                            // if so the tweet is truncated to that length and '...' is added
                            if ( message.length > defaults.maxMessageLength )
                            {
                                message = message.substring(0, defaults.maxMessageLength) + defaults.messageEndString;
                            }
                        
                            messageItems.push('<span data-type="'+value.is_type+'" data-id="'+value.id+'">'+value.handle+': '+message+'</span></p>');
                        
                        
                        });
                        
                        function setMessage(messageItem) {
                            var type = $(messageItem).data('type')
                            if ( type == 'twitter' ) 
                            {
                                $(defaults.logoImageTarget).attr('src', twitterImage.src);
                            }
                            else if ( type == 'instagram' ) 
                            {
                                $(defaults.logoImageTarget).attr('src', instagramImage.src);
                            }
                            else
                            {
                                $(defaults.logoImageTarget).attr('src', phoneImage.src);
                            }
                            $(defaults.messageTextTarget).html(messageItem);
                        }
                    
                    
                        setMessage(messageItems[0]);
                    
                        function advanceMessage(){
                            ++curMessageIndex;
                            setMessage(messageItems[curMessageIndex])
                        }
                    
                    
                        var intervalID = setInterval(function(){
                            if ( curMessageIndex >= (messageItems.length - 1))
                            {
                                clearInterval(intervalID);
                                getMessages();
                            }
                            else
                            {
                                advanceMessage();
                            }
                        }, defaults.messageInterval)
                    } 
                    
                })
                .fail(function(data){
                    getMessages();
                })
            } // end get messages 
            
            function getImages() {
                
                var jqxhr = $.ajax({
                   url: defaults.base_url,
                   type: 'GET',
                   data: {
                       campaign_id: defaults.campaignId,
                       page: defaults.imagePageNo,
                       status: 'approved',
                       media: 'with_media'
                   },
                   dataType: 'jsonp' 
                })
                .done(function(data){
                    if ( data.mos.length == 0 )
                    {
                        ta = imageWaitTime
                        imageWaitTime = imageWaitTime * 2
                        sleepNoImages(ta);
                    }
                    else
                    {
                        var imageItems              = [],
                            curImageIndex           = 0,
                            imagesArray             = [],
                            imageUrls               = [],
                            currentImagePageNo      = parseInt(data.prefs.page_no),
                            nextImagePageNo         = currentImagePageNo + 1;
                            defaults.imagePageNo = nextImagePageNo
                    
                    
                     
                        $.each(data.mos, function(index, value){
                            imageUrls.push(value.content_url);
                        });
                    
                        preloadimages(imageUrls).done(function(images){
                            $.each(data.mos, function(index, value){
                               
                                var i = index;
                                imageItems.push('<img class="img-feed" data-id="'+value.id+'" src="'+images[i].src+'"/>');
                            });
                            function setImage(imageItem) {
                                $(defaults.imageTarget).html(imageItem);
                            }

                           setImage(imageItems[0]);
                           function advanceImage(){
                              ++curImageIndex;
                              setImage(imageItems[curImageIndex]); 
                           }
                           var intervalID = setInterval(function(){
                                if ( curImageIndex >= ( imageItems.length - 1))
                                {
                                    clearInterval(intervalID);
                                    getImages();
                                    return;
                                }
                                else
                                {
                                    advanceImage();
                                }
                          }, defaults.photoInterval);
                        });
                        //console.log(imageItems); 
                        // function setImage(imageItem) {
                        //     $(defaults.imageTarget).html(imageItem);
                        // }
                    
                        // setImage(imageItems[0]);
                    
                        // function advanceImage(){
                        //    ++curImageIndex;
                        //    setImage(imageItems[curImageIndex]); 
                        // }
                    
                        // var intervalID = setInterval(function(){
                        //     if ( curImageIndex >= ( imageItems.length - 1))
                        //     {
                        //         clearInterval(intervalID);
                        //         getImages();
                        //         return;
                        //     }
                        //     else
                        //     {
                        //         advanceImage();
                        //     }
                        // }, defaults.photoInterval);
                    
                    }
                    
                })
                .fail(function(data){
                    getImages();
                });
            }
            
            function sleepNoImages(timeAmount) {
                setTimeout(function(){
                    getImages();
                }, timeAmount);
            }
             
            function sleepNoMessages(timeAmount) {
                setTimeout(function(){
                   getMessages(); 
                }, timeAmount);
            }
            
            function preloadimages(arr) {
            	var newimages = [], loadedimages = 0;
            	var postaction=function() {};
            	var arr = (typeof arr!="object") ? [arr] : arr;

            	function imageloadpost() {
            		loadedimages ++

            		if (loadedimages == arr.length) {
            			postaction(newimages);// call postaction and pass in new images array as parameter
            		}
            	}

            	for (var i=0; i < arr.length; i++) {
            		newimages[i] = new Image();
            		newimages[i].src = arr[i];
            		newimages[i].onload = function(){
            			imageloadpost();
            		}
            		newimages[i].onerror = function(){

            			this.src = brokenImage.src;  // if this method is going to be separate then
                                                      // the default image must be passed in.
            			imageloadpost();
            		}
            		newimages[i].onabort = function(){
            		}
            	}
            	return { // return blank object with done() method
            		done:function(f){
            			postaction=f || postaction // remember user defined callback functions to be called when images load
            		}
            	}
            } // end of preload images
            
            getMessages();
            getImages();
        }// end main logic
    }
})(jQuery);

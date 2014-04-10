# example-text-to-screen-client #

This is a sample app intended to provide an example of how to implement a Text to Screen client for Mogreet's flagship Campaign Manager application.

The example-text-to-screen-client can be viewed at: [Example Application](http://example-text-to-screen-client.herokuapp.com)

## Usage ##

**1. Clone the repo or download the zip file of the sample app.**

**2. Include the src/lib/js/text-to-screen.js file in the head of your html page.**

```html
<head>
    <script src='js/text-to-screen.js'></script>
</head>
```

**3. Prepare the HTML page elements to accept images and text**
```html
<!-- The area that will contain the images-->
<div id='mo-section'>
    <!-- a placeholder image for displaying while the ajax call is being made -->
    <img src='img/gallery/sample.jpg' />
</div>


<div id='twitter'>
    <div id='tweet-context'>
        <!-- placeholder icon for displaying while the ajax call is being made -->
        <img src='img/twitter.png' />
    </div>
    <div id='tweet-section'>
        <p id='tweet'>@tomlap: Some tweet text for your text to screen client!</p>
    </div>
</div>
```

**4. In your main.js file or other js file that contains your client side logic the textToScreen method should be called on either the element that will contain the images or (instagrams, mos, or tweets)**

```javascript
$(document).ready(function(){
    $('#mo-section').textToScreen({
        base_url: 'https://connect.mogreet.com/displays',// url that the ajax calls for images and text will be made to.
        logoImageTarget: '#tweet-context img', // element that the instagram, phone or twitter icon will be inserted into
        messageTextTarget: '#tweet',// element that text from instagram, mo or tweet will be inserted into.
        imageTarget: '#mo-section',// element that images from instagram, mo or tweets will be inserted into.
        brokenImageSrc: 'img/gallery/sample.jpg', // image to display so that no broken links appear.
        phoneImageSrc: 'img/phone.png', // phone icon for logoImageTarget element
        instagramImageSrc: 'img/instagram.png',// Instagram icon for logoImageTarget element
        twitterImageSrc: 'img/twitter.png',// Twitter icon for logoImageTarget element
        campaignId: 23900,// Campaign Manager campaign id to enable pulling content from the correct event.
        maxMessageLength: 120,  // truncates the length of the messageTextTarget to this number of characters.
        messageEndString: '<<<',//text to display to represent truncated text in the messageTextTarget element
        photoInterval: 10000,// time in milliseconds that each photo will display
        messageInterval: 10000// time in milliseconds that each Instagram, MO, or Tweet text will display
    });
});
```

## Settings: text-to-screen.js ##

<table width=500 >
  <thead>
    <tr>
      <th>Property</th>
      <th>Default</th>
      <th width=80%>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style='vertical-align:top;'>base_url</td>
      <td>'/displays'</td>
      <td>Sets the path to the campaign manager displays controller.  The default is the localhost server
      For setting to a production url in the campaign manager set the base_url to https://connect.mogreet.com/displays
      </td>
    </tr>
    <tr>
      <td>twitterImageSrc</td>
      <td>'../img/twitter.png'</td>
      <td>The icon for twitter that will display next to tweets in the messageTextTarget html element</td>
    </tr>
    <tr>
      <td>instagramImageSrc</td>
      <td>'../img/instagram.png'</td>
      <td>The icon for instagram that will display next to instagrams in the messageTextTarget html element 
      </td>
    </tr>
    <tr>
      <td>phoneImageSrc</td>
      <td>'../img/phone.png</td>
      <td>
        The icon for a Mobile Originated message (MO) that will display in the messageTextTarget html element
      </td>
    </tr>
    <tr>
      <td>brokenImageSrc</td>
      <td>'../img/sample.jpg'</td>
      <td>
        The photo that will be displayed in the case that the image for an Instagram, MO, or Tweet cannot be
        retrieved.
      </td>
    </tr>
    <tr>
      <td>logoImageTarget</td>
      <td>'#tweet-context img'</td>
      <td>The id of the element where the Instagram, MO, or Twitter icon will be displayed</td>
    </tr>
    <tr>
      <td>messageTextTarget</td>
      <td>'#tweet'</td>
      <td>The id of the element where the body of textual body of the Instagram, MO, or Tweet will be displayed</td>
    </tr>
    <tr>
      <td>imageTarget</td>
      <td>'#mo-section'</td>
      <td>The id of the element where the image of the Instagram, MO, or Tweet will be displayed</td>
    </tr>
    <tr>
      <td>campaignId</td>
      <td>'55555'</td>
      <td>The Campaign Manager campaign_id of the text to screen campaign</td>
    </tr>
    <tr>
      <td>maxMessageLength</td>
      <td>35</td>
      <td>
        'The maximum number of characters that will be displayed in the messageTextTarget html element
      </td>
    </tr>
    <tr>
      <td>messasgeEndString</td>
      <td>'...'</td>
      <td>
        The text that should be displayed to represent the truncated text configured from the 
        maxMessageLength setting
      </td>
    </tr>
    <tr>
      <td>messsageInterval</td>
      <td>10000</td>
      <td>
        The number of miliseconds that each Instagram, MO, or Tweet textual body will display on 
        screen before displaying the next one.
      </td>
    </tr>
    <tr>
      <td>photoInterval</td>
      <td>10000</td>
      <td>
        The number of miliseconds that each Instagram, MO, or Tweet image will display on screen
        before displaying the next one.
      </td>
    </tr>
    <tr>
      <td>messagePageNo</td>
      <td>1</td>
      <td>
        The page number that the text from an Instagram, MO, or Tweet will display when the page is first shown 
        or the browser is refreshed.
      </td>
    </tr>
    <tr>
      <td>imagePageNo</td>
      <td>1</td>
      <td>
        The page number that the image from an Instagram, MO, or Tweet will display when the page is first show
        or the browser is refreshed.
      </td>
    </tr>
    <tr>
      <td>imageStati</td>
      <td>['approved']</td>
      <td>
        The an array of status types of images that you would like to have returned. Possible values are 'approved', 'pending', 
        'rejected', 'or blocked'
      </td>
    </tr>
    <tr>
      <td>messageStati</td>
      <td>['approved']</td>
      <td>
        The an array of status types of messages that you would like to have returned. Possible values are 'approved', 'pending', 
        'rejected', 'or blocked'
      </td>
    </tr>
    <tr>
      <td>earliest</td>
      <td>null</td>
      <td>
        Farthest date in the past that Mos will show up.  For example 'earliest':'2014-04-10' will show
        only messages and images from 4/10/2014 to the present
        Format: 'YYYY-MM-DD'
      </td>
    </tr>
    <tr>
      <td>latest</td>
      <td>null</td>
      <td>
        Latest date in the past that Mos will show up.  For example 'latest':'2014-04-10' will show
        only messages and images from 4/10/2014 and farther into the past 
        Format: 'YYYY-MM-DD'
      </td>
    </tr>
  </tbody>
</table>


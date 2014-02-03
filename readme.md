# example-text-to-screen-client #

This is a sample app intended to provide an example of how to implement a Text to Screen client for Mogreet's flagship Campaign Manager application.

## Settings: text-to-screen.js ##

<table width=500 >
  <thead>
    <tr>
      <td>Property</td>
      <td>Default</td>
      <td width=80%>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>base_url</td>
      <td>'/displays'</td>
      <td>Sets the path to the campaign manager displays controller.  The default is the localhost server
      For setting to a production url in the campaign manager set the base_url to https://connect.mogreet.com/displays
      </td>
    </tr>
    <tr>
      <td>twitterImageSrc</td>
      <td>'../img/twitter.png'</td>
      <td>The icon for twitter that will display next to tweets in the TEXT AREA (THIS SHOULD BE A DEFINED TERM) next to 
      the body of the tweet</td>
    </tr>
    <tr>
      <td>instagramImageSrc</td>
      <td>'../img/instagram.png'</td>
      <td>The icon for instagram that will display next to instagrams in the TEXT AREA (THIS SHOULD BE A DEFINED TERM) 
      next to the body of the instagram.
      </td>
    </tr>
    <tr>
      <td>phoneImageSrc</td>
      <td>'../img/phone.png</td>
      <td>
        The icon for a Mobile Originated message (MO) that will display in the TEXT AREA (THIS SHOULD BE A DEFINED
        TERM) next to the body of the MO.
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
        'The maximum number of characters that will be displayed in the TEXT AREA (THIS ARE NEEDS TO BE A DEFINED
        TERM)
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
  </tbody>
</table>

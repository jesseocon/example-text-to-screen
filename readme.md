# example-text-to-screen-client #

This is a sample app intended to provide an example of how to implement a Text to Screen client for Mogreet's flagship Campaign Manager application.

## Settings ##

This example assumes that you have already created a Text To Screen campaign in the campaign manager.

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
      <td style='color:green'>base_url</td>
      <td>'http://localhost:3000/displays</td>
      <td>Sets the path to the campaign manager displays controller.  The default is the localhost server
      For setting to a production url in the campaign manager set the base_url to https://connect.mogreet.com/displays
      </td>
    </tr>
  </tbody>
</table>

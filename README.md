# Project Title

Day 17 Assignemt

## Project Description

This is a project around using HTTP requests to use an API. Originally done using HTML, the endpoint was slow to render because of needing to use 'no-cors', so instead I used NodeJS and the request npm package to render data from the endpoint. This resulted in a much faster response.

### Things to know

The npm packages needed are express, body-parser, ejs, and request.

This is a fairly simple Node app. The root route renders the index page containing a form. Upon submitting the form, the post route is called. The post route fetches the recipepuppy endpoint, using the value of the input in the form in the query string.

The data from the endpoint is parsed and rendered through a loop in the results.ejs page. If an image does not exist, a placeholder image is used.

Using CSS, the 'results-container' div is enlarged upon hovering. Also, the background image changes to a slightly darker image.

This app is setup to run on either the process.env port or localhost://3000 on your machine. 

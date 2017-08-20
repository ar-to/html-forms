# html-forms
Tests using forms, inputs and server side handlers via nodejs, express, and more.

## Instructions

make sure you have a current version of node installed

clone git repository and move into directory

```
git clone https://github.com/ar-to/html-forms.git
cd html-forms
```

install dependencies

`npm i`

start server

`npm start` or `node server.js`

test forms

## Development

If you want to experiment with the code and make new forms or changes to the existing forms then follow the notes below. You will notice that I did not use a task runner like gulp/grunt because I wanted to test how all of these tools would work independently but also because I tend to run them globally when I'm making test projects like these.

This project uses:

[nodemon](https://github.com/remy/nodemon#nodemon) - to reload server when file are changed

[browser-sync](https://www.browsersync.io/docs) - to reload browser when files are changed. When you run browser-sync it will give you the option to use your computer loop IP called locahost or your local network IP so you can see it in any computer or device connected to the same internet.

[browserify](http://browserify.org) - to bundle the javascript modules inside `www/js/`

[watchify](https://github.com/substack/watchify) - to watch for file changes and rebuild the bundle.js.


Install browserify, watchify, nodemon and browser-sync

`npm i --save-dev browserify watchify nodemon browser-sync`

to watch for changes in your files and restart server, open terminal and run

`npm run nodemon`

to watch changes in inside public directory `./www` and serve them to reload browser, open new terminal window and run

`npm run browser-sync`

to create bundle.js once, open new terminal window and run

`npm run browserify`

or to watch for changes inside main.js and re-bundle

`npm run watchify`


## Resources

* [Form Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)

* [form widgets](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets)

* [Forms with NodeJS](https://www.sitepoint.com/creating-and-handling-forms-in-node-js/)

* [Forms with NodeJS and Express](https://www.gitbook.com/book/kevinchisholm/handling-post-requests-with-express-and-node-js/details)

  * [express body-parser](https://github.com/expressjs/body-parser/)

* [Fetch API](https://developer.mozilla.org/en-US/docs/AJAX)

### Sending emails

I tested this using nodemailer but could not get gmail to work so need to test mailgun then google again some time.

* [nodemailer](https://nodemailer.com/about/)

* [nodemailer example with express](https://blog.ragingflame.co.za/2012/6/28/simple-form-handling-with-express-and-nodemailer)

* [mailgun](http://blog.mailgun.com/how-to-send-transactional-emails-in-a-nodejs-app-using-the-mailgun-api/)

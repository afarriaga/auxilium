# Introduction to Web Applications starter

This is a project structure that can be used to get started with the introduction to web
applications tutorial by Esko Luontola. More details below.

Download this as a zip or clone the repo and check out this branch.

Good luck!

### Detailed instructions

Install the software listed at http://web-intro.luontola.fi/install/ up to point # 4.
Install git https://git-scm.com/downloads

Then you need to install the bundler gem. Just run the following command:

```bash
gem install bundler
```

Learn more about bundler at https://bundler.io/#getting-started

Now just follow the steps below:

- Clone the repository:
    ```bash
    git clone -b web-intro-starter https://github.com/afarriaga/auxilium.git
    ```
- Navigate to the project folder `cd web-intro-starter`
- Run the bundler by typing `bundle install`
- Run the test by typing `ruby test.rb`

The app directory _MyAwesomeSite_ contains static HTML files that you can open in your browser by double-clicking on them. It also contains the application server.

The server can serve static files from the _public_ folder and dynamic views from the _views_ folder.

- Navigate to the app directory `cd MyAwesomeSite`
- Run the app by typing `ruby app.rb`

The app runs on this url: http://localhost:4567

Now you are ready to get started with the first part of the tutorial: http://web-intro.luontola.fi/html/

### Introduction to Making Web Applications tutorial credits

* Web site: http://web-intro.luontola.fi
* Tutorial repository: https://github.com/orfjackal/web-intro
* Example solution repository: https://github.com/orfjackal/web-intro-project
* License: [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)

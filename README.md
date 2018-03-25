# This is an application designed to help prepare for technical interviews

## NOTE
Do NOT use Safari. Version 1 displays wonky behavior with Safari. I mean, why would you want to us
Safari anyway??? Use a real browser for craps sake

## Get Started
1. **Install [Node 6](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/jbambrough/interview-flashcards.git`
3. **Make sure you're in the directory you just created.** - `cd interview-flashcards`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. **[Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)** to assure hot reloading works properly.
7. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
8. Having issues? See below.

## Having Issues? Try these things first:
1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Make sure the path doesn't include any spaces, or install the latest version of eslint-watch which adds support for paths containing spaces: `npm install eslint-watch@2.1.13`
3. Make sure you're running the latest version of Node. Or, use [Node 5.12.0](https://nodejs.org/download/release/v5.12.0/) if you're having issues on Windows. Node 6 has issues on some Windows machines.
4. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It will cause issues with file watches.
6. Use path.resolve on all path references in both the dev and prod webpack.config. [See this commit](https://github.com/coryhouse/pluralsight-redux-starter/commit/298848d4332d3bec9eb4e23592e710083acaf340) for an example.
7. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
8. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
9. Try using your OS's native command line instead of an editor's. For some people, an editor's command line configuration may cause issues. 
10. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
11. Make sure you're using the same imports as the course demo. I've seen some people import ES6 code from node_modules via different imports like `import Route from "react-router/es6/Route";` and `import IndexRoute from "react-router/es6/IndexRoute";`. Don't do that. :) Use the exact imports I use in the course.
12. Reference bundle.js with a leading slash or [you'll get an unexpected token error on reload of deep links](https://github.com/coryhouse/pluralsight-redux-starter/issues/88).
13. Nothing above work? Delete your node_modules folder and re-run npm install.

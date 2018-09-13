# Simplified LP Template

This is a template created to develop Landing Pages, separating every section and component, with a structure that incentivizes the modularization of code, to facilitate maintenance and speed up the development.

This template incentivizes the use of methods that give a better accessibility, like prioritize rendering and the above the fold content, deferring the styles and scripts, resulting in a better experience

### Tecnologies used
- [Pug](https://pugjs.org/) (Pré-Processador de HTML)
- [Stylus](http://stylus-lang.com/) (Pré-processador de CSS)
- [Normalize.css](https://necolas.github.io/normalize.css/) (CSS Reset)

> If you have any doubt or question about the use of the libraries, please check the documentation on the links above

### Methodologies
- Above the folder material
    - https://www.optimizely.com/optimization-glossary/above-the-fold/
    - https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent

### Getting ready

Prerequirements:
* [Node.JS ](https://nodejs.org/en/)

Fork or clone the project. Or download and copy the contents of the folder.
After that, install the dependencies with `npm install`

### Gulp Commands

`gulp`
- Default command. Compile all files, generating the build and start the *watch*

`gulp css`
- Compile all the styles *.styl* to CSS

`gulp views`
- Compile all *.pug* files to HTML

`gulp scripts`
- Compile and minify all the styles

### Folder structure
```
+-- resources                   // All the raw files
|
|	+-- scripts 				// Scripts
|	|	+-- plugins				// If you download a JS plugin or librarie put on this folder (como VueJS, Slick ou Selectric)
|	|	main.js					// Your main script
|
|	+-- stylus					// Styles (CSS)
|	|	+-- inline				// Styles that will be put inline (for the Above the Fold content)
|	|	+-- plugins				// Styles from third-party plugins
|	|	+-- sections			// Style from every section created go here (header, popups)
|	|	_fonts.styl				// @font-faces for imported fonts
|	|	_keyframes.styl			// Animation Keyframes( or animation mixins)
|	|	_variables.styl			// Stylus variables and general mixins
|	|	main.styl				// Style common to all the page, and import all other styles above(but inline)
|
|	+-- views                   // Views (pug) [Any other page created go here]
|	|	+-- includes			// Files that will be included and repeated in the pages
|	|	|	head.pug			// <head> tag and other attributes, like metatags and css
|	|	|	css.pug				// CSs calls (imported into head)
|	|	|	loader.pug			// A Loader for the page (if you need)
|	|	|	s-LoadCSS.js		// CSS defering script
|	|	|	s-preload-poly.min	// CSS defering script polyfill
|
|	|	+-- sections			// Page sections (header,footer,...)
|
|	|	+-- svgs				// SVGs that will be imported inline
|   |   index.pug               // Index page
|
+-- app							// Compiled files
|	*.html                      // Compiled HTML files
|	+-- css                     // Compiled styles
|	+-- js                      // Compiled Scripts
|	+-- (images/videos/fonts)
```

> Don't forget to update the `package.json` :) 
# My Personal Website Design (2020)

A custom-built personal website using a 11ty as static site generator.

## About

This website is a personal project that showcases my skills in web development. It's built using 11ty, SCSS, and JavaScript, with a focus on simplicity and ease of use.

## Features

* Custom-designed layout and user interface
* Responsive design for optimal viewing on desktop and mobile devices
* Minimalistic design for fast loading times

## Technologies Used

* HTML5
* CSS3
* Javascript

## Structure

The website is structured into the following directories:

* `/sites`: Contains all html template
	+ `/includes`: Contains html template & component for different page
	+ `/notes`: Notes page
	+ `/others`: Others page
	+ `/pages`: Main pages
* `/assets`: Contains all assets used for the website
	+ `/script`: JavaScript files for interactive elements
	+ `/images`: Image assets used for the website
	+ `/fonts`: Font files used in the website
	+ `/styles`: SCSS files for development styling
* `/data`: Contains all static data, formatted with .json files

## Requirements
* Node.js version 14 or higher

## Technologies Used
* Webpack: Module bundler and build tool
* Nunjucks: Template engine
* 11ty: HTML static site generator

## Usage
### Installation
1. Install npm packages by running `npm install`

### Development
1. Run `npm run dev` to start the development server
2. Access your application, open your web browser and navigate to http://localhost:4000.

### Building
1. Run `npm run build` to build the project

### Serving
1. Run `npm run serve` to serve the generated HTML pages

### Output
All generated files will be located in the `/dist` folder

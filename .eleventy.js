const fs = require("fs");
const htmlmin = require("html-minifier");
const moment = require('moment');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const isProduction = process.env.NODE_ENV === 'production'

module.exports = function (eleventyConfig) {
  // Copying files
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/sw.js');
  eleventyConfig.addPassthroughCopy({
    'src/assets/images': 'assets/images',
    'src/assets/fonts': 'assets/fonts'
  });

  // Template HTML processing
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (isProduction && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Custom filter
  eleventyConfig.addFilter("convertDate", function (value, format) {
    let currentDate = new Date(value);
    moment.locale('id');
    return moment(currentDate).format(format);
  });

  // Plugins config
  eleventyConfig.addPlugin(syntaxHighlight);

  // 404
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/error-page/index.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  // Base config
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'sites/includes',
      layouts: 'sites/includes/layouts',
      data: 'data'
    },
    templateFormats: ["md", "njk"],
    passthroughFileCopy: true,
    htmlTemplateEngine: 'njk'
  }
}
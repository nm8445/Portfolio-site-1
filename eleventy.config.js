module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/image");
    eleventyConfig.addPassthroughCopy("../pages");
    
     // Set Handlebars and Markdown as template formats
     eleventyConfig.setTemplateFormats(["md", "njk"]);
  };
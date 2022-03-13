module.exports = function(eleventyConfig){
    //Add CSS Support
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");
    //Add img support
    eleventyConfig.addPassthroughCopy("./src/img")
    //Using handlebars config
    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);
    let mustache = require("mustache");
    eleventyConfig.setLibrary("mustache", mustache);
    return {
        dir: {
            input: "src",
        },
    };
};
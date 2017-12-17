module.exports = {
    html: {
        template: "./src/index.ejs",
        course: "Poi Lesson",
        contributors: ["Mindy", "John", "Jörg"]
    },
    presets: [
        require("babel-preset-poi")
    ],
    templateCompiler: true
}
module.exports = {
    html: {
        template: "./src/index.ejs",
        course: "Poi Lesson",
        contributors: ["Mindy", "John", "Jörg"]
    },
    presets: [
        require("poi-preset-bundle-report")()
    ],
}
process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = require('./karma.conf')
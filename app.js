//require('chromedriver');

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build(); //创建一个chrome 浏览器实例

var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
})

var _i = 2;
function g___() {
    //driver.close();
    driver.manage().deleteAllCookies();
    _i++;
    if (_i >= process.argv.length) {
        _i = 2;
    }
    console.log("url:" + process.argv[_i]);
    driver.get(process.argv[_i]);
}

driver.get(process.argv[2])
setInterval(g___, 3 * 1000);
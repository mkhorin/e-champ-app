'use strict';
/**
 * Run in docker
 *
 * node console/docker [--config name] [--port number]
 */
const Application = require('../Application');
const Console = require('evado/console/Console');
const AssetConsole = require('e-champ/console/AssetConsole');
const params = Console.parseProcessArguments();
const instance = new Console({Application, AssetConsole, params});

(async () => {
    await instance.installAssets();
    await instance.buildAssets();
    await instance.deployAssets();
    await instance.importDataFiles();
    await instance.startApp();
})();
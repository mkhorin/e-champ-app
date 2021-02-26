'use strict';
/**
 * Data management
 *
 * set NODE_ENV=development
 * node console/data --action export [--dir default] [--files true] [--space 2]
 * node console/data --action import [--dir default] [--files true] [--clear false] [--oneByOne true]
 * node console/data --action clear [--meta document] [--files true]
 */
const Application = require('../Application');
const Console = require('evado/console/Console');
const params = Console.parseProcessArguments();
const instance = new Console({Application, params});

(async () => {
    switch (params.action) {
        case 'export':
            await instance.exportData(params);
            break;
        case 'import':
            await instance.importData(params);
            break;
        case 'clear':
            await instance.clearData(params);
            break;
        default:
            instance.log('error', `Unknown action: ${params.action}`);
    }
    process.exit();
})();
'use strict';

const Base = require('e-champ/Application');

module.exports = class EChampApplication extends Base {

    constructor (config) {
        super({
            original: Base,
            ...config
        });
    }
};
module.exports.init(module);
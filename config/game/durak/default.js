'use strict';

const defaults = require('e-champ-durak/config/default');

module.exports = {

    ...defaults,

    bots: {
        ...defaults.bots,

        'thrifty': require('e-champ-durak-thrifty/config/default')
    }
};
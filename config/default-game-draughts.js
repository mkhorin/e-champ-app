'use strict';

const defaults = require('e-champ-draughts/config/default');

module.exports = {

    ...defaults,

    bots: {
        ...defaults.bots
    },

    defaultOpponents: []
};
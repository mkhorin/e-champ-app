'use strict';

const defaults = require('e-champ-draughts/config/default');

module.exports = {

    ...defaults,

    bots: {
        'thinker-level-1': require('./default-bot-thinker-1'),
        'thinker-level-2': require('./default-bot-thinker-2'),
        'thinker-level-3': require('./default-bot-thinker-3'),
        'thinker-level-4': require('./default-bot-thinker-4'),
        'thinker-level-5': require('./default-bot-thinker-5')
    },
    defaultBot: 'thinker-level-1',
    defaultOpponents: []
};
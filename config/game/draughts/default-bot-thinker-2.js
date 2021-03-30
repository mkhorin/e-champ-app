'use strict';

const defaults = require('e-champ-draughts-thinker/config/default');

module.exports = {

    ...defaults,

    label: 'Thinker Level 2',
    params: {
        ...defaults.params,

        depth: [2, 3]
    },
    translations: {
        'ru': {
            label: 'Мыслитель Уровень 2'
        }
    }
};
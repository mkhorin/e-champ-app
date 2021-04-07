'use strict';

const defaults = require('e-champ-draughts-thinker/config/default');

module.exports = {

    ...defaults,

    label: 'Thinker Level 5',
    params: {
        ...defaults.params,

        depth: [9, 10]
    },
    translations: {
        'ru': {
            label: 'Мыслитель Уровень 5'
        }
    }
};
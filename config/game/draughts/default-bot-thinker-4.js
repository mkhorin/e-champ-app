'use strict';

const defaults = require('e-champ-draughts-thinker/config/default');

module.exports = {

    ...defaults,

    label: 'Thinker Level 4',
    params: {
        ...defaults.params,

        depth: [7, 8]
    },
    translations: {
        'ru': {
            label: 'Мыслитель Уровень 4'
        }
    }
};
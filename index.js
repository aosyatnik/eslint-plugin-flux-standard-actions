'use strict';

var rules = exports.rules = {
  'plain-object': require('./rules/plain-object'),
  'create-action-function': require('./rules/create-action-function')
}


var rules = exports.configs = {
    recommended: {
        rules: {
                'flux-standard-actions/plain-object': 2,
                'flux-standard-actions/create-action-function': 2,
        }
    }
}

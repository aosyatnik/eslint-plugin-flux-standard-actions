'use strict';

var FILE_NAME = 'actions/action.js';

var rule = require('../rules/plain-object'),
    RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('plain-object', rule, {
    valid: [
        {
            code: 'function someAction() { return { type: "actionType" }; }',
            filename: FILE_NAME
        }
    ],

    invalid: [
        {
            code: 'function someAction() { var type = "actionType"; return { type: type }; }',
            filename: FILE_NAME,
            errors: [ { message: 'No code except plain action object is allowed.' } ]
        }
    ]
});
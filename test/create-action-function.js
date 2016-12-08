'use strict';

var FILE_NAME = 'actions/action.js';

var rule = require('../rules/create-action-function'),
    RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('create-action-function', rule, {
    valid: [
        {
            code: 'function someAction(props) { return createAction("actionType")(props); }',
            filename: FILE_NAME
        }
    ],

    invalid: [
        {
            code: 'function someAction(props) { return { type: "actionType", props: props }; }',            
            filename: FILE_NAME,
            errors: [ { message: 'Action must be created with help of createAction function.' } ]
        }
    ]
});
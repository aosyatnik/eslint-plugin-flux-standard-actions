var isActionFile = require('../utilities/isActionFile');

module.exports = function(context) {
    return {
        'ReturnStatement': function(node) {
            var filename = context.getFilename();
                    
            // If file is not action file, then leave it.
            if (!isActionFile(filename)) {
                return;
            }
                    
            if(node.argument.type !== 'CallExpression' || node.argument.callee.callee.name !== 'createAction') {
                createActionError(node, context);
            }
        }
    }
}

function createActionError(node, context)
{
     context.report(node, 'Action must be created with help of createAction function.');
}
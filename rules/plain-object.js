var isActionFile = require('../utilities/isActionFile');

module.exports = function(context) {
    return {
        'FunctionDeclaration': function(node) {                   
            var filename = context.getFilename();
                        
            // If file is not action file, then leave it.
            if (!isActionFile(filename)) {
                return;
            }
                        
            if(!node.body) {
                plainObjectError(node, context);
            }
                        
            // Take body of return statement.
            var returnBody = node.body.body;
            if (!returnBody || returnBody.length !== 1 ||  returnBody[0].type !== 'ReturnStatement') {
                plainObjectError(node, context);
            }
        }
    }
}


function plainObjectError(node, context)
{
     context.report(node, 'No code except plain action object is allowed.');
}
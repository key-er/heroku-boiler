var context = require.context('./react-client/src/components/List.spec.js', true, /.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
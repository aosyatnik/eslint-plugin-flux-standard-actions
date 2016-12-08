# eslint-plugin-flux-standard-actions

This is an ESLint plugin, that restricts developers from writing custom actions for flux. The main purpose is to use human friendly standard action creators.

## Installing

`npm install eslint-plugin-flux-standard-actions --save-dev`

## ESLint Rules
There are two rules in the plugin:

* plain-object: checks if action function returns just plain object.
* create-action-function: checks is action is created with help of [standard action creator](https://github.com/rstuven/fsa-creator/).

## Sample Configuration File

Here's a sample ESLint configuration file that activates these rules:

```
{
    "extends": "plugin:flux-standard-actions/recommended",
    "plugins": [
        "flux-standard-actions"
    ]
}
```

Or turn rules one by one:
```
{
    "plugins": [
        "flux-standard-actions"
    ],
    "rules": {
    	"flux-standard-actions/plain-object": 2,
    	"flux-standard-actions/create-action-function": 2    
    }
}
```
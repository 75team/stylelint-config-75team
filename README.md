# stylelint-config-75team
> The recommended stylelint config of 75team

[![npm](https://img.shields.io/npm/v/stylelint-config-75team.svg?style=flat-square)](https://www.npmjs.com/package/stylelint-config-75team) [![dependency status](https://david-dm.org/75team/stylelint-config-75team.svg)](https://david-dm.org/75team/stylelint-config-75team) [![License](https://img.shields.io/npm/l/stylelint-config-75team.svg)](LICENSE)



Extends `stylelint-config-standard`, and uses `stylelint-order` to help sorting css properties according to our customized order.
Use it as is or as a foundation for your own config.

To see the rules that this config uses, please read the detail of our [config rules](!https://github.com/75team/stylelint-config-75team/blob/master/index.js).

## Installation

``` bash
npm install stylelint-config-75team --save-dev
```

## Usage

Once you installed `stylelint-config-75team` locally within you project, just set you stylelint config to :

``` json
{
    "extends":  "stylelint-config-75team"
}
```
Since we have extended `'stylelint-config-standard'`, you don't need to install the standard extends again.

## How the customize your own rules

Simply add a "rules" key to your config, then add your overrides and additions there.

For example, if you want all the string quotes to be single in your project, you can change the `string-quotes` rule to `'single'`.

``` json
{
    "extends":  "stylelint-config-75team",
    "rules": {
        "string-quotes": "single"
    }
}
```

If you need furthor information about customizing rules, you can read [configuration guide](https://stylelint.io/user-guide/configuration/) and [rules of stylelint](https://stylelint.io/user-guide/configuration/)

## Use in IDE

If you want to use stylelint in your project, we suggest you use the corresponding plugin in your IDE to get better coding experience.

### VSCode
If you use VSCode, you need to install the following plugins:

1. **[stylelint](https://github.com/shinnn/vscode-stylelint)**: A Visual Studio Code extension to lint CSS/SCSS/Less with stylelint

2. **[stylefmt](https://github.com/morishitter/stylefmt)**: is a tool that automatically formats your stylesheets.

### Sublime

If you use Sublime, you need to install [SublimeLinter-contrib-stylelint](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint).

In order for stylelint to be executed by SublimeLinter,you must ensure that nodejs is available to SublimeLinter.Before going any further, please read and follow the steps in “[Finding a linter executable](http://sublimelinter.readthedocs.io/en/latest/troubleshooting.html#finding-a-linter-executable)” through “Validating your PATH” in the documentation.

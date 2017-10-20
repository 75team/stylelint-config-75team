# stylelint-config-75team
> The recommended stylelint config of 75team

[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg?style=flat-square)](https://www.npmjs.com/package/stylelint-config-75team)

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

If you need furthor information about customizing rules, you can read [configuration guide](!https://stylelint.io/user-guide/configuration/) and [rules of stylelint](!https://stylelint.io/user-guide/configuration/)
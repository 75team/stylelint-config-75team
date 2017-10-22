// 基于stylelint-config-standard 适合团队使用的stylelint规则，这里禁止在css中使用浏览器前缀，因为autoprefix会帮忙添加
module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order'],
    rules: {
      'custom-property-empty-line-before': 'never', // 禁止自定义属性前面存在空行
      // 颜色相关
      'color-hex-length': null, // 关闭：强制十六进制颜色值的简写形式
      // 函数相关
      'function-url-quotes': 'always', // 要求url使用引号
      // 字符串相关
      'string-quotes': 'double', // fixable: 字符串使用双引号
      // 值相关
      'value-no-vendor-prefix': true, // 禁止给值添加浏览器引擎前缀
      'value-keyword-case': 'lower', // 值的关键词小写
      'number-max-precision': 2, // 限制小数位数2位
      'time-min-milliseconds': 100, // 限制时间不得小于100ms
      // property
      'property-no-vendor-prefix': true, // 禁止属性使用浏览器引擎前缀
      // 声明
      'declaration-block-semicolon-newline-after': 'always-multi-line', // 多行的时候要求声明块中的分号有另起一行
      'declaration-block-semicolon-space-after': 'always-single-line', // 声明块中单行的时候要求分号后面有空格
      'declaration-block-semicolon-space-before': 'never', // 声明块中分号前不能存在空格
      'declaration-block-trailing-semicolon': 'always', // 声明块中最后一位必须有拖尾分号
      // 媒体相关
      'media-feature-name-no-vendor-prefix': true, // 禁止给media添加浏览器引擎前缀
      // at-rule相关
      'at-rule-no-vendor-prefix': true, // 禁止给@添加浏览器引擎前缀
      // 在声明块中属性的顺序
      'order/properties-order': [
        [
          {properties: ['position', 'z-index', 'top', 'right', 'bottom', 'left']},
          {properties: ['display', 'visibility', 'float', 'clear', 'overflow', 'overflow-x', 'overflow-y', 'clip', 'zoom', 'flex-direction', 'flex-order', 'flex-pack', 'flex-align']},
          {properties: ['box-sizing', 'width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left']},
          {properties: ['table-layout', 'empty-cells', 'caption-side', 'border-spacing', 'border-collapse', 'list-style', 'list-style-position', 'list-style-type', 'list-style-image']},
          {properties: ['content', 'quotes', 'counter-reset', 'counter-increment', 'resize', 'cursor', 'nav-index', 'nav-up', 'nav-right', 'nav-down', 'nav-left', 'transition', 'transition-delay', 'transition-timing-function', 'transition-duration', 'transition-property', 'transform', 'transform-origin', 'animation', 'animation-name', 'animation-duration', 'animation-play-state', 'animation-timing-function', 'animation-delay', 'animation-iteration-count', 'animation-iteration-count', 'animation-direction', 'text-align', 'text-align-last', 'vertical-align', 'white-space', 'text-decoration', 'text-emphasis', 'text-emphasis-color', 'text-emphasis-style', 'text-emphasis-position', 'text-indent', 'text-justify', 'text-transform', 'letter-spacing', 'word-spacing', 'text-outline', 'text-transform', 'text-wrap', 'text-overflow', 'text-overflow-ellipsis', 'text-overflow-mode', 'word-wrap', 'word-break', 'tab-size', 'hyphens', 'pointer-events']},
          {properties: ['opacity', 'color', 'border', 'border-collapse', 'border-width', 'border-style', 'border-color', 'border-top', 'border-top-width', 'border-top-style', 'border-top-color', 'border-right', 'border-right-width', 'border-right-style', 'border-right-color', 'border-bottom', 'border-bottom-width', 'border-bottom-style', 'border-bottom-color', 'border-left', 'border-left-width', 'border-left-style', 'border-left-color', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius', 'border-image', 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset', 'border-image-repeat', 'outline', 'outline-width', 'outline-style', 'outline-color', 'outline-offset', 'background', 'background-color', 'background-image', 'background-repeat', 'background-attachment', 'background-position', 'background-position-x', 'background-position-y', 'background-clip', 'background-origin', 'background-size', 'box-decoration-break', 'box-shadow', 'text-shadow']},
          {properties: ['font', 'font-family', 'font-size', 'font-weight', 'font-style', 'font-variant', 'font-size-adjust', 'font-stretch', 'font-effect', 'font-emphasize', 'font-emphasize-position', 'font-emphasize-style', 'font-smooth', 'line-height']},
        ],
        {unspecified: 'bottomAlphabetical'},
      ],
      // 选择器相关
      'selector-no-vendor-prefix': true, //  禁止给选择器添加浏览器引擎前缀
    },
  }

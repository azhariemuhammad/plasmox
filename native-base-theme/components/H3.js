// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const h3Theme = {
    color: variables.textPrimary,
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3,
    fontWeight: 'bold'
  };

  return h3Theme;
};

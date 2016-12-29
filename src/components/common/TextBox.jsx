import { DOM, PropTypes as PT } from 'react';

const TextBox = props => DOM.span(null, props.children);

TextBox.propsTypes = {
  children: PT.string.isRequired,
};

export { TextBox };

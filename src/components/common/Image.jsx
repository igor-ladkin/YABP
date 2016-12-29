import { DOM, PropTypes as PT } from 'react';

const Image = ({ src, alt, height, width }) => DOM.img({ src, alt, height, width });

Image.propTypes = {
  src: PT.string.isRequired,
  alt: PT.string,
  height: PT.number,
  width: PT.number,
};

Image.defaultProps = {
  height: 150,
  width: 350,
  alt: 'image',
};

export { Image };

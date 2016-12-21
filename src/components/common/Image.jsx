import { DOM } from 'react';

const Image = ({ src, alt, height, width }) => DOM.img({ src, alt, height, width });

export { Image };

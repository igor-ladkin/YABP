export const rootPath = () => '/';
export const aboutPath = () => '/about';
export const postPath = (id = ':id') => `/posts/${id}`;
export const postLikePath = (id = ':id') => `${postPath(id)}/like`;
export const searchPath = () => '/search';

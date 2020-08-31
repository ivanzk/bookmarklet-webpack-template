import styles from './styles.scss';

// Load styles
styles.use();

// eslint-disable-next-line no-undef
const message = `${NAME} v${VERSION} is running!`;

document.title = message;
console.log(message);

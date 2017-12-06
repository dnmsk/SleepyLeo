import I18n from 'react-native-i18n';
import ru from './locales/ru';

I18n.fallbacks = true;

I18n.translations = {
  ru
};
console.log('I18n', I18n);

export default I18n; 

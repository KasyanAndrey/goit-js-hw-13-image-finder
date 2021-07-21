import { notice, alert, success, error } from '../../node_modules/@pnotify/core';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';

// Пожалуйста, введите название изображения.
export function onImageTitle() {
  notice({
    text: 'Please enter a title for the image!',
  });
}

// Пожалуйста, введите более конкретный запрос!
export function onSpecificEnoughAlert() {
  alert({
    text: 'Please enter a more specific query!',
  });
}

// Поздравляем! Ваш  запрос успешно выполнен.
export function onSuccessFullRequest() {
  success({
    text: 'Congratulations! Your request has been successfully completed.',
  });
}

// К сожелению, возникла ошибка!
export function onFetchError() {
  error({
    text: 'Unfortunately, there was an error!',
  });
}

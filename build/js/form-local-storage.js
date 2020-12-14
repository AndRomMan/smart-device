'use strict';

(function () {
  var submitFormBtn = document.querySelector('.callback-form__btn');
  var inputUserName = document.querySelector('#username');
  var inputUserphone = document.querySelector('#userphone');
  var inputQuestion = document.querySelector('#userquestion');
  var USER_NAME_KEY = 'username';
  var USER_PHONE_KEY = 'userphone';
  var USER_QUESTION_KEY = 'userquestion';
  var userData = {
    name: '',
    phone: '',
    question: ''
  };
  var userName = '';
  var userPhone = '';
  var userQuestion = '';

  function storageAvailable(type) {
    try {
      var storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

  function submitFormBtnClickHandler(evt) {
    evt.preventDefault();
    console.log("localStorage.length = ".concat(localStorage.length));

    if (storageAvailable('localStorage')) {
      console.log('We can use Local Storage');
      var name = localStorage.getItem(USER_NAME_KEY);
      console.log(name);
      var phone = localStorage.getItem(USER_PHONE_KEY);
      console.log(phone);
      var question = localStorage.getItem(USER_QUESTION_KEY);
      console.log(question);
      console.log("localStorage.length = ".concat(localStorage.length));
    } else {
      console.log('We can not use Local  Storage');
    }
  }

  if (submitFormBtn) {
    submitFormBtn.addEventListener('click', submitFormBtnClickHandler);
  }

  function inputUserNameBlurHandler() {
    userData.name = inputUserName.value;
    userName = inputUserName.value;
    localStorage.setItem(USER_NAME_KEY, userName);
  }

  function inputUserphoneBlurHandler() {
    userData.phone = inputUserphone.value;
    userPhone = inputUserphone.value;
    localStorage.setItem(USER_PHONE_KEY, userPhone);
  }

  function inputQuestionBlurHandler() {
    userData.question = inputQuestion.value;
    userQuestion = inputQuestion.value;
    localStorage.setItem(USER_QUESTION_KEY, userQuestion);
  }

  if (inputUserName) {
    inputUserName.addEventListener('blur', inputUserNameBlurHandler);
  }

  if (inputUserphone) {
    inputUserphone.addEventListener('blur', inputUserphoneBlurHandler);
  }

  if (inputQuestion) {
    inputQuestion.addEventListener('blur', inputQuestionBlurHandler);
  }
})();
//# sourceMappingURL=form-local-storage.js.map
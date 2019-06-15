var feedbackButton = document.querySelector(".contacts__button");
var modalFeedback = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".modal-feedback__close");
var overlay = document.querySelector(".overlay");
var userName = modalFeedback.querySelector("#user-name");
var userMail = modalFeedback.querySelector("#user-email");
var userComment = modalFeedback.querySelector("[name=comment]");
var slider = document.querySelector(".slider");
var slide1 = slider.querySelector(".slide-block-1");
var slide2 = slider.querySelector(".slide-block-2");
var slide3 = slider.querySelector(".slide-block-3");
var slideButton1 = slider.querySelector(".slide_button-1");
var slideButton2 = slider.querySelector(".slide_button-2");
var slideButton3 = slider.querySelector(".slide_button-3");
var bodyBackground = document.querySelector("body")

slideButton2.addEventListener("click", function (evt) {
    
    slide2.classList.add("slide-checked");
    slide1.classList.remove("slide-checked");
    slide3.classList.remove("slide-checked");
    slide1.classList.add("slide-none");
    bodyBackground.classList.add("body-background-2")
    bodyBackground.classList.remove("body-background-3")

});

slideButton1.addEventListener("click", function (evt) {
    
    slide1.classList.add("slide-checked");
    slide2.classList.remove("slide-checked");
    slide3.classList.remove("slide-checked");
    slide1.classList.remove("slide-none");
    bodyBackground.classList.remove("body-background-2")
    bodyBackground.classList.remove("body-background-3")


});

slideButton3.addEventListener("click", function (evt) {
    
    slide3.classList.add("slide-checked");
    slide1.classList.remove("slide-checked");
    slide2.classList.remove("slide-checked");
    slide1.classList.add("slide-none");
    bodyBackground.classList.add("body-background-3")
    bodyBackground.classList.remove("body-background-2")
    
});

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-feedback_show");
  userName.focus();
  overlay.classList.add("overlay-show");
  });
feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-feedback_show");
  overlay.classList.remove("overlay-show");
  modalFeedback.classList.remove("feedback-eror")
});
overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-feedback_show");
  overlay.classList.remove("overlay-show");
});


modalFeedback.addEventListener("submit", function (evt) {
  if (!userName.value || !userMail.value || !userComment.value) {
  evt.preventDefault();
  modalFeedback.classList.add("feedback-eror");
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (modalFeedback.classList.contains("modal-feedback_show")) {
    modalFeedback.classList.remove("modal-feedback_show");
    overlay.classList.remove("overlay-show");
  }
}
});
var d = document;
  // trackers = document.getElementById('getStartedBG');

// window.addEventListener('scroll',function(){
//   if ( window.pageYOffset > 100 ){
//     navigationCollaped();
//   }
//   else {
//     navigationExpanded();
//   }
//   if ( window.pageYOffset > 400 ){
//     tl.pause();
//   }
//   else {
//     tl.resume();
//   }
//   //trackers.innerText = window.pageYOffset+' '+window.scrollTop;
// });

// function navigationCollaped() {
//   TweenLite.to('.menu', 1.2, { y:-24, ease:Expo.easeOut });
//   TweenLite.to('.efl-logo', 1.2, { transformOrigin:'top left', scale:.68, y:-24, ease:Expo.easeOut });
//   TweenLite.to('.nav-bg', 1.2, { display:'block', autoAlpha:1, ease:Expo.easeOut });
// }
//
// function navigationExpanded() {
//   TweenLite.to('.menu', 1.2, { y:0, ease:Expo.easeOut });
//   TweenLite.to('.efl-logo', 1.2, { transformOrigin:'top left', scale:1, y:0, ease:Expo.easeOut });
//   TweenLite.to('.nav-bg', 1.2, { display:'block', autoAlpha:0, ease:Expo.easeOut });
// }

function setCopy() {
  client.innerHTML = 'Southeast Toyota Finance';
  workSummary.innerHTML = 'We collaborated with SETF to evolve the website into a gateway to create a relationship with its customers through targeted communication based on profile type (retail or lease).';
  workType.innerHTML = 'Case Study';
  workSpec.innerHTML = '&nbsp;&nbsp;&mdash;&nbsp;&nbsp;UX/UI Design, Information Architecture, Content Strategy';
}

setCopy();

// TweenLite.to('.setf-screenshot', .4, { bottom:'0px', ease:Expo.easeOut })
var controller = new ScrollMagic.Controller();
// var tween = TweenMax.to(".logo", 1, {rotation: 360, ease: Linear.easeNone});
var tween = TweenLite.to('.setf-screenshot', 1, { bottom:'0px', Linear.easeNone });
// var scene = new ScrollMagic.Scene({offset:50 ,duration: 200})
var scene = new ScrollMagic.Scene({triggerElement:'.setf-screenshot', duration:300})
    						.setTween(tween)
    						//.setPin(".logo", {pushFollowers: true})
								.addIndicators(true)
    						.addTo(controller);

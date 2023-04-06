window.onload = function (){
  imagesLoaded( document.querySelectorAll('img'), function( instance ) {
    /**
     * 공통 텍스트 애니메이션
     * */
    function fadeIn(target){
      gsap.fromTo(target, {
        y: 50,
        opacity: 0
      },{
        y: 0,
        opacity: 1,
        duration: 1
      });
    }

    function fadeOut(target){
      gsap.fromTo(target, {
        y: 0,
        opacity: 1
      },{
        y: 50,
        opacity: 0,
        duration: 1
      });
    }
    /**
     * **************************************************************
     * */

    /**
     * 공통 슬라이드 애니메이션
     * */
    function slideAnimation(trigger, target) {
      gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          start: '+=100',
          end: 'bottom 10%',
          scrub: true,
          // markers: true,
        }
      }).to(target, {
        opacity: 1,
        duration: 2,
        x: -855,
      });
    }
    /**
     * **************************************************************
     * */

    /**
     * 공통 캐릭터 스티커 애니메이션
     * */
    function stickerAnimation(trigger, targets) {
      let characterOneStickers = document.querySelectorAll(targets);

      gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: '-=80',
          end: 'bottom',
          scrub: true,
          // markers: true,
          onEnter: function() {
            characterOneStickers.forEach(()=>{
              gsap.to(targets, {
                opacity: 1,
                duration: 0.2,
                scale: 1,
                ease: 'bounce.out',
                stagger: {
                  amount: .3
                }
              });
            })
          },
          onLeaveBack: function() {
            characterOneStickers.forEach(()=>{
              gsap.to(targets, {
                opacity: 0,
                duration: 0.2,
                scale: .5,
                ease: 'bounce.out',
                stagger: {
                  amount: .3
                }
              });
            })
          }
        }
      })
    }

    /**
     * visual animation
     * */
    let headingAnimation = gsap.timeline()
    .to('._headingAni', { delay: 4.1, duration:1, opacity: 1 })
    .to('._bottomAni', { opacity: 1, y: -30, ease: 'Power0.easeNone', yoyo: true, repeat: 4, duration: 1 }, '<')
    .to('._video', { opacity: 1 }, '<')
    .to('._visualDim', { opacity: .25 }, '<');

    setTimeout(function() {
      document.querySelector('._video').play();
    }, 4100);
    /**
     * **************************************************************
     * */

    /**
     * brand animation
     * */
    let brandTextAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-brand',
        start: '-=200',
        end: '+=200',
        scrub: true,
        // markers: true,
        onEnter: function() {
          fadeIn('._brandTextAni')
        },
        onLeaveBack: function() {
          fadeOut('._brandTextAni')
        }
      }
    })
    /**
     * **************************************************************
     * */

    /**
     * emoji animation
     * */
    let emojiTextAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-brand .emoji',
        start: '-=400',
        end: 'bottom',
        scrub: true,
        // markers: true,
        onEnter: function() {
          fadeIn('._emojiTextAniOne,._emojiTextAniTwo')
        },
        onLeaveBack: function() {
          fadeOut('._emojiTextAniOne,._emojiTextAniTwo')
        }
      }
    })
    /**
     * **************************************************************
     * */

    /**
     * next emoji animation
     * */
    let nextEmojiPlusAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-next-emoji',
        start: '-=300',
        end: '+=200',
        scrub: true,
        // markers: true,
        onEnter: function() {
          fadeIn('.section-next-emoji .heading')
        },
        onLeaveBack: function() {
          fadeOut('.section-next-emoji .heading')
        }
      }
    })
    /**
     * **************************************************************
     * */

    /**
     * mirror text animation
     * */
    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-mirror',
        start: '-=300',
        end: '+=200',
        scrub: true,
        // markers: true,
        onEnter: function() {
          fadeIn('._mirrorTextAni')
        },
        onLeaveBack: function() {
          fadeOut('._mirrorTextAni')
        }
      }
    })
    /**
     * **************************************************************
     * */

    /**
     * 슬라이드 애니메이션
     * */
    slideAnimation('.character-desc-box-1', '._slideOne')
    slideAnimation('.character-desc-box-2', '._slideTwo')
    slideAnimation('.character-desc-box-3', '._slideThree')
    slideAnimation('.character-desc-box-4', '._slideFour')
    /**
     * **************************************************************
     * */

    /**
     * 캐릭터
     * */
    stickerAnimation('.character-box-1','.character-box-1 .sticker')
    stickerAnimation('.character-box-2','.character-box-2 .sticker')
    stickerAnimation('.character-box-3','.character-box-3 .sticker')
    stickerAnimation('.character-box-4','.character-box-4 .sticker')
    /**
     * **************************************************************
     * */


    /**
     * Next Collection text animation
     * */
    gsap.timeline({
      scrollTrigger: {
        trigger: '.character-desc-box-4',
        start: '50%',
        end: 'bottom',
        scrub: true,
        // markers: true,
        onEnter: function() {
          fadeIn('._nextCollectionTextAni')
        },
        onLeaveBack: function() {
          fadeOut('._nextCollectionTextAni')
        }
      }
    })
    /**
     * **************************************************************
     * */
  });
}
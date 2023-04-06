window.onload = function (){
  imagesLoaded( document.querySelectorAll('img'), function( instance ) {
    /**
     * 비쥬얼
     * */
    let headingAnimation = gsap.timeline()
    .to('._headingAni', { delay: 4.1, duration:1, opacity: 1 })
    .to('._bottomAni', { opacity: 1, y: -30, ease: 'Power0.easeNone', yoyo: true, repeat: 4, duration: 1 }, '<')
    .to('._video', { opacity: 1 }, '<')
    .to('._visualDim', { opacity: .25 }, '<');

    setTimeout(function() {
      document.querySelector('._video').play();
    }, 4100);
    /**********************************/


    /**
     * 브랜드
     * */
    let brandTextAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-brand',
        start: '-=100',
        end: '+=200',
        scrub: 0.5,
        // markers: true,
        onEnter: function() {
          gsap.to('._brandTextAni', {
            duration: 1,
            opacity: 1
          });
        },
        onLeaveBack: function() {
          gsap.to('._brandTextAni', {
            duration: 1,
            opacity: 0
          });
        }
      }
    })
    /**********************************/

    /**
     * 이모지
     * */
    let emojiTextAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-brand .emoji',
        start: '-=300',
        end: 'bottom',
        scrub: 0.5,
        // markers: true,
        onEnter: function() {
          emojiTimeline.play();
        },
        onLeaveBack: function() {
          emojiTimeline.reverse();
        }
      }
    })

    const emojiTimeline = gsap.timeline({paused: true});

    emojiTimeline.to('._emojiAni', {
      x: 100,
      y: -100,
      opacity: 0,
      ease: 'back.out(2)'
    }).to('._emojiAni', {
      x: 0,
      y: 0,
      opacity: 1,
      ease: 'back.out(2)',
      delay: 1,
      onComplete: function() {
        TweenMax.to('._emojiAni', 0.1, {y: '-=5', ease: Back.easeOut.config(3)});
      }
    },'<');
    /**********************************/

    /**
     * 넥스트 이모지 + 플러스
     * */
    let nextEmojiPlusAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-next-emoji',
        start: '-=300',
        end: '+=200',
        scrub: 0.5,
        // markers: true,
        onEnter: function() {
          nextEmojiTimeline.play();

          gsap.to('._plusOne, ._plusTwo', {
            opacity: 1,
            delay: 1,
            duration: 1.5,
            scale: 1,
            ease: 'bounce.out'
          });
        },
        onLeaveBack: function() {
          nextEmojiTimeline.reverse();

          gsap.to('._plusOne, ._plusTwo', {
            opacity: 0,
            delay: 1,
            duration: 1.5,
            scale: 0,
            ease: 'bounce.out'
          });
        }
      }
    })

    const nextEmojiTimeline = gsap.timeline({paused: true});

    nextEmojiTimeline.to('._nextEmoji', {
      x: -100,
      y: -100,
      opacity: 0,
      ease: 'back.out(2)'
    }).to('._nextEmoji', {
      x: 0,
      y: 0,
      opacity: 1,
      ease: 'back.out(2)',
      delay: 1,
      onComplete: function() {
        TweenMax.to('._nextEmoji', 0.1, {y: '+=5', ease: Back.easeOut.config(3)});
      }
    },'<');
    /**********************************/

    /**
     * 슬라이드 애니메이션
     * */
    let characterDescriptionBoxOne = gsap.timeline({
      scrollTrigger: {
        trigger: '.character-desc-box-1',
        pin: true,
        start: '+=100',
        end: 'bottom 10%',
        scrub: .5,
        // markers: true,
      }
    }).to('._slideOne', {
      opacity: 1,
      duration: 2,
      x: -855,
    })

    let characterDescriptionBoxTwo = gsap.timeline({
      scrollTrigger: {
        trigger: '.character-desc-box-2',
        pin: true,
        start: '+=100',
        end: 'bottom 10%',
        scrub: .5,
        // markers: true,
      }
    }).to('._slideTwo', {
      opacity: 1,
      duration: 2,
      x: -855,
    })

    let characterDescriptionBoxThree = gsap.timeline({
      scrollTrigger: {
        trigger: '.character-desc-box-3',
        pin: true,
        start: '+=100',
        end: 'bottom 10%',
        scrub: .5,
        // markers: true,
      }
    }).to('._slideThree', {
      opacity: 1,
      duration: 2,
      x: -855,
    })

    let characterDescriptionBoxFour = gsap.timeline({
      scrollTrigger: {
        trigger: '.character-desc-box-4',
        pin: true,
        start: '+=100',
        end: 'bottom 10%',
        scrub: .5,
        // markers: true,
      }
    }).to('._slideFour', {
      opacity: 1,
      duration: 2,
      x: -855,
    })
    /**********************************/

    /**
     * 캐릭터
     * */
    let characterOneStickers = document.querySelectorAll('.character-box-1 .sticker');

    let characterStickerAniOne = gsap.timeline({
      scrollTrigger: {
        trigger: '.character-box-1',
        start: '-=80',
        end: 'bottom',
        scrub: 0.5,
        // markers: true,
        onEnter: function() {
          characterOneStickers.forEach((sticker)=>{
            gsap.to('.character-box-1 .sticker', {
              opacity: 1,
              duration: 1.5,
              scale: 1,
              ease: 'bounce.out',
              stagger: {
                amount: 1
              }
            });
          })
        },
        onLeaveBack: function() {
          characterOneStickers.forEach((sticker)=>{
            gsap.to('.character-box-1 .sticker', {
              opacity: 0,
              duration: 1.5,
              scale: .5,
              ease: 'bounce.out',
              stagger: {
                amount: 1
              }
            });
          })
        }
      }
    })

    let characterTwoStickers = document.querySelectorAll('.character-box-2 .sticker');

    let characterStickerAniTwo = gsap.timeline({
      scrollTrigger: {
        trigger: '.character-box-2',
        start: '-=80',
        end: 'bottom',
        scrub: 0.5,
        // markers: true,
        onEnter: function() {
          characterTwoStickers.forEach((sticker)=>{
            gsap.to('.character-box-2 .sticker', {
              opacity: 1,
              duration: 1.5,
              scale: 1,
              ease: 'bounce.out',
              stagger: {
                amount: 1
              }
            });
          })
        },
        onLeaveBack: function() {
          characterTwoStickers.forEach((sticker)=>{
            gsap.to('.character-box-2 .sticker', {
              opacity: 0,
              duration: 1.5,
              scale: .5,
              ease: 'bounce.out',
              stagger: {
                amount: 1
              }
            });
          })
        }
      }
    })

    let characterThreeStickers = document.querySelectorAll('.character-box-3 .sticker');

    let characterStickerAniThree = gsap.timeline({
      scrollTrigger: {
        trigger: '.character-box-3',
        start: 'top',
        end: 'bottom',
        scrub: 0.5,
        // markers: true,
        onEnter: function() {
          characterThreeStickers.forEach((sticker)=>{
            gsap.to('.character-box-3 .sticker', {
              opacity: 1,
              duration: 1.5,
              scale: 1,
              ease: 'bounce.out',
              stagger: {
                amount: 1
              }
            });
          })
        },
        onLeaveBack: function() {
          characterThreeStickers.forEach((sticker)=>{
            gsap.to('.character-box-3 .sticker', {
              opacity: 0,
              duration: 1.5,
              scale: .5,
              ease: 'bounce.out',
              stagger: {
                amount: 1
              }
            });
          })
        }
      }
    })

    let characterFourStickers = document.querySelectorAll('.character-box-4 .sticker');

    let characterStickerAniFour = gsap.timeline({
      scrollTrigger: {
        trigger: '.character-box-4',
        start: '-=80',
        end: 'bottom',
        scrub: 0.5,
        // markers: true,
        onEnter: function() {
          characterFourStickers.forEach((sticker)=>{
            gsap.to('.character-box-4 .sticker', {
              opacity: 1,
              duration: 1.5,
              scale: 1,
              ease: 'bounce.out',
              stagger: {
                amount: 1
              }
            });
          })
        },
        onLeaveBack: function() {
          characterFourStickers.forEach((sticker)=>{
            gsap.to('.character-box-4 .sticker', {
              opacity: 0,
              duration: 1.5,
              scale: .5,
              ease: 'bounce.out',
              stagger: {
                amount: 1
              }
            });
          })
        }
      }
    })
    /**********************************/
  });
}
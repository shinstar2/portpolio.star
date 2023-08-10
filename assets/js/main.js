$(function(){



  /**intro */


    gsap.from('.sc-intro .text-box span',{
        delay:0.5,
        opacity:0,
        stagger:{
            from:"random",
            amount:1,
        }
    })


//   visualMotion = gsap.timeline({})

  // visualMotion
    // visualMotion.from('.sc-intro .text-box',{ opacity:0, yPercent:100 })
    
    // visualMotion.from('.sc-intro .text-box span:nth-child(3)',{ opacity:0 })
    // visualMotion.from(
    //     '.sc-intro .text-box span:nth-child(1), .sc-intro .text-box span:nth-child(2)',
    // { opacity:0, xPercent:100 })
    // visualMotion.from('.sc-intro .text-box span:nth-child(4)',{ opacity:0, xPercent:-100 })
    

    $('.sc-work .work-item .box').each(function(i,el){

        gsap.from($(this).find('>*'),{
            scrollTrigger:{
                trigger:el,
                start:"0% 70%",
                end:"100% 0%",
            },
            opacity:0,
            yPercent:20,
            stagger:0.1,
        })

    })




    //스크롤이벤트만 만들어주세요
    // ScrollTrigger.create({
    //     trigger:"sc-intro",
    //     start:"0% 0%",
    //     end:"100% 0%",
    //     // markers:true,
    //     onEnter:function(){
    //     $('sc-intro').addClass('on')
    //     }//도달했을때 클래스 주고싶어요

    //     });

    // //스크롤이벤트만 만들어주세요
    // ScrollTrigger.create({
    //     trigger:".sc-work",
    //     start:"0% 50%",
    //     end:"100% 0%",
    //     // markers:true,
    //     onEnter:function(){
    //     $('.sc-work').addClass('on')
    //     }//도달했을때 클래스 주고싶어요

    //     });




    
    //    const obsever = new IntersectionObserver((e)=>{
    //     //반복문 
    //     e.forEach((박스)=>{
    //         if (박스.isIntersecting){
    //         박스.target.style.opacity = 1 ;
    //         }
    //     })
    //    })
        
    //    const li = document.querySelectorAll('.sc-work li')
    //     observer.observe('.sc-work li'[0]) //html요소가 화면에 등장하는지 감시해줌
    //     observer.observe('.sc-work li'[1]) 
    //     observer.observe('.sc-work li'[2]) 
    //     observer.observe('.sc-work li'[3]) //1~4 번째 li감시 

















})//지우지말것 
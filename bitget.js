// ==UserScript==
// @name        비트겟 단축키
// @namespace   pattern
// @description 비트겟 선물 단축키 매매
// @include 	https://www.bitget.com/*
// @include 	https://www.bitget.com/*
// @version     1.002
// @grant       none
// @downloadURL
// @updateURL
// ==/UserScript==
window.onload = function() {
    // 1% 이상 2% 이상 3% 이상 4% 이상 체크 이상 체크하기
 
    setTimeout(function color() {
       document.querySelectorAll('.change').forEach(function(s,i){
          s.parentNode.querySelector('.symbol').style.color = "rgb(125, 125, 125)"
          if(parseFloat(s.textContent) < 1){
             s.parentNode.style.backgroundColor = 'unset'
             s.parentNode.querySelector('.symbol').style.color = "rgb(125, 125, 125)"
          }
          if(parseFloat(s.textContent) > 1){
             s.parentNode.style.backgroundColor = '#f7f7cb'
             s.parentNode.querySelector('.symbol').style.color = "black"
          }
          if(parseFloat(s.textContent) > 2){
             s.parentNode.style.backgroundColor = '#c1f5d3'
             s.parentNode.querySelector('.symbol').style.color = "black"
          }
          if(parseFloat(s.textContent) > 3){
             s.parentNode.style.backgroundColor = '#c1d4f5'
             s.parentNode.querySelector('.symbol').style.color = "black"
          }
          if(parseFloat(s.textContent) > 4){
             s.parentNode.style.backgroundColor = '#00FF7F'
             s.parentNode.querySelector('.symbol').style.color = "black"
          }
          if(parseFloat(s.textContent) > 5){
             s.parentNode.style.backgroundColor = '#FF0000'
             s.parentNode.querySelector('.symbol').style.color = "white"
          }
 
          if(parseFloat(s.textContent) < -1){
             s.parentNode.querySelector('.symbol').style.color = "#FFFF00"
          }
          if(parseFloat(s.textContent) < -2){
             s.parentNode.querySelector('.symbol').style.color = "#00FF00"
          }
          if(parseFloat(s.textContent) < -3){
             s.parentNode.querySelector('.symbol').style.color = "#7FFFD4"
          }
          if(parseFloat(s.textContent) < -4){
             s.parentNode.querySelector('.symbol').style.color = "#FF00FF"
          }
          if(parseFloat(s.textContent) < -5){
             s.parentNode.querySelector('.symbol').style.color = "#FF1493"
          }
       })
       setTimeout(color, 1000)
 
 
    }, 1000);
 
    // 차트 높이 변경하기
    document.querySelector('.react-grid-layout').children[2].style.height = '925px'
    const position = document.querySelector('.react-grid-layout').children[3].style.transform = 'translate(5px, 958px)'
    function tab(guess,e,t){
       const extractText = (DOMElement) => [...DOMElement.childNodes] // has childNodes inside, including text ones
   .filter(child => child.nodeType === 1) // get only text nodes
   .filter(child => child.textContent.trim()) // eliminate empty text
   .map(textNode => textNode.textContent) // extract text content
       const tab = extractText(document.querySelector('.pc-order-placer-wrap .active'))[0]
       console.log(e.shiftKey)
       console.log(e.key)
       if(t == "open" && tab == "Close"){
          const active = document.querySelector("div.active")
           active.parentNode.firstChild.firstChild.click()
       }
       if(t == "close" && tab == "Open"){
          const active = document.querySelector("div.active")
           active.parentNode.children[1].firstChild.click()
       }
    }
    function quantity(number){
       const p = document.querySelector('.ant-slider-mark :nth-child('+number+')');
       const clickEvent = document.createEvent('MouseEvents');
       clickEvent.initEvent('mousedown', true, true);
       p.dispatchEvent(clickEvent)
    }
 
    // document.querySelector(".pc-order-placer-wrap input[autocomplete='new-password']").value = ''
    window.addEventListener('keydown', (e) => {
       const guess = e.key
       console.log(guess)
       //코인 메뉴 접었다 펴기
       if (e.key == "q" || e.key == "ㅂ" || e.key == "Q"){
          document.querySelector("div.theme-dark > div > div > div > div ").click()
       }
       if (e.key == "1" && e.ctrlKey){
          document.querySelector("div.reverse  div.react-grid-item:nth-child(3)  i.drag-handle-icon").nextElementSibling.querySelector('span:nth-child(1)').click()
 
       }
       if (e.key == "2" && e.ctrlKey){
          document.querySelector("div.reverse  div.react-grid-item:nth-child(3)  i.drag-handle-icon").nextElementSibling.querySelector('span:nth-child(2)').click()
 
       }
       if (e.key == "3" && e.ctrlKey){
          document.querySelector("div.reverse  div.react-grid-item:nth-child(3)  i.drag-handle-icon").nextElementSibling.querySelector('span:nth-child(3)').click()
 
       }
       if (e.key == "4" && e.ctrlKey){
          document.querySelector("div.reverse  div.react-grid-item:nth-child(3)  i.drag-handle-icon").nextElementSibling.querySelector('span:nth-child(4)').click()
 
       }
       if (e.key == "5" && e.ctrlKey){
          document.querySelector("div.reverse  div.react-grid-item:nth-child(3)  i.drag-handle-icon").nextElementSibling.querySelector('span:nth-child(5)').click()
 
       }
       if (e.key == "w" && !e.altKey && !e.ctrlKey){
          document.querySelector("div.reverse  div.react-grid-item:nth-child(3)  i.drag-handle-icon").nextElementSibling.querySelector('span:nth-child(6)').click()
 
       }
 
        if (e.key == "!" && e.shiftKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='bid']:first-child").click()
             quantity(2)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if (e.key == "@" && e.shiftKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='bid']:first-child").click()
             quantity(3)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if (e.key == "#" && e.shiftKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='bid']:first-child").click()
             quantity(4)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if (e.key == "$" && e.shiftKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='bid']:first-child").click()
             quantity(5)
           document.querySelector('button[role="buyer"]').click()
        }
        //**************************** 롱 자동 *********************************
 
 
        //**************************** 롱 정리(close) *********************************
       //롱 25% 자동 close
        if ((e.key == "q" || e.key == "ㅂ" || e.key == "Q" || e.key == "ㅃ") && e.shiftKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='ask']:last-child").click()
             quantity(2)
           document.querySelector('button[role="seller"]').click()
        }
        //롱 50% 자동 close
        if ((e.key == "w" || e.key == "ㅈ" || e.key == "W" || e.key == "ㅉ") && e.shiftKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='ask']:last-child").click()
             quantity(3)
           document.querySelector('button[role="seller"]').click()
        }
        //롱 75% 자동 close
        if ((e.key == "e" || e.key == "ㄷ" || e.key == "E" || e.key == "ㄸ") && e.shiftKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='ask']:last-child").click()
             quantity(4)
           document.querySelector('button[role="seller"]').click()
        }
        //롱 100% 자동 close
        if ((e.key == "r" || e.key == "ㄱ" || e.key == "R" || e.key == "ㄲ") && e.shiftKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='ask']:last-child").click()
             quantity(5)
           document.querySelector('button[role="seller"]').click()
        }
        //**************************** 롱 정리(close) *********************************
 
        //**************************** 숏 자동 *********************************
 
        if ((e.key == "1" || e.key == "¡")  && e.altKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='ask']:last-child").click()
             quantity(2)
           document.querySelector('button[role="seller"]').click()
        }
 
        if ((e.key == "2" || e.key == "™") && e.altKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='ask']:last-child").click()
             quantity(3)
           document.querySelector('button[role="seller"]').click()
        }
 
        if ((e.key == "3" || e.key == "£")  && e.altKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='ask']:last-child").click()
             quantity(4)
           document.querySelector('button[role="seller"]').click()
        }
 
        if ((e.key == "4" || e.key == "¢")  && e.altKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='ask']:last-child").click()
             quantity(5)
           document.querySelector('button[role="seller"]').click()
        }
        //**************************** 숏 자동 *********************************
        //**************************** 숏 자동 정리(close) *********************************
 
        if ((e.key == "q" || e.key == "œ")  && e.altKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='bid']:first-child").click()
             quantity(2)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if ((e.key == "w" || e.key == "∑") && e.altKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='bid']:first-child").click()
             quantity(3)
           document.querySelector('button[role="buyerbuyer"]').click()
        }
 
        if ((e.key == "e" || e.key == "Dead")  && e.altKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='bid']:first-child").click()
             quantity(4)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if ((e.key == "r" || e.key == "®")  && e.altKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[0].click()
           document.querySelector("ul[type='bid']:first-child").click()
             quantity(5)
           document.querySelector('button[role="buyer"]').click()
        }
        //**************************** 숏 자동 정리(close) *********************************
 
        //**************************** 롱 시장가 *********************************
 
        if ((e.key == "a" || e.key == "ㅁ" || e.key == "A") && e.shiftKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(2)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if ((e.key == "s" || e.key == "ㄴ" || e.key == "S") && e.shiftKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(3)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if ((e.key == "d" || e.key == "ㅇ" || e.key == "D") && e.shiftKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(4)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if ((e.key == "f" || e.key == "ㄹ" || e.key == "F") && e.shiftKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(5)
           document.querySelector('button[role="buyer"]').click()
        }
        //**************************** 롱 자동 *********************************
 
        //**************************** 숏 시장가 *********************************
 
        if ((e.key == "a" || e.key == "å") && e.altKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(2)
           document.querySelector('button[role="seller"]').click()
        }
 
        if ((e.key == "s" || e.key == "ß") && e.altKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(3)
           document.querySelector('button[role="seller"]').click()
        }
 
        if ((e.key == "d" || e.key == "∂") && e.altKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(4)
           document.querySelector('button[role="seller"]').click()
        }
 
        if ((e.key == "f" || e.key == "ƒ") && e.altKey){
           tab(guess,e,"open")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(5)
           document.querySelector('button[role="seller"]').click()
        }
        //**************************** 숏 자동 *********************************
 
        //**************************** 롱 시장가 close*********************************
 
        if ((e.key == "z" || e.key == "ㅋ" || e.key == "Z") && e.shiftKey && !e.altKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(2)
           document.querySelector('button[role="seller"]').click()
        }
 
        if ((e.key == "x" || e.key == "ㅌ"  || e.key == "X") && e.shiftKey && !e.altKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(3)
           document.querySelector('button[role="seller"]').click()
        }
 
        if ((e.key == "c" || e.key == "ㅊ" || e.key == "C") && e.shiftKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(4)
           document.querySelector('button[role="seller"]').click()
        }
 
        if ((e.key == "v" || e.key == "ㅍ" || e.key == "V") && e.shiftKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(5)
           document.querySelector('button[role="seller"]').click()
        }
        //**************************** 롱 자동 close*********************************
 
        //**************************** 숏 시장가 close*********************************
 
        if ((e.key == "z" || e.key == "Ω") && e.altKey && !e.shiftKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(2)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if ((e.key == "x" || e.key == "≈") && e.altKey && !e.shiftKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(3)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if ((e.key == "c" || e.key == "ç") && e.altKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(4)
           document.querySelector('button[role="buyer"]').click()
        }
 
        if ((e.key == "v" || e.key == "√") && e.altKey){
           tab(guess,e,"close")
           document.querySelector(".pc-order-placer-wrap .tab").children[1].click()
             quantity(5)
           document.querySelector('button[role="buyer"]').click()
        }
        //**************************** 숏 자동 close*********************************
 
        //**************************** 주문 전체 취소 *******************************
        if (e.ctrlKey && e.altKey && (e.key == "≈" || e.key == "x")){
           document.querySelector(".rc-scrollbars-view").children[2].click()
           const cancel = document.querySelector('.h5-tabs-content-warp').children[1].querySelector('.ant-dropdown-trigger').nextElementSibling.nextElementSibling.nextElementSibling.firstChild.click()
        }
        if (e.ctrlKey && e.altKey && (e.key == "Ω" || e.key == "z")){
           document.querySelector(".rc-scrollbars-view").children[2].click()
           document.querySelector(".h5-tabs-content-warp .rc-scrollbars-view ul").children[8].firstChild.click()
           // console.log(document.querySelector(".h5-tabs-content-warp .rc-scrollbars-view ul").children[8]).firstChild
        }
    });
 
 }
 
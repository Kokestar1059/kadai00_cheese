// jsを記述する際はここに記載していく
 // ① 操作したいHTML要素を取得する
 const h5 = document.querySelector('.overlay h5');                                                
 const btn = document.querySelector('.overlay-btn');
 const spinner = document.querySelector('.spinner');
 const overlay = document.querySelector('.overlay');  
  

  // ② メッセージを配列に並べる（count番目を取り出すため）                                         
  const messages = [
    "あんまりこのブラウザサイズでは見てほしくないなあ。",                                          
    "どうしようかなあ、やめといた方がいいよ。",                                                  
    "天気がいいからブラウザより外でも見てなよ。",
    "夢でも見てなよ。"                                                            
]; 

// ③ 何回押されたか数えるカウンター
let count = 0;

 // ④ ボタンを押したときの処理
btn.addEventListener('click', function() {
    count++;  // 押すたびに+1                                                                    
                                                                                                 
    if (count < messages.length) {
        // まだメッセージが残っている → テキストを差し替え                                       
        h5.textContent = messages[count];                                                        
    } else {
        // 全部押した → スリープモード                                                           
        btn.style.display = 'none';          // ボタンを消す                                     
        spinner.style.display = 'block';     // スピナーを表示
        h5.textContent = 'スリープします。';
        overlay.style.opacity = '0';
        setTimeout(function() {
            overlay.style.display = 'none';
        }, 7000);                                                                    
    }           
});  

const hamburger = document.querySelector('.hamburger');                                                                 
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', function() {                                                                        
    hamburger.classList.toggle('open'); 
    navList.classList.toggle('open');                                                                                                                  
    });  
   
 document.querySelectorAll('.nav-list a').forEach(function(link) {                                                       
        link.addEventListener('click', function() {
            hamburger.classList.remove('open');                                                                             
            navList.classList.remove('open'); 
        });                                                                                                                 
    });  
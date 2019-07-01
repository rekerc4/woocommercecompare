jQuery(document).ready(function(){
   
    let compareButtons = document.getElementsByClassName('wocompare-add-button');
    let idCollector = [];
    let beginPath = passedVars.pluginUrl;
    let href = beginPath + '/compareTable.php';
    
    for(let i = 0; i < compareButtons.length; i++){
        
        compareButtons[i].addEventListener('click', function(){
           
            idCollector.push(compareButtons[i].getAttribute('product_id_data'));
            compareButtons[i].innerHTML = '<span>&#x2611; Added</span>'; 
            compareButtons[i].addEventListener('click', function(){
                
                console.log(this);
                console.log(idCollector);
                let woocompareCookie = idCollector.join('|');
                document.cookie = 'woocompareProducts="' + woocompareCookie +  ';expires=Thu, 18 Dec 2090 12:00:00 UTC; path=/';
                jQuery.colorbox({iframe: true, width:"80%", height:"80%", href: href})
        
            });
        })
   }
 
});

// let resgisterAddListen = (i) => {
           
//     compareButtons[i].removeEventListener('click', resgisterAddListen)
//     idCollector.push(compareButtons[i].getAttribute('product_id_data'));
//     compareButtons[i].innerHTML = '<span>&#x2611; Added</span>'; 
//     compareButtons[i].addEventListener('click', function(){
        
//         console.log(this);
//         console.log(idCollector);
//         let woocompareCookie = idCollector.join('|');
//         document.cookie = 'woocompareProducts="' + woocompareCookie +  ';expires=Thu, 18 Dec 2090 12:00:00 UTC; path=/';
//         jQuery.colorbox({iframe: true, width:"80%", height:"80%", href: href})

//     });
// }

// for(let i = 0; i < compareButtons.length; i++){
    
//     compareButtons[i].addEventListener('click', resgisterAddListen(i));
// }
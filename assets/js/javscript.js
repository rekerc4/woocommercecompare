jQuery(document).ready(function(){

    console.log(ajax_public); 

    let compareButtons = document.getElementsByClassName('wocompare-add-button');
    let idCollector = [];
    let beginPath = passedVars.pluginUrl;
    let href = beginPath;//+ '/compareTable.php';

let resgisterAddListen = (e) => {
    console.log(event.target); 
    event.target.removeEventListener('click', resgisterAddListen)
    idCollector.push(event.target.getAttribute('product_id_data'));
    event.target.innerHTML = '<span>&#x2611; Added</span>'; 
    jQuery(event.target).on('click', function(event){
        event.preventDefault(); 
        console.log(event);
        console.log(idCollector);
        let woocompareCookie = idCollector.join('|');
        document.cookie = 'woocompareProducts="' + woocompareCookie +  ';expires=Thu, 18 Dec 2090 12:00:00 UTC; path=/';
        jQuery.colorbox({iframe: true, width:"80%", height:"80%", href: href})
        jQuery.get(ajax_public.woocompare_ajax_url, {
            nonce:  ajax_public.woocompare_nonce, 
            action: 'woocompare_public_hook'
        }, function(data) {
            console.log(data); 
            
        })
    });
}

for(let i = 0; i < compareButtons.length; i++){
    
    compareButtons[i].addEventListener('click', resgisterAddListen.bind(this));
}
 
});


    
//     for(let i = 0; i < compareButtons.length; i++){
        
//         compareButtons[i].addEventListener('click', function(){
           
//             idCollector.push(compareButtons[i].getAttribute('product_id_data'));
//             compareButtons[i].innerHTML = '<span>&#x2611; Added</span>'; 
//             compareButtons[i].addEventListener('click', function(){
                
//                 console.log(this);
//                 console.log(idCollector);
//                 let woocompareCookie = idCollector.join('|');
//                 document.cookie = 'woocompareProducts="' + woocompareCookie +  ';expires=Thu, 18 Dec 2090 12:00:00 UTC; path=/';
//                 jQuery.colorbox({iframe: false, width:"80%", height:"80%", href: href})
        
//             });
//         })
//    }

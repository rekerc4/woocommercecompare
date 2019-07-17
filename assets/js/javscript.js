jQuery(document).ready(function(){

    let compareButtons = document.getElementsByClassName('wocompare-add-button');
    let idCollector = [];
    let beginPath = passedVars.pluginUrl;
    let href = beginPath;//+ '/compareTable.php';

let resgisterAddListen = (e) => {

    event.target.removeEventListener('click', bindAddListener);
    idCollector.push(event.target.getAttribute('product_id_data'));
    event.target.innerHTML = '<span>&#x2611; Added</span>'; 

    jQuery(event.target).on('click', function(event){
      
        event.preventDefault(); 
      
        let theCurIds = idCollector; 
        let woocompareCookie = idCollector.join('|');
        document.cookie = 'woocompareProducts="' + woocompareCookie +  ';expires=Thu, 18 Dec 2090 12:00:00 UTC; path=/';
        jQuery.colorbox({iframe: false, width:"80%", height:"80%", href: href, html: '<h1 class="woocompare--cb-loading" id="woocompare--cb-loading">loading<span id="woocompare-loading-dots"></span></h1>', onLoad: function(){
            let dotI  = 0;
            let dotContain = document.getElementById('woocompare-loading-dots'); 
            let dotInner = '';
            console.log(document.getElementById('woocompare--cb-loading')); 
            while(document.getElementById('woocompare--cb-loading') !== null){
                if(dotI < 3){
                    dotInner = dotInner + '.'; 
                    dotContain.innerHTML = dotInner;
                    dotI++; 
                }
                else{
                    dotInner = ''; 
                    dotContain.innerHTML = dotInner; 
                    dotI = 0; 
                }
            }
            console.log('run'); 
        }, onComplete: function(){alert('complete')}}); 
        jQuery.post(ajax_public.woocompare_ajax_url, {
            nonce:  ajax_public.woocompare_nonce, 
            action: 'woocompare_public_hook',
            theCurIds: theCurIds
        }, function(data) {
            let popTable = document.getElementById('cboxLoadedContent');
            console.log(data); 
            console.log('finished'); 
            popTable.innerHTML = '<div id="woocompare-table">' + data + '</div>'; 
        })
    });
}

let bindAddListener = resgisterAddListen.bind(this); 

for(let i = 0; i < compareButtons.length; i++){
 
    compareButtons[i].addEventListener('click', bindAddListener);
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

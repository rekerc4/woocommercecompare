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
            let mainTable = document.createElement('table'); 
            let tableHeader = document.createElement('tr');
            
            tableHeader.setAttribute('id', 'woocompare--table-head-row'); 
            tableHeader.setAttribute('class', 'woocompare--table-head-row'); 
            
            let loadingWheel = document.getElementById('woocompare--cb-loading');
            let productObject = JSON.parse(data); 
            
            mainTable.setAttribute('id', 'woocompareProductTable'); 
            popTable.removeChild(loadingWheel); 
            popTable.appendChild(mainTable); 
            
            let productTable = document.getElementById('woocompareProductTable'); 
            let count = 0; 
            
            productTable.appendChild(tableHeader); 
            tableHeader.innerHTML = '<th class="woocompare--table-title">Compare Products</th>';
            
            console.log(productObject[0]);
            
            let oddEvenCounter = 0; 
            
            Object.keys(productObject[0]).forEach(function(item){
                
                let oddEven = oddEvenCounter % 2 === 0 ? 'woocompare--even-row' : 'woocompare--odd-row'; 
                let rowFor = 'woocompare--' + item + 'Row'; 
                let productInfoRows = document.createElement('tr');
                let rowTitleContainer = document.createElement('td'); 
                rowTitleContainer.innerHTML = item; 
                oddEvenCounter++; 
                productInfoRows.setAttribute('id', rowFor);
                productInfoRows.setAttribute('class', oddEven); 
                productTable.appendChild(productInfoRows); 
                productInfoRows.appendChild(rowTitleContainer); 
                
                let it = 0; 

                Object.keys(productObject).forEach(function(el){
              
                    let curObj = productObject[el][item]; 
                    let curColumnTds = document.createElement('td'); 
                   
                    let curRow = document.getElementById(rowFor); 

                    if(item === 'image'){
                        let curColumnImages = document.createElement('img'); 
                        curColumnImages.setAttribute('src', curObj); 
                        curColumnTds.appendChild(curColumnImages); 
                        curRow.appendChild(curColumnTds); 
                    }
                    else{
                        curColumnTds.innerHTML = curObj; 
                        curRow.appendChild(curColumnTds); 
                    }
                   
                    console.log(curObj); 

               

                }); 
            });
            // console.log(mainTable); 
            // console.log(JSON.parse(data)); 
        })
    });
}

let bindAddListener = resgisterAddListen.bind(this); 

for(let i = 0; i < compareButtons.length; i++){
 
    compareButtons[i].addEventListener('click', bindAddListener);
}
 
});


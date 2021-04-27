function init(){
    new Vue({
        el:'#app',
        data:{
            headerItem:['home','services','about','video','blog','store'],
        },
        'methods':{
             log:function(){
                console.log('ciao');
            }
        }
    });

}
document.addEventListener('DOMContentLoaded',init);
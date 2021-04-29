function init(){
    new Vue({
        el:'#app',
        data:{
            headerItem:['home','services','about','video','blog','store'],
            footerlist:['The best protein shake','Ultimate cardio workout','New juices available','New juices available','Tips to find training partners'],
        },
        'methods':{
             log:function(){
                console.log('ciao');
            }
        }
    });

}
document.addEventListener('DOMContentLoaded',init);
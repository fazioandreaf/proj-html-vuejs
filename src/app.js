function init(){
    new Vue({
        el:'#app',
        data:{
        headerItem:['home','services','about','video','blog','store'],
        footerlist:['The best protein shake','Ultimate cardio workout','New juices available','New juices available','Tips to find training partners'],
        windowHeight: document.documentElement.scrollHeight,
        scrollPercent:0 ,
        },
        created(){
            window.addEventListener('scroll', this.log);
        },
        'methods':{
             log: function(event){
                scrollTopp= document.documentElement.scrollTop;
                documentHeight= document.body.scrollHeight;
                // windowHeight= document.documentElement.scrollHeight;
                this.scrollPercent = (scrollTopp / documentHeight)*100 ;
                console.log(this.scrollTopp,this.documentHeight,this.windowHeight,this.scrollPercent);
                return this.scrollPercent
            },
        }
    });
    // function getScroollPercent(){
    //    var h = document.documentElement, 
    //     b = document.body,
    //     st = 'scrollTop',
    //     sh = 'scrollHeight';
    //     console.log(h,h[s,b,b[sh],) 
    // };
    // getScroollPercent()

}
document.addEventListener('DOMContentLoaded',init);
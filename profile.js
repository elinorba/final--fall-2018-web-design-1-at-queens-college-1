el.addEvent('click', function(e){
    if(obj.options.onOpen){
        new Event(e).stop();
        if(obj.options.open == i){
            obj.options.open = null;
            obj.options.onClose(this.href, i);
        }else{
            obj.options.open = i;
            obj.options.onOpen(this.href, i);
        }
    }
})

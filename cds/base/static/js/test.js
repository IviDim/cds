require(["jquery", "js/record_tools"], function (){
    $(document).ready(function(){
    	$('.dropdown-toggle').dropdown()
    	
        var showChar = 30;
        var ellipsestext = "...";
        var moretext = "(read more)";
        var lesstext = "(read less)";
        
        $('.more').each(function() 
        {
            var content = $(this).html();
            var text = content.split(" ");

            if(text.length > showChar) 
            {
                var c = text.slice(0, showChar);
                c.push(' ');
                var h = text.slice(showChar, text.length);
     
                var html = c.join(separator=' ') + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h.join(separator=' ') + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
     
                $(this).html(html);
            }
     
        });
     
        $(".morelink").click(function()
        {
            if($(this).hasClass("less")) 
            {
                $(this).removeClass("less");
                $(this).html(moretext);
            } 
            else 
            {
                $(this).addClass("less");
                $(this).html(lesstext);
            }
            
            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            return false;
        });
    })
})
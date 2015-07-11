$( document ).ready(function() 
{  
  //slider 
   $(function()
   {
      $("#slides").slides({
        
        play: 3000,
        pause: 2500,
        hoverPause: true    
      });
   });

   //tooltip
   
   $(function()
   {
      $(document).on('mouseenter', '.js-tooltip__message', function()
      { 
        $(".js-tooltip__popup").addClass("visible_block");                                                                    
      });

      $(document).on('mouseleave', '.js-tooltip', function()
      { 
        $(".js-tooltip__popup").removeClass("visible_block");                                                                    
      });

      $(document).on('mousedown', '.js-tooltip__popup', function()
      { 
        $(".js-tooltip__popup").removeClass("visible_block");                                                                    
      });
      
   });
  

   //tabs 
   $(function()
   {
      $(document).on('click', '.tabs__menu-item', function()
      {  
        var index = $(this).index();            
        $(".tabs__menu-item--active").removeClass("tabs__menu-item--active");        
        $(this).addClass("tabs__menu-item--active");                       
        $(".tabs__article--active").removeClass("tabs__article--active");        
        $(".tabs__article").eq(index).addClass("tabs__article--active");                   
      });
   });  

   //rangeslider
   $(function()
   {
      
      $(".rangeslider").noUiSlider({
        start:[1200,9500],
        step:100,
        connect:!0,
        range:{min:0,max:15000},
        format:wNumb({decimals:0,postfix:"Р"})
      });
     
      $(".rangeslider").Link("lower").to('-inline-<div class="rangeslider-tooltip"></div>',
      function(a)
      {
        $(this).html("<span>"+a+"</span>")
      });
      
      $(".rangeslider").Link("upper").to('-inline-<div class="rangeslider-tooltip"></div>',
      function(a)
      {
        $(this).html("<span>"+a+"</span>")
      });
      $(".rangeslider").Link("lower").to($('#range_lower'));
      $(".rangeslider").Link("upper").to($('#range_upper'));
      //$(".steps--pill__active").draggable({ grid: [100,50] });
    });

   //tree-steps-slider
   $(function()
   {
   
    $(document).on('click', '.steps__pill--start', function()
      { 
        $(".steps__pill--half").css('background-color','#e6e9ed');                      
        $(".steps__pill--finish").css('background-color','#e6e9ed'); 
        $(".steps__range--start").css('background-color','#e6e9ed');
        $(".steps__range--finish").css('background-color','#e6e9ed');                
        $(".steps__pill--active").css('left','20px'); 
      });

    $(document).on('click', '.steps__pill--half', function()
      {   
        $(".steps__pill--half").css('background-color','#fc6e51');                      
        $(".steps__pill--finish").css('background-color','#e6e9ed');
        $(".steps__range--start").css('background-color','#fc6e51');
        $(".steps__range--finish").css('background-color','#e6e9ed');              
        $(".steps__pill--active").css('left','255px');  
      });

    $(document).on('click', '.steps__pill--finish', function()
      {   

        $(".steps__pill--half").css('background-color','#fc6e51');                      
        $(".steps__pill--finish").css('background-color','#fc6e51');
        $(".steps__range--start").css('background-color','#fc6e51');
        $(".steps__range--finish").css('background-color','#fc6e51');              
        $(".steps__pill--active").css('left','487px'); 
      });

    $(document).on('click', '.steps__range--start', function()
      { 

        var margin_left = $('.steps__pill--active').css('left');
        console.log(margin_left); 
        if (margin_left == '20px')
        {
            $(".steps__pill--half").css('background-color','#fc6e51');                      
            $(".steps__pill--finish").css('background-color','#e6e9ed');
            $(".steps__range--start").css('background-color','#fc6e51');
            $(".steps__range--finish").css('background-color','#e6e9ed');              
            $(".steps__pill--active").css('left','255px');  
        }
        else if (margin_left == '255px')
        {
          $(".steps__pill--half").css('background-color','#e6e9ed');                      
          $(".steps__pill--finish").css('background-color','#e6e9ed'); 
          $(".steps__range--start").css('background-color','#e6e9ed');
          $(".steps__range--finish").css('background-color','#e6e9ed');                
          $(".steps__pill--active").css('left','20px'); 
        }

        else if (margin_left == '487px')
        {
          $(".steps__pill--half").css('background-color','#fc6e51');                      
          $(".steps__pill--finish").css('background-color','#e6e9ed');
          $(".steps__range--start").css('background-color','#fc6e51');
          $(".steps__range--finish").css('background-color','#e6e9ed');              
          $(".steps__pill--active").css('left','255px');
        }       
      });


    $(document).on('click', '.steps__range--finish', function()
      { 

        var margin_left = $('.steps__pill--active').css('left');
        console.log(margin_left); 
        if (margin_left == '20px')
        {
            $(".steps__pill--half").css('background-color','#fc6e51');                      
            $(".steps__pill--finish").css('background-color','#e6e9ed');
            $(".steps__range--start").css('background-color','#fc6e51');
            $(".steps__range--finish").css('background-color','#e6e9ed');              
            $(".steps__pill--active").css('left','255px');  
        }
        else if (margin_left == '255px')
        {
          $(".steps__pill--half").css('background-color','#fc6e51');                      
          $(".steps__pill--finish").css('background-color','#fc6e51');
          $(".steps__range--start").css('background-color','#fc6e51');
          $(".steps__range--finish").css('background-color','#fc6e51');              
          $(".steps__pill--active").css('left','487px'); 
        }

        else if (margin_left == '487px')
        {
          $(".steps__pill--half").css('background-color','#fc6e51');                      
          $(".steps__pill--finish").css('background-color','#e6e9ed');
          $(".steps__range--start").css('background-color','#fc6e51');
          $(".steps__range--finish").css('background-color','#e6e9ed');              
          $(".steps__pill--active").css('left','255px');
        }       
      });
   });   
});
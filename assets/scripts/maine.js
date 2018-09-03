$(document).ready(function(){

    $(".bouton_click").click(function()
    {
          $( ".bouton_click_on" ).removeClass( "bouton_click_on" ).addClass( "bouton_click_off" );
          $( ".circle_back" ).removeClass( "circle_back" ).addClass( "circle_back_af" );
          $( ".circle_more" ).removeClass( "circle_more" ).addClass( "circle_more_af" );
          $( ".circle_option" ).removeClass( "circle_option" ).addClass( "circle_option_af" );
          $( ".circle_down" ).removeClass( "circle_down" ).addClass( "circle_down_af" );
          $( ".bouton_ctr" ).removeClass( "bouton_ctr" ).addClass( "bouton_ctr_af" );
      
    });
  
    $(".circle").click(function()
    {
          $( ".bouton_click_off" ).removeClass( "bouton_click_off" ).addClass( "bouton_click_on" );
          $( ".circle_back_af" ).removeClass( "circle_back_af" ).addClass( "circle_back" );
          $( ".circle_more_af" ).removeClass( "circle_more_af" ).addClass( "circle_more" );
          $( ".circle_option_af" ).removeClass( "circle_option_af" ).addClass( "circle_option" );
          $( ".circle_down_af" ).removeClass( "circle_down_af" ).addClass( "circle_down" );
          $( ".bouton_ctr_af" ).removeClass( "bouton_ctr_af" ).addClass( "bouton_ctr" );
      
     
    });
  
  });
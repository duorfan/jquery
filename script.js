$(document).ready(function(){
    $("h1").click(function(){
      $(this).hide();
    });
  });

$(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "pink");
    });
    $("input").blur(function(){
      $(this).css("background-color", "lightpink");
    });
  });

  $(document).ready(function(){
    $("#p1").mouseenter(function(){
      alert("Click on a box to toggle transform!");
    });
  });

  $(document).ready(function(){
    $("#p1").mouseleave(function(){
      alert("Try the interesting effects!");
    });
  });

  $(document).ready(function(){
    $("#p2").hover(function(){
      alert("Double click on a circle to move it !");
    },
    function(){
      alert("Bye! Try other ones!");
    }); 
  });
  
const app = {

    data: detailedBandObject, //this comes from my data.js files
  
    initialize: () => {
      $('.box').click(e => {
        $(e.currentTarget).toggleClass('transform')  
      });
  
      $('.circle').dblclick(e => {
        $(e.currentTarget).toggleClass('moveMe')      
      });
    },
}
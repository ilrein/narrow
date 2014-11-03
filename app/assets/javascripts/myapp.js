var ready;

ready = function() {

  $('.jointeam').on('click', function(e){
    // var id = $(this).data("id");
    // var user = $(this).data("user");
    // e.preventDefault;
    // $.ajax({
    //   type: "POST",
    //   url: "/teams/" + id + "/join/"
    // });
    // //alert(user);
  });

}

$(document).ready(ready);
$(document).on('page:load', ready);

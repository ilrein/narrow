var ready;

ready = function() {

  $('.jointeam').on('click', function(e){
    var id = $(this).data("id");
    e.preventDefault;
    $.ajax({
      // type: "POST",
      // url: "/teams/" + id,
      // data: {_method:"PUT", }
    });
    alert(id);
  });

}

$(document).ready(ready);
$(document).on('page:load', ready);

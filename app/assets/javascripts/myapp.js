var ready;

ready = function() {

  $('.jointeam').on('click', function(e){
    e.preventDefault;
    alert('test');
  });

}

$(document).ready(ready);
$(document).on('page:load', ready);

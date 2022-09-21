// $(selector).action()

$(document).ready(function() {
    $('.proj-img').click(function() {
        $('.show').removeClass('show');
        var id = $(this).data('id');
        $('#'+id).addClass('show');
    })
})
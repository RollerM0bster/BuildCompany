$( document ).ready(function() {

    $('#mats_new').change(function (){
        var id=$(this).val();
        if($('.mat'+id).length==0) {
            var name = $('#mats_new option:selected').html();
            $('.materials').append('<div class="mat_row mat' + id + '"><span class="mat_name">' + name + '</span>' +
                '<input type="number" data-id="' + id + '" min="0" max="100" value="1" class="count_mat"><a class="remove" data-id="' + id + '" href="#">Удалить</a></div>')
        }
        })

    $(document).on("click", ".remove", function() {
        var id=$(this).data('id');
        $('.mat'+id).remove();
    });

    $('.create_req').click(function (event){
        event.preventDefault();
        var prov=$('#prov_new').val();
        var mats=[]
        var count=0;
        $('.count_mat').each(function(index,element){
            count++;
            mats.push({id:$(element).data('id'),count:$(element).val()})
        });
        if(count>0) {
            $.ajax({
                type: "POST",
                url: "/ajax/request/create.php",
                data: {materials: mats, provider: prov},
                success: function (response) {
                    console.log(response);
                    alert('Заявка создана');
                    location.href='/';
                }
            });
        }
    })

    $('.close_req').click(function (event){
        event.preventDefault();
        var id=$(this).data('id');
        var block = $(this).parent().parent();
        $.ajax({
            type: "POST",
            url: "/ajax/request/close.php",
            data: {req_id: id},
            success: function (response) {
                console.log(response);
                block.html('Заявка закрыта');
            }
        });
    })
});
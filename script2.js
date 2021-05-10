var postTemplate;

$(document).ready(function()
{
    postTemplate = $('#order-template').html();
    console.log(postTemplate);

    $('#add_component').click(function(){
       
        var component = {
            name: $('#selection').val()   
        };

        $('#components').append(Mustache.render(postTemplate, component));

        console.log(component);
    });
});


//$components.delegate('.remove','click', function (obj) {});

function remove(obj)
{
    obj.closest('li').remove();
}

var postTemplate;
var count = 0;

$(document).ready(function()
{
    postTemplate = $('#order-template').html();
    console.log(postTemplate);

    $('#add_component').click(function(){
       
        count++;
        var component = {
            name: $('#selection').val()   
        };
        
        if(count <= 7)
        {
            $('#components').append(Mustache.render(postTemplate, component));
        }

        if(count >= 7)
        {
            $('#add_component').prop('disabled', true);
        }

        console.log(count);
    });
});


function remove(obj)
{
    count--;
    if(count <= 7)
        {
            $('#add_component').prop('disabled', false);
        }
    console.log(count);
    obj.closest('li').remove();
}

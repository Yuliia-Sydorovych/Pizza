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

$(document).ready(function()
{
    $('input[name="sause"]').click(function ()
    {
        var select_sause = $(this).val();
        console.log(select_sause);

        if(select_sause == "red")
        {
            $('.right').find(".red_sause").css('display', 'block');
            $('.right').find(".red_sause").css('float', 'left');
            $('.right').find(".red_sause").css('width', '335px');
            $('.right').find(".white_sause").css('display', 'none');
        }
        else
            if(select_sause == "white")
            {
                $('.right').find(".white_sause").css('display', 'block');
                $('.right').find(".red_sause").css('display', 'none');
            }

    });
});

$(document).ready(function()
{
    $('input[name="price"]').click(function ()
    {
       

    });
});

function change_price()
{
    var range = document.getElementById('range');
    var max_value = document.getElementById('max');
    
    max_value.innerHTML = "$" + range.value;
   
    var value = range.value;
        console.log(value);

        if(value == 14)
        {
            $('.right').find(".fifteen").css('display', 'none');
            $('.right').find(".fourteen").css('display', 'block');
            $('.right').find(".thirteen").css('display', 'block');
            $('.right').find(".twelve").css('display', 'block');
            $('.right').find(".eleven").css('display', 'block');
            $('.right').find(".ten").css('display', 'block');
        }
        else
            if(value == 13)
            {
                $('.right').find(".fifteen").css('display', 'none');
                $('.right').find(".fourteen").css('display', 'none');
                $('.right').find(".thirteen").css('display', 'block');
                $('.right').find(".twelve").css('display', 'block');
                $('.right').find(".eleven").css('display', 'block');
                $('.right').find(".ten").css('display', 'block');
            }
            else
                if(value == 12)
                {
                    $('.right').find(".fifteen").css('display', 'none');
                    $('.right').find(".fourteen").css('display', 'none');
                    $('.right').find(".thirteen").css('display', 'none');
                    $('.right').find(".twelve").css('display', 'block');
                    $('.right').find(".eleven").css('display', 'block');
                    $('.right').find(".ten").css('display', 'block');
                }
                else
                    if(value == 11)
                    {
                        $('.right').find(".fifteen").css('display', 'none');
                        $('.right').find(".fourteen").css('display', 'none');
                        $('.right').find(".thirteen").css('display', 'none');
                        $('.right').find(".twelve").css('display', 'block');
                        $('.right').find(".eleven").css('display', 'block');
                        $('.right').find(".ten").css('display', 'block');
                    }
                    else
                        if(value == 10)
                        {
                            $('.right').find(".fifteen").css('display', 'none');
                            $('.right').find(".fourteen").css('display', 'none');
                            $('.right').find(".thirteen").css('display', 'none');
                            $('.right').find(".twelve").css('display', 'none');
                            $('.right').find(".eleven").css('display', 'none');
                            $('.right').find(".ten").css('display', 'block');
                        }
}
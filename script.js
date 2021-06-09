var postTemplate;
var myObj;
var myArray = new Array();
var count = 1;

var number = 0;

$(document).ready(function()
{
    $('.close').click(function()
    {
        count++;
        $('body').find(".center").css('display', 'block');
        $('body').find(".footer").css('display', 'block');
        $('body').find(".cart").css('display', 'none');

    });
});

function Cart()
{
    count++;
    
        if(count%2==0)
        {
            $('body').find(".center").css('display', 'none');
            $('body').find(".footer").css('display', 'none');
            $('body').find(".cart").css('display', 'block');
        }
        else
        {

        }
        if(count%2!=0)
        {
            $('body').find(".center").css('display', 'block');
            $('body').find(".footer").css('display', 'block');
            $('body').find(".cart").css('display', 'none');
        }
        
}

function Add(obj, obj2)
{
    
    postTemplate = $('#order-template').html();
    
    var component = {
        name: obj,
        price: obj2
    };
    if(component)
    {
        number++;

        if(number <= 7)
        {
            $('#orders').append(Mustache.render(postTemplate, component));
        }
        else
        {
            number=7;
        }
    }
    console.log(number);
}


function remove(obj)
{
    number--;
    console.log(number);
    
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

$(function()
{
    $(document).on('click','#Meat',function()
    {
       if($(this).prop('checked'))
       {
            $('.right').find(".Meat").css('display', 'block');
            $('.right').find(".Pepperoni").css('display', 'none');
            $('.right').find(".Bacon").css('display', 'none');
            $('.right').find(".Olives").css('display', 'none');
            $('.right').find(".Pineapples").css('display', 'none');
            $('.right').find(".Mozzarella").css('display', 'none');
       }
       else
        {
            $('.right').find(".Meat").css('display', 'block');
            $('.right').find(".Pepperoni").css('display', 'block');
            $('.right').find(".Bacon").css('display', 'block');
            $('.right').find(".Olives").css('display', 'block');
            $('.right').find(".Pineapples").css('display', 'block');
            $('.right').find(".Mozzarella").css('display', 'block');
        }
    });
})
$(function()
{
    $(document).on('click','#Pepperoni',function()
    {
       if($(this).prop('checked'))
       {
            $('.right').find(".Meat").css('display', 'none');
            $('.right').find(".Pepperoni").css('display', 'block');
            $('.right').find(".Bacon").css('display', 'none');
            $('.right').find(".Olives").css('display', 'none');
            $('.right').find(".Pineapples").css('display', 'none');
            $('.right').find(".Mozzarella").css('display', 'none');
        
       }
       else
        {
            $('.right').find(".Meat").css('display', 'block');
            $('.right').find(".Pepperoni").css('display', 'block');
            $('.right').find(".Bacon").css('display', 'block');
            $('.right').find(".Olives").css('display', 'block');
            $('.right').find(".Pineapples").css('display', 'block');
            $('.right').find(".Mozzarella").css('display', 'block');
        }
    });
})
$(function()
{
    $(document).on('click','#Bacon',function()
    {
       if($(this).prop('checked'))
       {
            $('.right').find(".Meat").css('display', 'none');
            $('.right').find(".Pepperoni").css('display', 'none');
            $('.right').find(".Bacon").css('display', 'block');
            $('.right').find(".Olives").css('display', 'none');
            $('.right').find(".Pineapples").css('display', 'none');
            $('.right').find(".Mozzarella").css('display', 'none');
        
       }
       else
        {
            $('.right').find(".Meat").css('display', 'block');
            $('.right').find(".Pepperoni").css('display', 'block');
            $('.right').find(".Bacon").css('display', 'block');
            $('.right').find(".Olives").css('display', 'block');
            $('.right').find(".Pineapples").css('display', 'block');
            $('.right').find(".Mozzarella").css('display', 'block');
        }
    });
})
$(function()
{
    $(document).on('click','#Olives',function()
    {
       if($(this).prop('checked'))
       {
            $('.right').find(".Meat").css('display', 'none');
            $('.right').find(".Pepperoni").css('display', 'none');
            $('.right').find(".Bacon").css('display', 'none');
            $('.right').find(".Olives").css('display', 'block');
            $('.right').find(".Pineapples").css('display', 'none');
            $('.right').find(".Mozzarella").css('display', 'none');
        
       }
       else
        {
            $('.right').find(".Meat").css('display', 'block');
            $('.right').find(".Pepperoni").css('display', 'block');
            $('.right').find(".Bacon").css('display', 'block');
            $('.right').find(".Olives").css('display', 'block');
            $('.right').find(".Pineapples").css('display', 'block');
            $('.right').find(".Mozzarella").css('display', 'block');
        }
    });
})
$(function()
{
    $(document).on('click','#Pineapples',function()
    {
       if($(this).prop('checked'))
       {
            $('.right').find(".Meat").css('display', 'none');
            $('.right').find(".Pepperoni").css('display', 'none');
            $('.right').find(".Bacon").css('display', 'none');
            $('.right').find(".Olives").css('display', 'none');
            $('.right').find(".Pineapples").css('display', 'block');
            $('.right').find(".Mozzarella").css('display', 'none');
        
       }
       else
        {
            $('.right').find(".Meat").css('display', 'block');
            $('.right').find(".Pepperoni").css('display', 'block');
            $('.right').find(".Bacon").css('display', 'block');
            $('.right').find(".Olives").css('display', 'block');
            $('.right').find(".Pineapples").css('display', 'block');
            $('.right').find(".Mozzarella").css('display', 'block');
        }
    });
})
$(function()
{
    $(document).on('click','#Mozzarella',function()
    {
       if($(this).prop('checked'))
       {
            $('.right').find(".Meat").css('display', 'none');
            $('.right').find(".Pepperoni").css('display', 'none');
            $('.right').find(".Bacon").css('display', 'none');
            $('.right').find(".Olives").css('display', 'none');
            $('.right').find(".Pineapples").css('display', 'none');
            $('.right').find(".Mozzarella").css('display', 'block');
        
       }
       else
        {
            $('.right').find(".Meat").css('display', 'block');
            $('.right').find(".Pepperoni").css('display', 'block');
            $('.right').find(".Bacon").css('display', 'block');
            $('.right').find(".Olives").css('display', 'block');
            $('.right').find(".Pineapples").css('display', 'block');
            $('.right').find(".Mozzarella").css('display', 'block');
        }
    });
})
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
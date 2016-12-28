var formController = function()
{

    var message;

    $('#submit').on('click',function()
        {
            var valid = validation();
            if (valid)
            {
                emailContact = $('#email').val();
                text = $('#message').val();
                message = 'name='+emailContact+'&text='+text;
                console.log(message);
                ajaxPost( './php/sendEmailToMyself.php', message, successFunction);
                $('#email').val('');
                $('#message').val('');
            }
        });
};
function successFunction()
{

console.log('sent');
}

var validation = function ()
{
    return true;
};

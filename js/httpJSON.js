/*****************************************************
    Simplified version of $.ajax  for POST
 ******************************************************/
var ajaxPost= function ( url, data, successFunction)
{
    $.ajax({
        crossOrigin: true,
        crossDomain:true,
          type: 'POST',
              contentType:'application/json',
              url: url,

              data: JSON.stringify(data),
              dataType:'json',
              success:function(data)
              {
              successFunction(data);
            }
          });
};
/*****************************************************
    Simplified version of $.ajax  for GET
 ******************************************************/
var ajaxGet= function ( url,successFunction)
{
    $.ajax({
            type: 'GET',
            contentType:'application/json',
            url: url,
            dataType:'json',
            success:function (data)
            {
                successFunction(data);
            }

          });

};

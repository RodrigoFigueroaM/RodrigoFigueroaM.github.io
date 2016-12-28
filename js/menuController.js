/*****************************************************
    File to take care of all the menu events
******************************************************/
var menu = function()
{
  	'use strict';
    $('.item').on('click',function(e)
        {
            e.preventDefault();
            var nextRef = $(this).attr('href');
            var display = $('#display div').toArray();
            $(display).transition({ animation :'slide right',
                                    duration  : '700ms'})
                      .transition('hide');

            $(nextRef).transition({ animation :'slide left',
                                    duration  : '700ms',
                                    onStart: function()
                                    {
                                        var nextRefFields=$(nextRef +' div').toArray();
                                         $(nextRefFields).transition({ animation :'slide left',
                                                                     duration  : '500ms'
                                                                    });
                                    }
                                   });

        });
        formController();
};
$(document).ready(menu);

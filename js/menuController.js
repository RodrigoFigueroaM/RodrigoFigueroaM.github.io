/*****************************************************
    File to take care of all the menu events
******************************************************/
var menu = function()
{
  	'use strict';
    $('.item').on('click',clickOnMenuItem);

};

var clickOnMenuItem = function(e)
    {
        e.preventDefault();
        $('.item').unbind('click', clickOnMenuItem);
        var nextRef = $(this).attr('href');
        var display = $('#display div').toArray();

        $(display).transition({ animation :'slide right',
                                duration  : '500ms'
                            })
                  .transition('hide');

        $(nextRef).transition({ animation :'slide left',
                                duration  : '500ms',
                                onStart: function()
                                {
                                    if($(nextRef +' div'))
                                    {
                                        var nextRefFields=$(nextRef +' div').toArray();
                                        $(nextRefFields).transition({ animation :'slide left',
                                                                     duration  : '500ms'
                                                                    });
                                    }
                                },
                                onComplete: function()
                                {
                                    $('.item').bind('click', clickOnMenuItem);
                                }
                            });
};

$(document).ready(menu);

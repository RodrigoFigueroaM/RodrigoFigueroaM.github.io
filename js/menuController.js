/*****************************************************
    File to take care of all the menu events
******************************************************/
var menu = function()
{
  	'use strict';

    $('.item').on('click',clickOnMenuItem);

    $('.ui.inverted.button').on('click',modal);

    /* hover over portfolio images*/
    $('.special.cards .image').dimmer({
        on: 'hover'
    });

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

var modal = function()
{
    var modalImageSrc = $(this).closest('.card').find('img').attr('src');
    var modalHeader = $(this).closest('.card').find('.header').text();


    $('.ui.modal').modal({
            onShow:function()
                {
                    $(this).find('.header').text(modalHeader);
                    $(this).find('img').attr('src',modalImageSrc);
                }
            });
    $('.ui.modal')
    .modal('setting', 'transition','scale')
    .modal('show');
};

$(document).ready(menu);

(function($) {
        $.extend(mejs.MepDefaults, {
                title: null,
                titleLink: null
        });

        $.extend(MediaElementPlayer.prototype, {
                buildtitle: function(player, controls, layers, media) {
                        if (player.isVideo && player.options.title != null ) {
                                title = $('<div class="mejs-title"><a href="' + player.options.titleLink + '">' + player.options.title + '</a></div>');
                                title.insertAfter(layers);
                                media.addEventListener('play',function() {
                                        title.hide();
                                }, false);
                                media.addEventListener('pause',function() {
                                        title.show();
                                }, false);
                        }
                }
        });
})(mejs.$);


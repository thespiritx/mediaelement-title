(function($) {
        $.extend(mejs.MepDefaults, {
		title: null,
		titleLink: null
        });

        $.extend(MediaElementPlayer.prototype, {
		buildtitle: function(player, controls, layers, media) {
                        if (player.isVideo && player.options.title != null ) {
				$('<div class="mejs-overlay mejs-overlay-title"><a href="' + player.options.titleLink + '">' + player.options.title + '</a></div>').appendTo(layers)
                        }
                }
        });
})(mejs.$);

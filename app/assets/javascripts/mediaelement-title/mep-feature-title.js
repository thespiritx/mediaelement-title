(function($) {
        $.extend(mejs.MepDefaults, {
		title: null,
		titleLink: null
        });

        $.extend(MediaElementPlayer.prototype, {
		buildtitle: function(player, controls, layers, media) {
                        if (player.isVideo && player.options.title != null ) {
				$('<div class="mejs-overlay mejs-overlay-title"><a href="' + title + '">' + player.options.titleLink + '</a></div>').appendTo(player.layers)
                        }
                }
        });
})(mejs.$);
style="color: white; display: block; font-weight: bold; font-size: 15pt; margin: 10px 15px; text-shadow: 0px 0px 2px rgb(0, 0, 0);">
style="width: 100%; z-index: 999"

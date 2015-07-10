var HY = {};

//get references to the mirror and images
var $mirror = $(".magic-mirror");
var $light = $(".light-world");
var $dark = $(".dark-world");

HY.mirror = function() {
	$mirror.on("click", function() {
		$light.toggleClass("active");
		$dark.toggleClass("active");
	});
};

HY.init = function() {
	this.mirror();
}

$(document).ready(function() {
	HY.init();
});
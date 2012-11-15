var accordionAnimator = function _accordionAnimator($widget, duration, delay){
	animatorBase.apply(this, arguments);
	this.$headers = this.$widget.find("> h3");
	this.$contents = this.$headers.next("div");
};

accordionAnimator.prototype = new animatorBase();
accordionAnimator.prototype.constructor = accordionAnimator;
accordionAnimator.prototype.getActive = function _getActive(){
	return this.$widget.accordion( "option", "active" );
};


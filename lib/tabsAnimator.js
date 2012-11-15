var tabsAnimator = function _tabsAnimator($widget, duration, delay){
	animatorBase.apply(this, arguments);
	this.$headers = this.$widget.find("li");
	this.$contents = this.$widget.find("> div");
};

tabsAnimator.prototype = new animatorBase();
tabsAnimator.prototype.constructor = tabsAnimator;
tabsAnimator.prototype.getActive = function _getActive(){
	return this.$widget.tabs( "option", "active" );
};

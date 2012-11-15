animatedTabsAccordion = function _animatedTabsAccordion(containerSelector, items, tabsOptions, accordionOptions){
	tabsAccordion.apply(this, arguments);
};

animatedTabsAccordion.prototype = new tabsAccordion();

animatedTabsAccordion.prototype.constructor = animatedTabsAccordion;
animatedTabsAccordion.prototype._generate = function(newState){
	var self = this;
	if(this.curState != newState){
		if(this.curState !== null){
			var animator = createAnimator(this.curState, this.$container);
			animator.hide(function(){
				self.$container[self.curState]("destroy");
				self.$container.empty();
				self._doVisible(newState);
			});
		}
		else{
			this._doVisible(newState);
		}
		
	}
};

animatedTabsAccordion.prototype._doVisible = function(newState){
	this["_generate" + newState + "MarkUp"]();
	this.$container[newState](this[newState + "Options"]);
	this.curState = newState;
	var animator = createAnimator(newState, this.$container);
	animator.show();		
};

	
animatedTabsAccordion.prototype.generateTabs = function(){
	this._generate("tabs");
};
	
animatedTabsAccordion.prototype.generateAccordion = function(){
	this._generate("accordion");
};

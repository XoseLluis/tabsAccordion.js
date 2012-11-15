//@duration: duration of each piece of the animation (showing a tab item, hiding an accordion item...)
//@delay: time between the end of one piece of animation and the start of the following
var animatorBase = function _animatorBase($widget, duration, delay){
	this.$widget = $widget;
	this.duration = duration || 300;
	this.delay = delay || 200;
};

animatorBase.prototype = {
	constructor: animatorBase,
	
	getActive: function _getActive(){
		//abstract method, to be implemented by derived classes	
		//something like: $widget.accordion( "option", "active" );
	},
	
	//show usage is different from hide, we assume a common pattern will be that users create an accordion and immediately ask the 
	//animator to show it, so in those cases the first step would be hiding it (without animation)
	show: function _show(){
		this.active = this.getActive();
		
		//do not hide if it's already hidden
		//we assume that if one header is hidden, the whole accordion is hidden
		//jQuery show/hide modifies the display css property (none, block)
		if (this.$headers.eq(0).css("display") != "none"){
			this.$headers.hide();
			this.$contents.hide();	
		}
		
		this.curItem = 0;
		this._showNext();
	},

	_showNext: function _showNext(){
		var self = this;	
		if (this.curItem < this.$headers.length){
			this.$headers.eq(this.curItem).show(this.duration, function(){
				setTimeout(function(){
					self._showNext();
				}, self.delay);
			});
			this.curItem++;
		}
		else{
			setTimeout(function(){
				self.$contents.eq(self.active).show(self.duration);
			}, this.delay);
		}
	},		
	
	//@onCompletedCallback is mainly useful when the animator is used from the animatedTabsAccordion, where after hiding we'll want to show
	hide: function _hide(onCompletedCallback){
		var self = this;
		this.active = this.getActive();
		this.curItem = this.$headers.length - 1;
		self.$contents.eq(self.active).hide(self.duration, function(){
			setTimeout(function(){
				self._hideNext(onCompletedCallback);
			}, self.delay);
		});
	},

	_hideNext: function _hideNext(onCompletedCallback){
		var self = this;	
		if (this.curItem >= 0){
			this.$headers.eq(this.curItem).hide(this.duration, function(){
				setTimeout(function(){
					self._hideNext(onCompletedCallback);
				}, self.delay);
			});
			this.curItem--;
		}
		else if (onCompletedCallback){
			onCompletedCallback();
		}
	}		
};
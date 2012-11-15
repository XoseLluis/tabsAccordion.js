//@items: array of {name:, text:} objects representing each unit to be displayed on the tab/accordion
tabsAccordion = function _tabsAccordion(containerSelector, items, tabsOptions, accordionOptions){
	this.$container = $(containerSelector);
	this.items = items;
	this.tabsOptions = tabsOptions;
	this.accordionOptions = accordionOptions;
	this.curState = null; /* null, "accordion", "tabs" */
};

tabsAccordion.prototype = {
	constructor: tabsAccordion,
	
	_firstCharToUpper: function(str) {
	    return str.substr(0, 1).toUpperCase() + str.substr(1);    
	},
	
	_generatetabsMarkUp: function(){
		//build html for tabs
		var $ul = $("<ul>");
		for (var i=0; i<this.items.length; i++){
			var item = this.items[i];
			var id = "tabs-" + i;
			$("<li>").append(
				$("<a>").attr("href", "#" + id).html(item.name)
			).appendTo($ul);
			
			$("<div>")
			.attr("id", id)
			.html(item.text)
			.appendTo(this.$container);
		}
		this.$container.prepend($ul);
	},
	
	_generateaccordionMarkUp: function(){
		for (var i=0; i<this.items.length; i++){
			var item = this.items[i];
			this.$container
				.append($("<h3>").html(item.name))
				.append($("<div>").html(item.text));
		}
	},
	
	_generate: function(newState){
		if(this.curState != newState){
			if(this.curState !== null){
				this.$container[this.curState]("destroy");
				this.$container.empty();	
			}
			this["_generate" + this.firstCharToUpper(newState) + "MarkUp"]();
			this.$container[newState](this[newState + "Options"]);
			this.curState = newState;
		}
	},
	
	generateTabs: function(){
		this._generate("tabs");
	},
	
	generateAccordion: function(){
		this._generate("accordion");
	}
};
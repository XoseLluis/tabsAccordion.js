var $accordion;
var $tabs;
var myAccordionAnimator;
var myTabsAnimator;

$(document).ready(function(){
	$accordion = $("#accordionContainer");
	$tabs = $("#tabsContainer");
	myAccordionAnimator = new accordionAnimator($accordion);
	myTabsAnimator = new tabsAnimator($tabs);
	
	$("#accordionShowBt").click(function(){
		myAccordionAnimator.show();
	});
	
	$("#accordionHideBt").click(function(){
		myAccordionAnimator.hide();
	});
	
	$("#tabsShowBt").click(function(){
		myTabsAnimator.show();
	});
	
	$("#tabsHideBt").click(function(){
		myTabsAnimator.hide();
	});
	
	$accordion.accordion({ active: 1});
	$tabs.tabs();
});

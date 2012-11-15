var $accordionBt;
var $tabsBt;
var myTabsAccordion;

var books = [
	{
		name: "First Book",
		text: "<p>this is the first</p>"
			+ "<ul><li>aa</li><li>bb</li></ul>"
	},
	{
		name: "Second Book",
		text: "this is the second"
	},
	{
		name: "Third Book",
		text: "this is the third"
	},
];

$(document).ready(function(){
		$accordionBt = $("#accordionBt");
		$tabsBt = $("#tabsBt");
		$accordionBt.click(function(){
			myTabsAccordion.generateAccordion();
		});
		
		$tabsBt.click(function(){
			myTabsAccordion.generateTabs();
		});
		
		myTabsAccordion = new animatedTabsAccordion("#booksContainer", books);
});
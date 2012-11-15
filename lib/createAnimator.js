function createAnimator(type, $widget, duration, delay){
	switch (type){
		case "accordion":
			return new accordionAnimator($widget, duration, delay);
			
		case "tabs":
			return new tabsAnimator($widget, duration, delay);
		
	}
		

}

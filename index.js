// Basic script-y things

DISPLAY_SWAPS = {
	"block": "none",
	"none": "block",
}
function swapDisplay(cur_display_val) {
	return DISPLAY_SWAPS[cur_display_val]

}
document.addEventListener('click', function(e) {
    if(e.target.className == "collapse-sticky") {
       items = e.target.parentElement.getElementsByClassName("collapse-fluid");
       for(var i = 0; i < items.length; i++) {
       	   //items[i].style.display = swapDisplay(items[i].style.display);
       	   console.log(items[i].style.display);
       	   console.log(items[i]);
       	   if(items[i].style.display == "block" || items[i].style.display == null){
       	   	items[i].style.display = "none";
       	   }
       	   else {
       	   	items[i].style.display = "block";
       	   }
       }
       //options = document.getElementsByTagName('option');
       //selected = Array.from(options).filter( o => o.getAttribute('selected') == 'selected');
       //selected[0] .removeAttribute('selected', 'selected'); 
       //e.target.setAttribute('selected', 'selected');
    }
}, false);
/**
*	GoogleMapsを表示する（IFRAME版）
*	
*	@author Akihiro Koyanagi
*	@version 1.0.0
*	
*	@example
*	<div data-address="東京スカイツリー"></div>
*	<div data-address="35.667480, 139.727275"></div>
*	<div data-address="スターバックス 福岡市中央区大名2丁目4-22"></div>
*	
*	<script>
*	$(function(){
*		gmaps_lite($("[data-address]"));
*	});
*	</script>
*	
**/
function gmaps_lite($elm){
	$elm.each(function(){
		
		var address_e = encodeURIComponent($(this).data("address"));
		
		$(this)
			.css({ position: "relative" })
			.html('<iframe src="https://maps.google.co.jp/?q='+address_e+'&amp;hl=ja&amp;ie=UTF8&amp;z=16&amp;brcurrent=_&amp;output=embed" style="width:100%; height:100%; border:0;"></iframe>');
		
	});
}

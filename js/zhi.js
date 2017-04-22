
$(document).ready(function(){
	var imgCnt=$('.head').children('.head-box');
	for(var i=0;i<imgCnt.length;i++){
		imgCnt.eq(i).on('click',imgput);
	}
	var tabHeadCnt=$('.body-button');
	for(var i=0;i<tabHeadCnt.length;i++) {
		tabHeadCnt.eq(i).on('click',tabtoggle);
	}
	var dataDel=$('.foot-button-fir');
	for(var i=0;i<dataDel.length;i++) {
		dataDel.eq(i).on('click',datadel);
	}
	$('.foot-button-sec').on('click',dataadd);
});

function imgput(e) {
	var pre=$("<div></div>"),
		cover=$('<div></div>');
	pre.addClass('big-img');
	pre.text($(this).index()+1);
	cover.addClass('cover');
	cover.click(function(event) {
		pre.remove();
		this.remove();
		$('.img-wrap').toggleClass('de-emphasized');
	});
	$('body').append(pre);
	$('body').append(cover);
	$('.img-wrap').toggleClass('de-emphasized');

}

 function tabtoggle(e) {
 	var tabHeadCnt=$('.body-button');
	for(var i=0;i<tabHeadCnt.length;i++) {
		tabHeadCnt.eq(i).removeClass('.body-button');
	}
	$(this).addClass('body-button');
	$('.body-sec').text($(this).index()+1);
}

function datadel(e) {
	console.log($(this).parent().index());
	
	$(this).parent().remove();
	var dataDel=$('.foot-box');
	for(var i=0;i<dataDel.length;i++) {
		dataDel.eq(i).children('.foot-box-fir').text(i+1);
	}
}

function dataadd(e) {
	var cnt=$('<div></div>'),
		cntIndex=$('<div></div>'),
		cntDel=$('<button></button>');
	cnt.addClass('foot-box');
	cntIndex.addClass('foot-box-fir');
	cntDel.addClass('foot-button-fir');
	cntIndex.text($('.foot-box-fir').length+1);

	cntDel.text('Delete');
	cntDel.on('click',datadel);
	cnt.append(cntIndex);
	cnt.append(cntDel);
	$('.foot-fir').append(cnt);
}
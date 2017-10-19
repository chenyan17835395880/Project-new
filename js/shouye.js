/*
* @Author: Administrator
* @Date:   2017-10-14 20:10:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-19 17:36:24
*/
$(function(){
/*	let banner=document.querySelector(".banner");
	let banner1=document.querySelectorAll(".banner1");
	let wid=parseInt(getComputedStyle(banner,null).width);
	let control_left=document.querySelector(".control-left");
	let control_right=document.querySelector(".control-right");
	let dazi=document.querySelectorAll(".bottom-top");
	let ps=document.querySelectorAll(".bottom>p");

	// let */
	// console.log(ps)

	// let banner=document.querySelector(".banner");
	let wid=parseInt($(".banner").width());
	////////////////////////轮播
	let now=0;
	let next=0;
	let t;
	t=setInterval(move, 4000);
	function move(){
		next++;
		if(next==$(".banner1").length){
			next=0;
		}
		$(`.banner1`).eq(`${next}`).css({left:`${wid}px`});//wid+"px"
		$(`.banner1`).eq(`${now}`).animate({left:-wid});//json对象不用加单位,animate.js内部已经处理了
		$(`.banner1`).eq(`${next}`).animate({left:0});
		now=next;
	}
	console.log(next)	
	function moveL(){
		next--;
		if(next==-1){
			next=$(".banner1").length-1;
		}
		$(`.banner1`).eq(`${next}`).css({left:`${-wid}px`});//`${wid}px`
		$(`.banner1`).eq(`${now}`).animate({left:wid});//json对象不用加单位,animate.js内部已经处理了
		$(`.banner1`).eq(`${next}`).animate({left:0});
		now=next;
	}
	$(".control-left").click(function(){
		moveL();
	});
	$(".control-right").click(function(){
		move();
	});
	$(".banner").mouseover(function(){
		clearInterval(t);
	});
	$(".banner").mouseout(function(){
		t=setInterval(move, 3000);
	});

	///////////////////////今日特色
	

	///////////////////////厨师
	let chief_one=$('.chief-one');
	let widP=chief_one.width();
	let botR=$('.right1');
	let botL=$('.left1');
	let chief_everyW=$('.chief-every').width();
	let chief_every=$('.chief-every');
	console.log(chief_every)
	chief_one.html(function(index,value){
		return value+=value;
	});
	chief_one.css({width:`${widP*2}px`});
	let i=0;
	botR.click(function(){
		console.log(chief_every.length);
		console.log(Math.floor(chief_one.position().left));
		if(Math.floor(chief_one.position().left)==(`${-chief_everyW*i}`)){		
			if(i>2){
				return;
			}
			i++;
			chief_one.css({transform: `translate3d(${-chief_everyW*i}px, 0px, 0px)`});
			
		}
		
	})
	botL.click(function(){
		if(Math.floor(chief_one.position().left)==(`${-chief_everyW*i}`)){	
			i--;	
			if(i<=0){
				i=0;
			}
			chief_one.css({transform: `translate3d(${-chief_everyW*i}px, 0px, 0px)`});			
		}
	})


////////////////////////////有关评价
	let dians=$('.dian-dian>span');
	let W=$('.fankui-one').innerWidth();
	let fankui_box=$('.fankui-every');
	console.log(fankui_box)
	dians.each(function(index,value){
		/*setInterval(function(){
			$(value).triggerHandler('click');
		}, 3000);*/
		
		$(value).on('click',function(){
			$(value).css({background:'#240C08'});
			dians.not(value).css({background:'#C2CBC8'});
			fankui_box.css({transform:`translate3d(${-W*index}px, 0px, 0px)`});
		})		
	})
		/*setInterval(function(){
			dians.triggerHandler('click');
		}, 1000);*/




})
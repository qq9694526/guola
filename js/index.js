$(function() {
	//初始化Swiper轮播组件
	var bannerSwiper = new Swiper('#bannerSwiper', {
		loop: true,
		autoplay: 5000,
		autoplayDisableOnInteraction : false,
		// 如果需要分页器
		pagination: '.swiper-pagination',
		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	})
	var dWidth = $("body ").width();
	if(dWidth <= 768) {
		var banxingSwiper = new Swiper('#banxingSwiper', {
			slidesPerView: 2,
			spaceBetween: 20,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
		var qicheSwiper = new Swiper('#qicheSwiper', {
			slidesPerView: 1,
			spaceBetween: 20,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
		var studentSwiper = new Swiper('#studentSwiper', {
			slidesPerView: 1,
			spaceBetween: 20,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
	} else {
		var banxingSwiper = new Swiper('#banxingSwiper', {
			slidesPerView: 6,
			spaceBetween: 20,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
		var qicheSwiper = new Swiper('#qicheSwiper', {
			slidesPerView: 4,
			spaceBetween: 20,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
		var studentSwiper = new Swiper('#studentSwiper', {
			slidesPerView: 4,
			spaceBetween: 20,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
	}
	//	优势hover事件
	$("#youshi-wrapper .img-wrapper").hover(function() {
		$(this).addClass("is-inverse");
	}, function() {
		var $this=$(this);
		$this.removeClass("is-inverse");
	});
//	分布
	$("#fenbu-warpper-right .circle").hover(function() {
		$(this).addClass("active");
	}, function() {
		$(this).removeClass("active");
	});
	//班型介绍hover事件
	$("#banxingSwiper .item").hover(function() {
		$(this).addClass("active");
	}, function() {
		$(this).removeClass("active");
	});
	//	报名流程hover事件
	$("#baoming-wrapper .circle").hover(function() {
		$(this).addClass("animated rotateIn");
	}, function() {
		$(this).removeClass("animated rotateIn");
	});
	//	教练hover事件
	$("#jiaolian-wrapper .img-wrapper").hover(function() {
		$(this).addClass("animated-fast shake hover");
	}, function() {
		$(this).removeClass("animated-fast shake hover");
	});
	//	汽车hover事件
	$("#qicheSwiper .item").hover(function() {
			$(this).css({
				"transform": "scale(1.2)"
			});
		}, function() {
			$(this).css({
				"transform": "scale(1)"
			});
		})
		//PC底部弹出二维码事件
	$(".iconimg").hover(function() {
		$(this).parent().addClass("active");
	}, function() {
		$(this).parent().removeClass("active");
	});
	//移动端底部二维码事件
	var qrCodes = [
		'<p>咨询热线:0371-66666128 </p>',
		'<p>公司地址：郑州市航海路与淮南街交叉口向南50米路东河南交院驾培服务大厅3楼</p>',
		'<img src="img/bottom/weixinhao.jpg"/>',
		'<img src="img/bottom/weibohao.jpg"/>',
		'<img src="img/footer/qq_xz.png" />'
	];
	$("#menu-wrapper").on("click", ".item", function() {
		var index = $(this).attr('data-num');
		$('#menu-dailog').show().find(".content").html(qrCodes[index]);
	});
	$("#menu-dailog").on("click", ".close-btn", function() {
		$('#menu-dailog').hide().find(".content").html("");
	});
//	右侧悬浮窗
	$("#fixed-right .item").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})
	$("#fixed-right .gotop").on("click",function(){
		$(document).scrollTop(0);
	})
	
	bindScroll();

	function bindScroll() {
		var tops = [],
			wHeight = $(window).height(),
			fenbuTop=$(".fenbu-warpper").offset().top-wHeight+50;
		$.each($(".section-title"), function() {
			tops.push($(this).offset().top - wHeight + 50);
		})
		console.log(fenbuTop)
		if(tops[0] <= 0) {
			$($(".section-title")[0]).css({"opacity":"1"}).addClass('animated zoomIn');
		}
		console.log(tops);
		$(document).scroll(function() {
			var scrollTop = $(document).scrollTop();
			//			tops<scrollTop+wHeight
			//			scrollTop>tops-wHeight;
			if(scrollTop > tops[0] && scrollTop < tops[1]) {
				console.log(0)
				$($(".section-title")[0]).css({"opacity":"1"}).addClass('animated zoomIn');
			} else if(scrollTop > tops[1] && scrollTop < tops[2]) {
				console.log(1)
				$($(".section-title")[1]).css({"opacity":"1"}).addClass('animated zoomIn');
			} else if(scrollTop > tops[2] && scrollTop < tops[3]) {
				console.log(2)
				$($(".section-title")[2]).css({"opacity":"1"}).addClass('animated zoomIn');
			} else if(scrollTop > tops[3] && scrollTop < tops[4]) {
				console.log(3)
				$($(".section-title")[3]).css({"opacity":"1"}).addClass('animated zoomIn');
			} else if(scrollTop > tops[4] && scrollTop < tops[5]) {
				console.log(4)
				$($(".section-title")[4]).css({"opacity":"1"}).addClass('animated zoomIn');
			} else if(scrollTop > tops[5]) {
				console.log(5)
				$($(".section-title")[5]).css({"opacity":"1"}).addClass('animated zoomIn');
			}
			if(scrollTop>fenbuTop){
				$(".fenbu-warpper .bubble").addClass("active");
			}
		})
	}

})
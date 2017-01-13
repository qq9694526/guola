$(function() {
	//初始化Swiper轮播组件
	var bannerSwiper = new Swiper('#bannerSwiper', {
		loop: true,
		// 如果需要分页器
		pagination: '.swiper-pagination',
		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'

	})
	var dWidth = $("body ").width();
	if(dWidth <= 768) {
		var qicheSwiper = new Swiper('#qicheSwiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
		var wenhuaSwiper = new Swiper('#wenhuaSwiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
	} else {
		var qicheSwiper = new Swiper('#qicheSwiper', {
			slidesPerView: 4,
			spaceBetween: 20,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
		var wenhuaSwiper = new Swiper('#wenhuaSwiper', {
			slidesPerView: 4,
			spaceBetween: 20,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
		})
	}
	//	汽车hover事件
	$("#qicheSwiper .item").hover(function() {
		$(this).css({
			"transform": "scale(1.2)"
		});
	}, function() {
		$(this).css({
			"transform": "scale(1)"
		});
	});
	//文化hover事件
	$("#wenhuaSwiper .content").hover(function() {
		$(this).addClass("active");
	}, function() {
		$(this).removeClass("active");
	});
	//PC底部弹出二维码事件
	$(".iconimg").hover(function() {
		$(this).parent().addClass("active");
	}, function() {
		$(this).parent().removeClass("active");
	});
	//移动端底部二维码事件
	var qrCodes = [
		'<p>咨询热线:0371-66666128</p>',
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
	//	我要报名
	$("#baoming-btn").on("click", function() {
		$("#baoming-dailog").show();
	})
	$("#baoming-dailog").on("click", ".close-btn", function() {
		$('#baoming-dailog').hide();
	});
	//右侧悬浮窗
	$("#fixed-right .item").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	})
	$("#fixed-right .gotop").on("click", function() {
			$(document).scrollTop(0);
		})
		//	关于我们窗体切换
	var $pinpaiBtn = $("#pinpaiBtn"),
		$meitiBtn = $("#meitiBtn"),
		$pinpai = $("#pinpai"),
		$meiti = $("#meiti");
	$pinpaiBtn.on("click", function() {
		$meitiBtn.removeClass("active");
		$pinpaiBtn.addClass("active");
		$meiti.hide();
		$pinpai.show();
	})
	$meitiBtn.on("click", function() {
		$pinpaiBtn.removeClass("active");
		$meitiBtn.addClass("active");
		$pinpai.hide();
		$meiti.show();
		if(dWidth <= 768) {
			var meitiSwiper = new Swiper('#meitiSwiper', {
				slidesPerView: 1,
				spaceBetween: 0,
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev'
			})
		} else {
			var meitiSwiper = new Swiper('#meitiSwiper', {
				slidesPerView: 3,
				spaceBetween: 40,
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev'
			})
		}
	})
	$("#nav-banner").on("click", ".item", function() {
		$(this).addClass("active").substring()
	})

	bindScroll();

	function bindScroll() {
		var tops = [],
			wHeight = $(window).height();
		$.each($(".section-title"), function() {
			tops.push($(this).offset().top - wHeight + 50);
		})
		if(tops[0] <= 0) {
			$($(".section-title")[0]).css({"opacity":"1"}).addClass('animated zoomIn');
		}
		$(document).scroll(function() {
			var scrollTop = $(document).scrollTop();
			if(scrollTop > tops[0] && scrollTop < tops[1]) {
				console.log(0)
				$($(".section-title")[0]).css({"opacity":"1"}).addClass('animated zoomIn');
			} else if(scrollTop > tops[1]) {
				console.log(1)
				$($(".section-title")[1]).css({"opacity":"1"}).addClass('animated zoomIn');
			};
		})
	}

})
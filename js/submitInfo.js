$(function() {
	$(".submit-hook").on("click", function() {
		var $inputs = $(this).parent().siblings().find("input"),
		 	$select = $(this).parent().siblings().find("select"),
			name = $inputs[0].value.trim(),
			tel = $inputs[1].value.trim(),
			remark = $select[0].value;
		var pattern = /^1[34578]\d{9}$/;
		if(tel == null || tel.length == 0) {
			showToast(0,"手机号不能为空");
			return;
		}
		if(!pattern.test(tel)) {
			showToast(0,"请输入正确的手机号码");
			return;
		}
		submitInfo(name, tel, remark);
	});

	function submitInfo(name, tel, remark) {
		$.ajax({
			type: "get",
			url: "http://59.110.53.39:8080/synchronization/add",
			async: true,
			dataType: "jsonp",
			data: {
				"userName":tel,
				"firstNameZh":name,
				"remarks":remark
			},
			success: function(data) {
				if(data.code == 200) {
					showToast(1);
				} else {
					var msg = data.msg || 0;
					showToast(0, msg);
				}
			},
			error:function(a,b){
				console.log(b);
			}
		});
	};
	var $resultWrapper = $("#result-wrapper"),
		$success = $resultWrapper.find(".success"),
		$fail = $resultWrapper.find(".fail"),
		$text = $fail.find(".text>p");
	$resultWrapper.on("click",".close-hook",function(){
		$resultWrapper.hide();
		$success.hide();
		$fail.hide();
	});
	function showToast(result, msg) {
		if(msg) {
			$text.text(msg);
		}
		if(result == 0) {
			$fail.show();
		} else {
			$success.show();
		}
		$resultWrapper.show();
	}
});
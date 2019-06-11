/**
 * Created by zhangnanning on 2019/5/30.
 */
(function (window) {

    // 半透明遮罩，有上下左右四部分构成半透明遮罩，露出需要引导的部分
    function _createMaskEle(option) {

        var ele = window.document.createElement("div")
        ele.setAttribute("id", "maskGuide_mask");
        ele.setAttribute("class", option.classWarp);
        ele.style.position = "fixed";
        ele.style.left = 0;
        ele.style.top = 0;
        ele.style.right = 0;
        ele.style.bottiom = 0;
        ele.style.height = "100%";
        ele.style.width = "100%";
        // ele.style.background = "#000";
        // ele.style.opacity = 0.7;
        ele.style.zIndex = 999;

        var size = _getGuideSize(option);
        var position = _getGuidePosition(option);

        var leftEle = window.document.createElement("div")
        leftEle.setAttribute("id", "maskGuide_mask_left");
        leftEle.style.position = "absolute";
        leftEle.style.left = 0;
        leftEle.style.top = 0;
        // leftEle.style.right = document.body.offsetWidth - document.body.offsetWidth - position.x + "px";
        leftEle.style.bottom = 0;
        leftEle.style.height = "100%";
        leftEle.style.width = position.x + "px";
        leftEle.style.background = "rgba(0,0,0,0.5)";

        var rightEle = window.document.createElement("div")
        rightEle.setAttribute("id", "maskGuide_mask_right");
        rightEle.style.position = "absolute";
        rightEle.style.left = position.x + size.width + "px";
        rightEle.style.top = 0;
        rightEle.style.right = 0;
        rightEle.style.bottom = 0;
        rightEle.style.height = "100%";
        rightEle.style.width = document.body.offsetWidth - position.x + size.width + "px";
        rightEle.style.background = "rgba(0,0,0,0.5)";

        var topEle = window.document.createElement("div")
        topEle.setAttribute("id", "maskGuide_mask_top");
        topEle.style.position = "absolute";
        topEle.style.left = position.x + "px";
        topEle.style.top = 0;
        // topEle.style.right = position.x + size.width + "px";
        // topEle.style.bottom = document.body.offsetHeight - position.y + "px";
        topEle.style.height = position.y + "px";
        topEle.style.width = size.width + "px";
        topEle.style.background = "rgba(0,0,0,0.5)";

        var bottomEle = window.document.createElement("div")
        bottomEle.setAttribute("id", "maskGuide_mask_bottom");
        bottomEle.style.position = "absolute";
        bottomEle.style.left = position.x + "px";
        bottomEle.style.top = position.y + size.height + "px";
        // bottomEle.style.right = position.x + size.width + "px";
        bottomEle.style.bottom = 0;
        bottomEle.style.width = size.width + "px";
        bottomEle.style.background = "rgba(0,0,0,0.5)";

        ele.appendChild(leftEle);
        ele.appendChild(rightEle);
        ele.appendChild(topEle);
        ele.appendChild(bottomEle);

        return ele;
    }

    // 说明操作
    function _createExplainActionEle(option) {

        var ele = window.document.createElement("div")
        ele.setAttribute("id", "maskGuide_explain_container");

        var size = _getGuideSize(option);
        var position = _getGuidePosition(option);

        ele.style.position = "fixed";
        // ele.style.overflow = "hidden";
        // ele.style.background = "#fff";
        ele.style.width = (option.explainWidth || size.width) + "px";
        ele.style.height = size.height + "px";
        ele.style.left = position.x + "px";
        ele.style.top = position.y + size.height + "px";

        // var guideEle = _createGuideEle(option);
        // ele.appendChild(guideEle);

        if (option.explain) {
            var explainEle = _createExplainEle(option);

            ele.appendChild(explainEle);
        }

        if (option.showNext || option.showClose) {
            var actionEle = _createActionEle(option);
            ele.appendChild(actionEle);
        }

        return ele;
    };

    // 创建一个透明的元素遮在上面
    function _createGuideEle(option) {

        var ele = window.document.createElement("div")
        ele.setAttribute("id", "maskGuide_guide");
        ele.addEventListener("click", option.selfClickCallback)

        var size = _getGuideSize(option);
        var position = _getGuidePosition(option);

        ele.style.position = "fixed";
        // ele.style.overflow = "hidden";
        ele.style.left = position.x + "px";
        ele.style.top = position.y + "px";
        ele.style.width = size.width + "px";
        ele.style.height = size.height + "px";
        ele.style.boxShadow = "0px 0px 10px #fff";
        ele.style.opacity = 1;


        return ele;
    };

    // 操作按钮部分
    function _createActionEle(option) {

        var ele = window.document.createElement("div")
        ele.setAttribute("id", "maskGuide_action");

        var nextBtn = window.document.createElement("button");
        var clsoeBtn = window.document.createElement("button");

        nextBtn.innerHTML = option.nextBtnText;
        clsoeBtn.innerHTML = option.closeBtnText;

        nextBtn.addEventListener("click", option.nextCallback);
        clsoeBtn.addEventListener("click", option.closeCallBack);

        nextBtn.style.float = "right";
        nextBtn.style.marginLeft = "10px";
        clsoeBtn.style.float = "right";

        if (option.showNext) {
            ele.appendChild(nextBtn);
        }

        if (option.clsoeBtn) {
            ele.appendChild(clsoeBtn);
        }


        return ele;
    };

    // 额外文字说明部分
    function _createExplainEle(option) {

        var ele = window.document.createElement("div");
        ele.setAttribute("id", "maskGuide_explain");
        ele.style.position = "relative";
        ele.style.paddingTop = "8px";

        var explainEle = window.document.createElement("div");
        explainEle.style.background = "#fff";
        explainEle.style.position = "relative";
        explainEle.style.boxShadow = "0px 0px 10px #fff";
        if (Object.prototype.toString.call(option.explain) !== "[object String]") {
            explainEle.appendChild(option.explain);
        } else {
            explainEle.innerHTML = option.explain;
        }

        var jiantouEle = window.document.createElement("div");
        jiantouEle.style.border = "8px solid transparent";
        jiantouEle.style.borderBottomColor = "#FFF";
        jiantouEle.style.width = 0;
        jiantouEle.style.height = 0;
        jiantouEle.style.marginTop = "-16px";
        jiantouEle.style.marginLeft = "4px";
        jiantouEle.style.position = "absolute";

        ele.appendChild(jiantouEle);
        ele.appendChild(explainEle)

        return ele;

    };

    // 局屏幕坐上角的位置
    function _getGuidePosition(option) {

        var x = option.left || option.el.getBoundingClientRect().x;
        var y = option.top || option.el.getBoundingClientRect().y;

        return {
            x: x,
            y: y
        }

    }

    // 宽高
    function _getGuideSize(option) {

        var width = option.width || option.el.getBoundingClientRect().width;
        var height = option.height || option.el.getBoundingClientRect().height;

        return {
            width: width,
            height: height
        }

    }

    // 删除引导append的元素
    function _clear() {
        if (document.getElementById("maskGuide_guide")) {
            window.document.body.removeChild(document.getElementById("maskGuide_mask"));
        }
    }

    var DEFAULT = {
        el: null, // id或者Element 需要引导的元素
        width: null, // number
        height: null, // number
        top: null, // number
        left: null, // number
        explainWidth: null, // 说明操作的宽度，当说明的内容很多，比需要引导的元素宽是可以使用该字段
        selfClickCallback: function () {}, // 点击引导元素的回调
        nextCallback: _clear, // 点击下一步的回调
        closeCallBack: _clear, // 点击关闭的回调
        nextBtnText: "下一步", // 下一步按钮的文字
        closeBtnText: "跳过", // 关闭按钮的文字
        showNext: true, // 是否显示下一步按钮
        showClose: false, // 是否显示关闭按钮
        explain: null, // 其他说明 String或者Element
        classWarp: "" // 自定义class
    };

    function maskGuide(options, nextCallback, closeCallBack) {

        _clear();

        var option = Object.assign({}, DEFAULT, options);
        if (!(options instanceof Object)) {
            option.el = options;
            option.nextCallback = nextCallback || option.nextCallback;
            option.closeCallBack = closeCallBack || option.closeCallBack;
        }

        // el 可以是id或者dom元素
        if (typeof option.el === "string") {
            var ele = document.getElementById(option.el);

            option.el = ele;
        }

        if (!option.el) {

            var errorMsg = "options Element or id not found. not found need guide element";
            console.error(errorMsg);

            return errorMsg;
        }

        var maskEle = _createMaskEle(option);
        var guideEle = _createGuideEle(option);
        var explainActionEle = _createExplainActionEle(option);

        maskEle.appendChild(explainActionEle);
        maskEle.appendChild(guideEle);

        window.document.body.appendChild(maskEle);

        return maskEle;

    };


    window.maskGuide = maskGuide;
    window.maskGuide.close = _clear;
})(window);

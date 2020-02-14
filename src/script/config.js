/**
 * Created by zhangnanning on 2019/12/4.
 */
export const DEFAULT_CONFIG ={
    el: null, // id或者Element 需要引导的元素
    type: "action", // action/step
    classWarp: null,
    position: "bottomRight", //top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
    targetPosition: null, // {top, left} // 位置
    targetSize: null, // {width, height} // 大小
    onClickTarget: null, // 点击引导元素的回调
    onClickNext: null, // 点击下一步的回调
    onClickPrev: null, // 上一步
    onClickClose: null, // 关闭按钮
    nextBtnText: "下一步", // 下一步按钮的文字
    prevBtnText: "上一步", // 关闭按钮的文字
    showNext: true, // 是否显示下一步按钮
    showPrev: true, // 是否显示下一步按钮
    showClose: true, // 是否显示关闭按钮
    showArrow: true, // 小三角
    showStar: true, // 星星
    maskClosable: true, // 点击这招是否关闭
    explain: { // false不显示
        width: 340,
        title: "",
        content: "",
    }
};

/**
 * Created by zhangnanning on 2019/12/26.
 */
import {resolveTargetSize, resolveTargetPosition, clear} from "../../script/util";
const TARGET_ID = "mask_guide_target";
const TARGET_CLASS = "mask_guide_target";
const createTarget = (option) => {
    let size = resolveTargetSize(option);
    let position = resolveTargetPosition(option);
    let style = {
        position: "absolute",
        opacity: 1,
        top: `${position.top}px`,
        left: `${position.left}px`,
        height: `${size.height}px`,
        width:  `${size.width}px`
    };
    let attr = {
        class: TARGET_CLASS,
        id: TARGET_ID
    };

    if(option.type === "active"){
        style = Object.assign({}, style, {
            boxShadow: "rgba(255, 255, 255, 0.4) 0px 0px 0px 5px, rgba(255, 255, 255, 0.5) 0px 0px 0px 15px"
        })
    }

    let ele = document.createElement("div");

    for (let key in style){
        ele.style[key] = style[key];
    }

    for (let key in attr){
        ele.setAttribute(key, attr[key]);
    }

    // 绑定事件
    if(option.onClickTarget){
        ele.addEventListener("click", option.onClickTarget);
    }

    return ele;
};

export {
    createTarget
};

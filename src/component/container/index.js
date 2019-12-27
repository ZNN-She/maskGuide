/**
 * Created by zhangnanning on 2019/12/3.
 *
 */

import {resolvePosition} from "../../script/util";

const CONTAINER_ID = "mask_guide_container";
const CONTAINER_CLASS = "mask_guide_container";

// 创建最外层容器
function createContainer(option) {

    let attr = {
        class: `${CONTAINER_CLASS} ${option.classWarp}`,
        id: CONTAINER_ID
    };
    let style = {
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        width: "100%",
        "z-index": 999
    };
    let ele = document.createElement("div");

    for (let key in attr){
        ele.setAttribute(key, attr[key]);
    }

    for (let key in style){
        ele.style[key] = style[key];
    }

    return ele;
}

export {
    createContainer
};

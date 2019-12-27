/**
 * Created by zhangnanning on 2019/12/26.
 * 遮罩
 */
import {resolveTargetSize, resolveTargetPosition} from "../../script/util";
const MASK_RGBA = "rgba(0,0,0,0.5)";

const createTopMask = (option) => {
    let size = resolveTargetSize(option);
    let position = resolveTargetPosition(option);
    let style = {
        position: "absolute",
        background: MASK_RGBA,
        top: 0,
        left: `${position.left}px`,
        width: `${size.width}px`,
        height: `${position.top}px`
    };
    let ele = document.createElement("div");

    for (let key in style){
        ele.style[key] = style[key];
    }

    return ele;
};

const createRightMask = (option) => {
    let size = resolveTargetSize(option);
    let position = resolveTargetPosition(option);
    let style = {
        position: "absolute",
        background: MASK_RGBA,
        top: 0,
        left: `${position.left + size.width}px`,
        width:  `${document.body.offsetWidth - position.left + size.width}px`,
        height: "100%"
    };
    let ele = document.createElement("div");

    for (let key in style){
        ele.style[key] = style[key];
    }

    return ele;
};

const createBottomMask = (option) => {
    let size = resolveTargetSize(option);
    let position = resolveTargetPosition(option);
    let style = {
        position: "absolute",
        background: MASK_RGBA,
        top: `${position.top + size.height}px`,
        left: `${position.left}px`,
        bottom: 0,
        width:  `${size.width}px`
    };
    let ele = document.createElement("div");

    for (let key in style){
        ele.style[key] = style[key];
    }

    return ele;
};

const createLeftMask = (option) => {
    let position = resolveTargetPosition(option);
    let style = {
        position: "absolute",
        background: MASK_RGBA,
        top: 0,
        left: 0,
        bottom: 0,
        height: "100%",
        width:  `${position.left}px`
    };
    let ele = document.createElement("div");

    for (let key in style){
        ele.style[key] = style[key];
    }

    return ele;
};

export {
    createTopMask,
    createRightMask,
    createBottomMask,
    createLeftMask
};

/**
 * Created by zhangnanning on 2019/12/26.
 */
import {attachBigStarStyle, attachSmartStarStyle} from "../../script/util";

const createBigStar = (option) => {

    let ele = document.createElement("div");

    // 样式 位置
    let style = attachBigStarStyle(option);
    for (let key in style){
        ele.style[key] = style[key];
    }

    return ele;
};

const createSmartStar = (option) => {
    let ele = document.createElement("div");

    // 样式 位置
    let style = attachSmartStarStyle(option);
    for (let key in style){
        ele.style[key] = style[key];
    }

    return ele;
};

export {
    createBigStar,
    createSmartStar
};

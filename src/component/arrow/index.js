/**
 * Created by zhangnanning on 2019/12/26.
 */
import {attachArrowOffset, attachArrowStyle} from "../../script/util";

const createArrow = (option) => {

    let ele = document.createElement("div");

    // 样式
    let style = attachArrowStyle(option);
    for (let key in style){
        ele.style[key] = style[key];
    }

    // 位置
    let attachArrowPosition = attachArrowOffset(option);
    for (let key in attachArrowPosition){
        ele.style[key] = `${attachArrowPosition[key]}px`;
    }

    return ele;
};

export {
    createArrow
};

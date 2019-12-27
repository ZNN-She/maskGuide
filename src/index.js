/**
 * Created by zhangnanning on 2019/12/3.
 *
 */
import {DEFAULT_CONFIG} from "./script/config";
import {clear} from "./script/util";
import {activeGuide} from "./component/activeGuide";
import {stepGuide} from "./component/stepGuide";

function guide(config) {

    // 清楚已存在的
    clear();

    // 合并参数
    let option = Object.assign({}, DEFAULT_CONFIG, config);
    if(config.explain){
        option.explain = Object.assign({}, DEFAULT_CONFIG.explain, config.explain);
    }
    console.log(option);

    // el 可以是id或者dom元素
    if (typeof option.el === "string") {
        option.el = document.getElementById(option.el);
    }

    let ele = null;

    switch (option.type){
        case "active":
            ele = activeGuide(option);
            break;
        case "step":
            ele = stepGuide(option);
            break;
        default:
            ele = stepGuide(option);
            break;
    }

    document.body.appendChild(ele);

    return ele;
};

const close = clear;

export {
    guide,
    close
};


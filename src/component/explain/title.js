/**
 * Created by zhangnanning on 2019/12/26.
 */
import {resolveTargetSize, resolveTargetPosition, clear} from "../../script/util";

const CONTAINER_EXPLAIN_CLASS = "mask_guide_explain";

const createTitleClose = (option) => {
    let attr = {
        class: `${CONTAINER_EXPLAIN_CLASS}_close`
    };
    let style = {
        position: "absolute",
        top: "5px",
        right: "10px",
        width: "20px",
        height: "20px",
        padding: "4px",
        color: "#ccc",
        textAlign: "center",
        cursor: "pointer"
    };
    let ele = document.createElement("div");

    for (let key in attr){
        ele.setAttribute(key, attr[key]);
    }

    for (let key in style){
        ele.style[key] = style[key];
    }

    ele.innerHTML = "×";

    // 绑定事件
    ele.addEventListener("click", option.onClickClose ? option.onClickClose : clear);

    return ele;
};

const createTitle = (option) => {
    let explainOption = option.explain;
    let attr = {
        class: `${CONTAINER_EXPLAIN_CLASS}_title`
    };
    let style = {
        padding: "10px 20px",
        fontSize: "14px",
        lineHeight: "21px",
        fontWeight: "400"
    };

    if(option.type !== "active"){
        style.borderBottom = "1px solid #dfe1e6";
    }

    let ele = document.createElement("div");

    for (let key in attr){
        ele.setAttribute(key, attr[key]);
    }

    for (let key in style){
        ele.style[key] = style[key];
    }

    if (Object.prototype.toString.call(explainOption.title) !== "[object String]") {
        ele.appendChild( explainOption.title);
    } else {
        ele.innerHTML = explainOption.title;
    }

    if(option.type !== "active"){
        ele.appendChild(createTitleClose(option));
    }

    return ele;
};

export {
    createTitle
};

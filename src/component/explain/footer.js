/**
 * Created by zhangnanning on 2019/12/26.
 */
import {clear} from "../../script/util";

const CONTAINER_EXPLAIN_CLASS = "mask_guide_explain";

function createNextButton(option) {
    let attr = {
        class: `${CONTAINER_EXPLAIN_CLASS}_next_button`
    };
    let style = {
        padding: "3px 6px",
        backgroundColor: "#ff8040",
        border: "1px solid #ff8040",
        color: "#FFF",
        borderRadius: "3px"
    };
    let ele = document.createElement("button");

    for (let key in attr){
        ele.setAttribute(key, attr[key]);
    }

    for (let key in style){
        ele.style[key] = style[key];
    }

    if (Object.prototype.toString.call(option.nextBtnText) !== "[object String]") {
        ele.appendChild(option.nextBtnText);
    } else {
        ele.innerHTML = option.nextBtnText;
    }

    // 绑定事件
    ele.addEventListener("click", option.onClickNext ? option.onClickNext : clear);

    return ele;
}

function createPrevButton(option) {
    let attr = {
        class: `${CONTAINER_EXPLAIN_CLASS}_prev_button`
    };
    let style = {
        padding: "3px 6px",
        color: "#333",
        border: "1px solid #c4c6cc",
        borderRadius: "3px",
        marginRight: "8px"
    };
    let ele = document.createElement("button");

    for (let key in attr){
        ele.setAttribute(key, attr[key]);
    }

    for (let key in style){
        ele.style[key] = style[key];
    }

    if (Object.prototype.toString.call(option.prevBtnText) !== "[object String]") {
        ele.appendChild(option.prevBtnText);
    } else {
        ele.innerHTML = option.prevBtnText;
    }

    // 绑定事件
    ele.addEventListener("click", option.onClickPrev ? option.onClickPrev : clear);

    return ele;
}

const createFooter = (option) => {

    if(!option.showNext && !option.showPrev){
        return document.createElement("div");
    }

    let attr = {
        class: `${CONTAINER_EXPLAIN_CLASS}_footer`
    };
    let style = {
        boxSizing: "border-box",
        padding: "0px 20px 20px 20px",
        textAlign: "center"
    };
    let ele = document.createElement("div");

    for (let key in attr){
        ele.setAttribute(key, attr[key]);
    }

    for (let key in style){
        ele.style[key] = style[key];
    }

    if(option.showPrev){
        ele.appendChild(createPrevButton(option));
    }

    if(option.showNext){
        ele.appendChild(createNextButton(option));
    }

    return ele;
};

export {
    createFooter
};

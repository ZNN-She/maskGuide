/**
 * Created by zhangnanning on 2019/12/26.
 */
import {resolveTargetSize, resolveTargetPosition} from "../../script/util";
import {createTitle} from "./title";
import {createContent} from "./content";
import {createFooter} from "./footer";

const CONTAINER_EXPLAIN_ID = "mask_guide_explain";
const CONTAINER_EXPLAIN_CLASS = "mask_guide_explain";

const createExplain = (option) => {
    let explainOption = option.explain;
    let size = resolveTargetSize(option);
    let targetPosition = resolveTargetPosition(option);
    let attr = {
        class: `${CONTAINER_EXPLAIN_CLASS}`,
        id: CONTAINER_EXPLAIN_ID
    };
    let style = {
        position: "absolute",
        left: targetPosition.left,
        top: `${targetPosition.top + size.height}px`,
        width: `${explainOption.width}px`,
        margin: "8px",
        borderRadius: "6px",
        color: '#FFF'
    };

    if(option.type !== "active"){
        style.background = "#FFF";
        style.boxShadow = "0px 0px 10px #fff";
        style.color = "#333";
    }

    let ele = document.createElement("div");

    for (let key in attr){
        ele.setAttribute(key, attr[key]);
    }

    for (let key in style){
        ele.style[key] = style[key];
    }

    ele.appendChild(createTitle(option));
    ele.appendChild(createContent(option));

    if(option.type !== "active"){
        ele.appendChild(createFooter(option));
    }

    return ele;
};

export {
    createExplain
};

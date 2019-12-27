/**
 * Created by zhangnanning on 2019/12/26.
 */
const CONTAINER_EXPLAIN_CLASS = "mask_guide_explain";

const createContent = (option) => {
    let explainOption = option.explain;
    let attr = {
        class: `${CONTAINER_EXPLAIN_CLASS}_body`
    };
    let style = {
        boxSizing: "border-box",
        padding: "10px 20px",
        wordBreak: "break-all",
        fontSize: "14px"
    };
    let ele = document.createElement("div");

    if(option.type === "active"){
        style.paddingTop = 0;
    }

    for (let key in attr){
        ele.setAttribute(key, attr[key]);
    }

    for (let key in style){
        ele.style[key] = style[key];
    }

    if (Object.prototype.toString.call(explainOption.content) !== "[object String]") {
        ele.appendChild(explainOption.content);
    } else {
        ele.innerHTML = explainOption.content;
    }

    return ele;
};

export {
    createContent
};

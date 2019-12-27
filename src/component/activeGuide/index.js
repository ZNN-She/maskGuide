/**
 * Created by zhangnanning on 2019/12/3.
 *
 */

import {resolveActivePosition} from "../../script/util";
import {createContainer} from "../container";
import {createTopMask, createRightMask, createBottomMask, createLeftMask} from "../mask";
import {createTarget} from "../target";
import {createExplain} from "../explain";
import {createArrow} from "../arrow";
import {createBigStar, createSmartStar} from "../star";

const activeGuide = (option) => {

    // 容器
    var container = createContainer(option);
    document.body.appendChild(container);

    // 遮罩
    container.appendChild(createTopMask(option));
    container.appendChild(createRightMask(option));
    container.appendChild(createBottomMask(option));
    container.appendChild(createLeftMask(option));

    // 是否创建target
    container.appendChild(createTarget(option));

    // 说明
    if(option.explain){
        let explainContainer = createExplain(option);

        // 添加进去之后才能获取宽高，然后在计算定位
        container.appendChild(explainContainer);

        let explainContainerSize = {width:explainContainer.getBoundingClientRect().width, height: explainContainer.getBoundingClientRect().height};
        let explainContainerPosition = resolveActivePosition(option, explainContainerSize);
        for (let key in explainContainerPosition){
            explainContainer.style[key] = `${explainContainerPosition[key]}px`;
        }
    }

    // 箭头
    if(option.showArrow){
        let arrowEle = createArrow(option);
        container.appendChild(arrowEle);
    }

    // 星星
    if(option.showStar){
        // 大星星
        container.appendChild(createBigStar(option));

        // 小星星
        container.appendChild(createSmartStar(option));
    }

    return container;
};

export {
    activeGuide
};

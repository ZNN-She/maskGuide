/**
 * Created by zhangnanning on 2019/12/4.
 */
const BIG_STAR_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAuFJREFUSA21lj1oFEEUx99/ZzGJMQme5GLQImAjamUjKAiCXoyIWmgRFE0hpjAIauEHirFQCFoKSgSxE2wCEkmMFloJgo0awUIIiMH7MCTGwng383yH3uZus7eZycVtdt5/3v5/8/Fm7kA1Psw99Trz9QERGlRD40k0D323tfRsE6vlmcxkHxN1M/EhM/fzcLW8KL12OKg7MDZoDtoWjZrgnEttJOatAcdDPmhbNGqCa4O+EEOF4thwyXCeOtJCZE6UuxtDotk/S4YbPX2GmVZVoMD/H87ZznY2uFABlgDE68NaXLykmWvDt+RoNYaN5chtCWtxsTNcZzrlXPPRKFMQNhQvnai+KM2PEsMaM4Om9m3TBX3asDkW7i/Fkqd0bnK3xMMlLe4N5q46nTUHQdQu1Vv4m4xmQ9wiM1krs9wMxiZ5r4wzCvpAr/zWsV0AZBfiH+TTqX4ivhaf5tYrgx5UyY4+YDD20vE84Leb9eLZskqnCtmJ15zesyMuW5adobN7e2TJj8th2SmxcxHGAkCPla9uIDH6LpwnWz3/cG7/uoLO98p57ZXRJ+d7am8B9JLYu6OS3jAwMld0rICXEMUiNLlCDxu6LlXTVtKX4y2DmCHyhhTociS8BOHsgaYC/boqdXt+2beD8CIWXhpEIZPqIqYh2Yq6klbrG/AeWsGLIJ1JXTLMN62gwCcxfi8/POOyzF/kmxlWstxMmjT7vq9mKdH0xhrOM50JPWfSYlj1VhSze2qFGsDq0QmbQVrDi2b5TOptxT+XMoIH76JKPhsokxZtOp1pGemHKEe5SsdcwUUfRzg+huEC1krhXFi3iavuX9THUu3fFujM97FmbHyBbiE4zZw8TJd7yqyNIv92uebSdoJLpf8ImT9F28jnkGYdOsEjXO9GaNaSG9zjoEak8nOqdftza1JEohPch5cOPIBHQP+/fz6B6tRwumSKzjqbOmuYOnzUX0Hrk1knWij5D1Va8GUfaWNFAAAAAElFTkSuQmCC";
const SMART_STAR_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAZBJREFUOBGVVM0uBEEQruqesYnEzc+VuCB4AGETPzu760XEAS/AbV9ASMSLYJdwEE/AYW9cd1dEELI/3Z/uSSaxrQR9qa766vumpqpmiISDp9I8msUlAfoxpCTE9GzFAOdolCclXIqJQmCqg5AzbA4kkhQThdjynU8GUDaNZFMihjFRSDPdZ4lg7Hcfk5XM/8lGMqDeiGwKARSzoVPTKlSU0hfUwzsxDxllxmFplkHTOtZ7LAmhkSz0CDcSFsaYuK2ZC+KrWYXVkCD5zHSic/EMj1avv1XUbRWX2eLMTW1AIvuYq6LDCtt65Pw4y+mryPVh4y8iUFz6KuLF0mbjOZkwHRxaS+tu6NlDROsqqUQjtasQjNAsLZq2vXD0XAhKfjo5AYhcTS/URZWUqjPbW231g9vEV4p40FqzBsu7ff0y5kPQcX375fhlTPvm9smnRqzyfkohra/ZIej9eLh2yeCdDDOg8ez+1f4q5JP1WO2ImU/9HQpz3obnT0KepKG3/Ba7T2IqFPm3j2aS9z89ifgJrU+an7K2hJYAAAAASUVORK5CYII=";
const ARROW_GIF = "data:image/gif;base64,R0lGODlhPwA8AIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNEMkVDNzlBQjQxMTFFNzhGMjA4NjI1OEQ0QUVBQUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNEMkVDN0FBQjQxMTFFNzhGMjA4NjI1OEQ0QUVBQUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0QyRUM3N0FCNDExMUU3OEYyMDg2MjU4RDRBRUFBRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0QyRUM3OEFCNDExMUU3OEYyMDg2MjU4RDRBRUFBRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTD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";
const CONTAINER_ID = "mask_guide_container";

function clear() {
    if (document.getElementById(CONTAINER_ID)) {
        // 删除容器
        window.document.body.removeChild(document.getElementById(CONTAINER_ID));
    }
}

function attachArrowStyle(option) {
    let position = option.position.split(/(?=[A-Z])/)[0];
    let borderColor = position.replace(position[0],position[0].toUpperCase());
    let style = {
        position: "fixed",
        border: "8px solid transparent",
        width: 0,
        height: 0
    };
    style[`border${borderColor}Color`] = "#FFF";

    if(option.type === "active"){
        style = {
            position: "fixed",
            width: "50px",
            height: "50px",
            backgroundImage: `url(${ARROW_GIF})`,
            transform: (() => ({
                top: "rotate(180deg)",
                right: "rotate(0deg)",
                bottom: "rotate(0deg)",
                left: "rotate(90deg)"
            }))()[position]
        }
    }

    return style;
}

function attachArrowOffset(option) {
    return option.type === "active" ? attachArrowActiveOffset(option) : attachArrowDefaultOffset(option);
}

function attachArrowDefaultOffset(option) {
    let targetOffset = resolveTargetPosition(option);
    let targetSize = resolveTargetSize(option);
    let position = option.position.split(/(?=[A-Z])/)[0];
    var methods = {
        'top': function top() {
            return {
                left: targetOffset.left + (targetSize.width - 16) / 2,
                top: targetOffset.top - 8
            };
        },
        'left': function left() {
            return {
                left: targetOffset.left - 8,
                top: targetOffset.top + (targetSize.height - 16) / 2
            };
        },
        'bottom': function bottom() {
            return {
                left: targetOffset.left + (targetSize.width - 16) / 2,
                top: targetOffset.top + targetSize.height - 8
            };
        },
        'right': function right() {
            return {
                left: targetOffset.left + targetSize.width - 8,
                top: targetOffset.top + (targetSize.height - 16) / 2
            };
        }
    };

    return methods[position]();
}

function attachBigStarStyle(option) {
    let targetOffset = resolveTargetPosition(option);
    let targetSize = resolveTargetSize(option);

    let left = targetOffset.left + targetSize.width + 40;
    let top = targetOffset.top + targetSize.height + 15;
    return {
        position: "absolute",
        backgroundImage: `url(${BIG_STAR_IMG})`,
        width: "31px",
        height: "31px",
        left: `${left}px`,
        top: `${top}px`
    };
}

function attachSmartStarStyle(option) {
    let targetOffset = resolveTargetPosition(option);

    let left = targetOffset.left - 80;
    let top = targetOffset.top - 10;
    return {
        position: "absolute",
        backgroundImage: `url(${SMART_STAR_IMG})`,
        width: "18px",
        height: "18px",
        left: `${left}px`,
        top: `${top}px`
    };
}

function attachArrowActiveOffset(option) {
    let targetOffset = resolveTargetPosition(option);
    let targetSize = resolveTargetSize(option);
    let position = option.position.split(/(?=[A-Z])/)[0];
    var methods = {
        'top': function top() {
            return {
                left: targetOffset.left + (targetSize.width - 16) / 2,
                top: targetOffset.top - 65
            };
        },
        'left': function left() {
            return {
                left: targetOffset.left - 65,
                top: targetOffset.top + (targetSize.height - 16) / 2
            };
        },
        'bottom': function bottom() {
            return {
                left: targetOffset.left + (targetSize.width - 16) / 2,
                top: targetOffset.top + targetSize.height + 15
            };
        },
        'right': function right() {
            return {
                left: targetOffset.left + targetSize.width + 15,
                top: targetOffset.top + (targetSize.height - 16) / 2
            };
        }
    };

    return methods[position]();
}

function resolveActivePosition(option, introSize) {

    var position = option.position;
    var targetOffset = resolveTargetPosition(option);
    var targetSize = resolveTargetSize(option);
    var windowSize = {
        width: document.body.getBoundingClientRect().width,
        height: document.body.getBoundingClientRect().height
    };

    var checkOverflow = function checkOverflow(_ref) {
        var top = _ref.top,
            left = _ref.left;
        return top < 0 || left < 0 || left + introSize.width > windowSize.width || top + introSize.height > windowSize.height;
    };

    var methods = {
        'top': function top() {
            return {
                left: targetOffset.left - (introSize.width - targetSize.width) / 2,
                top: targetOffset.top - introSize.height - 70
            };
        },
        'left': function left() {
            return {
                left: targetOffset.left - introSize.width - 70,
                top: targetOffset.top - (introSize.height - targetSize.height) / 2
            };
        },
        'bottom': function bottom() {
            return {
                left: targetOffset.left - (introSize.width - targetSize.width) / 2,
                top: targetOffset.top + targetSize.height + 70
            };
        },
        'right': function right() {
            return {
                left: targetOffset.left + targetSize.width + 70,
                top: targetOffset.top - (introSize.height - targetSize.height) / 2
            };
        },
        'topLeft': function topLeft() {
            return {
                left: targetOffset.left - (introSize.width - targetSize.width),
                top: targetOffset.top - introSize.height - 70
            };
        },
        'topRight': function topLeft() {
            return {
                left: targetOffset.left,
                top: targetOffset.top - introSize.height - 70
            };
        },
        'rightTop': function rightTop() {
            return {
                left: targetOffset.left + targetSize.width + 70,
                top: targetOffset.top - (introSize.height - targetSize.height)
            };
        },
        'rightBottom': function rightBottom() {
            return {
                left: targetOffset.left + targetSize.width + 70,
                top: targetOffset.top
            };
        },
        'bottomLeft': function rightBottom() {
            return {
                left: targetOffset.left - (introSize.width - targetSize.width),
                top: targetOffset.top + targetSize.height + 70
            };
        },
        'bottomRight': function rightBottom() {
            return {
                left: targetOffset.left,
                top: targetOffset.top + targetSize.height + 70
            };
        },
        'leftTop': function leftTop() {
            return {
                left: targetOffset.left - introSize.width - 70,
                top: targetOffset.top - (introSize.height - targetSize.height)
            };
        },
        'leftBottom': function leftBottom() {
            return {
                left: targetOffset.left - introSize.width - 70,
                top: targetOffset.top
            };
        }
    };

    if (position === 'auto') {
        position = Object.keys(methods).find(function (key) {
            return !checkOverflow(methods[key]());
        });

        if (position) {
            return methods[position]();
        }

        console.warn('cannot resolve position');
        return {
            left: 0,
            top: 0
        };
    }

    if (methods[position]) {
        return methods[position]();
    }

    console.warn("cannot resolve position: ".concat(position));
    return methods.bottom();
}

function resolveStepPosition(option, introSize) {
    var position = option.position;
    var targetOffset = resolveTargetPosition(option);
    var targetSize = resolveTargetSize(option);
    var windowSize = {
        width: document.body.getBoundingClientRect().width,
        height: document.body.getBoundingClientRect().height
    };

    var checkOverflow = function checkOverflow(_ref) {
        var top = _ref.top,
            left = _ref.left;
        return top < 0 || left < 0 || left + introSize.width > windowSize.width || top + introSize.height > windowSize.height;
    };

    var methods = {
        'top': function top() {
            return {
                left: targetOffset.left - (introSize.width - targetSize.width) / 2,
                top: targetOffset.top - introSize.height - 15
            };
        },
        'left': function left() {
            return {
                left: targetOffset.left - introSize.width - 15,
                top: targetOffset.top - (introSize.height - targetSize.height) / 2
            };
        },
        'bottom': function bottom() {
            return {
                left: targetOffset.left - (introSize.width - targetSize.width) / 2,
                top: targetOffset.top + targetSize.height
            };
        },
        'right': function right() {
            return {
                left: targetOffset.left + targetSize.width,
                top: targetOffset.top - (introSize.height - targetSize.height) / 2
            };
        },
        'topLeft': function topLeft() {
            return {
                left: targetOffset.left - (introSize.width - targetSize.width),
                top: targetOffset.top - introSize.height - 15
            };
        },
        'topRight': function topLeft() {
            return {
                left: targetOffset.left,
                top: targetOffset.top - introSize.height - 15
            };
        },
        'rightTop': function rightTop() {
            return {
                left: targetOffset.left + targetSize.width,
                top: targetOffset.top - (introSize.height - targetSize.height)
            };
        },
        'rightBottom': function rightBottom() {
            return {
                left: targetOffset.left + targetSize.width,
                top: targetOffset.top
            };
        },
        'bottomLeft': function rightBottom() {
            return {
                left: targetOffset.left - (introSize.width - targetSize.width),
                top: targetOffset.top + targetSize.height
            };
        },
        'bottomRight': function rightBottom() {
            return {
                left: targetOffset.left,
                top: targetOffset.top + targetSize.height
            };
        },
        'leftTop': function leftTop() {
            return {
                left: targetOffset.left - introSize.width - 15,
                top: targetOffset.top - (introSize.height - targetSize.height)
            };
        },
        'leftBottom': function leftBottom() {
            return {
                left: targetOffset.left - introSize.width - 15,
                top: targetOffset.top
            };
        }
    };

    if (position === 'auto') {
        position = Object.keys(methods).find(function (key) {
            return !checkOverflow(methods[key]());
        });

        if (position) {
            return methods[position]();
        }

        console.warn('cannot resolve position');
        return {
            left: 0,
            top: 0
        };
    }

    if (methods[position]) {
        return methods[position]();
    }

    console.warn("cannot resolve position: ".concat(position));
    return methods.bottom();
}

// target宽高
function resolveTargetSize(option) {

    let targetSize = option.targetSize || {};
    var width = targetSize.width || option.el.getBoundingClientRect().width;
    var height = targetSize.height || option.el.getBoundingClientRect().height;

    return {
        width: width,
        height: height
    }

}

// target位置 距离幕坐上角的位置
function resolveTargetPosition(option) {

    let targetPosition = option.targetPosition || {};
    var left = targetPosition.left || option.el.getBoundingClientRect().left;
    var top = targetPosition.top || option.el.getBoundingClientRect().top;

    return {
        left,
        top
    }

}

export {
    clear,
    resolveActivePosition,
    resolveStepPosition,
    resolveTargetSize,
    resolveTargetPosition,
    attachArrowOffset,
    attachArrowStyle,
    attachBigStarStyle,
    attachSmartStarStyle
}

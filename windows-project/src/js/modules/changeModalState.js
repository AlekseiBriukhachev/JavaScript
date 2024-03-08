import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowsWidth = document.querySelectorAll('#width'),
        windowsHeigth = document.querySelectorAll('#height'),
        windowsType = document.querySelectorAll('#view_type'),
        windowsProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i + 1;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = (i === 0) ? "Холодное" : "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }

                console.log('State: ', state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowsWidth, 'width');
    bindActionToElems('input', windowsHeigth, 'height');
    bindActionToElems('change', windowsType, 'type');
    bindActionToElems('change', windowsProfile, 'profile');
};

export default changeModalState;
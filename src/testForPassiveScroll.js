
const testForPassiveScroll = () => {
    const win = window;
    let supportsPassiveOption = false;
    try {
        const opts = Object.defineProperty({}, 'passive', {
            get: () => {
                supportsPassiveOption = true;
            },
        });
        win.addEventListener('test', null, opts);
        win.removeEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
}

export default testForPassiveScroll;

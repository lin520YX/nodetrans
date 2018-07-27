class Dialog {
    constructor() {
        this.time = 3000
    }
    $show() {
        console.log('show');
    }

    $hide() {
        console.log('hide');
    }
}
module.exports = Dialog
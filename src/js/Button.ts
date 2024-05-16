// @ts-nocheck
export class Button {
    constructor(imgId) {
        this.showImage = true; // Use to toggle the display of the image
        this.imgId = imgId; // Use to identify the image with her ID
    }
    toggleImage() {
        this.showImage = !this.showImage;
        console.log("Test");
        if (this.showImage === True) {
            document.getElementById(this.imgId)?.style("display:none")
        } else {
            document.getElementById(this.imgId)?.style("display:relative")
        }
    }
};


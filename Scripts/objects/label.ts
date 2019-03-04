module objects {
    export class Label extends createjs.Text {
        // Private Instance Variables

        //Public Properties
        constructor(
            labelString: string,
            fontSize: string,
            fontFamily: string,
            fontColour: string,
            x: number = 0,
            y: number = 0,
            isCentered: boolean = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);
            
            this.x = x;
            this.y = y;

            if(isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
        }
        //Constructor

        //Private Methods

        //Public Methods

    }
}
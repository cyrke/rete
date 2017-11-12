export class Connection {

    constructor(output, input) {
        this.output = output;
        this.input = input;
        this.style = {};

        this.input.addConnection(this);
    }

    remove() {
        this.input.removeConnection(this);
        this.output.removeConnection(this, false);
    }
}
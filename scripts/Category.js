/* Generated with GenMyModel */
export class Category {
    // Implemented attributes
    // Operations
    constructor(ctgyName, ctgyDescription, image) {
        this._ctgyName = ctgyName;
        this._ctgyDescription = ctgyDescription;
        this._image = image;
        this._streams = [];
    }
    // Implemented operations
    get ctgyName() { return this._ctgyName; }
    get ctgyDescription() { return this._ctgyDescription; }
    get image() { return this._image; }
    get streams() { return this._streams; }
}

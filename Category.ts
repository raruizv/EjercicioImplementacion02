
/* Generated with GenMyModel */

/// <reference path="Stream.ts" />

import { Stream } from "./Stream.js";
    
export class Category
{
    // Attributes
	private _ctgyName: string;
	private _ctgyDescription: string;
	private _image: string;
	private _streams: Array<Stream>;
	
    // Implemented attributes
	
    // Operations
	constructor(ctgyName: string, ctgyDescription: string, image: string) {
		this._ctgyName = ctgyName;
		this._ctgyDescription = ctgyDescription
		this._image = image;
		this._streams = [];
	}
		 
	// Implemented operations
	public get ctgyName(): string { return this._ctgyName; }
	public get ctgyDescription(): string { return this._ctgyDescription; }
	public get image (): string { return this._image; }
	public get streams(): Array<Stream> { return this._streams; }
}



/* Generated with GenMyModel */

/// <reference path="Category.ts" />
/// <reference path="Streamer.ts" />
/// <reference path="Channel.ts" />

import { Category } from "./Category.js";
import { Channel } from "./Channel.js"; 
import { Streamer } from "./Streamer.js";
    
export class Stream
{
    // Attributes
	private _activity: string;	
	private _stmSpace: string;
	private _subject: string;
	private _channel: Channel;
	private _streamer: Streamer;
	private _categories: Array<Category>;	
	
    // Implemented attributes
	
    // Operations
	constructor(
		activity: string,
		stmSpace: string,
		subject: string,
		channel: Channel,
		streamer: Streamer,
		) {
		this._activity = activity;
		this._stmSpace = stmSpace;
		this._subject = subject;
		this._channel = channel;
		this._streamer = streamer;
		this._categories = [];		
	}
	
	static showStreams(theStreams: Stream[]): void {
		console.log(`El listado de Streams:`);
		theStreams.forEach((oneStream) => {
			console.log(`- Actividad: ${oneStream.activity}, Espacio: ${oneStream.stmSpace}, Tema: ${oneStream.subject}`);			
			console.log(`- Canal: ${oneStream.channel}, Nombre del Streamer: ${oneStream.streamer.nickname} `)
			console.log(`Listado de categorias:`);
			console.log(`${oneStream.categories}`);
		});	
	}
	
	showOneStream(): void  {
		console.log(`- Actividad: ${this._activity}, Espacio: ${this._stmSpace}, Tema: ${this._subject}`);	
		console.log(`- Canal: ${this._channel}, Nombre del Streamer: ${this._streamer.nickname} `);
		console.log(`Listado de categorias:`);
		console.log(`${this._categories}`);
	}
	
	// Implemented operations
	public get activity(): string {
		return this._activity;
	}
	
	public get stmSpace(): string {
		return this._stmSpace;
	}

	public get subject(): string {
		return this._subject;
	}

	public get channel(): Channel { return this._channel; }
	public get streamer(): Streamer { return this._streamer; }
	public get categories(): Category[] { return this._categories; }
}


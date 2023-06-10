
/* Generated with GenMyModel */

/// <reference path="Stream.ts" />
/// <reference path="Channel.ts" />

import { Stream } from "./Stream.js";
import { Channel } from "./Channel.js";
    
export class Streamer
{
    // Attributes
	private _nickname: string;
	private _stmrDescription: string;
	private _socialMedia: string;
	private _streams: Array<Stream>;
	private _channels: Array<Channel>;
	
    // Implemented attributes
	
    // Operations
	constructor (
		nickname: string,
		stmrDescription: string,
		socialMedia: string
		) {
		//TODO: Implement
		this._nickname = nickname;
		this._stmrDescription = stmrDescription;
		this._socialMedia = socialMedia;
		this._streams = [];
		this._channels = [];
	}
	
	static showStreamers(theStreamers: Streamer[]): void {
		console.log(`El listado de Streamers:`);
		theStreamers.forEach((oneStreamer) => {
			console.log(`- Alias: ${oneStreamer.nickname}, Descripcion: ${oneStreamer.stmrDescription}, Redes sociales: ${oneStreamer.socialMedia}`);
			console.log(`- Estos son los streams de ${oneStreamer.nickname}`);
			console.log(`${oneStreamer.streams}`);
			console.log(`- Estos son los canales de ${oneStreamer.nickname}`);
			console.log(`${oneStreamer.channels}`);
		});		
	}
	
	showOneStreamer(): void {
		console.log(`- Alias: ${this._nickname}, Descripcion: ${this._stmrDescription}, Redes sociales: ${this._socialMedia}`);
		console.log(`- Estos son los streams de ${this._nickname}`);
		console.log(`${this._streams}`)
		console.log(`- Estos son los canales de ${this._nickname}`);
		console.log(`${this._channels}`)
	}
	
	agregateStream(theStream: Stream):void {
		this._streams.push(theStream);
	}
	
	agregateChannel(theChannel: Channel):void {
		this._channels.push(theChannel)
	}
	
	// Implemented operations
	public get nickname():String {
		return this._nickname;
	}

	public get stmrDescription(): String {
		return this._stmrDescription;
	}

	public get socialMedia(): String {
		return this._socialMedia;
	}

	public get streams(): Array<Stream> { return this._streams; } 
	public get channels(): Array<Channel> { return this._channels; }
}


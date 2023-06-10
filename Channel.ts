
/* Generated with GenMyModel */

/// <reference path="Stream.ts" />
/// <reference path="Streamer.ts" />
/// <reference path="StreamPlatform.ts" />

import { Stream } from "./Stream.js";
import { Streamer } from "./Streamer.js";
import { StreamPlatform } from "./StreamPlatform.js";
    
export class Channel
{
    // Attributes
	private _channelName: string;
	private _banner: string;
	private _channelSpace: string;
	private _streamer: Streamer;
	private _streamPlatform: StreamPlatform;
	private _streams: Array<Stream>;
	
    // Implemented attributes
	
    // Operations
	constructor(
		channelName: string,
		banner: string,
		channelSpace: string,
		streamer: Streamer,
		streamPlatform: StreamPlatform
		) {
		//TODO: Implement
		this._channelName = channelName;
		this._banner = banner;
		this._channelSpace = channelSpace;
		this._streamer = streamer;
		this._streamPlatform = streamPlatform;
		this._streams = [];
	}
	
	static showChannels(theChannels: Channel[]): void {
		console.log(`El listado de canales es:`);
		theChannels.forEach((oneChannel) => {
			console.log(`- Nombre: ${oneChannel.channelName}, Banner: ${oneChannel.banner}, Espacio: ${oneChannel.channelSpace}`);
			console.log(`- Streamer: ${oneChannel.streamer}`);
			console.log(`- Plataforma: ${oneChannel.streamPlatform}`);
			console.log(`El listado de streams para ${oneChannel.streams}`);
		});
	}
	
	showOneChannel():void {
		console.log(`- Nombre: ${this._channelName}, Banner: ${this._banner}, Espacio: ${this._channelSpace}`);
		console.log(`- Streamer: ${this._streamer}`);
		console.log(`- Plataforma: ${this._streamPlatform}`);
		console.log(`El listado de streams para ${this._streams}`);
	}
	 
	// Implemented operations
	public get channelName(): string { return this._channelName; } 
	public get banner(): string { return this._banner; }
	public get channelSpace(): string { return this._channelSpace; }
	public get streamer(): Streamer { return this._streamer; }
	public get streamPlatform(): StreamPlatform { return this._streamPlatform; }
	public get streams(): Array<Stream> { return this._streams;  }
	
}


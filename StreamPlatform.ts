
/* Generated with GenMyModel */

/// <reference path="Channel.ts" />

import { Channel } from "./Channel.js";
    
export class StreamPlatform
{
    // Attributes
	private _pltfName: string;
	private _logo: string;
	private _pltfDescription: string;
	private _sponsor: string;
	private _channels: Array<Channel>;
	
    // Implemented attributes
	
    // Operations
	constructor(
		pltfName: string,
		logo: string,
		pltfDescription: string,
		sponsor: string
		) {
		//TODO: Implement
		this._pltfName = pltfName;
		this._logo = logo;
		this._pltfDescription = pltfDescription;
		this._sponsor = sponsor;
		this._channels = [];
	}
	
	static showPlatforms(thePlatforms: StreamPlatform[]): void {
		console.log(`El listado de plataformas es:`);
		thePlatforms.forEach((onePlatform) => {
			console.log(`- Nombre: ${onePlatform.pltfName}, Logo: ${onePlatform.logo}, Descripcion: ${onePlatform.pltfDescription}, Auspiciante: ${onePlatform.sponsor}`);
			console.log(`El listado de canales para ${onePlatform.pltfName} es:`);
			console.log(`${onePlatform.channels}`);
		});
	}
	
	showOnePlatform(): void {
		console.log(`- Nombre: ${this._pltfName}, Logo: ${this._logo}, Descripcion: ${this._pltfDescription}, Auspiciante: ${this._sponsor}`);
		console.log(`El listado de canales para ${this._pltfName} es:`);
		console.log(`${this._channels}`);
	}	 
	// Implemented operations
	public get pltfName(): string {
		return this._pltfName
	} 

	public get logo(): string {
		return this._logo
	}

	public get pltfDescription(): string {
		return this._pltfDescription
	}

	public get sponsor(): string {
		return this._sponsor
	}
	
	public get channels(): Array<Channel> {
		return this._channels;
	}
	
}


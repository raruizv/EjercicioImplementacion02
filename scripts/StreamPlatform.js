/* Generated with GenMyModel */
export class StreamPlatform {
    // Implemented attributes
    // Operations
    constructor(pltfName, logo, pltfDescription, sponsor) {
        //TODO: Implement
        this._pltfName = pltfName;
        this._logo = logo;
        this._pltfDescription = pltfDescription;
        this._sponsor = sponsor;
        this._channels = [];
    }
    static showPlatforms(thePlatforms) {
        console.log(`El listado de plataformas es:`);
        thePlatforms.forEach((onePlatform) => {
            console.log(`- Nombre: ${onePlatform.pltfName}, Logo: ${onePlatform.logo}, Descripcion: ${onePlatform.pltfDescription}, Auspiciante: ${onePlatform.sponsor}`);
            console.log(`El listado de canales para ${onePlatform.pltfName} es:`);
            console.log(`${onePlatform.channels}`);
        });
    }
    showOnePlatform() {
        console.log(`- Nombre: ${this._pltfName}, Logo: ${this._logo}, Descripcion: ${this._pltfDescription}, Auspiciante: ${this._sponsor}`);
        console.log(`El listado de canales para ${this._pltfName} es:`);
        console.log(`${this._channels}`);
    }
    // Implemented operations
    get pltfName() {
        return this._pltfName;
    }
    get logo() {
        return this._logo;
    }
    get pltfDescription() {
        return this._pltfDescription;
    }
    get sponsor() {
        return this._sponsor;
    }
    get channels() {
        return this._channels;
    }
}

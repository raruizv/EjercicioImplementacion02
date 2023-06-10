/* Generated with GenMyModel */
export class Streamer {
    // Implemented attributes
    // Operations
    constructor(nickname, stmrDescription, socialMedia) {
        //TODO: Implement
        this._nickname = nickname;
        this._stmrDescription = stmrDescription;
        this._socialMedia = socialMedia;
        this._streams = [];
        this._channels = [];
    }
    static showStreamers(theStreamers) {
        console.log(`El listado de Streamers:`);
        theStreamers.forEach((oneStreamer) => {
            console.log(`- Alias: ${oneStreamer.nickname}, Descripcion: ${oneStreamer.stmrDescription}, Redes sociales: ${oneStreamer.socialMedia}`);
            console.log(`- Estos son los streams de ${oneStreamer.nickname}`);
            console.log(`${oneStreamer.streams}`);
            console.log(`- Estos son los canales de ${oneStreamer.nickname}`);
            console.log(`${oneStreamer.channels}`);
        });
    }
    showOneStreamer() {
        console.log(`- Alias: ${this._nickname}, Descripcion: ${this._stmrDescription}, Redes sociales: ${this._socialMedia}`);
        console.log(`- Estos son los streams de ${this._nickname}`);
        console.log(`${this._streams}`);
        console.log(`- Estos son los canales de ${this._nickname}`);
        console.log(`${this._channels}`);
    }
    agregateStream(theStream) {
        this._streams.push(theStream);
    }
    agregateChannel(theChannel) {
        this._channels.push(theChannel);
    }
    // Implemented operations
    get nickname() {
        return this._nickname;
    }
    get stmrDescription() {
        return this._stmrDescription;
    }
    get socialMedia() {
        return this._socialMedia;
    }
    get streams() { return this._streams; }
    get channels() { return this._channels; }
}

/* Generated with GenMyModel */
export class Channel {
    // Implemented attributes
    // Operations
    constructor(channelName, banner, channelSpace, streamer, streamPlatform) {
        //TODO: Implement
        this._channelName = channelName;
        this._banner = banner;
        this._channelSpace = channelSpace;
        this._streamer = streamer;
        this._streamPlatform = streamPlatform;
        this._streams = [];
    }
    static showChannels(theChannels) {
        console.log(`El listado de canales es:`);
        theChannels.forEach((oneChannel) => {
            console.log(`- Nombre: ${oneChannel.channelName}, Banner: ${oneChannel.banner}, Espacio: ${oneChannel.channelSpace}`);
            console.log(`- Streamer: ${oneChannel.streamer}`);
            console.log(`- Plataforma: ${oneChannel.streamPlatform}`);
            console.log(`El listado de streams para ${oneChannel.streams}`);
        });
    }
    showOneChannel() {
        console.log(`- Nombre: ${this._channelName}, Banner: ${this._banner}, Espacio: ${this._channelSpace}`);
        console.log(`- Streamer: ${this._streamer}`);
        console.log(`- Plataforma: ${this._streamPlatform}`);
        console.log(`El listado de streams para ${this._streams}`);
    }
    // Implemented operations
    get channelName() { return this._channelName; }
    get banner() { return this._banner; }
    get channelSpace() { return this._channelSpace; }
    get streamer() { return this._streamer; }
    get streamPlatform() { return this._streamPlatform; }
    get streams() { return this._streams; }
}

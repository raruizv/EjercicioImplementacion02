/* Generated with GenMyModel */
export class Stream {
    // Implemented attributes
    // Operations
    constructor(activity, stmSpace, subject, channel, streamer) {
        this._activity = activity;
        this._stmSpace = stmSpace;
        this._subject = subject;
        this._channel = channel;
        this._streamer = streamer;
        this._categories = [];
    }
    static showStreams(theStreams) {
        console.log(`El listado de Streams:`);
        theStreams.forEach((oneStream) => {
            console.log(`- Actividad: ${oneStream.activity}, Espacio: ${oneStream.stmSpace}, Tema: ${oneStream.subject}`);
            console.log(`- Canal: ${oneStream.channel}, Nombre del Streamer: ${oneStream.streamer.nickname} `);
            console.log(`Listado de categorias:`);
            console.log(`${oneStream.categories}`);
        });
    }
    showOneStream() {
        console.log(`- Actividad: ${this._activity}, Espacio: ${this._stmSpace}, Tema: ${this._subject}`);
        console.log(`- Canal: ${this._channel}, Nombre del Streamer: ${this._streamer.nickname} `);
        console.log(`Listado de categorias:`);
        console.log(`${this._categories}`);
    }
    // Implemented operations
    get activity() {
        return this._activity;
    }
    get stmSpace() {
        return this._stmSpace;
    }
    get subject() {
        return this._subject;
    }
    get channel() { return this._channel; }
    get streamer() { return this._streamer; }
    get categories() { return this._categories; }
}

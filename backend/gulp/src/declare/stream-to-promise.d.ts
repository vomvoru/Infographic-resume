declare module 'stream-to-promise' {
    const streamToPromise: (stream: NodeJS.ReadWriteStream) => Promise<any>

    export = streamToPromise
}

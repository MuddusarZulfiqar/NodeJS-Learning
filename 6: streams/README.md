# Streams

Streams are a way to handle asynchronous operations in Node.js. Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams:

- Readable - streams from which data can be read (for example, fs.createReadStream()).
- Writable - streams to which data can be written (for example, fs.createWriteStream()).

- Duplex - streams that are both Readable and Writable.
- Transform - Duplex streams that can modify or transform the data as it is written and read.

All streams are instances of EventEmitter.

## Readable Streams

Readable streams are an abstraction for a source from which data is consumed. In other words, data comes out of a readable stream.

Examples of readable streams include:

- fs.createReadStream()
- http.get()

Readable streams are [EventEmitter][] instances and emit the following events:

- Event: 'close'
- Event: 'data'
- Event: 'end'
- Event: 'error'
- Event: 'readable'

### Event: 'close'

The 'close' event is emitted when the stream and any of its underlying resources (a file descriptor, for example) have been closed. The event indicates that no more events will be emitted, and no further computation will occur.

### Event: 'data'

The 'data' event is emitted when there is data available to be read from the stream. The amount of data that will be provided in a single data event may vary.

The listener callback is called with the chunk of data as an argument. If encoding is specified, then the chunk will be a string. If no encoding is specified, then the chunk will be a Buffer.

Note that the 'data' event will be emitted even if there is no data currently available to be read. This can happen for example if the internal buffer of the stream is full, and further data can't be read until some of that data has been consumed.

### Event: 'end'

The 'end' event is emitted when there is no more data to be consumed from the stream. The 'end' event will not be emitted unless the data is completely consumed.

### Event: 'error'

The 'error' event is emitted if an error occurred while receiving data.

### Event: 'readable'

The 'readable' event is emitted when there is data to be read from the stream. This event is emitted when the stream switches from a non-readable state to a readable state.

### readable.read([size])

- `size` {Number} Optional. The number of bytes to read. Defaults to `null`, which causes all available data to be returned.

Reads some data from the internal buffer and returns it. If no data is available to be read, then it will return `null`. If the stream is in flowing mode, then the size argument is ignored, and data will be read until the internal buffer is exhausted, or until `read()` is called again with a `size` argument.

If the stream is in paused mode, then the size argument will cause `read()` to return a single chunk of up to that size. If the internal buffer has more than `size` bytes in it, then it will return `size` bytes. Otherwise, it will return the number of bytes remaining in the buffer.

Note that if the stream is in flowing mode, then calling `read()` will cause data to be read from the underlying system, even if the internal buffer already has data available to be returned.

### readable.setEncoding([encoding])

- `encoding` {String} Optional. The encoding to use. Defaults to `null`.

Sets the encoding for the readable stream. This is only relevant if the data is being consumed as a string. If no encoding is specified, then the `data` events will emit `Buffer` objects.

### readable.pause()

Pauses the incoming stream. That is, `data` events will not be emitted. Useful to throttle back an incoming stream.

### readable.resume()

Resumes the incoming stream. If the stream was paused, then `data` events will begin to be emitted.

### readable.isPaused()

Returns `true` if the readable stream is in paused mode, and `false` otherwise.

### readable.unpipe([destination])

- `destination` {Stream} Optional. The destination to remove.

Removes the specified destination from the list of streams to which data is piped.

### readable.unshift(chunk)

- `chunk` {String|Buffer} The data to unshift onto the read queue.

Pushes a chunk of data back onto the read queue, so that it will be returned the next time `read()` is called.

### readable.wrap(stream)

- `stream` {Stream} The stream to wrap.

Wraps the given stream as a readable stream. This is useful for adapting existing stream interfaces to the interface used by readable streams.

### Class: stream.Readable

- `options` {Object} Optional. Options to pass to the stream.

A Readable stream is a source of data that you can read from. In other words, data comes OUT of a readable stream.

## Authors

- [@muddusar-zulfiqar](https://github.com/MuddusarZulfiqar)

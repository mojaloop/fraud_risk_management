// source: nifi.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.org.apache.nifi.processors.grpc.FlowFileReply', null, global);
goog.exportSymbol('proto.org.apache.nifi.processors.grpc.FlowFileReply.ResponseCode', null, global);
goog.exportSymbol('proto.org.apache.nifi.processors.grpc.FlowFileRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.org.apache.nifi.processors.grpc.FlowFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.apache.nifi.processors.grpc.FlowFileRequest.displayName = 'proto.org.apache.nifi.processors.grpc.FlowFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.org.apache.nifi.processors.grpc.FlowFileReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.apache.nifi.processors.grpc.FlowFileReply.displayName = 'proto.org.apache.nifi.processors.grpc.FlowFileReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.org.apache.nifi.processors.grpc.FlowFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.apache.nifi.processors.grpc.FlowFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    attributesMap: (f = msg.getAttributesMap()) ? f.toObject(includeInstance, undefined) : [],
    content: msg.getContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileRequest}
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.apache.nifi.processors.grpc.FlowFileRequest;
  return proto.org.apache.nifi.processors.grpc.FlowFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.apache.nifi.processors.grpc.FlowFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileRequest}
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = msg.getAttributesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.apache.nifi.processors.grpc.FlowFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.apache.nifi.processors.grpc.FlowFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAttributesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      15,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileRequest} returns this
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * map<string, string> attributes = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.getAttributesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileRequest} returns this
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.clearAttributesMap = function() {
  this.getAttributesMap().clear();
  return this;};


/**
 * optional bytes content = 15;
 * @return {!(string|Uint8Array)}
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes content = 15;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileRequest} returns this
 */
proto.org.apache.nifi.processors.grpc.FlowFileRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.prototype.toObject = function(opt_includeInstance) {
  return proto.org.apache.nifi.processors.grpc.FlowFileReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.apache.nifi.processors.grpc.FlowFileReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsecode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    body: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileReply}
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.apache.nifi.processors.grpc.FlowFileReply;
  return proto.org.apache.nifi.processors.grpc.FlowFileReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.apache.nifi.processors.grpc.FlowFileReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileReply}
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.org.apache.nifi.processors.grpc.FlowFileReply.ResponseCode} */ (reader.readEnum());
      msg.setResponsecode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.apache.nifi.processors.grpc.FlowFileReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.apache.nifi.processors.grpc.FlowFileReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsecode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.ResponseCode = {
  ERROR: 0,
  SUCCESS: 1,
  RETRY: 2
};

/**
 * optional ResponseCode responseCode = 1;
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileReply.ResponseCode}
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.prototype.getResponsecode = function() {
  return /** @type {!proto.org.apache.nifi.processors.grpc.FlowFileReply.ResponseCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.org.apache.nifi.processors.grpc.FlowFileReply.ResponseCode} value
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileReply} returns this
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.prototype.setResponsecode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string body = 2;
 * @return {string}
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.apache.nifi.processors.grpc.FlowFileReply} returns this
 */
proto.org.apache.nifi.processors.grpc.FlowFileReply.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.org.apache.nifi.processors.grpc);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["setMatrixArrayType"] = setMatrixArrayType;
/* harmony export (immutable) */ __webpack_exports__["toRadian"] = toRadian;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = 0.000001;
/* harmony export (immutable) */ __webpack_exports__["EPSILON"] = EPSILON;

let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
const RANDOM = Math.random;
/* harmony export (immutable) */ __webpack_exports__["RANDOM"] = RANDOM;


/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__ = __webpack_require__(21);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return __WEBPACK_IMPORTED_MODULE_6__gl_matrix_vec2__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec3__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec4__; });
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER













/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const G = document.defaultView;
/* harmony export (immutable) */ __webpack_exports__["f"] = G;


// Node.CONSTANTS
// 'cause some engine has no global Node defined
// (i.e. Node, NativeScript, basicHTML ... )
const ELEMENT_NODE = 1;
/* harmony export (immutable) */ __webpack_exports__["e"] = ELEMENT_NODE;

const ATTRIBUTE_NODE = 2;
/* unused harmony export ATTRIBUTE_NODE */

const TEXT_NODE = 3;
/* harmony export (immutable) */ __webpack_exports__["j"] = TEXT_NODE;

const COMMENT_NODE = 8;
/* harmony export (immutable) */ __webpack_exports__["a"] = COMMENT_NODE;

const DOCUMENT_FRAGMENT_NODE = 11;
/* harmony export (immutable) */ __webpack_exports__["d"] = DOCUMENT_FRAGMENT_NODE;


// SVG related constants
const OWNER_SVG_ELEMENT = 'ownerSVGElement';
/* harmony export (immutable) */ __webpack_exports__["g"] = OWNER_SVG_ELEMENT;

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
/* harmony export (immutable) */ __webpack_exports__["i"] = SVG_NAMESPACE;


// Custom Elements / MutationObserver constants
const CONNECTED = 'connected';
/* harmony export (immutable) */ __webpack_exports__["b"] = CONNECTED;

const DISCONNECTED = 'dis' + CONNECTED;
/* harmony export (immutable) */ __webpack_exports__["c"] = DISCONNECTED;


// hyperHTML related constants
const EXPANDO = '_hyper: ';
/* unused harmony export EXPANDO */

const SHOULD_USE_TEXT_CONTENT = /^style|textarea$/i;
/* harmony export (immutable) */ __webpack_exports__["h"] = SHOULD_USE_TEXT_CONTENT;

const UID = EXPANDO + ((Math.random() * new Date) | 0) + ';';
/* harmony export (immutable) */ __webpack_exports__["k"] = UID;

const UIDC = '<!--' + UID + '-->';
/* harmony export (immutable) */ __webpack_exports__["l"] = UIDC;



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*
 * Copyright (c) 2015 cannon.js Authors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

!function(e){if(true)module.exports=e();else if("function"==typeof define&&false)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.CANNON=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports={
  "name": "cannon",
  "version": "0.6.2",
  "description": "A lightweight 3D physics engine written in JavaScript.",
  "homepage": "https://github.com/schteppe/cannon.js",
  "author": "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
  "keywords": [
    "cannon.js",
    "cannon",
    "physics",
    "engine",
    "3d"
  ],
  "main": "./build/cannon.js",
  "engines": {
    "node": "*"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/schteppe/cannon.js.git"
  },
  "bugs": {
    "url": "https://github.com/schteppe/cannon.js/issues"
  },
  "licenses": [
    {
      "type": "MIT"
    }
  ],
  "devDependencies": {
    "jshint": "latest",
    "uglify-js": "latest",
    "nodeunit": "^0.9.0",
    "grunt": "~0.4.0",
    "grunt-contrib-jshint": "~0.1.1",
    "grunt-contrib-nodeunit": "^0.4.1",
    "grunt-contrib-concat": "~0.1.3",
    "grunt-contrib-uglify": "^0.5.1",
    "grunt-browserify": "^2.1.4",
    "grunt-contrib-yuidoc": "^0.5.2",
    "browserify": "*"
  },
  "dependencies": {}
}

},{}],2:[function(_dereq_,module,exports){
// Export classes
module.exports = {
    version :                       _dereq_('../package.json').version,

    AABB :                          _dereq_('./collision/AABB'),
    ArrayCollisionMatrix :          _dereq_('./collision/ArrayCollisionMatrix'),
    Body :                          _dereq_('./objects/Body'),
    Box :                           _dereq_('./shapes/Box'),
    Broadphase :                    _dereq_('./collision/Broadphase'),
    Constraint :                    _dereq_('./constraints/Constraint'),
    ContactEquation :               _dereq_('./equations/ContactEquation'),
    Narrowphase :                   _dereq_('./world/Narrowphase'),
    ConeTwistConstraint :           _dereq_('./constraints/ConeTwistConstraint'),
    ContactMaterial :               _dereq_('./material/ContactMaterial'),
    ConvexPolyhedron :              _dereq_('./shapes/ConvexPolyhedron'),
    Cylinder :                      _dereq_('./shapes/Cylinder'),
    DistanceConstraint :            _dereq_('./constraints/DistanceConstraint'),
    Equation :                      _dereq_('./equations/Equation'),
    EventTarget :                   _dereq_('./utils/EventTarget'),
    FrictionEquation :              _dereq_('./equations/FrictionEquation'),
    GSSolver :                      _dereq_('./solver/GSSolver'),
    GridBroadphase :                _dereq_('./collision/GridBroadphase'),
    Heightfield :                   _dereq_('./shapes/Heightfield'),
    HingeConstraint :               _dereq_('./constraints/HingeConstraint'),
    LockConstraint :                _dereq_('./constraints/LockConstraint'),
    Mat3 :                          _dereq_('./math/Mat3'),
    Material :                      _dereq_('./material/Material'),
    NaiveBroadphase :               _dereq_('./collision/NaiveBroadphase'),
    ObjectCollisionMatrix :         _dereq_('./collision/ObjectCollisionMatrix'),
    Pool :                          _dereq_('./utils/Pool'),
    Particle :                      _dereq_('./shapes/Particle'),
    Plane :                         _dereq_('./shapes/Plane'),
    PointToPointConstraint :        _dereq_('./constraints/PointToPointConstraint'),
    Quaternion :                    _dereq_('./math/Quaternion'),
    Ray :                           _dereq_('./collision/Ray'),
    RaycastVehicle :                _dereq_('./objects/RaycastVehicle'),
    RaycastResult :                 _dereq_('./collision/RaycastResult'),
    RigidVehicle :                  _dereq_('./objects/RigidVehicle'),
    RotationalEquation :            _dereq_('./equations/RotationalEquation'),
    RotationalMotorEquation :       _dereq_('./equations/RotationalMotorEquation'),
    SAPBroadphase :                 _dereq_('./collision/SAPBroadphase'),
    SPHSystem :                     _dereq_('./objects/SPHSystem'),
    Shape :                         _dereq_('./shapes/Shape'),
    Solver :                        _dereq_('./solver/Solver'),
    Sphere :                        _dereq_('./shapes/Sphere'),
    SplitSolver :                   _dereq_('./solver/SplitSolver'),
    Spring :                        _dereq_('./objects/Spring'),
    Trimesh :                       _dereq_('./shapes/Trimesh'),
    Vec3 :                          _dereq_('./math/Vec3'),
    Vec3Pool :                      _dereq_('./utils/Vec3Pool'),
    World :                         _dereq_('./world/World'),
};

},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');
var Utils = _dereq_('../utils/Utils');

module.exports = AABB;

/**
 * Axis aligned bounding box class.
 * @class AABB
 * @constructor
 * @param {Object} [options]
 * @param {Vec3}   [options.upperBound]
 * @param {Vec3}   [options.lowerBound]
 */
function AABB(options){
    options = options || {};

    /**
     * The lower bound of the bounding box.
     * @property lowerBound
     * @type {Vec3}
     */
    this.lowerBound = new Vec3();
    if(options.lowerBound){
        this.lowerBound.copy(options.lowerBound);
    }

    /**
     * The upper bound of the bounding box.
     * @property upperBound
     * @type {Vec3}
     */
    this.upperBound = new Vec3();
    if(options.upperBound){
        this.upperBound.copy(options.upperBound);
    }
}

var tmp = new Vec3();

/**
 * Set the AABB bounds from a set of points.
 * @method setFromPoints
 * @param {Array} points An array of Vec3's.
 * @param {Vec3} position
 * @param {Quaternion} quaternion
 * @param {number} skinSize
 * @return {AABB} The self object
 */
AABB.prototype.setFromPoints = function(points, position, quaternion, skinSize){
    var l = this.lowerBound,
        u = this.upperBound,
        q = quaternion;

    // Set to the first point
    l.copy(points[0]);
    if(q){
        q.vmult(l, l);
    }
    u.copy(l);

    for(var i = 1; i<points.length; i++){
        var p = points[i];

        if(q){
            q.vmult(p, tmp);
            p = tmp;
        }

        if(p.x > u.x){ u.x = p.x; }
        if(p.x < l.x){ l.x = p.x; }
        if(p.y > u.y){ u.y = p.y; }
        if(p.y < l.y){ l.y = p.y; }
        if(p.z > u.z){ u.z = p.z; }
        if(p.z < l.z){ l.z = p.z; }
    }

    // Add offset
    if (position) {
        position.vadd(l, l);
        position.vadd(u, u);
    }

    if(skinSize){
        l.x -= skinSize;
        l.y -= skinSize;
        l.z -= skinSize;
        u.x += skinSize;
        u.y += skinSize;
        u.z += skinSize;
    }

    return this;
};

/**
 * Copy bounds from an AABB to this AABB
 * @method copy
 * @param  {AABB} aabb Source to copy from
 * @return {AABB} The this object, for chainability
 */
AABB.prototype.copy = function(aabb){
    this.lowerBound.copy(aabb.lowerBound);
    this.upperBound.copy(aabb.upperBound);
    return this;
};

/**
 * Clone an AABB
 * @method clone
 */
AABB.prototype.clone = function(){
    return new AABB().copy(this);
};

/**
 * Extend this AABB so that it covers the given AABB too.
 * @method extend
 * @param  {AABB} aabb
 */
AABB.prototype.extend = function(aabb){
    // Extend lower bound
    var l = aabb.lowerBound.x;
    if(this.lowerBound.x > l){
        this.lowerBound.x = l;
    }

    // Upper
    var u = aabb.upperBound.x;
    if(this.upperBound.x < u){
        this.upperBound.x = u;
    }

    // Extend lower bound
    var l = aabb.lowerBound.y;
    if(this.lowerBound.y > l){
        this.lowerBound.y = l;
    }

    // Upper
    var u = aabb.upperBound.y;
    if(this.upperBound.y < u){
        this.upperBound.y = u;
    }

    // Extend lower bound
    var l = aabb.lowerBound.z;
    if(this.lowerBound.z > l){
        this.lowerBound.z = l;
    }

    // Upper
    var u = aabb.upperBound.z;
    if(this.upperBound.z < u){
        this.upperBound.z = u;
    }
};

/**
 * Returns true if the given AABB overlaps this AABB.
 * @method overlaps
 * @param  {AABB} aabb
 * @return {Boolean}
 */
AABB.prototype.overlaps = function(aabb){
    var l1 = this.lowerBound,
        u1 = this.upperBound,
        l2 = aabb.lowerBound,
        u2 = aabb.upperBound;

    //      l2        u2
    //      |---------|
    // |--------|
    // l1       u1

    return ((l2.x <= u1.x && u1.x <= u2.x) || (l1.x <= u2.x && u2.x <= u1.x)) &&
           ((l2.y <= u1.y && u1.y <= u2.y) || (l1.y <= u2.y && u2.y <= u1.y)) &&
           ((l2.z <= u1.z && u1.z <= u2.z) || (l1.z <= u2.z && u2.z <= u1.z));
};

/**
 * Returns true if the given AABB is fully contained in this AABB.
 * @method contains
 * @param {AABB} aabb
 * @return {Boolean}
 */
AABB.prototype.contains = function(aabb){
    var l1 = this.lowerBound,
        u1 = this.upperBound,
        l2 = aabb.lowerBound,
        u2 = aabb.upperBound;

    //      l2        u2
    //      |---------|
    // |---------------|
    // l1              u1

    return (
        (l1.x <= l2.x && u1.x >= u2.x) &&
        (l1.y <= l2.y && u1.y >= u2.y) &&
        (l1.z <= l2.z && u1.z >= u2.z)
    );
};

/**
 * @method getCorners
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Vec3} c
 * @param {Vec3} d
 * @param {Vec3} e
 * @param {Vec3} f
 * @param {Vec3} g
 * @param {Vec3} h
 */
AABB.prototype.getCorners = function(a, b, c, d, e, f, g, h){
    var l = this.lowerBound,
        u = this.upperBound;

    a.copy(l);
    b.set( u.x, l.y, l.z );
    c.set( u.x, u.y, l.z );
    d.set( l.x, u.y, u.z );
    e.set( u.x, l.y, l.z );
    f.set( l.x, u.y, l.z );
    g.set( l.x, l.y, u.z );
    h.copy(u);
};

var transformIntoFrame_corners = [
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3()
];

/**
 * Get the representation of an AABB in another frame.
 * @method toLocalFrame
 * @param  {Transform} frame
 * @param  {AABB} target
 * @return {AABB} The "target" AABB object.
 */
AABB.prototype.toLocalFrame = function(frame, target){

    var corners = transformIntoFrame_corners;
    var a = corners[0];
    var b = corners[1];
    var c = corners[2];
    var d = corners[3];
    var e = corners[4];
    var f = corners[5];
    var g = corners[6];
    var h = corners[7];

    // Get corners in current frame
    this.getCorners(a, b, c, d, e, f, g, h);

    // Transform them to new local frame
    for(var i=0; i !== 8; i++){
        var corner = corners[i];
        frame.pointToLocal(corner, corner);
    }

    return target.setFromPoints(corners);
};

/**
 * Get the representation of an AABB in the global frame.
 * @method toWorldFrame
 * @param  {Transform} frame
 * @param  {AABB} target
 * @return {AABB} The "target" AABB object.
 */
AABB.prototype.toWorldFrame = function(frame, target){

    var corners = transformIntoFrame_corners;
    var a = corners[0];
    var b = corners[1];
    var c = corners[2];
    var d = corners[3];
    var e = corners[4];
    var f = corners[5];
    var g = corners[6];
    var h = corners[7];

    // Get corners in current frame
    this.getCorners(a, b, c, d, e, f, g, h);

    // Transform them to new local frame
    for(var i=0; i !== 8; i++){
        var corner = corners[i];
        frame.pointToWorld(corner, corner);
    }

    return target.setFromPoints(corners);
};

},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(_dereq_,module,exports){
module.exports = ArrayCollisionMatrix;

/**
 * Collision "matrix". It's actually a triangular-shaped array of whether two bodies are touching this step, for reference next step
 * @class ArrayCollisionMatrix
 * @constructor
 */
function ArrayCollisionMatrix() {

    /**
     * The matrix storage
     * @property matrix
     * @type {Array}
     */
	this.matrix = [];
}

/**
 * Get an element
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
ArrayCollisionMatrix.prototype.get = function(i, j) {
	i = i.index;
	j = j.index;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
	return this.matrix[(i*(i + 1)>>1) + j-1];
};

/**
 * Set an element
 * @method set
 * @param {Number} i
 * @param {Number} j
 * @param {Number} value
 */
ArrayCollisionMatrix.prototype.set = function(i, j, value) {
	i = i.index;
	j = j.index;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
	this.matrix[(i*(i + 1)>>1) + j-1] = value ? 1 : 0;
};

/**
 * Sets all elements to zero
 * @method reset
 */
ArrayCollisionMatrix.prototype.reset = function() {
	for (var i=0, l=this.matrix.length; i!==l; i++) {
		this.matrix[i]=0;
	}
};

/**
 * Sets the max number of objects
 * @method setNumObjects
 * @param {Number} n
 */
ArrayCollisionMatrix.prototype.setNumObjects = function(n) {
	this.matrix.length = n*(n-1)>>1;
};

},{}],5:[function(_dereq_,module,exports){
var Body = _dereq_('../objects/Body');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Shape = _dereq_('../shapes/Shape');
var Plane = _dereq_('../shapes/Plane');

module.exports = Broadphase;

/**
 * Base class for broadphase implementations
 * @class Broadphase
 * @constructor
 * @author schteppe
 */
function Broadphase(){
    /**
    * The world to search for collisions in.
    * @property world
    * @type {World}
    */
    this.world = null;

    /**
     * If set to true, the broadphase uses bounding boxes for intersection test, else it uses bounding spheres.
     * @property useBoundingBoxes
     * @type {Boolean}
     */
    this.useBoundingBoxes = false;

    /**
     * Set to true if the objects in the world moved.
     * @property {Boolean} dirty
     */
    this.dirty = true;
}

/**
 * Get the collision pairs from the world
 * @method collisionPairs
 * @param {World} world The world to search in
 * @param {Array} p1 Empty array to be filled with body objects
 * @param {Array} p2 Empty array to be filled with body objects
 */
Broadphase.prototype.collisionPairs = function(world,p1,p2){
    throw new Error("collisionPairs not implemented for this BroadPhase class!");
};

/**
 * Check if a body pair needs to be intersection tested at all.
 * @method needBroadphaseCollision
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @return {bool}
 */
var Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC = Body.STATIC | Body.KINEMATIC;
Broadphase.prototype.needBroadphaseCollision = function(bodyA,bodyB){

    // Check collision filter masks
    if( (bodyA.collisionFilterGroup & bodyB.collisionFilterMask)===0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask)===0){
        return false;
    }

    // Check types
    if(((bodyA.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC)!==0 || bodyA.sleepState === Body.SLEEPING) &&
       ((bodyB.type & Broadphase_needBroadphaseCollision_STATIC_OR_KINEMATIC)!==0 || bodyB.sleepState === Body.SLEEPING)) {
        // Both bodies are static, kinematic or sleeping. Skip.
        return false;
    }

    return true;
};

/**
 * Check if the bounding volumes of two bodies intersect.
 * @method intersectionTest
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {array} pairs1
 * @param {array} pairs2
  */
Broadphase.prototype.intersectionTest = function(bodyA, bodyB, pairs1, pairs2){
    if(this.useBoundingBoxes){
        this.doBoundingBoxBroadphase(bodyA,bodyB,pairs1,pairs2);
    } else {
        this.doBoundingSphereBroadphase(bodyA,bodyB,pairs1,pairs2);
    }
};

/**
 * Check if the bounding spheres of two bodies are intersecting.
 * @method doBoundingSphereBroadphase
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Array} pairs1 bodyA is appended to this array if intersection
 * @param {Array} pairs2 bodyB is appended to this array if intersection
 */
var Broadphase_collisionPairs_r = new Vec3(), // Temp objects
    Broadphase_collisionPairs_normal =  new Vec3(),
    Broadphase_collisionPairs_quat =  new Quaternion(),
    Broadphase_collisionPairs_relpos  =  new Vec3();
Broadphase.prototype.doBoundingSphereBroadphase = function(bodyA,bodyB,pairs1,pairs2){
    var r = Broadphase_collisionPairs_r;
    bodyB.position.vsub(bodyA.position,r);
    var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
    var norm2 = r.norm2();
    if(norm2 < boundingRadiusSum2){
        pairs1.push(bodyA);
        pairs2.push(bodyB);
    }
};

/**
 * Check if the bounding boxes of two bodies are intersecting.
 * @method doBoundingBoxBroadphase
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
Broadphase.prototype.doBoundingBoxBroadphase = function(bodyA,bodyB,pairs1,pairs2){
    if(bodyA.aabbNeedsUpdate){
        bodyA.computeAABB();
    }
    if(bodyB.aabbNeedsUpdate){
        bodyB.computeAABB();
    }

    // Check AABB / AABB
    if(bodyA.aabb.overlaps(bodyB.aabb)){
        pairs1.push(bodyA);
        pairs2.push(bodyB);
    }
};

/**
 * Removes duplicate pairs from the pair arrays.
 * @method makePairsUnique
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
var Broadphase_makePairsUnique_temp = { keys:[] },
    Broadphase_makePairsUnique_p1 = [],
    Broadphase_makePairsUnique_p2 = [];
Broadphase.prototype.makePairsUnique = function(pairs1,pairs2){
    var t = Broadphase_makePairsUnique_temp,
        p1 = Broadphase_makePairsUnique_p1,
        p2 = Broadphase_makePairsUnique_p2,
        N = pairs1.length;

    for(var i=0; i!==N; i++){
        p1[i] = pairs1[i];
        p2[i] = pairs2[i];
    }

    pairs1.length = 0;
    pairs2.length = 0;

    for(var i=0; i!==N; i++){
        var id1 = p1[i].id,
            id2 = p2[i].id;
        var key = id1 < id2 ? id1+","+id2 :  id2+","+id1;
        t[key] = i;
        t.keys.push(key);
    }

    for(var i=0; i!==t.keys.length; i++){
        var key = t.keys.pop(),
            pairIndex = t[key];
        pairs1.push(p1[pairIndex]);
        pairs2.push(p2[pairIndex]);
        delete t[key];
    }
};

/**
 * To be implemented by subcasses
 * @method setWorld
 * @param {World} world
 */
Broadphase.prototype.setWorld = function(world){
};

/**
 * Check if the bounding spheres of two bodies overlap.
 * @method boundingSphereCheck
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @return {boolean}
 */
var bsc_dist = new Vec3();
Broadphase.boundingSphereCheck = function(bodyA,bodyB){
    var dist = bsc_dist;
    bodyA.position.vsub(bodyB.position,dist);
    return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius,2) > dist.norm2();
};

/**
 * Returns all the bodies within the AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param  {array} result An array to store resulting bodies in.
 * @return {array}
 */
Broadphase.prototype.aabbQuery = function(world, aabb, result){
    console.warn('.aabbQuery is not implemented in this Broadphase subclass.');
    return [];
};
},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(_dereq_,module,exports){
module.exports = GridBroadphase;

var Broadphase = _dereq_('./Broadphase');
var Vec3 = _dereq_('../math/Vec3');
var Shape = _dereq_('../shapes/Shape');

/**
 * Axis aligned uniform grid broadphase.
 * @class GridBroadphase
 * @constructor
 * @extends Broadphase
 * @todo Needs support for more than just planes and spheres.
 * @param {Vec3} aabbMin
 * @param {Vec3} aabbMax
 * @param {Number} nx Number of boxes along x
 * @param {Number} ny Number of boxes along y
 * @param {Number} nz Number of boxes along z
 */
function GridBroadphase(aabbMin,aabbMax,nx,ny,nz){
    Broadphase.apply(this);
    this.nx = nx || 10;
    this.ny = ny || 10;
    this.nz = nz || 10;
    this.aabbMin = aabbMin || new Vec3(100,100,100);
    this.aabbMax = aabbMax || new Vec3(-100,-100,-100);
	var nbins = this.nx * this.ny * this.nz;
	if (nbins <= 0) {
		throw "GridBroadphase: Each dimension's n must be >0";
	}
    this.bins = [];
	this.binLengths = []; //Rather than continually resizing arrays (thrashing the memory), just record length and allow them to grow
	this.bins.length = nbins;
	this.binLengths.length = nbins;
	for (var i=0;i<nbins;i++) {
		this.bins[i]=[];
		this.binLengths[i]=0;
	}
}
GridBroadphase.prototype = new Broadphase();
GridBroadphase.prototype.constructor = GridBroadphase;

/**
 * Get all the collision pairs in the physics world
 * @method collisionPairs
 * @param {World} world
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
var GridBroadphase_collisionPairs_d = new Vec3();
var GridBroadphase_collisionPairs_binPos = new Vec3();
GridBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
    var N = world.numObjects(),
        bodies = world.bodies;

    var max = this.aabbMax,
        min = this.aabbMin,
        nx = this.nx,
        ny = this.ny,
        nz = this.nz;

	var xstep = ny*nz;
	var ystep = nz;
	var zstep = 1;

    var xmax = max.x,
        ymax = max.y,
        zmax = max.z,
        xmin = min.x,
        ymin = min.y,
        zmin = min.z;

    var xmult = nx / (xmax-xmin),
        ymult = ny / (ymax-ymin),
        zmult = nz / (zmax-zmin);

    var binsizeX = (xmax - xmin) / nx,
        binsizeY = (ymax - ymin) / ny,
        binsizeZ = (zmax - zmin) / nz;

	var binRadius = Math.sqrt(binsizeX*binsizeX + binsizeY*binsizeY + binsizeZ*binsizeZ) * 0.5;

    var types = Shape.types;
    var SPHERE =            types.SPHERE,
        PLANE =             types.PLANE,
        BOX =               types.BOX,
        COMPOUND =          types.COMPOUND,
        CONVEXPOLYHEDRON =  types.CONVEXPOLYHEDRON;

    var bins=this.bins,
		binLengths=this.binLengths,
        Nbins=this.bins.length;

    // Reset bins
    for(var i=0; i!==Nbins; i++){
        binLengths[i] = 0;
    }

    var ceil = Math.ceil;
	var min = Math.min;
	var max = Math.max;

	function addBoxToBins(x0,y0,z0,x1,y1,z1,bi) {
		var xoff0 = ((x0 - xmin) * xmult)|0,
			yoff0 = ((y0 - ymin) * ymult)|0,
			zoff0 = ((z0 - zmin) * zmult)|0,
			xoff1 = ceil((x1 - xmin) * xmult),
			yoff1 = ceil((y1 - ymin) * ymult),
			zoff1 = ceil((z1 - zmin) * zmult);

		if (xoff0 < 0) { xoff0 = 0; } else if (xoff0 >= nx) { xoff0 = nx - 1; }
		if (yoff0 < 0) { yoff0 = 0; } else if (yoff0 >= ny) { yoff0 = ny - 1; }
		if (zoff0 < 0) { zoff0 = 0; } else if (zoff0 >= nz) { zoff0 = nz - 1; }
		if (xoff1 < 0) { xoff1 = 0; } else if (xoff1 >= nx) { xoff1 = nx - 1; }
		if (yoff1 < 0) { yoff1 = 0; } else if (yoff1 >= ny) { yoff1 = ny - 1; }
		if (zoff1 < 0) { zoff1 = 0; } else if (zoff1 >= nz) { zoff1 = nz - 1; }

		xoff0 *= xstep;
		yoff0 *= ystep;
		zoff0 *= zstep;
		xoff1 *= xstep;
		yoff1 *= ystep;
		zoff1 *= zstep;

		for (var xoff = xoff0; xoff <= xoff1; xoff += xstep) {
			for (var yoff = yoff0; yoff <= yoff1; yoff += ystep) {
				for (var zoff = zoff0; zoff <= zoff1; zoff += zstep) {
					var idx = xoff+yoff+zoff;
					bins[idx][binLengths[idx]++] = bi;
				}
			}
		}
	}

    // Put all bodies into the bins
    for(var i=0; i!==N; i++){
        var bi = bodies[i];
        var si = bi.shape;

        switch(si.type){
        case SPHERE:
            // Put in bin
            // check if overlap with other bins
            var x = bi.position.x,
                y = bi.position.y,
                z = bi.position.z;
            var r = si.radius;

			addBoxToBins(x-r, y-r, z-r, x+r, y+r, z+r, bi);
            break;

        case PLANE:
            if(si.worldNormalNeedsUpdate){
                si.computeWorldNormal(bi.quaternion);
            }
            var planeNormal = si.worldNormal;

			//Relative position from origin of plane object to the first bin
			//Incremented as we iterate through the bins
			var xreset = xmin + binsizeX*0.5 - bi.position.x,
				yreset = ymin + binsizeY*0.5 - bi.position.y,
				zreset = zmin + binsizeZ*0.5 - bi.position.z;

            var d = GridBroadphase_collisionPairs_d;
			d.set(xreset, yreset, zreset);

			for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) {
				for (var yi = 0, yoff = 0; yi !== ny; yi++, yoff += ystep, d.z = zreset, d.y += binsizeY) {
					for (var zi = 0, zoff = 0; zi !== nz; zi++, zoff += zstep, d.z += binsizeZ) {
						if (d.dot(planeNormal) < binRadius) {
							var idx = xoff + yoff + zoff;
							bins[idx][binLengths[idx]++] = bi;
						}
					}
				}
			}
            break;

        default:
			if (bi.aabbNeedsUpdate) {
				bi.computeAABB();
			}

			addBoxToBins(
				bi.aabb.lowerBound.x,
				bi.aabb.lowerBound.y,
				bi.aabb.lowerBound.z,
				bi.aabb.upperBound.x,
				bi.aabb.upperBound.y,
				bi.aabb.upperBound.z,
				bi);
            break;
        }
    }

    // Check each bin
    for(var i=0; i!==Nbins; i++){
		var binLength = binLengths[i];
		//Skip bins with no potential collisions
		if (binLength > 1) {
			var bin = bins[i];

			// Do N^2 broadphase inside
			for(var xi=0; xi!==binLength; xi++){
				var bi = bin[xi];
				for(var yi=0; yi!==xi; yi++){
					var bj = bin[yi];
					if(this.needBroadphaseCollision(bi,bj)){
						this.intersectionTest(bi,bj,pairs1,pairs2);
					}
				}
			}
		}
    }

//	for (var zi = 0, zoff=0; zi < nz; zi++, zoff+= zstep) {
//		console.log("layer "+zi);
//		for (var yi = 0, yoff=0; yi < ny; yi++, yoff += ystep) {
//			var row = '';
//			for (var xi = 0, xoff=0; xi < nx; xi++, xoff += xstep) {
//				var idx = xoff + yoff + zoff;
//				row += ' ' + binLengths[idx];
//			}
//			console.log(row);
//		}
//	}

    this.makePairsUnique(pairs1,pairs2);
};

},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(_dereq_,module,exports){
module.exports = NaiveBroadphase;

var Broadphase = _dereq_('./Broadphase');
var AABB = _dereq_('./AABB');

/**
 * Naive broadphase implementation, used in lack of better ones.
 * @class NaiveBroadphase
 * @constructor
 * @description The naive broadphase looks at all possible pairs without restriction, therefore it has complexity N^2 (which is bad)
 * @extends Broadphase
 */
function NaiveBroadphase(){
    Broadphase.apply(this);
}
NaiveBroadphase.prototype = new Broadphase();
NaiveBroadphase.prototype.constructor = NaiveBroadphase;

/**
 * Get all the collision pairs in the physics world
 * @method collisionPairs
 * @param {World} world
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
NaiveBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
    var bodies = world.bodies,
        n = bodies.length,
        i,j,bi,bj;

    // Naive N^2 ftw!
    for(i=0; i!==n; i++){
        for(j=0; j!==i; j++){

            bi = bodies[i];
            bj = bodies[j];

            if(!this.needBroadphaseCollision(bi,bj)){
                continue;
            }

            this.intersectionTest(bi,bj,pairs1,pairs2);
        }
    }
};

var tmpAABB = new AABB();

/**
 * Returns all the bodies within an AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param {array} result An array to store resulting bodies in.
 * @return {array}
 */
NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result){
    result = result || [];

    for(var i = 0; i < world.bodies.length; i++){
        var b = world.bodies[i];

        if(b.aabbNeedsUpdate){
            b.computeAABB();
        }

        // Ugly hack until Body gets aabb
        if(b.aabb.overlaps(aabb)){
            result.push(b);
        }
    }

    return result;
};
},{"./AABB":3,"./Broadphase":5}],8:[function(_dereq_,module,exports){
module.exports = ObjectCollisionMatrix;

/**
 * Records what objects are colliding with each other
 * @class ObjectCollisionMatrix
 * @constructor
 */
function ObjectCollisionMatrix() {

    /**
     * The matrix storage
     * @property matrix
     * @type {Object}
     */
	this.matrix = {};
}

/**
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
ObjectCollisionMatrix.prototype.get = function(i, j) {
	i = i.id;
	j = j.id;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
	return i+'-'+j in this.matrix;
};

/**
 * @method set
 * @param  {Number} i
 * @param  {Number} j
 * @param {Number} value
 */
ObjectCollisionMatrix.prototype.set = function(i, j, value) {
	i = i.id;
	j = j.id;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
	}
	if (value) {
		this.matrix[i+'-'+j] = true;
	}
	else {
		delete this.matrix[i+'-'+j];
	}
};

/**
 * Empty the matrix
 * @method reset
 */
ObjectCollisionMatrix.prototype.reset = function() {
	this.matrix = {};
};

/**
 * Set max number of objects
 * @method setNumObjects
 * @param {Number} n
 */
ObjectCollisionMatrix.prototype.setNumObjects = function(n) {
};

},{}],9:[function(_dereq_,module,exports){
module.exports = Ray;

var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Transform = _dereq_('../math/Transform');
var ConvexPolyhedron = _dereq_('../shapes/ConvexPolyhedron');
var Box = _dereq_('../shapes/Box');
var RaycastResult = _dereq_('../collision/RaycastResult');
var Shape = _dereq_('../shapes/Shape');
var AABB = _dereq_('../collision/AABB');

/**
 * A line in 3D space that intersects bodies and return points.
 * @class Ray
 * @constructor
 * @param {Vec3} from
 * @param {Vec3} to
 */
function Ray(from, to){
    /**
     * @property {Vec3} from
     */
    this.from = from ? from.clone() : new Vec3();

    /**
     * @property {Vec3} to
     */
    this.to = to ? to.clone() : new Vec3();

    /**
     * @private
     * @property {Vec3} _direction
     */
    this._direction = new Vec3();

    /**
     * The precision of the ray. Used when checking parallelity etc.
     * @property {Number} precision
     */
    this.precision = 0.0001;

    /**
     * Set to true if you want the Ray to take .collisionResponse flags into account on bodies and shapes.
     * @property {Boolean} checkCollisionResponse
     */
    this.checkCollisionResponse = true;

    /**
     * If set to true, the ray skips any hits with normal.dot(rayDirection) < 0.
     * @property {Boolean} skipBackfaces
     */
    this.skipBackfaces = false;

    /**
     * @property {number} collisionFilterMask
     * @default -1
     */
    this.collisionFilterMask = -1;

    /**
     * @property {number} collisionFilterGroup
     * @default -1
     */
    this.collisionFilterGroup = -1;

    /**
     * The intersection mode. Should be Ray.ANY, Ray.ALL or Ray.CLOSEST.
     * @property {number} mode
     */
    this.mode = Ray.ANY;

    /**
     * Current result object.
     * @property {RaycastResult} result
     */
    this.result = new RaycastResult();

    /**
     * Will be set to true during intersectWorld() if the ray hit anything.
     * @property {Boolean} hasHit
     */
    this.hasHit = false;

    /**
     * Current, user-provided result callback. Will be used if mode is Ray.ALL.
     * @property {Function} callback
     */
    this.callback = function(result){};
}
Ray.prototype.constructor = Ray;

Ray.CLOSEST = 1;
Ray.ANY = 2;
Ray.ALL = 4;

var tmpAABB = new AABB();
var tmpArray = [];

/**
 * Do itersection against all bodies in the given World.
 * @method intersectWorld
 * @param  {World} world
 * @param  {object} options
 * @return {Boolean} True if the ray hit anything, otherwise false.
 */
Ray.prototype.intersectWorld = function (world, options) {
    this.mode = options.mode || Ray.ANY;
    this.result = options.result || new RaycastResult();
    this.skipBackfaces = !!options.skipBackfaces;
    this.collisionFilterMask = typeof(options.collisionFilterMask) !== 'undefined' ? options.collisionFilterMask : -1;
    this.collisionFilterGroup = typeof(options.collisionFilterGroup) !== 'undefined' ? options.collisionFilterGroup : -1;
    if(options.from){
        this.from.copy(options.from);
    }
    if(options.to){
        this.to.copy(options.to);
    }
    this.callback = options.callback || function(){};
    this.hasHit = false;

    this.result.reset();
    this._updateDirection();

    this.getAABB(tmpAABB);
    tmpArray.length = 0;
    world.broadphase.aabbQuery(world, tmpAABB, tmpArray);
    this.intersectBodies(tmpArray);

    return this.hasHit;
};

var v1 = new Vec3(),
    v2 = new Vec3();

/*
 * As per "Barycentric Technique" as named here http://www.blackpawn.com/texts/pointinpoly/default.html But without the division
 */
Ray.pointInTriangle = pointInTriangle;
function pointInTriangle(p, a, b, c) {
    c.vsub(a,v0);
    b.vsub(a,v1);
    p.vsub(a,v2);

    var dot00 = v0.dot( v0 );
    var dot01 = v0.dot( v1 );
    var dot02 = v0.dot( v2 );
    var dot11 = v1.dot( v1 );
    var dot12 = v1.dot( v2 );

    var u,v;

    return  ( (u = dot11 * dot02 - dot01 * dot12) >= 0 ) &&
            ( (v = dot00 * dot12 - dot01 * dot02) >= 0 ) &&
            ( u + v < ( dot00 * dot11 - dot01 * dot01 ) );
}

/**
 * Shoot a ray at a body, get back information about the hit.
 * @method intersectBody
 * @private
 * @param {Body} body
 * @param {RaycastResult} [result] Deprecated - set the result property of the Ray instead.
 */
var intersectBody_xi = new Vec3();
var intersectBody_qi = new Quaternion();
Ray.prototype.intersectBody = function (body, result) {
    if(result){
        this.result = result;
        this._updateDirection();
    }
    var checkCollisionResponse = this.checkCollisionResponse;

    if(checkCollisionResponse && !body.collisionResponse){
        return;
    }

    if((this.collisionFilterGroup & body.collisionFilterMask)===0 || (body.collisionFilterGroup & this.collisionFilterMask)===0){
        return;
    }

    var xi = intersectBody_xi;
    var qi = intersectBody_qi;

    for (var i = 0, N = body.shapes.length; i < N; i++) {
        var shape = body.shapes[i];

        if(checkCollisionResponse && !shape.collisionResponse){
            continue; // Skip
        }

        body.quaternion.mult(body.shapeOrientations[i], qi);
        body.quaternion.vmult(body.shapeOffsets[i], xi);
        xi.vadd(body.position, xi);

        this.intersectShape(
            shape,
            qi,
            xi,
            body
        );

        if(this.result._shouldStop){
            break;
        }
    }
};

/**
 * @method intersectBodies
 * @param {Array} bodies An array of Body objects.
 * @param {RaycastResult} [result] Deprecated
 */
Ray.prototype.intersectBodies = function (bodies, result) {
    if(result){
        this.result = result;
        this._updateDirection();
    }

    for ( var i = 0, l = bodies.length; !this.result._shouldStop && i < l; i ++ ) {
        this.intersectBody(bodies[i]);
    }
};

/**
 * Updates the _direction vector.
 * @private
 * @method _updateDirection
 */
Ray.prototype._updateDirection = function(){
    this.to.vsub(this.from, this._direction);
    this._direction.normalize();
};

/**
 * @method intersectShape
 * @private
 * @param {Shape} shape
 * @param {Quaternion} quat
 * @param {Vec3} position
 * @param {Body} body
 */
Ray.prototype.intersectShape = function(shape, quat, position, body){
    var from = this.from;


    // Checking boundingSphere
    var distance = distanceFromIntersection(from, this._direction, position);
    if ( distance > shape.boundingSphereRadius ) {
        return;
    }

    var intersectMethod = this[shape.type];
    if(intersectMethod){
        intersectMethod.call(this, shape, quat, position, body);
    }
};

var vector = new Vec3();
var normal = new Vec3();
var intersectPoint = new Vec3();

var a = new Vec3();
var b = new Vec3();
var c = new Vec3();
var d = new Vec3();

var tmpRaycastResult = new RaycastResult();

/**
 * @method intersectBox
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectBox = function(shape, quat, position, body){
    return this.intersectConvex(shape.convexPolyhedronRepresentation, quat, position, body);
};
Ray.prototype[Shape.types.BOX] = Ray.prototype.intersectBox;

/**
 * @method intersectPlane
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectPlane = function(shape, quat, position, body){
    var from = this.from;
    var to = this.to;
    var direction = this._direction;

    // Get plane normal
    var worldNormal = new Vec3(0, 0, 1);
    quat.vmult(worldNormal, worldNormal);

    var len = new Vec3();
    from.vsub(position, len);
    var planeToFrom = len.dot(worldNormal);
    to.vsub(position, len);
    var planeToTo = len.dot(worldNormal);

    if(planeToFrom * planeToTo > 0){
        // "from" and "to" are on the same side of the plane... bail out
        return;
    }

    if(from.distanceTo(to) < planeToFrom){
        return;
    }

    var n_dot_dir = worldNormal.dot(direction);

    if (Math.abs(n_dot_dir) < this.precision) {
        // No intersection
        return;
    }

    var planePointToFrom = new Vec3();
    var dir_scaled_with_t = new Vec3();
    var hitPointWorld = new Vec3();

    from.vsub(position, planePointToFrom);
    var t = -worldNormal.dot(planePointToFrom) / n_dot_dir;
    direction.scale(t, dir_scaled_with_t);
    from.vadd(dir_scaled_with_t, hitPointWorld);

    this.reportIntersection(worldNormal, hitPointWorld, shape, body, -1);
};
Ray.prototype[Shape.types.PLANE] = Ray.prototype.intersectPlane;

/**
 * Get the world AABB of the ray.
 * @method getAABB
 * @param  {AABB} aabb
 */
Ray.prototype.getAABB = function(result){
    var to = this.to;
    var from = this.from;
    result.lowerBound.x = Math.min(to.x, from.x);
    result.lowerBound.y = Math.min(to.y, from.y);
    result.lowerBound.z = Math.min(to.z, from.z);
    result.upperBound.x = Math.max(to.x, from.x);
    result.upperBound.y = Math.max(to.y, from.y);
    result.upperBound.z = Math.max(to.z, from.z);
};

var intersectConvexOptions = {
    faceList: [0]
};

/**
 * @method intersectHeightfield
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectHeightfield = function(shape, quat, position, body){
    var data = shape.data,
        w = shape.elementSize,
        worldPillarOffset = new Vec3();

    // Convert the ray to local heightfield coordinates
    var localRay = new Ray(this.from, this.to);
    Transform.pointToLocalFrame(position, quat, localRay.from, localRay.from);
    Transform.pointToLocalFrame(position, quat, localRay.to, localRay.to);

    // Get the index of the data points to test against
    var index = [];
    var iMinX = null;
    var iMinY = null;
    var iMaxX = null;
    var iMaxY = null;

    var inside = shape.getIndexOfPosition(localRay.from.x, localRay.from.y, index, false);
    if(inside){
        iMinX = index[0];
        iMinY = index[1];
        iMaxX = index[0];
        iMaxY = index[1];
    }
    inside = shape.getIndexOfPosition(localRay.to.x, localRay.to.y, index, false);
    if(inside){
        if (iMinX === null || index[0] < iMinX) { iMinX = index[0]; }
        if (iMaxX === null || index[0] > iMaxX) { iMaxX = index[0]; }
        if (iMinY === null || index[1] < iMinY) { iMinY = index[1]; }
        if (iMaxY === null || index[1] > iMaxY) { iMaxY = index[1]; }
    }

    if(iMinX === null){
        return;
    }

    var minMax = [];
    shape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // // Bail out if the ray can't touch the bounding box
    // // TODO
    // var aabb = new AABB();
    // this.getAABB(aabb);
    // if(aabb.intersects()){
    //     return;
    // }

    for(var i = iMinX; i <= iMaxX; i++){
        for(var j = iMinY; j <= iMaxY; j++){

            if(this.result._shouldStop){
                return;
            }

            // Lower triangle
            shape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);

            if(this.result._shouldStop){
                return;
            }

            // Upper triangle
            shape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, intersectConvexOptions);
        }
    }
};
Ray.prototype[Shape.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;

var Ray_intersectSphere_intersectionPoint = new Vec3();
var Ray_intersectSphere_normal = new Vec3();

/**
 * @method intersectSphere
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectSphere = function(shape, quat, position, body){
    var from = this.from,
        to = this.to,
        r = shape.radius;

    var a = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2) + Math.pow(to.z - from.z, 2);
    var b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y) + (to.z - from.z) * (from.z - position.z));
    var c = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) + Math.pow(from.z - position.z, 2) - Math.pow(r, 2);

    var delta = Math.pow(b, 2) - 4 * a * c;

    var intersectionPoint = Ray_intersectSphere_intersectionPoint;
    var normal = Ray_intersectSphere_normal;

    if(delta < 0){
        // No intersection
        return;

    } else if(delta === 0){
        // single intersection point
        from.lerp(to, delta, intersectionPoint);

        intersectionPoint.vsub(position, normal);
        normal.normalize();

        this.reportIntersection(normal, intersectionPoint, shape, body, -1);

    } else {
        var d1 = (- b - Math.sqrt(delta)) / (2 * a);
        var d2 = (- b + Math.sqrt(delta)) / (2 * a);

        if(d1 >= 0 && d1 <= 1){
            from.lerp(to, d1, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, shape, body, -1);
        }

        if(this.result._shouldStop){
            return;
        }

        if(d2 >= 0 && d2 <= 1){
            from.lerp(to, d2, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, shape, body, -1);
        }
    }
};
Ray.prototype[Shape.types.SPHERE] = Ray.prototype.intersectSphere;


var intersectConvex_normal = new Vec3();
var intersectConvex_minDistNormal = new Vec3();
var intersectConvex_minDistIntersect = new Vec3();
var intersectConvex_vector = new Vec3();

/**
 * @method intersectConvex
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 * @param {object} [options]
 * @param {array} [options.faceList]
 */
Ray.prototype.intersectConvex = function intersectConvex(
    shape,
    quat,
    position,
    body,
    options
){
    var minDistNormal = intersectConvex_minDistNormal;
    var normal = intersectConvex_normal;
    var vector = intersectConvex_vector;
    var minDistIntersect = intersectConvex_minDistIntersect;
    var faceList = (options && options.faceList) || null;

    // Checking faces
    var faces = shape.faces,
        vertices = shape.vertices,
        normals = shape.faceNormals;
    var direction = this._direction;

    var from = this.from;
    var to = this.to;
    var fromToDistance = from.distanceTo(to);

    var minDist = -1;
    var Nfaces = faceList ? faceList.length : faces.length;
    var result = this.result;

    for (var j = 0; !result._shouldStop && j < Nfaces; j++) {
        var fi = faceList ? faceList[j] : j;

        var face = faces[fi];
        var faceNormal = normals[fi];
        var q = quat;
        var x = position;

        // determine if ray intersects the plane of the face
        // note: this works regardless of the direction of the face normal

        // Get plane point in world coordinates...
        vector.copy(vertices[face[0]]);
        q.vmult(vector,vector);
        vector.vadd(x,vector);

        // ...but make it relative to the ray from. We'll fix this later.
        vector.vsub(from,vector);

        // Get plane normal
        q.vmult(faceNormal,normal);

        // If this dot product is negative, we have something interesting
        var dot = direction.dot(normal);

        // Bail out if ray and plane are parallel
        if ( Math.abs( dot ) < this.precision ){
            continue;
        }

        // calc distance to plane
        var scalar = normal.dot(vector) / dot;

        // if negative distance, then plane is behind ray
        if (scalar < 0){
            continue;
        }

        // if (dot < 0) {

        // Intersection point is from + direction * scalar
        direction.mult(scalar,intersectPoint);
        intersectPoint.vadd(from,intersectPoint);

        // a is the point we compare points b and c with.
        a.copy(vertices[face[0]]);
        q.vmult(a,a);
        x.vadd(a,a);

        for(var i = 1; !result._shouldStop && i < face.length - 1; i++){
            // Transform 3 vertices to world coords
            b.copy(vertices[face[i]]);
            c.copy(vertices[face[i+1]]);
            q.vmult(b,b);
            q.vmult(c,c);
            x.vadd(b,b);
            x.vadd(c,c);

            var distance = intersectPoint.distanceTo(from);

            if(!(pointInTriangle(intersectPoint, a, b, c) || pointInTriangle(intersectPoint, b, a, c)) || distance > fromToDistance){
                continue;
            }

            this.reportIntersection(normal, intersectPoint, shape, body, fi);
        }
        // }
    }
};
Ray.prototype[Shape.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;

var intersectTrimesh_normal = new Vec3();
var intersectTrimesh_localDirection = new Vec3();
var intersectTrimesh_localFrom = new Vec3();
var intersectTrimesh_localTo = new Vec3();
var intersectTrimesh_worldNormal = new Vec3();
var intersectTrimesh_worldIntersectPoint = new Vec3();
var intersectTrimesh_localAABB = new AABB();
var intersectTrimesh_triangles = [];
var intersectTrimesh_treeTransform = new Transform();

/**
 * @method intersectTrimesh
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 * @param {object} [options]
 * @todo Optimize by transforming the world to local space first.
 * @todo Use Octree lookup
 */
Ray.prototype.intersectTrimesh = function intersectTrimesh(
    mesh,
    quat,
    position,
    body,
    options
){
    var normal = intersectTrimesh_normal;
    var triangles = intersectTrimesh_triangles;
    var treeTransform = intersectTrimesh_treeTransform;
    var minDistNormal = intersectConvex_minDistNormal;
    var vector = intersectConvex_vector;
    var minDistIntersect = intersectConvex_minDistIntersect;
    var localAABB = intersectTrimesh_localAABB;
    var localDirection = intersectTrimesh_localDirection;
    var localFrom = intersectTrimesh_localFrom;
    var localTo = intersectTrimesh_localTo;
    var worldIntersectPoint = intersectTrimesh_worldIntersectPoint;
    var worldNormal = intersectTrimesh_worldNormal;
    var faceList = (options && options.faceList) || null;

    // Checking faces
    var indices = mesh.indices,
        vertices = mesh.vertices,
        normals = mesh.faceNormals;

    var from = this.from;
    var to = this.to;
    var direction = this._direction;

    var minDist = -1;
    treeTransform.position.copy(position);
    treeTransform.quaternion.copy(quat);

    // Transform ray to local space!
    Transform.vectorToLocalFrame(position, quat, direction, localDirection);
    //body.vectorToLocalFrame(direction, localDirection);
    Transform.pointToLocalFrame(position, quat, from, localFrom);
    //body.pointToLocalFrame(from, localFrom);
    Transform.pointToLocalFrame(position, quat, to, localTo);
    //body.pointToLocalFrame(to, localTo);
    var fromToDistanceSquared = localFrom.distanceSquared(localTo);

    mesh.tree.rayQuery(this, treeTransform, triangles);

    for (var i = 0, N = triangles.length; !this.result._shouldStop && i !== N; i++) {
        var trianglesIndex = triangles[i];

        mesh.getNormal(trianglesIndex, normal);

        // determine if ray intersects the plane of the face
        // note: this works regardless of the direction of the face normal

        // Get plane point in world coordinates...
        mesh.getVertex(indices[trianglesIndex * 3], a);

        // ...but make it relative to the ray from. We'll fix this later.
        a.vsub(localFrom,vector);

        // Get plane normal
        // quat.vmult(normal, normal);

        // If this dot product is negative, we have something interesting
        var dot = localDirection.dot(normal);

        // Bail out if ray and plane are parallel
        // if (Math.abs( dot ) < this.precision){
        //     continue;
        // }

        // calc distance to plane
        var scalar = normal.dot(vector) / dot;

        // if negative distance, then plane is behind ray
        if (scalar < 0){
            continue;
        }

        // Intersection point is from + direction * scalar
        localDirection.scale(scalar,intersectPoint);
        intersectPoint.vadd(localFrom,intersectPoint);

        // Get triangle vertices
        mesh.getVertex(indices[trianglesIndex * 3 + 1], b);
        mesh.getVertex(indices[trianglesIndex * 3 + 2], c);

        var squaredDistance = intersectPoint.distanceSquared(localFrom);

        if(!(pointInTriangle(intersectPoint, b, a, c) || pointInTriangle(intersectPoint, a, b, c)) || squaredDistance > fromToDistanceSquared){
            continue;
        }

        // transform intersectpoint and normal to world
        Transform.vectorToWorldFrame(quat, normal, worldNormal);
        //body.vectorToWorldFrame(normal, worldNormal);
        Transform.pointToWorldFrame(position, quat, intersectPoint, worldIntersectPoint);
        //body.pointToWorldFrame(intersectPoint, worldIntersectPoint);
        this.reportIntersection(worldNormal, worldIntersectPoint, mesh, body, trianglesIndex);
    }
    triangles.length = 0;
};
Ray.prototype[Shape.types.TRIMESH] = Ray.prototype.intersectTrimesh;


/**
 * @method reportIntersection
 * @private
 * @param  {Vec3} normal
 * @param  {Vec3} hitPointWorld
 * @param  {Shape} shape
 * @param  {Body} body
 * @return {boolean} True if the intersections should continue
 */
Ray.prototype.reportIntersection = function(normal, hitPointWorld, shape, body, hitFaceIndex){
    var from = this.from;
    var to = this.to;
    var distance = from.distanceTo(hitPointWorld);
    var result = this.result;

    // Skip back faces?
    if(this.skipBackfaces && normal.dot(this._direction) > 0){
        return;
    }

    result.hitFaceIndex = typeof(hitFaceIndex) !== 'undefined' ? hitFaceIndex : -1;

    switch(this.mode){
    case Ray.ALL:
        this.hasHit = true;
        result.set(
            from,
            to,
            normal,
            hitPointWorld,
            shape,
            body,
            distance
        );
        result.hasHit = true;
        this.callback(result);
        break;

    case Ray.CLOSEST:

        // Store if closer than current closest
        if(distance < result.distance || !result.hasHit){
            this.hasHit = true;
            result.hasHit = true;
            result.set(
                from,
                to,
                normal,
                hitPointWorld,
                shape,
                body,
                distance
            );
        }
        break;

    case Ray.ANY:

        // Report and stop.
        this.hasHit = true;
        result.hasHit = true;
        result.set(
            from,
            to,
            normal,
            hitPointWorld,
            shape,
            body,
            distance
        );
        result._shouldStop = true;
        break;
    }
};

var v0 = new Vec3(),
    intersect = new Vec3();
function distanceFromIntersection(from, direction, position) {

    // v0 is vector from from to position
    position.vsub(from,v0);
    var dot = v0.dot(direction);

    // intersect = direction*dot + from
    direction.mult(dot,intersect);
    intersect.vadd(from,intersect);

    var distance = position.distanceTo(intersect);

    return distance;
}


},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');

module.exports = RaycastResult;

/**
 * Storage for Ray casting data.
 * @class RaycastResult
 * @constructor
 */
function RaycastResult(){

	/**
	 * @property {Vec3} rayFromWorld
	 */
	this.rayFromWorld = new Vec3();

	/**
	 * @property {Vec3} rayToWorld
	 */
	this.rayToWorld = new Vec3();

	/**
	 * @property {Vec3} hitNormalWorld
	 */
	this.hitNormalWorld = new Vec3();

	/**
	 * @property {Vec3} hitPointWorld
	 */
	this.hitPointWorld = new Vec3();

	/**
	 * @property {boolean} hasHit
	 */
	this.hasHit = false;

	/**
	 * The hit shape, or null.
	 * @property {Shape} shape
	 */
	this.shape = null;

	/**
	 * The hit body, or null.
	 * @property {Body} body
	 */
	this.body = null;

	/**
	 * The index of the hit triangle, if the hit shape was a trimesh.
	 * @property {number} hitFaceIndex
	 * @default -1
	 */
	this.hitFaceIndex = -1;

	/**
	 * Distance to the hit. Will be set to -1 if there was no hit.
	 * @property {number} distance
	 * @default -1
	 */
	this.distance = -1;

	/**
	 * If the ray should stop traversing the bodies.
	 * @private
	 * @property {Boolean} _shouldStop
	 * @default false
	 */
	this._shouldStop = false;
}

/**
 * Reset all result data.
 * @method reset
 */
RaycastResult.prototype.reset = function () {
	this.rayFromWorld.setZero();
	this.rayToWorld.setZero();
	this.hitNormalWorld.setZero();
	this.hitPointWorld.setZero();
	this.hasHit = false;
	this.shape = null;
	this.body = null;
	this.hitFaceIndex = -1;
	this.distance = -1;
	this._shouldStop = false;
};

/**
 * @method abort
 */
RaycastResult.prototype.abort = function(){
	this._shouldStop = true;
};

/**
 * @method set
 * @param {Vec3} rayFromWorld
 * @param {Vec3} rayToWorld
 * @param {Vec3} hitNormalWorld
 * @param {Vec3} hitPointWorld
 * @param {Shape} shape
 * @param {Body} body
 * @param {number} distance
 */
RaycastResult.prototype.set = function(
	rayFromWorld,
	rayToWorld,
	hitNormalWorld,
	hitPointWorld,
	shape,
	body,
	distance
){
	this.rayFromWorld.copy(rayFromWorld);
	this.rayToWorld.copy(rayToWorld);
	this.hitNormalWorld.copy(hitNormalWorld);
	this.hitPointWorld.copy(hitPointWorld);
	this.shape = shape;
	this.body = body;
	this.distance = distance;
};
},{"../math/Vec3":30}],11:[function(_dereq_,module,exports){
var Shape = _dereq_('../shapes/Shape');
var Broadphase = _dereq_('../collision/Broadphase');

module.exports = SAPBroadphase;

/**
 * Sweep and prune broadphase along one axis.
 *
 * @class SAPBroadphase
 * @constructor
 * @param {World} [world]
 * @extends Broadphase
 */
function SAPBroadphase(world){
    Broadphase.apply(this);

    /**
     * List of bodies currently in the broadphase.
     * @property axisList
     * @type {Array}
     */
    this.axisList = [];

    /**
     * The world to search in.
     * @property world
     * @type {World}
     */
    this.world = null;

    /**
     * Axis to sort the bodies along. Set to 0 for x axis, and 1 for y axis. For best performance, choose an axis that the bodies are spread out more on.
     * @property axisIndex
     * @type {Number}
     */
    this.axisIndex = 0;

    var axisList = this.axisList;

    this._addBodyHandler = function(e){
        axisList.push(e.body);
    };

    this._removeBodyHandler = function(e){
        var idx = axisList.indexOf(e.body);
        if(idx !== -1){
            axisList.splice(idx,1);
        }
    };

    if(world){
        this.setWorld(world);
    }
}
SAPBroadphase.prototype = new Broadphase();

/**
 * Change the world
 * @method setWorld
 * @param  {World} world
 */
SAPBroadphase.prototype.setWorld = function(world){
    // Clear the old axis array
    this.axisList.length = 0;

    // Add all bodies from the new world
    for(var i=0; i<world.bodies.length; i++){
        this.axisList.push(world.bodies[i]);
    }

    // Remove old handlers, if any
    world.removeEventListener("addBody", this._addBodyHandler);
    world.removeEventListener("removeBody", this._removeBodyHandler);

    // Add handlers to update the list of bodies.
    world.addEventListener("addBody", this._addBodyHandler);
    world.addEventListener("removeBody", this._removeBodyHandler);

    this.world = world;
    this.dirty = true;
};

/**
 * @static
 * @method insertionSortX
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortX = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.x <= v.aabb.lowerBound.x){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * @static
 * @method insertionSortY
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortY = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.y <= v.aabb.lowerBound.y){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * @static
 * @method insertionSortZ
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortZ = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.z <= v.aabb.lowerBound.z){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * Collect all collision pairs
 * @method collisionPairs
 * @param  {World} world
 * @param  {Array} p1
 * @param  {Array} p2
 */
SAPBroadphase.prototype.collisionPairs = function(world,p1,p2){
    var bodies = this.axisList,
        N = bodies.length,
        axisIndex = this.axisIndex,
        i, j;

    if(this.dirty){
        this.sortList();
        this.dirty = false;
    }

    // Look through the list
    for(i=0; i !== N; i++){
        var bi = bodies[i];

        for(j=i+1; j < N; j++){
            var bj = bodies[j];

            if(!this.needBroadphaseCollision(bi,bj)){
                continue;
            }

            if(!SAPBroadphase.checkBounds(bi,bj,axisIndex)){
                break;
            }

            this.intersectionTest(bi,bj,p1,p2);
        }
    }
};

SAPBroadphase.prototype.sortList = function(){
    var axisList = this.axisList;
    var axisIndex = this.axisIndex;
    var N = axisList.length;

    // Update AABBs
    for(var i = 0; i!==N; i++){
        var bi = axisList[i];
        if(bi.aabbNeedsUpdate){
            bi.computeAABB();
        }
    }

    // Sort the list
    if(axisIndex === 0){
        SAPBroadphase.insertionSortX(axisList);
    } else if(axisIndex === 1){
        SAPBroadphase.insertionSortY(axisList);
    } else if(axisIndex === 2){
        SAPBroadphase.insertionSortZ(axisList);
    }
};

/**
 * Check if the bounds of two bodies overlap, along the given SAP axis.
 * @static
 * @method checkBounds
 * @param  {Body} bi
 * @param  {Body} bj
 * @param  {Number} axisIndex
 * @return {Boolean}
 */
SAPBroadphase.checkBounds = function(bi, bj, axisIndex){
    var biPos;
    var bjPos;

    if(axisIndex === 0){
        biPos = bi.position.x;
        bjPos = bj.position.x;
    } else if(axisIndex === 1){
        biPos = bi.position.y;
        bjPos = bj.position.y;
    } else if(axisIndex === 2){
        biPos = bi.position.z;
        bjPos = bj.position.z;
    }

    var ri = bi.boundingRadius,
        rj = bj.boundingRadius,
        boundA1 = biPos - ri,
        boundA2 = biPos + ri,
        boundB1 = bjPos - rj,
        boundB2 = bjPos + rj;

    return boundB1 < boundA2;
};

/**
 * Computes the variance of the body positions and estimates the best
 * axis to use. Will automatically set property .axisIndex.
 * @method autoDetectAxis
 */
SAPBroadphase.prototype.autoDetectAxis = function(){
    var sumX=0,
        sumX2=0,
        sumY=0,
        sumY2=0,
        sumZ=0,
        sumZ2=0,
        bodies = this.axisList,
        N = bodies.length,
        invN=1/N;

    for(var i=0; i!==N; i++){
        var b = bodies[i];

        var centerX = b.position.x;
        sumX += centerX;
        sumX2 += centerX*centerX;

        var centerY = b.position.y;
        sumY += centerY;
        sumY2 += centerY*centerY;

        var centerZ = b.position.z;
        sumZ += centerZ;
        sumZ2 += centerZ*centerZ;
    }

    var varianceX = sumX2 - sumX*sumX*invN,
        varianceY = sumY2 - sumY*sumY*invN,
        varianceZ = sumZ2 - sumZ*sumZ*invN;

    if(varianceX > varianceY){
        if(varianceX > varianceZ){
            this.axisIndex = 0;
        } else{
            this.axisIndex = 2;
        }
    } else if(varianceY > varianceZ){
        this.axisIndex = 1;
    } else{
        this.axisIndex = 2;
    }
};

/**
 * Returns all the bodies within an AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param {array} result An array to store resulting bodies in.
 * @return {array}
 */
SAPBroadphase.prototype.aabbQuery = function(world, aabb, result){
    result = result || [];

    if(this.dirty){
        this.sortList();
        this.dirty = false;
    }

    var axisIndex = this.axisIndex, axis = 'x';
    if(axisIndex === 1){ axis = 'y'; }
    if(axisIndex === 2){ axis = 'z'; }

    var axisList = this.axisList;
    var lower = aabb.lowerBound[axis];
    var upper = aabb.upperBound[axis];
    for(var i = 0; i < axisList.length; i++){
        var b = axisList[i];

        if(b.aabbNeedsUpdate){
            b.computeAABB();
        }

        if(b.aabb.overlaps(aabb)){
            result.push(b);
        }
    }

    return result;
};
},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(_dereq_,module,exports){
module.exports = ConeTwistConstraint;

var Constraint = _dereq_('./Constraint');
var PointToPointConstraint = _dereq_('./PointToPointConstraint');
var ConeEquation = _dereq_('../equations/ConeEquation');
var RotationalEquation = _dereq_('../equations/RotationalEquation');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * @class ConeTwistConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA]
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function ConeTwistConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    // Set pivot point in between
    var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
    var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
    this.axisA = options.axisA ? options.axisA.clone() : new Vec3();
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3();

    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    this.collideConnected = !!options.collideConnected;

    this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;

    /**
     * @property {ConeEquation} coneEquation
     */
    var c = this.coneEquation = new ConeEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} twistEquation
     */
    var t = this.twistEquation = new RotationalEquation(bodyA,bodyB,options);
    this.twistAngle = typeof(options.twistAngle) !== 'undefined' ? options.twistAngle : 0;

    // Make the cone equation push the bodies toward the cone axis, not outward
    c.maxForce = 0;
    c.minForce = -maxForce;

    // Make the twist equation add torque toward the initial position
    t.maxForce = 0;
    t.minForce = -maxForce;

    this.equations.push(c, t);
}
ConeTwistConstraint.prototype = new PointToPointConstraint();
ConeTwistConstraint.constructor = ConeTwistConstraint;

var ConeTwistConstraint_update_tmpVec1 = new Vec3();
var ConeTwistConstraint_update_tmpVec2 = new Vec3();

ConeTwistConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        cone = this.coneEquation,
        twist = this.twistEquation;

    PointToPointConstraint.prototype.update.call(this);

    // Update the axes to the cone constraint
    bodyA.vectorToWorldFrame(this.axisA, cone.axisA);
    bodyB.vectorToWorldFrame(this.axisB, cone.axisB);

    // Update the world axes in the twist constraint
    this.axisA.tangents(twist.axisA, twist.axisA);
    bodyA.vectorToWorldFrame(twist.axisA, twist.axisA);

    this.axisB.tangents(twist.axisB, twist.axisB);
    bodyB.vectorToWorldFrame(twist.axisB, twist.axisB);

    cone.angle = this.angle;
    twist.maxAngle = this.twistAngle;
};


},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(_dereq_,module,exports){
module.exports = Constraint;

var Utils = _dereq_('../utils/Utils');

/**
 * Constraint base class
 * @class Constraint
 * @author schteppe
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {boolean} [options.collideConnected=true]
 * @param {boolean} [options.wakeUpBodies=true]
 */
function Constraint(bodyA, bodyB, options){
    options = Utils.defaults(options,{
        collideConnected : true,
        wakeUpBodies : true,
    });

    /**
     * Equations to be solved in this constraint
     * @property equations
     * @type {Array}
     */
    this.equations = [];

    /**
     * @property {Body} bodyA
     */
    this.bodyA = bodyA;

    /**
     * @property {Body} bodyB
     */
    this.bodyB = bodyB;

    /**
     * @property {Number} id
     */
    this.id = Constraint.idCounter++;

    /**
     * Set to true if you want the bodies to collide when they are connected.
     * @property collideConnected
     * @type {boolean}
     */
    this.collideConnected = options.collideConnected;

    if(options.wakeUpBodies){
        if(bodyA){
            bodyA.wakeUp();
        }
        if(bodyB){
            bodyB.wakeUp();
        }
    }
}

/**
 * Update all the equations with data.
 * @method update
 */
Constraint.prototype.update = function(){
    throw new Error("method update() not implmemented in this Constraint subclass!");
};

/**
 * Enables all equations in the constraint.
 * @method enable
 */
Constraint.prototype.enable = function(){
    var eqs = this.equations;
    for(var i=0; i<eqs.length; i++){
        eqs[i].enabled = true;
    }
};

/**
 * Disables all equations in the constraint.
 * @method disable
 */
Constraint.prototype.disable = function(){
    var eqs = this.equations;
    for(var i=0; i<eqs.length; i++){
        eqs[i].enabled = false;
    }
};

Constraint.idCounter = 0;

},{"../utils/Utils":53}],14:[function(_dereq_,module,exports){
module.exports = DistanceConstraint;

var Constraint = _dereq_('./Constraint');
var ContactEquation = _dereq_('../equations/ContactEquation');

/**
 * Constrains two bodies to be at a constant distance from each others center of mass.
 * @class DistanceConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} [distance] The distance to keep. If undefined, it will be set to the current distance between bodyA and bodyB
 * @param {Number} [maxForce=1e6]
 * @extends Constraint
 */
function DistanceConstraint(bodyA,bodyB,distance,maxForce){
    Constraint.call(this,bodyA,bodyB);

    if(typeof(distance)==="undefined") {
        distance = bodyA.position.distanceTo(bodyB.position);
    }

    if(typeof(maxForce)==="undefined") {
        maxForce = 1e6;
    }

    /**
     * @property {number} distance
     */
    this.distance = distance;

    /**
     * @property {ContactEquation} distanceEquation
     */
    var eq = this.distanceEquation = new ContactEquation(bodyA, bodyB);
    this.equations.push(eq);

    // Make it bidirectional
    eq.minForce = -maxForce;
    eq.maxForce =  maxForce;
}
DistanceConstraint.prototype = new Constraint();

DistanceConstraint.prototype.update = function(){
    var bodyA = this.bodyA;
    var bodyB = this.bodyB;
    var eq = this.distanceEquation;
    var halfDist = this.distance * 0.5;
    var normal = eq.ni;

    bodyB.position.vsub(bodyA.position, normal);
    normal.normalize();
    normal.mult(halfDist, eq.ri);
    normal.mult(-halfDist, eq.rj);
};
},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(_dereq_,module,exports){
module.exports = HingeConstraint;

var Constraint = _dereq_('./Constraint');
var PointToPointConstraint = _dereq_('./PointToPointConstraint');
var RotationalEquation = _dereq_('../equations/RotationalEquation');
var RotationalMotorEquation = _dereq_('../equations/RotationalMotorEquation');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Hinge constraint. Think of it as a door hinge. It tries to keep the door in the correct place and with the correct orientation.
 * @class HingeConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA] A point defined locally in bodyA. This defines the offset of axisA.
 * @param {Vec3} [options.axisA] An axis that bodyA can rotate around, defined locally in bodyA.
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function HingeConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;
    var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
    var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();

    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    /**
     * Rotation axis, defined locally in bodyA.
     * @property {Vec3} axisA
     */
    var axisA = this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1,0,0);
    axisA.normalize();

    /**
     * Rotation axis, defined locally in bodyB.
     * @property {Vec3} axisB
     */
    var axisB = this.axisB = options.axisB ? options.axisB.clone() : new Vec3(1,0,0);
    axisB.normalize();

    /**
     * @property {RotationalEquation} rotationalEquation1
     */
    var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation2
     */
    var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalMotorEquation} motorEquation
     */
    var motor = this.motorEquation = new RotationalMotorEquation(bodyA,bodyB,maxForce);
    motor.enabled = false; // Not enabled by default

    // Equations to be fed to the solver
    this.equations.push(
        r1, // rotational1
        r2, // rotational2
        motor
    );
}
HingeConstraint.prototype = new PointToPointConstraint();
HingeConstraint.constructor = HingeConstraint;

/**
 * @method enableMotor
 */
HingeConstraint.prototype.enableMotor = function(){
    this.motorEquation.enabled = true;
};

/**
 * @method disableMotor
 */
HingeConstraint.prototype.disableMotor = function(){
    this.motorEquation.enabled = false;
};

/**
 * @method setMotorSpeed
 * @param {number} speed
 */
HingeConstraint.prototype.setMotorSpeed = function(speed){
    this.motorEquation.targetVelocity = speed;
};

/**
 * @method setMotorMaxForce
 * @param {number} maxForce
 */
HingeConstraint.prototype.setMotorMaxForce = function(maxForce){
    this.motorEquation.maxForce = maxForce;
    this.motorEquation.minForce = -maxForce;
};

var HingeConstraint_update_tmpVec1 = new Vec3();
var HingeConstraint_update_tmpVec2 = new Vec3();

HingeConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        motor = this.motorEquation,
        r1 = this.rotationalEquation1,
        r2 = this.rotationalEquation2,
        worldAxisA = HingeConstraint_update_tmpVec1,
        worldAxisB = HingeConstraint_update_tmpVec2;

    var axisA = this.axisA;
    var axisB = this.axisB;

    PointToPointConstraint.prototype.update.call(this);

    // Get world axes
    bodyA.quaternion.vmult(axisA, worldAxisA);
    bodyB.quaternion.vmult(axisB, worldAxisB);

    worldAxisA.tangents(r1.axisA, r2.axisA);
    r1.axisB.copy(worldAxisB);
    r2.axisB.copy(worldAxisB);

    if(this.motorEquation.enabled){
        bodyA.quaternion.vmult(this.axisA, motor.axisA);
        bodyB.quaternion.vmult(this.axisB, motor.axisB);
    }
};


},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(_dereq_,module,exports){
module.exports = LockConstraint;

var Constraint = _dereq_('./Constraint');
var PointToPointConstraint = _dereq_('./PointToPointConstraint');
var RotationalEquation = _dereq_('../equations/RotationalEquation');
var RotationalMotorEquation = _dereq_('../equations/RotationalMotorEquation');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Lock constraint. Will remove all degrees of freedom between the bodies.
 * @class LockConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function LockConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    // Set pivot point in between
    var pivotA = new Vec3();
    var pivotB = new Vec3();
    var halfWay = new Vec3();
    bodyA.position.vadd(bodyB.position, halfWay);
    halfWay.scale(0.5, halfWay);
    bodyB.pointToLocalFrame(halfWay, pivotB);
    bodyA.pointToLocalFrame(halfWay, pivotA);
    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    /**
     * @property {RotationalEquation} rotationalEquation1
     */
    var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation2
     */
    var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation3
     */
    var r3 = this.rotationalEquation3 = new RotationalEquation(bodyA,bodyB,options);

    this.equations.push(r1, r2, r3);
}
LockConstraint.prototype = new PointToPointConstraint();
LockConstraint.constructor = LockConstraint;

var LockConstraint_update_tmpVec1 = new Vec3();
var LockConstraint_update_tmpVec2 = new Vec3();

LockConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        motor = this.motorEquation,
        r1 = this.rotationalEquation1,
        r2 = this.rotationalEquation2,
        r3 = this.rotationalEquation3,
        worldAxisA = LockConstraint_update_tmpVec1,
        worldAxisB = LockConstraint_update_tmpVec2;

    PointToPointConstraint.prototype.update.call(this);

    bodyA.vectorToWorldFrame(Vec3.UNIT_X, r1.axisA);
    bodyB.vectorToWorldFrame(Vec3.UNIT_Y, r1.axisB);

    bodyA.vectorToWorldFrame(Vec3.UNIT_Y, r2.axisA);
    bodyB.vectorToWorldFrame(Vec3.UNIT_Z, r2.axisB);

    bodyA.vectorToWorldFrame(Vec3.UNIT_Z, r3.axisA);
    bodyB.vectorToWorldFrame(Vec3.UNIT_X, r3.axisB);
};


},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(_dereq_,module,exports){
module.exports = PointToPointConstraint;

var Constraint = _dereq_('./Constraint');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Connects two bodies at given offset points.
 * @class PointToPointConstraint
 * @extends Constraint
 * @constructor
 * @param {Body} bodyA
 * @param {Vec3} pivotA The point relative to the center of mass of bodyA which bodyA is constrained to.
 * @param {Body} bodyB Body that will be constrained in a similar way to the same point as bodyA. We will therefore get a link between bodyA and bodyB. If not specified, bodyA will be constrained to a static point.
 * @param {Vec3} pivotB See pivotA.
 * @param {Number} maxForce The maximum force that should be applied to constrain the bodies.
 *
 * @example
 *     var bodyA = new Body({ mass: 1 });
 *     var bodyB = new Body({ mass: 1 });
 *     bodyA.position.set(-1, 0, 0);
 *     bodyB.position.set(1, 0, 0);
 *     bodyA.addShape(shapeA);
 *     bodyB.addShape(shapeB);
 *     world.addBody(bodyA);
 *     world.addBody(bodyB);
 *     var localPivotA = new Vec3(1, 0, 0);
 *     var localPivotB = new Vec3(-1, 0, 0);
 *     var constraint = new PointToPointConstraint(bodyA, localPivotA, bodyB, localPivotB);
 *     world.addConstraint(constraint);
 */
function PointToPointConstraint(bodyA,pivotA,bodyB,pivotB,maxForce){
    Constraint.call(this,bodyA,bodyB);

    maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;

    /**
     * Pivot, defined locally in bodyA.
     * @property {Vec3} pivotA
     */
    this.pivotA = pivotA ? pivotA.clone() : new Vec3();

    /**
     * Pivot, defined locally in bodyB.
     * @property {Vec3} pivotB
     */
    this.pivotB = pivotB ? pivotB.clone() : new Vec3();

    /**
     * @property {ContactEquation} equationX
     */
    var x = this.equationX = new ContactEquation(bodyA,bodyB);

    /**
     * @property {ContactEquation} equationY
     */
    var y = this.equationY = new ContactEquation(bodyA,bodyB);

    /**
     * @property {ContactEquation} equationZ
     */
    var z = this.equationZ = new ContactEquation(bodyA,bodyB);

    // Equations to be fed to the solver
    this.equations.push(x, y, z);

    // Make the equations bidirectional
    x.minForce = y.minForce = z.minForce = -maxForce;
    x.maxForce = y.maxForce = z.maxForce =  maxForce;

    x.ni.set(1, 0, 0);
    y.ni.set(0, 1, 0);
    z.ni.set(0, 0, 1);
}
PointToPointConstraint.prototype = new Constraint();

PointToPointConstraint.prototype.update = function(){
    var bodyA = this.bodyA;
    var bodyB = this.bodyB;
    var x = this.equationX;
    var y = this.equationY;
    var z = this.equationZ;

    // Rotate the pivots to world space
    bodyA.quaternion.vmult(this.pivotA,x.ri);
    bodyB.quaternion.vmult(this.pivotB,x.rj);

    y.ri.copy(x.ri);
    y.rj.copy(x.rj);
    z.ri.copy(x.ri);
    z.rj.copy(x.rj);
};
},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(_dereq_,module,exports){
module.exports = ConeEquation;

var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Equation = _dereq_('./Equation');

/**
 * Cone equation. Works to keep the given body world vectors aligned, or tilted within a given angle from each other.
 * @class ConeEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA] Local axis in A
 * @param {Vec3} [options.axisB] Local axis in B
 * @param {Vec3} [options.angle] The "cone angle" to keep
 * @param {number} [options.maxForce=1e6]
 * @extends Equation
 */
function ConeEquation(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

    this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

    /**
     * The cone angle to keep
     * @property {number} angle
     */
    this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;
}

ConeEquation.prototype = new Equation();
ConeEquation.prototype.constructor = ConeEquation;

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();

ConeEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,

        ni = this.axisA,
        nj = this.axisB,

        nixnj = tmpVec1,
        njxni = tmpVec2,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // Caluclate cross products
    ni.cross(nj, nixnj);
    nj.cross(ni, njxni);

    // The angle between two vector is:
    // cos(theta) = a * b / (length(a) * length(b) = { len(a) = len(b) = 1 } = a * b

    // g = a * b
    // gdot = (b x a) * wi + (a x b) * wj
    // G = [0 bxa 0 axb]
    // W = [vi wi vj wj]
    GA.rotational.copy(njxni);
    GB.rotational.copy(nixnj);

    var g = Math.cos(this.angle) - ni.dot(nj),
        GW = this.computeGW(),
        GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h * GiMf;

    return B;
};


},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(_dereq_,module,exports){
module.exports = ContactEquation;

var Equation = _dereq_('./Equation');
var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');

/**
 * Contact/non-penetration constraint equation
 * @class ContactEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @extends Equation
 */
function ContactEquation(bodyA, bodyB, maxForce){
    maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;
    Equation.call(this, bodyA, bodyB, 0, maxForce);

    /**
     * @property restitution
     * @type {Number}
     */
    this.restitution = 0.0; // "bounciness": u1 = -e*u0

    /**
     * World-oriented vector that goes from the center of bi to the contact point.
     * @property {Vec3} ri
     */
    this.ri = new Vec3();

    /**
     * World-oriented vector that starts in body j position and goes to the contact point.
     * @property {Vec3} rj
     */
    this.rj = new Vec3();

    /**
     * Contact normal, pointing out of body i.
     * @property {Vec3} ni
     */
    this.ni = new Vec3();
}

ContactEquation.prototype = new Equation();
ContactEquation.prototype.constructor = ContactEquation;

var ContactEquation_computeB_temp1 = new Vec3(); // Temp vectors
var ContactEquation_computeB_temp2 = new Vec3();
var ContactEquation_computeB_temp3 = new Vec3();
ContactEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,
        ri = this.ri,
        rj = this.rj,
        rixn = ContactEquation_computeB_temp1,
        rjxn = ContactEquation_computeB_temp2,

        vi = bi.velocity,
        wi = bi.angularVelocity,
        fi = bi.force,
        taui = bi.torque,

        vj = bj.velocity,
        wj = bj.angularVelocity,
        fj = bj.force,
        tauj = bj.torque,

        penetrationVec = ContactEquation_computeB_temp3,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB,

        n = this.ni;

    // Caluclate cross products
    ri.cross(n,rixn);
    rj.cross(n,rjxn);

    // g = xj+rj -(xi+ri)
    // G = [ -ni  -rixn  ni  rjxn ]
    n.negate(GA.spatial);
    rixn.negate(GA.rotational);
    GB.spatial.copy(n);
    GB.rotational.copy(rjxn);

    // Calculate the penetration vector
    penetrationVec.copy(bj.position);
    penetrationVec.vadd(rj,penetrationVec);
    penetrationVec.vsub(bi.position,penetrationVec);
    penetrationVec.vsub(ri,penetrationVec);

    var g = n.dot(penetrationVec);

    // Compute iteration
    var ePlusOne = this.restitution + 1;
    var GW = ePlusOne * vj.dot(n) - ePlusOne * vi.dot(n) + wj.dot(rjxn) - wi.dot(rixn);
    var GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h*GiMf;

    return B;
};

var ContactEquation_getImpactVelocityAlongNormal_vi = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_vj = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_xi = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_xj = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_relVel = new Vec3();

/**
 * Get the current relative velocity in the contact point.
 * @method getImpactVelocityAlongNormal
 * @return {number}
 */
ContactEquation.prototype.getImpactVelocityAlongNormal = function(){
    var vi = ContactEquation_getImpactVelocityAlongNormal_vi;
    var vj = ContactEquation_getImpactVelocityAlongNormal_vj;
    var xi = ContactEquation_getImpactVelocityAlongNormal_xi;
    var xj = ContactEquation_getImpactVelocityAlongNormal_xj;
    var relVel = ContactEquation_getImpactVelocityAlongNormal_relVel;

    this.bi.position.vadd(this.ri, xi);
    this.bj.position.vadd(this.rj, xj);

    this.bi.getVelocityAtWorldPoint(xi, vi);
    this.bj.getVelocityAtWorldPoint(xj, vj);

    vi.vsub(vj, relVel);

    return this.ni.dot(relVel);
};


},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(_dereq_,module,exports){
module.exports = Equation;

var JacobianElement = _dereq_('../math/JacobianElement'),
    Vec3 = _dereq_('../math/Vec3');

/**
 * Equation base class
 * @class Equation
 * @constructor
 * @author schteppe
 * @param {Body} bi
 * @param {Body} bj
 * @param {Number} minForce Minimum (read: negative max) force to be applied by the constraint.
 * @param {Number} maxForce Maximum (read: positive max) force to be applied by the constraint.
 */
function Equation(bi,bj,minForce,maxForce){
    this.id = Equation.id++;

    /**
     * @property {number} minForce
     */
    this.minForce = typeof(minForce)==="undefined" ? -1e6 : minForce;

    /**
     * @property {number} maxForce
     */
    this.maxForce = typeof(maxForce)==="undefined" ? 1e6 : maxForce;

    /**
     * @property bi
     * @type {Body}
     */
    this.bi = bi;

    /**
     * @property bj
     * @type {Body}
     */
    this.bj = bj;

    /**
     * SPOOK parameter
     * @property {number} a
     */
    this.a = 0.0;

    /**
     * SPOOK parameter
     * @property {number} b
     */
    this.b = 0.0;

    /**
     * SPOOK parameter
     * @property {number} eps
     */
    this.eps = 0.0;

    /**
     * @property {JacobianElement} jacobianElementA
     */
    this.jacobianElementA = new JacobianElement();

    /**
     * @property {JacobianElement} jacobianElementB
     */
    this.jacobianElementB = new JacobianElement();

    /**
     * @property {boolean} enabled
     * @default true
     */
    this.enabled = true;

    // Set typical spook params
    this.setSpookParams(1e7,4,1/60);
}
Equation.prototype.constructor = Equation;

Equation.id = 0;

/**
 * Recalculates a,b,eps.
 * @method setSpookParams
 */
Equation.prototype.setSpookParams = function(stiffness,relaxation,timeStep){
    var d = relaxation,
        k = stiffness,
        h = timeStep;
    this.a = 4.0 / (h * (1 + 4 * d));
    this.b = (4.0 * d) / (1 + 4 * d);
    this.eps = 4.0 / (h * h * k * (1 + 4 * d));
};

/**
 * Computes the RHS of the SPOOK equation
 * @method computeB
 * @return {Number}
 */
Equation.prototype.computeB = function(a,b,h){
    var GW = this.computeGW(),
        Gq = this.computeGq(),
        GiMf = this.computeGiMf();
    return - Gq * a - GW * b - GiMf*h;
};

/**
 * Computes G*q, where q are the generalized body coordinates
 * @method computeGq
 * @return {Number}
 */
Equation.prototype.computeGq = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        xi = bi.position,
        xj = bj.position;
    return GA.spatial.dot(xi) + GB.spatial.dot(xj);
};

var zero = new Vec3();

/**
 * Computes G*W, where W are the body velocities
 * @method computeGW
 * @return {Number}
 */
Equation.prototype.computeGW = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        vi = bi.velocity,
        vj = bj.velocity,
        wi = bi.angularVelocity || zero,
        wj = bj.angularVelocity || zero;
    return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
};


/**
 * Computes G*Wlambda, where W are the body velocities
 * @method computeGWlambda
 * @return {Number}
 */
Equation.prototype.computeGWlambda = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        vi = bi.vlambda,
        vj = bj.vlambda,
        wi = bi.wlambda || zero,
        wj = bj.wlambda || zero;
    return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
};

/**
 * Computes G*inv(M)*f, where M is the mass matrix with diagonal blocks for each body, and f are the forces on the bodies.
 * @method computeGiMf
 * @return {Number}
 */
var iMfi = new Vec3(),
    iMfj = new Vec3(),
    invIi_vmult_taui = new Vec3(),
    invIj_vmult_tauj = new Vec3();
Equation.prototype.computeGiMf = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        fi = bi.force,
        ti = bi.torque,
        fj = bj.force,
        tj = bj.torque,
        invMassi = bi.invMassSolve,
        invMassj = bj.invMassSolve;

    if(bi.invInertiaWorldSolve){ bi.invInertiaWorldSolve.vmult(ti,invIi_vmult_taui); }
    else { invIi_vmult_taui.set(0,0,0); }
    if(bj.invInertiaWorldSolve){ bj.invInertiaWorldSolve.vmult(tj,invIj_vmult_tauj); }
    else { invIj_vmult_tauj.set(0,0,0); }

    fi.mult(invMassi,iMfi);
    fj.mult(invMassj,iMfj);

    return GA.multiplyVectors(iMfi,invIi_vmult_taui) + GB.multiplyVectors(iMfj,invIj_vmult_tauj);
};

/**
 * Computes G*inv(M)*G'
 * @method computeGiMGt
 * @return {Number}
 */
var tmp = new Vec3();
Equation.prototype.computeGiMGt = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        invMassi = bi.invMassSolve,
        invMassj = bj.invMassSolve,
        invIi = bi.invInertiaWorldSolve,
        invIj = bj.invInertiaWorldSolve,
        result = invMassi + invMassj;

    if(invIi){
        invIi.vmult(GA.rotational,tmp);
        result += tmp.dot(GA.rotational);
    }

    if(invIj){
        invIj.vmult(GB.rotational,tmp);
        result += tmp.dot(GB.rotational);
    }

    return  result;
};

var addToWlambda_temp = new Vec3(),
    addToWlambda_Gi = new Vec3(),
    addToWlambda_Gj = new Vec3(),
    addToWlambda_ri = new Vec3(),
    addToWlambda_rj = new Vec3(),
    addToWlambda_Mdiag = new Vec3();

/**
 * Add constraint velocity to the bodies.
 * @method addToWlambda
 * @param {Number} deltalambda
 */
Equation.prototype.addToWlambda = function(deltalambda){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        temp = addToWlambda_temp;

    // Add to linear velocity
    // v_lambda += inv(M) * delta_lamba * G
    GA.spatial.mult(bi.invMassSolve * deltalambda,temp);
    bi.vlambda.vadd(temp, bi.vlambda);

    GB.spatial.mult(bj.invMassSolve * deltalambda,temp);
    bj.vlambda.vadd(temp, bj.vlambda);

    // Add to angular velocity
    if(bi.invInertiaWorldSolve){
        bi.invInertiaWorldSolve.vmult(GA.rotational,temp);
        temp.mult(deltalambda,temp);
        bi.wlambda.vadd(temp,bi.wlambda);
    }

    if(bj.invInertiaWorldSolve){
        bj.invInertiaWorldSolve.vmult(GB.rotational,temp);
        temp.mult(deltalambda,temp);
        bj.wlambda.vadd(temp,bj.wlambda);
    }
};

/**
 * Compute the denominator part of the SPOOK equation: C = G*inv(M)*G' + eps
 * @method computeInvC
 * @param  {Number} eps
 * @return {Number}
 */
Equation.prototype.computeC = function(){
    return this.computeGiMGt() + this.eps;
};

},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(_dereq_,module,exports){
module.exports = FrictionEquation;

var Equation = _dereq_('./Equation');
var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');

/**
 * Constrains the slipping in a contact along a tangent
 * @class FrictionEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} slipForce should be +-F_friction = +-mu * F_normal = +-mu * m * g
 * @extends Equation
 */
function FrictionEquation(bodyA, bodyB, slipForce){
    Equation.call(this,bodyA, bodyB, -slipForce, slipForce);
    this.ri = new Vec3();
    this.rj = new Vec3();
    this.t = new Vec3(); // tangent
}

FrictionEquation.prototype = new Equation();
FrictionEquation.prototype.constructor = FrictionEquation;

var FrictionEquation_computeB_temp1 = new Vec3();
var FrictionEquation_computeB_temp2 = new Vec3();
FrictionEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,
        ri = this.ri,
        rj = this.rj,
        rixt = FrictionEquation_computeB_temp1,
        rjxt = FrictionEquation_computeB_temp2,
        t = this.t;

    // Caluclate cross products
    ri.cross(t,rixt);
    rj.cross(t,rjxt);

    // G = [-t -rixt t rjxt]
    // And remember, this is a pure velocity constraint, g is always zero!
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB;
    t.negate(GA.spatial);
    rixt.negate(GA.rotational);
    GB.spatial.copy(t);
    GB.rotational.copy(rjxt);

    var GW = this.computeGW();
    var GiMf = this.computeGiMf();

    var B = - GW * b - h * GiMf;

    return B;
};

},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(_dereq_,module,exports){
module.exports = RotationalEquation;

var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Equation = _dereq_('./Equation');

/**
 * Rotational constraint. Works to keep the local vectors orthogonal to each other in world space.
 * @class RotationalEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {number} [options.maxForce]
 * @extends Equation
 */
function RotationalEquation(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

    this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

    this.maxAngle = Math.PI / 2;
}

RotationalEquation.prototype = new Equation();
RotationalEquation.prototype.constructor = RotationalEquation;

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();

RotationalEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,

        ni = this.axisA,
        nj = this.axisB,

        nixnj = tmpVec1,
        njxni = tmpVec2,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // Caluclate cross products
    ni.cross(nj, nixnj);
    nj.cross(ni, njxni);

    // g = ni * nj
    // gdot = (nj x ni) * wi + (ni x nj) * wj
    // G = [0 njxni 0 nixnj]
    // W = [vi wi vj wj]
    GA.rotational.copy(njxni);
    GB.rotational.copy(nixnj);

    var g = Math.cos(this.maxAngle) - ni.dot(nj),
        GW = this.computeGW(),
        GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h * GiMf;

    return B;
};


},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(_dereq_,module,exports){
module.exports = RotationalMotorEquation;

var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Equation = _dereq_('./Equation');

/**
 * Rotational motor constraint. Tries to keep the relative angular velocity of the bodies to a given value.
 * @class RotationalMotorEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} maxForce
 * @extends Equation
 */
function RotationalMotorEquation(bodyA, bodyB, maxForce){
    maxForce = typeof(maxForce)!=='undefined' ? maxForce : 1e6;
    Equation.call(this,bodyA,bodyB,-maxForce,maxForce);

    /**
     * World oriented rotational axis
     * @property {Vec3} axisA
     */
    this.axisA = new Vec3();

    /**
     * World oriented rotational axis
     * @property {Vec3} axisB
     */
    this.axisB = new Vec3(); // World oriented rotational axis

    /**
     * Motor velocity
     * @property {Number} targetVelocity
     */
    this.targetVelocity = 0;
}

RotationalMotorEquation.prototype = new Equation();
RotationalMotorEquation.prototype.constructor = RotationalMotorEquation;

RotationalMotorEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,

        axisA = this.axisA,
        axisB = this.axisB,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // g = 0
    // gdot = axisA * wi - axisB * wj
    // gdot = G * W = G * [vi wi vj wj]
    // =>
    // G = [0 axisA 0 -axisB]

    GA.rotational.copy(axisA);
    axisB.negate(GB.rotational);

    var GW = this.computeGW() - this.targetVelocity,
        GiMf = this.computeGiMf();

    var B = - GW * b - h * GiMf;

    return B;
};

},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(_dereq_,module,exports){
var Utils = _dereq_('../utils/Utils');

module.exports = ContactMaterial;

/**
 * Defines what happens when two materials meet.
 * @class ContactMaterial
 * @constructor
 * @param {Material} m1
 * @param {Material} m2
 * @param {object} [options]
 * @param {Number} [options.friction=0.3]
 * @param {Number} [options.restitution=0.3]
 * @param {number} [options.contactEquationStiffness=1e7]
 * @param {number} [options.contactEquationRelaxation=3]
 * @param {number} [options.frictionEquationStiffness=1e7]
 * @param {Number} [options.frictionEquationRelaxation=3]
 */
function ContactMaterial(m1, m2, options){
    options = Utils.defaults(options, {
        friction: 0.3,
        restitution: 0.3,
        contactEquationStiffness: 1e7,
        contactEquationRelaxation: 3,
        frictionEquationStiffness: 1e7,
        frictionEquationRelaxation: 3
    });

    /**
     * Identifier of this material
     * @property {Number} id
     */
    this.id = ContactMaterial.idCounter++;

    /**
     * Participating materials
     * @property {Array} materials
     * @todo  Should be .materialA and .materialB instead
     */
    this.materials = [m1, m2];

    /**
     * Friction coefficient
     * @property {Number} friction
     */
    this.friction = options.friction;

    /**
     * Restitution coefficient
     * @property {Number} restitution
     */
    this.restitution = options.restitution;

    /**
     * Stiffness of the produced contact equations
     * @property {Number} contactEquationStiffness
     */
    this.contactEquationStiffness = options.contactEquationStiffness;

    /**
     * Relaxation time of the produced contact equations
     * @property {Number} contactEquationRelaxation
     */
    this.contactEquationRelaxation = options.contactEquationRelaxation;

    /**
     * Stiffness of the produced friction equations
     * @property {Number} frictionEquationStiffness
     */
    this.frictionEquationStiffness = options.frictionEquationStiffness;

    /**
     * Relaxation time of the produced friction equations
     * @property {Number} frictionEquationRelaxation
     */
    this.frictionEquationRelaxation = options.frictionEquationRelaxation;
}

ContactMaterial.idCounter = 0;

},{"../utils/Utils":53}],25:[function(_dereq_,module,exports){
module.exports = Material;

/**
 * Defines a physics material.
 * @class Material
 * @constructor
 * @param {object} [options]
 * @author schteppe
 */
function Material(options){
    var name = '';
    options = options || {};

    // Backwards compatibility fix
    if(typeof(options) === 'string'){
        name = options;
        options = {};
    } else if(typeof(options) === 'object') {
        name = '';
    }

    /**
     * @property name
     * @type {String}
     */
    this.name = name;

    /**
     * material id.
     * @property id
     * @type {number}
     */
    this.id = Material.idCounter++;

    /**
     * Friction for this material. If non-negative, it will be used instead of the friction given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} friction
     */
    this.friction = typeof(options.friction) !== 'undefined' ? options.friction : -1;

    /**
     * Restitution for this material. If non-negative, it will be used instead of the restitution given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} restitution
     */
    this.restitution = typeof(options.restitution) !== 'undefined' ? options.restitution : -1;
}

Material.idCounter = 0;

},{}],26:[function(_dereq_,module,exports){
module.exports = JacobianElement;

var Vec3 = _dereq_('./Vec3');

/**
 * An element containing 6 entries, 3 spatial and 3 rotational degrees of freedom.
 * @class JacobianElement
 * @constructor
 */
function JacobianElement(){

    /**
     * @property {Vec3} spatial
     */
    this.spatial = new Vec3();

    /**
     * @property {Vec3} rotational
     */
    this.rotational = new Vec3();
}

/**
 * Multiply with other JacobianElement
 * @method multiplyElement
 * @param  {JacobianElement} element
 * @return {Number}
 */
JacobianElement.prototype.multiplyElement = function(element){
    return element.spatial.dot(this.spatial) + element.rotational.dot(this.rotational);
};

/**
 * Multiply with two vectors
 * @method multiplyVectors
 * @param  {Vec3} spatial
 * @param  {Vec3} rotational
 * @return {Number}
 */
JacobianElement.prototype.multiplyVectors = function(spatial,rotational){
    return spatial.dot(this.spatial) + rotational.dot(this.rotational);
};

},{"./Vec3":30}],27:[function(_dereq_,module,exports){
module.exports = Mat3;

var Vec3 = _dereq_('./Vec3');

/**
 * A 3x3 matrix.
 * @class Mat3
 * @constructor
 * @param array elements Array of nine elements. Optional.
 * @author schteppe / http://github.com/schteppe
 */
function Mat3(elements){
    /**
     * A vector of length 9, containing all matrix elements
     * @property {Array} elements
     */
    if(elements){
        this.elements = elements;
    } else {
        this.elements = [0,0,0,0,0,0,0,0,0];
    }
}

/**
 * Sets the matrix to identity
 * @method identity
 * @todo Should perhaps be renamed to setIdentity() to be more clear.
 * @todo Create another function that immediately creates an identity matrix eg. eye()
 */
Mat3.prototype.identity = function(){
    var e = this.elements;
    e[0] = 1;
    e[1] = 0;
    e[2] = 0;

    e[3] = 0;
    e[4] = 1;
    e[5] = 0;

    e[6] = 0;
    e[7] = 0;
    e[8] = 1;
};

/**
 * Set all elements to zero
 * @method setZero
 */
Mat3.prototype.setZero = function(){
    var e = this.elements;
    e[0] = 0;
    e[1] = 0;
    e[2] = 0;
    e[3] = 0;
    e[4] = 0;
    e[5] = 0;
    e[6] = 0;
    e[7] = 0;
    e[8] = 0;
};

/**
 * Sets the matrix diagonal elements from a Vec3
 * @method setTrace
 * @param {Vec3} vec3
 */
Mat3.prototype.setTrace = function(vec3){
    var e = this.elements;
    e[0] = vec3.x;
    e[4] = vec3.y;
    e[8] = vec3.z;
};

/**
 * Gets the matrix diagonal elements
 * @method getTrace
 * @return {Vec3}
 */
Mat3.prototype.getTrace = function(target){
    var target = target || new Vec3();
    var e = this.elements;
    target.x = e[0];
    target.y = e[4];
    target.z = e[8];
};

/**
 * Matrix-Vector multiplication
 * @method vmult
 * @param {Vec3} v The vector to multiply with
 * @param {Vec3} target Optional, target to save the result in.
 */
Mat3.prototype.vmult = function(v,target){
    target = target || new Vec3();

    var e = this.elements,
        x = v.x,
        y = v.y,
        z = v.z;
    target.x = e[0]*x + e[1]*y + e[2]*z;
    target.y = e[3]*x + e[4]*y + e[5]*z;
    target.z = e[6]*x + e[7]*y + e[8]*z;

    return target;
};

/**
 * Matrix-scalar multiplication
 * @method smult
 * @param {Number} s
 */
Mat3.prototype.smult = function(s){
    for(var i=0; i<this.elements.length; i++){
        this.elements[i] *= s;
    }
};

/**
 * Matrix multiplication
 * @method mmult
 * @param {Mat3} m Matrix to multiply with from left side.
 * @return {Mat3} The result.
 */
Mat3.prototype.mmult = function(m,target){
    var r = target || new Mat3();
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            var sum = 0.0;
            for(var k=0; k<3; k++){
                sum += m.elements[i+k*3] * this.elements[k+j*3];
            }
            r.elements[i+j*3] = sum;
        }
    }
    return r;
};

/**
 * Scale each column of the matrix
 * @method scale
 * @param {Vec3} v
 * @return {Mat3} The result.
 */
Mat3.prototype.scale = function(v,target){
    target = target || new Mat3();
    var e = this.elements,
        t = target.elements;
    for(var i=0; i!==3; i++){
        t[3*i + 0] = v.x * e[3*i + 0];
        t[3*i + 1] = v.y * e[3*i + 1];
        t[3*i + 2] = v.z * e[3*i + 2];
    }
    return target;
};

/**
 * Solve Ax=b
 * @method solve
 * @param {Vec3} b The right hand side
 * @param {Vec3} target Optional. Target vector to save in.
 * @return {Vec3} The solution x
 * @todo should reuse arrays
 */
Mat3.prototype.solve = function(b,target){
    target = target || new Vec3();

    // Construct equations
    var nr = 3; // num rows
    var nc = 4; // num cols
    var eqns = [];
    for(var i=0; i<nr*nc; i++){
        eqns.push(0);
    }
    var i,j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            eqns[i+nc*j] = this.elements[i+3*j];
        }
    }
    eqns[3+4*0] = b.x;
    eqns[3+4*1] = b.y;
    eqns[3+4*2] = b.z;

    // Compute right upper triangular version of the matrix - Gauss elimination
    var n = 3, k = n, np;
    var kp = 4; // num rows
    var p, els;
    do {
        i = k - n;
        if (eqns[i+nc*i] === 0) {
            // the pivot is null, swap lines
            for (j = i + 1; j < k; j++) {
                if (eqns[i+nc*j] !== 0) {
                    np = kp;
                    do {  // do ligne( i ) = ligne( i ) + ligne( k )
                        p = kp - np;
                        eqns[p+nc*i] += eqns[p+nc*j];
                    } while (--np);
                    break;
                }
            }
        }
        if (eqns[i+nc*i] !== 0) {
            for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                np = kp;
                do {  // do ligne( k ) = ligne( k ) - multiplier * ligne( i )
                    p = kp - np;
                    eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                } while (--np);
            }
        }
    } while (--n);

    // Get the solution
    target.z = eqns[2*nc+3] / eqns[2*nc+2];
    target.y = (eqns[1*nc+3] - eqns[1*nc+2]*target.z) / eqns[1*nc+1];
    target.x = (eqns[0*nc+3] - eqns[0*nc+2]*target.z - eqns[0*nc+1]*target.y) / eqns[0*nc+0];

    if(isNaN(target.x) || isNaN(target.y) || isNaN(target.z) || target.x===Infinity || target.y===Infinity || target.z===Infinity){
        throw "Could not solve equation! Got x=["+target.toString()+"], b=["+b.toString()+"], A=["+this.toString()+"]";
    }

    return target;
};

/**
 * Get an element in the matrix by index. Index starts at 0, not 1!!!
 * @method e
 * @param {Number} row
 * @param {Number} column
 * @param {Number} value Optional. If provided, the matrix element will be set to this value.
 * @return {Number}
 */
Mat3.prototype.e = function( row , column ,value){
    if(value===undefined){
        return this.elements[column+3*row];
    } else {
        // Set value
        this.elements[column+3*row] = value;
    }
};

/**
 * Copy another matrix into this matrix object.
 * @method copy
 * @param {Mat3} source
 * @return {Mat3} this
 */
Mat3.prototype.copy = function(source){
    for(var i=0; i < source.elements.length; i++){
        this.elements[i] = source.elements[i];
    }
    return this;
};

/**
 * Returns a string representation of the matrix.
 * @method toString
 * @return string
 */
Mat3.prototype.toString = function(){
    var r = "";
    var sep = ",";
    for(var i=0; i<9; i++){
        r += this.elements[i] + sep;
    }
    return r;
};

/**
 * reverse the matrix
 * @method reverse
 * @param {Mat3} target Optional. Target matrix to save in.
 * @return {Mat3} The solution x
 */
Mat3.prototype.reverse = function(target){

    target = target || new Mat3();

    // Construct equations
    var nr = 3; // num rows
    var nc = 6; // num cols
    var eqns = [];
    for(var i=0; i<nr*nc; i++){
        eqns.push(0);
    }
    var i,j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            eqns[i+nc*j] = this.elements[i+3*j];
        }
    }
    eqns[3+6*0] = 1;
    eqns[3+6*1] = 0;
    eqns[3+6*2] = 0;
    eqns[4+6*0] = 0;
    eqns[4+6*1] = 1;
    eqns[4+6*2] = 0;
    eqns[5+6*0] = 0;
    eqns[5+6*1] = 0;
    eqns[5+6*2] = 1;

    // Compute right upper triangular version of the matrix - Gauss elimination
    var n = 3, k = n, np;
    var kp = nc; // num rows
    var p;
    do {
        i = k - n;
        if (eqns[i+nc*i] === 0) {
            // the pivot is null, swap lines
            for (j = i + 1; j < k; j++) {
                if (eqns[i+nc*j] !== 0) {
                    np = kp;
                    do { // do line( i ) = line( i ) + line( k )
                        p = kp - np;
                        eqns[p+nc*i] += eqns[p+nc*j];
                    } while (--np);
                    break;
                }
            }
        }
        if (eqns[i+nc*i] !== 0) {
            for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                np = kp;
                do { // do line( k ) = line( k ) - multiplier * line( i )
                    p = kp - np;
                    eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                } while (--np);
            }
        }
    } while (--n);

    // eliminate the upper left triangle of the matrix
    i = 2;
    do {
        j = i-1;
        do {
            var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
            np = nc;
            do {
                p = nc - np;
                eqns[p+nc*j] =  eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
            } while (--np);
        } while (j--);
    } while (--i);

    // operations on the diagonal
    i = 2;
    do {
        var multiplier = 1 / eqns[i+nc*i];
        np = nc;
        do {
            p = nc - np;
            eqns[p+nc*i] = eqns[p+nc*i] * multiplier ;
        } while (--np);
    } while (i--);

    i = 2;
    do {
        j = 2;
        do {
            p = eqns[nr+j+nc*i];
            if( isNaN( p ) || p ===Infinity ){
                throw "Could not reverse! A=["+this.toString()+"]";
            }
            target.e( i , j , p );
        } while (j--);
    } while (i--);

    return target;
};

/**
 * Set the matrix from a quaterion
 * @method setRotationFromQuaternion
 * @param {Quaternion} q
 */
Mat3.prototype.setRotationFromQuaternion = function( q ) {
    var x = q.x, y = q.y, z = q.z, w = q.w,
        x2 = x + x, y2 = y + y, z2 = z + z,
        xx = x * x2, xy = x * y2, xz = x * z2,
        yy = y * y2, yz = y * z2, zz = z * z2,
        wx = w * x2, wy = w * y2, wz = w * z2,
        e = this.elements;

    e[3*0 + 0] = 1 - ( yy + zz );
    e[3*0 + 1] = xy - wz;
    e[3*0 + 2] = xz + wy;

    e[3*1 + 0] = xy + wz;
    e[3*1 + 1] = 1 - ( xx + zz );
    e[3*1 + 2] = yz - wx;

    e[3*2 + 0] = xz - wy;
    e[3*2 + 1] = yz + wx;
    e[3*2 + 2] = 1 - ( xx + yy );

    return this;
};

/**
 * Transpose the matrix
 * @method transpose
 * @param  {Mat3} target Where to store the result.
 * @return {Mat3} The target Mat3, or a new Mat3 if target was omitted.
 */
Mat3.prototype.transpose = function( target ) {
    target = target || new Mat3();

    var Mt = target.elements,
        M = this.elements;

    for(var i=0; i!==3; i++){
        for(var j=0; j!==3; j++){
            Mt[3*i + j] = M[3*j + i];
        }
    }

    return target;
};

},{"./Vec3":30}],28:[function(_dereq_,module,exports){
module.exports = Quaternion;

var Vec3 = _dereq_('./Vec3');

/**
 * A Quaternion describes a rotation in 3D space. The Quaternion is mathematically defined as Q = x*i + y*j + z*k + w, where (i,j,k) are imaginary basis vectors. (x,y,z) can be seen as a vector related to the axis of rotation, while the real multiplier, w, is related to the amount of rotation.
 * @class Quaternion
 * @constructor
 * @param {Number} x Multiplier of the imaginary basis vector i.
 * @param {Number} y Multiplier of the imaginary basis vector j.
 * @param {Number} z Multiplier of the imaginary basis vector k.
 * @param {Number} w Multiplier of the real part.
 * @see http://en.wikipedia.org/wiki/Quaternion
 */
function Quaternion(x,y,z,w){
    /**
     * @property {Number} x
     */
    this.x = x!==undefined ? x : 0;

    /**
     * @property {Number} y
     */
    this.y = y!==undefined ? y : 0;

    /**
     * @property {Number} z
     */
    this.z = z!==undefined ? z : 0;

    /**
     * The multiplier of the real quaternion basis vector.
     * @property {Number} w
     */
    this.w = w!==undefined ? w : 1;
}

/**
 * Set the value of the quaternion.
 * @method set
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} w
 */
Quaternion.prototype.set = function(x,y,z,w){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
};

/**
 * Convert to a readable format
 * @method toString
 * @return string
 */
Quaternion.prototype.toString = function(){
    return this.x+","+this.y+","+this.z+","+this.w;
};

/**
 * Convert to an Array
 * @method toArray
 * @return Array
 */
Quaternion.prototype.toArray = function(){
    return [this.x, this.y, this.z, this.w];
};

/**
 * Set the quaternion components given an axis and an angle.
 * @method setFromAxisAngle
 * @param {Vec3} axis
 * @param {Number} angle in radians
 */
Quaternion.prototype.setFromAxisAngle = function(axis,angle){
    var s = Math.sin(angle*0.5);
    this.x = axis.x * s;
    this.y = axis.y * s;
    this.z = axis.z * s;
    this.w = Math.cos(angle*0.5);
};

/**
 * Converts the quaternion to axis/angle representation.
 * @method toAxisAngle
 * @param {Vec3} targetAxis Optional. A vector object to reuse for storing the axis.
 * @return Array An array, first elemnt is the axis and the second is the angle in radians.
 */
Quaternion.prototype.toAxisAngle = function(targetAxis){
    targetAxis = targetAxis || new Vec3();
    this.normalize(); // if w>1 acos and sqrt will produce errors, this cant happen if quaternion is normalised
    var angle = 2 * Math.acos(this.w);
    var s = Math.sqrt(1-this.w*this.w); // assuming quaternion normalised then w is less than 1, so term always positive.
    if (s < 0.001) { // test to avoid divide by zero, s is always positive due to sqrt
        // if s close to zero then direction of axis not important
        targetAxis.x = this.x; // if it is important that axis is normalised then replace with x=1; y=z=0;
        targetAxis.y = this.y;
        targetAxis.z = this.z;
    } else {
        targetAxis.x = this.x / s; // normalise axis
        targetAxis.y = this.y / s;
        targetAxis.z = this.z / s;
    }
    return [targetAxis,angle];
};

var sfv_t1 = new Vec3(),
    sfv_t2 = new Vec3();

/**
 * Set the quaternion value given two vectors. The resulting rotation will be the needed rotation to rotate u to v.
 * @method setFromVectors
 * @param {Vec3} u
 * @param {Vec3} v
 */
Quaternion.prototype.setFromVectors = function(u,v){
    if(u.isAntiparallelTo(v)){
        var t1 = sfv_t1;
        var t2 = sfv_t2;

        u.tangents(t1,t2);
        this.setFromAxisAngle(t1,Math.PI);
    } else {
        var a = u.cross(v);
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = Math.sqrt(Math.pow(u.norm(),2) * Math.pow(v.norm(),2)) + u.dot(v);
        this.normalize();
    }
};

/**
 * Quaternion multiplication
 * @method mult
 * @param {Quaternion} q
 * @param {Quaternion} target Optional.
 * @return {Quaternion}
 */
var Quaternion_mult_va = new Vec3();
var Quaternion_mult_vb = new Vec3();
var Quaternion_mult_vaxvb = new Vec3();
Quaternion.prototype.mult = function(q,target){
    target = target || new Quaternion();
    var w = this.w,
        va = Quaternion_mult_va,
        vb = Quaternion_mult_vb,
        vaxvb = Quaternion_mult_vaxvb;

    va.set(this.x,this.y,this.z);
    vb.set(q.x,q.y,q.z);
    target.w = w*q.w - va.dot(vb);
    va.cross(vb,vaxvb);

    target.x = w * vb.x + q.w*va.x + vaxvb.x;
    target.y = w * vb.y + q.w*va.y + vaxvb.y;
    target.z = w * vb.z + q.w*va.z + vaxvb.z;

    return target;
};

/**
 * Get the inverse quaternion rotation.
 * @method inverse
 * @param {Quaternion} target
 * @return {Quaternion}
 */
Quaternion.prototype.inverse = function(target){
    var x = this.x, y = this.y, z = this.z, w = this.w;
    target = target || new Quaternion();

    this.conjugate(target);
    var inorm2 = 1/(x*x + y*y + z*z + w*w);
    target.x *= inorm2;
    target.y *= inorm2;
    target.z *= inorm2;
    target.w *= inorm2;

    return target;
};

/**
 * Get the quaternion conjugate
 * @method conjugate
 * @param {Quaternion} target
 * @return {Quaternion}
 */
Quaternion.prototype.conjugate = function(target){
    target = target || new Quaternion();

    target.x = -this.x;
    target.y = -this.y;
    target.z = -this.z;
    target.w = this.w;

    return target;
};

/**
 * Normalize the quaternion. Note that this changes the values of the quaternion.
 * @method normalize
 */
Quaternion.prototype.normalize = function(){
    var l = Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);
    if ( l === 0 ) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    } else {
        l = 1 / l;
        this.x *= l;
        this.y *= l;
        this.z *= l;
        this.w *= l;
    }
};

/**
 * Approximation of quaternion normalization. Works best when quat is already almost-normalized.
 * @method normalizeFast
 * @see http://jsperf.com/fast-quaternion-normalization
 * @author unphased, https://github.com/unphased
 */
Quaternion.prototype.normalizeFast = function () {
    var f = (3.0-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2.0;
    if ( f === 0 ) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    } else {
        this.x *= f;
        this.y *= f;
        this.z *= f;
        this.w *= f;
    }
};

/**
 * Multiply the quaternion by a vector
 * @method vmult
 * @param {Vec3} v
 * @param {Vec3} target Optional
 * @return {Vec3}
 */
Quaternion.prototype.vmult = function(v,target){
    target = target || new Vec3();

    var x = v.x,
        y = v.y,
        z = v.z;

    var qx = this.x,
        qy = this.y,
        qz = this.z,
        qw = this.w;

    // q*v
    var ix =  qw * x + qy * z - qz * y,
    iy =  qw * y + qz * x - qx * z,
    iz =  qw * z + qx * y - qy * x,
    iw = -qx * x - qy * y - qz * z;

    target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return target;
};

/**
 * Copies value of source to this quaternion.
 * @method copy
 * @param {Quaternion} source
 * @return {Quaternion} this
 */
Quaternion.prototype.copy = function(source){
    this.x = source.x;
    this.y = source.y;
    this.z = source.z;
    this.w = source.w;
    return this;
};

/**
 * Convert the quaternion to euler angle representation. Order: YZX, as this page describes: http://www.euclideanspace.com/maths/standards/index.htm
 * @method toEuler
 * @param {Vec3} target
 * @param string order Three-character string e.g. "YZX", which also is default.
 */
Quaternion.prototype.toEuler = function(target,order){
    order = order || "YZX";

    var heading, attitude, bank;
    var x = this.x, y = this.y, z = this.z, w = this.w;

    switch(order){
    case "YZX":
        var test = x*y + z*w;
        if (test > 0.499) { // singularity at north pole
            heading = 2 * Math.atan2(x,w);
            attitude = Math.PI/2;
            bank = 0;
        }
        if (test < -0.499) { // singularity at south pole
            heading = -2 * Math.atan2(x,w);
            attitude = - Math.PI/2;
            bank = 0;
        }
        if(isNaN(heading)){
            var sqx = x*x;
            var sqy = y*y;
            var sqz = z*z;
            heading = Math.atan2(2*y*w - 2*x*z , 1 - 2*sqy - 2*sqz); // Heading
            attitude = Math.asin(2*test); // attitude
            bank = Math.atan2(2*x*w - 2*y*z , 1 - 2*sqx - 2*sqz); // bank
        }
        break;
    default:
        throw new Error("Euler order "+order+" not supported yet.");
    }

    target.y = heading;
    target.z = attitude;
    target.x = bank;
};

/**
 * See http://www.mathworks.com/matlabcentral/fileexchange/20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/content/SpinCalc.m
 * @method setFromEuler
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {String} order The order to apply angles: 'XYZ' or 'YXZ' or any other combination
 */
Quaternion.prototype.setFromEuler = function ( x, y, z, order ) {
    order = order || "XYZ";

    var c1 = Math.cos( x / 2 );
    var c2 = Math.cos( y / 2 );
    var c3 = Math.cos( z / 2 );
    var s1 = Math.sin( x / 2 );
    var s2 = Math.sin( y / 2 );
    var s3 = Math.sin( z / 2 );

    if ( order === 'XYZ' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'YXZ' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    } else if ( order === 'ZXY' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'ZYX' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    } else if ( order === 'YZX' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'XZY' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    }

    return this;

};

Quaternion.prototype.clone = function(){
    return new Quaternion(this.x, this.y, this.z, this.w);
};
},{"./Vec3":30}],29:[function(_dereq_,module,exports){
var Vec3 = _dereq_('./Vec3');
var Quaternion = _dereq_('./Quaternion');

module.exports = Transform;

/**
 * @class Transform
 * @constructor
 */
function Transform(options) {
    options = options || {};

	/**
	 * @property {Vec3} position
	 */
	this.position = new Vec3();
    if(options.position){
        this.position.copy(options.position);
    }

	/**
	 * @property {Quaternion} quaternion
	 */
	this.quaternion = new Quaternion();
    if(options.quaternion){
        this.quaternion.copy(options.quaternion);
    }
}

var tmpQuat = new Quaternion();

/**
 * @static
 * @method pointToLocaFrame
 * @param {Vec3} position
 * @param {Quaternion} quaternion
 * @param {Vec3} worldPoint
 * @param {Vec3} result
 */
Transform.pointToLocalFrame = function(position, quaternion, worldPoint, result){
    var result = result || new Vec3();
    worldPoint.vsub(position, result);
    quaternion.conjugate(tmpQuat);
    tmpQuat.vmult(result, result);
    return result;
};

/**
 * Get a global point in local transform coordinates.
 * @method pointToLocal
 * @param  {Vec3} point
 * @param  {Vec3} result
 * @return {Vec3} The "result" vector object
 */
Transform.prototype.pointToLocal = function(worldPoint, result){
    return Transform.pointToLocalFrame(this.position, this.quaternion, worldPoint, result);
};

/**
 * @static
 * @method pointToWorldFrame
 * @param {Vec3} position
 * @param {Vec3} quaternion
 * @param {Vec3} localPoint
 * @param {Vec3} result
 */
Transform.pointToWorldFrame = function(position, quaternion, localPoint, result){
    var result = result || new Vec3();
    quaternion.vmult(localPoint, result);
    result.vadd(position, result);
    return result;
};

/**
 * Get a local point in global transform coordinates.
 * @method pointToWorld
 * @param  {Vec3} point
 * @param  {Vec3} result
 * @return {Vec3} The "result" vector object
 */
Transform.prototype.pointToWorld = function(localPoint, result){
    return Transform.pointToWorldFrame(this.position, this.quaternion, localPoint, result);
};


Transform.prototype.vectorToWorldFrame = function(localVector, result){
    var result = result || new Vec3();
    this.quaternion.vmult(localVector, result);
    return result;
};

Transform.vectorToWorldFrame = function(quaternion, localVector, result){
    quaternion.vmult(localVector, result);
    return result;
};

Transform.vectorToLocalFrame = function(position, quaternion, worldVector, result){
    var result = result || new Vec3();
    quaternion.w *= -1;
    quaternion.vmult(worldVector, result);
    quaternion.w *= -1;
    return result;
};

},{"./Quaternion":28,"./Vec3":30}],30:[function(_dereq_,module,exports){
module.exports = Vec3;

var Mat3 = _dereq_('./Mat3');

/**
 * 3-dimensional vector
 * @class Vec3
 * @constructor
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @author schteppe
 * @example
 *     var v = new Vec3(1, 2, 3);
 *     console.log('x=' + v.x); // x=1
 */
function Vec3(x,y,z){
    /**
     * @property x
     * @type {Number}
     */
    this.x = x||0.0;

    /**
     * @property y
     * @type {Number}
     */
    this.y = y||0.0;

    /**
     * @property z
     * @type {Number}
     */
    this.z = z||0.0;
}

/**
 * @static
 * @property {Vec3} ZERO
 */
Vec3.ZERO = new Vec3(0, 0, 0);

/**
 * @static
 * @property {Vec3} UNIT_X
 */
Vec3.UNIT_X = new Vec3(1, 0, 0);

/**
 * @static
 * @property {Vec3} UNIT_Y
 */
Vec3.UNIT_Y = new Vec3(0, 1, 0);

/**
 * @static
 * @property {Vec3} UNIT_Z
 */
Vec3.UNIT_Z = new Vec3(0, 0, 1);

/**
 * Vector cross product
 * @method cross
 * @param {Vec3} v
 * @param {Vec3} target Optional. Target to save in.
 * @return {Vec3}
 */
Vec3.prototype.cross = function(v,target){
    var vx=v.x, vy=v.y, vz=v.z, x=this.x, y=this.y, z=this.z;
    target = target || new Vec3();

    target.x = (y * vz) - (z * vy);
    target.y = (z * vx) - (x * vz);
    target.z = (x * vy) - (y * vx);

    return target;
};

/**
 * Set the vectors' 3 elements
 * @method set
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return Vec3
 */
Vec3.prototype.set = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
};

/**
 * Set all components of the vector to zero.
 * @method setZero
 */
Vec3.prototype.setZero = function(){
    this.x = this.y = this.z = 0;
};

/**
 * Vector addition
 * @method vadd
 * @param {Vec3} v
 * @param {Vec3} target Optional.
 * @return {Vec3}
 */
Vec3.prototype.vadd = function(v,target){
    if(target){
        target.x = v.x + this.x;
        target.y = v.y + this.y;
        target.z = v.z + this.z;
    } else {
        return new Vec3(this.x + v.x,
                               this.y + v.y,
                               this.z + v.z);
    }
};

/**
 * Vector subtraction
 * @method vsub
 * @param {Vec3} v
 * @param {Vec3} target Optional. Target to save in.
 * @return {Vec3}
 */
Vec3.prototype.vsub = function(v,target){
    if(target){
        target.x = this.x - v.x;
        target.y = this.y - v.y;
        target.z = this.z - v.z;
    } else {
        return new Vec3(this.x-v.x,
                               this.y-v.y,
                               this.z-v.z);
    }
};

/**
 * Get the cross product matrix a_cross from a vector, such that a x b = a_cross * b = c
 * @method crossmat
 * @see http://www8.cs.umu.se/kurser/TDBD24/VT06/lectures/Lecture6.pdf
 * @return {Mat3}
 */
Vec3.prototype.crossmat = function(){
    return new Mat3([     0,  -this.z,   this.y,
                            this.z,        0,  -this.x,
                           -this.y,   this.x,        0]);
};

/**
 * Normalize the vector. Note that this changes the values in the vector.
 * @method normalize
 * @return {Number} Returns the norm of the vector
 */
Vec3.prototype.normalize = function(){
    var x=this.x, y=this.y, z=this.z;
    var n = Math.sqrt(x*x + y*y + z*z);
    if(n>0.0){
        var invN = 1/n;
        this.x *= invN;
        this.y *= invN;
        this.z *= invN;
    } else {
        // Make something up
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    return n;
};

/**
 * Get the version of this vector that is of length 1.
 * @method unit
 * @param {Vec3} target Optional target to save in
 * @return {Vec3} Returns the unit vector
 */
Vec3.prototype.unit = function(target){
    target = target || new Vec3();
    var x=this.x, y=this.y, z=this.z;
    var ninv = Math.sqrt(x*x + y*y + z*z);
    if(ninv>0.0){
        ninv = 1.0/ninv;
        target.x = x * ninv;
        target.y = y * ninv;
        target.z = z * ninv;
    } else {
        target.x = 1;
        target.y = 0;
        target.z = 0;
    }
    return target;
};

/**
 * Get the length of the vector
 * @method norm
 * @return {Number}
 * @deprecated Use .length() instead
 */
Vec3.prototype.norm = function(){
    var x=this.x, y=this.y, z=this.z;
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Get the length of the vector
 * @method length
 * @return {Number}
 */
Vec3.prototype.length = Vec3.prototype.norm;

/**
 * Get the squared length of the vector
 * @method norm2
 * @return {Number}
 * @deprecated Use .lengthSquared() instead.
 */
Vec3.prototype.norm2 = function(){
    return this.dot(this);
};

/**
 * Get the squared length of the vector.
 * @method lengthSquared
 * @return {Number}
 */
Vec3.prototype.lengthSquared = Vec3.prototype.norm2;

/**
 * Get distance from this point to another point
 * @method distanceTo
 * @param  {Vec3} p
 * @return {Number}
 */
Vec3.prototype.distanceTo = function(p){
    var x=this.x, y=this.y, z=this.z;
    var px=p.x, py=p.y, pz=p.z;
    return Math.sqrt((px-x)*(px-x)+
                     (py-y)*(py-y)+
                     (pz-z)*(pz-z));
};

/**
 * Get squared distance from this point to another point
 * @method distanceSquared
 * @param  {Vec3} p
 * @return {Number}
 */
Vec3.prototype.distanceSquared = function(p){
    var x=this.x, y=this.y, z=this.z;
    var px=p.x, py=p.y, pz=p.z;
    return (px-x)*(px-x) + (py-y)*(py-y) + (pz-z)*(pz-z);
};

/**
 * Multiply all the components of the vector with a scalar.
 * @deprecated Use .scale instead
 * @method mult
 * @param {Number} scalar
 * @param {Vec3} target The vector to save the result in.
 * @return {Vec3}
 * @deprecated Use .scale() instead
 */
Vec3.prototype.mult = function(scalar,target){
    target = target || new Vec3();
    var x = this.x,
        y = this.y,
        z = this.z;
    target.x = scalar * x;
    target.y = scalar * y;
    target.z = scalar * z;
    return target;
};

/**
 * Multiply the vector with a scalar.
 * @method scale
 * @param {Number} scalar
 * @param {Vec3} target
 * @return {Vec3}
 */
Vec3.prototype.scale = Vec3.prototype.mult;

/**
 * Calculate dot product
 * @method dot
 * @param {Vec3} v
 * @return {Number}
 */
Vec3.prototype.dot = function(v){
    return this.x * v.x + this.y * v.y + this.z * v.z;
};

/**
 * @method isZero
 * @return bool
 */
Vec3.prototype.isZero = function(){
    return this.x===0 && this.y===0 && this.z===0;
};

/**
 * Make the vector point in the opposite direction.
 * @method negate
 * @param {Vec3} target Optional target to save in
 * @return {Vec3}
 */
Vec3.prototype.negate = function(target){
    target = target || new Vec3();
    target.x = -this.x;
    target.y = -this.y;
    target.z = -this.z;
    return target;
};

/**
 * Compute two artificial tangents to the vector
 * @method tangents
 * @param {Vec3} t1 Vector object to save the first tangent in
 * @param {Vec3} t2 Vector object to save the second tangent in
 */
var Vec3_tangents_n = new Vec3();
var Vec3_tangents_randVec = new Vec3();
Vec3.prototype.tangents = function(t1,t2){
    var norm = this.norm();
    if(norm>0.0){
        var n = Vec3_tangents_n;
        var inorm = 1/norm;
        n.set(this.x*inorm,this.y*inorm,this.z*inorm);
        var randVec = Vec3_tangents_randVec;
        if(Math.abs(n.x) < 0.9){
            randVec.set(1,0,0);
            n.cross(randVec,t1);
        } else {
            randVec.set(0,1,0);
            n.cross(randVec,t1);
        }
        n.cross(t1,t2);
    } else {
        // The normal length is zero, make something up
        t1.set(1, 0, 0);
        t2.set(0, 1, 0);
    }
};

/**
 * Converts to a more readable format
 * @method toString
 * @return string
 */
Vec3.prototype.toString = function(){
    return this.x+","+this.y+","+this.z;
};

/**
 * Converts to an array
 * @method toArray
 * @return Array
 */
Vec3.prototype.toArray = function(){
    return [this.x, this.y, this.z];
};

/**
 * Copies value of source to this vector.
 * @method copy
 * @param {Vec3} source
 * @return {Vec3} this
 */
Vec3.prototype.copy = function(source){
    this.x = source.x;
    this.y = source.y;
    this.z = source.z;
    return this;
};


/**
 * Do a linear interpolation between two vectors
 * @method lerp
 * @param {Vec3} v
 * @param {Number} t A number between 0 and 1. 0 will make this function return u, and 1 will make it return v. Numbers in between will generate a vector in between them.
 * @param {Vec3} target
 */
Vec3.prototype.lerp = function(v,t,target){
    var x=this.x, y=this.y, z=this.z;
    target.x = x + (v.x-x)*t;
    target.y = y + (v.y-y)*t;
    target.z = z + (v.z-z)*t;
};

/**
 * Check if a vector equals is almost equal to another one.
 * @method almostEquals
 * @param {Vec3} v
 * @param {Number} precision
 * @return bool
 */
Vec3.prototype.almostEquals = function(v,precision){
    if(precision===undefined){
        precision = 1e-6;
    }
    if( Math.abs(this.x-v.x)>precision ||
        Math.abs(this.y-v.y)>precision ||
        Math.abs(this.z-v.z)>precision){
        return false;
    }
    return true;
};

/**
 * Check if a vector is almost zero
 * @method almostZero
 * @param {Number} precision
 */
Vec3.prototype.almostZero = function(precision){
    if(precision===undefined){
        precision = 1e-6;
    }
    if( Math.abs(this.x)>precision ||
        Math.abs(this.y)>precision ||
        Math.abs(this.z)>precision){
        return false;
    }
    return true;
};

var antip_neg = new Vec3();

/**
 * Check if the vector is anti-parallel to another vector.
 * @method isAntiparallelTo
 * @param  {Vec3}  v
 * @param  {Number}  precision Set to zero for exact comparisons
 * @return {Boolean}
 */
Vec3.prototype.isAntiparallelTo = function(v,precision){
    this.negate(antip_neg);
    return antip_neg.almostEquals(v,precision);
};

/**
 * Clone the vector
 * @method clone
 * @return {Vec3}
 */
Vec3.prototype.clone = function(){
    return new Vec3(this.x, this.y, this.z);
};
},{"./Mat3":27}],31:[function(_dereq_,module,exports){
module.exports = Body;

var EventTarget = _dereq_('../utils/EventTarget');
var Shape = _dereq_('../shapes/Shape');
var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Quaternion = _dereq_('../math/Quaternion');
var Material = _dereq_('../material/Material');
var AABB = _dereq_('../collision/AABB');
var Box = _dereq_('../shapes/Box');

/**
 * Base class for all body types.
 * @class Body
 * @constructor
 * @extends EventTarget
 * @param {object} [options]
 * @param {Vec3} [options.position]
 * @param {Vec3} [options.velocity]
 * @param {Vec3} [options.angularVelocity]
 * @param {Quaternion} [options.quaternion]
 * @param {number} [options.mass]
 * @param {Material} [options.material]
 * @param {number} [options.type]
 * @param {number} [options.linearDamping=0.01]
 * @param {number} [options.angularDamping=0.01]
 * @param {boolean} [options.allowSleep=true]
 * @param {number} [options.sleepSpeedLimit=0.1]
 * @param {number} [options.sleepTimeLimit=1]
 * @param {number} [options.collisionFilterGroup=1]
 * @param {number} [options.collisionFilterMask=1]
 * @param {boolean} [options.fixedRotation=false]
 * @param {Body} [options.shape]
 * @example
 *     var body = new Body({
 *         mass: 1
 *     });
 *     var shape = new Sphere(1);
 *     body.addShape(shape);
 *     world.add(body);
 */
function Body(options){
    options = options || {};

    EventTarget.apply(this);

    this.id = Body.idCounter++;

    /**
     * Reference to the world the body is living in
     * @property world
     * @type {World}
     */
    this.world = null;

    /**
     * Callback function that is used BEFORE stepping the system. Use it to apply forces, for example. Inside the function, "this" will refer to this Body object.
     * @property preStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    this.preStep = null;

    /**
     * Callback function that is used AFTER stepping the system. Inside the function, "this" will refer to this Body object.
     * @property postStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    this.postStep = null;

    this.vlambda = new Vec3();

    /**
     * @property {Number} collisionFilterGroup
     */
    this.collisionFilterGroup = typeof(options.collisionFilterGroup) === 'number' ? options.collisionFilterGroup : 1;

    /**
     * @property {Number} collisionFilterMask
     */
    this.collisionFilterMask = typeof(options.collisionFilterMask) === 'number' ? options.collisionFilterMask : 1;

    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {Number} collisionResponse
     */
	this.collisionResponse = true;

    /**
     * @property position
     * @type {Vec3}
     */
    this.position = new Vec3();

    if(options.position){
        this.position.copy(options.position);
    }

    /**
     * @property {Vec3} previousPosition
     */
    this.previousPosition = new Vec3();

    /**
     * Initial position of the body
     * @property initPosition
     * @type {Vec3}
     */
    this.initPosition = new Vec3();

    /**
     * @property velocity
     * @type {Vec3}
     */
    this.velocity = new Vec3();

    if(options.velocity){
        this.velocity.copy(options.velocity);
    }

    /**
     * @property initVelocity
     * @type {Vec3}
     */
    this.initVelocity = new Vec3();

    /**
     * Linear force on the body
     * @property force
     * @type {Vec3}
     */
    this.force = new Vec3();

    var mass = typeof(options.mass) === 'number' ? options.mass : 0;

    /**
     * @property mass
     * @type {Number}
     * @default 0
     */
    this.mass = mass;

    /**
     * @property invMass
     * @type {Number}
     */
    this.invMass = mass > 0 ? 1.0 / mass : 0;

    /**
     * @property material
     * @type {Material}
     */
    this.material = options.material || null;

    /**
     * @property linearDamping
     * @type {Number}
     */
    this.linearDamping = typeof(options.linearDamping) === 'number' ? options.linearDamping : 0.01;

    /**
     * One of: Body.DYNAMIC, Body.STATIC and Body.KINEMATIC.
     * @property type
     * @type {Number}
     */
    this.type = (mass <= 0.0 ? Body.STATIC : Body.DYNAMIC);
    if(typeof(options.type) === typeof(Body.STATIC)){
        this.type = options.type;
    }

    /**
     * If true, the body will automatically fall to sleep.
     * @property allowSleep
     * @type {Boolean}
     * @default true
     */
    this.allowSleep = typeof(options.allowSleep) !== 'undefined' ? options.allowSleep : true;

    /**
     * Current sleep state.
     * @property sleepState
     * @type {Number}
     */
    this.sleepState = 0;

    /**
     * If the speed (the norm of the velocity) is smaller than this value, the body is considered sleepy.
     * @property sleepSpeedLimit
     * @type {Number}
     * @default 0.1
     */
    this.sleepSpeedLimit = typeof(options.sleepSpeedLimit) !== 'undefined' ? options.sleepSpeedLimit : 0.1;

    /**
     * If the body has been sleepy for this sleepTimeLimit seconds, it is considered sleeping.
     * @property sleepTimeLimit
     * @type {Number}
     * @default 1
     */
    this.sleepTimeLimit = typeof(options.sleepTimeLimit) !== 'undefined' ? options.sleepTimeLimit : 1;

    this.timeLastSleepy = 0;

    this._wakeUpAfterNarrowphase = false;


    /**
     * Rotational force on the body, around center of mass
     * @property {Vec3} torque
     */
    this.torque = new Vec3();

    /**
     * Orientation of the body
     * @property quaternion
     * @type {Quaternion}
     */
    this.quaternion = new Quaternion();

    if(options.quaternion){
        this.quaternion.copy(options.quaternion);
    }

    /**
     * @property initQuaternion
     * @type {Quaternion}
     */
    this.initQuaternion = new Quaternion();

    /**
     * @property angularVelocity
     * @type {Vec3}
     */
    this.angularVelocity = new Vec3();

    if(options.angularVelocity){
        this.angularVelocity.copy(options.angularVelocity);
    }

    /**
     * @property initAngularVelocity
     * @type {Vec3}
     */
    this.initAngularVelocity = new Vec3();

    this.interpolatedPosition = new Vec3();
    this.interpolatedQuaternion = new Quaternion();

    /**
     * @property shapes
     * @type {array}
     */
    this.shapes = [];

    /**
     * @property shapeOffsets
     * @type {array}
     */
    this.shapeOffsets = [];

    /**
     * @property shapeOrientations
     * @type {array}
     */
    this.shapeOrientations = [];

    /**
     * @property inertia
     * @type {Vec3}
     */
    this.inertia = new Vec3();

    /**
     * @property {Vec3} invInertia
     */
    this.invInertia = new Vec3();

    /**
     * @property {Mat3} invInertiaWorld
     */
    this.invInertiaWorld = new Mat3();

    this.invMassSolve = 0;

    /**
     * @property {Vec3} invInertiaSolve
     */
    this.invInertiaSolve = new Vec3();

    /**
     * @property {Mat3} invInertiaWorldSolve
     */
    this.invInertiaWorldSolve = new Mat3();

    /**
     * Set to true if you don't want the body to rotate. Make sure to run .updateMassProperties() after changing this.
     * @property {Boolean} fixedRotation
     * @default false
     */
    this.fixedRotation = typeof(options.fixedRotation) !== "undefined" ? options.fixedRotation : false;

    /**
     * @property {Number} angularDamping
     */
    this.angularDamping = typeof(options.angularDamping) !== 'undefined' ? options.angularDamping : 0.01;

    /**
     * @property aabb
     * @type {AABB}
     */
    this.aabb = new AABB();

    /**
     * Indicates if the AABB needs to be updated before use.
     * @property aabbNeedsUpdate
     * @type {Boolean}
     */
    this.aabbNeedsUpdate = true;

    this.wlambda = new Vec3();

    if(options.shape){
        this.addShape(options.shape);
    }

    this.updateMassProperties();
}
Body.prototype = new EventTarget();
Body.prototype.constructor = Body;

/**
 * A dynamic body is fully simulated. Can be moved manually by the user, but normally they move according to forces. A dynamic body can collide with all body types. A dynamic body always has finite, non-zero mass.
 * @static
 * @property DYNAMIC
 * @type {Number}
 */
Body.DYNAMIC = 1;

/**
 * A static body does not move during simulation and behaves as if it has infinite mass. Static bodies can be moved manually by setting the position of the body. The velocity of a static body is always zero. Static bodies do not collide with other static or kinematic bodies.
 * @static
 * @property STATIC
 * @type {Number}
 */
Body.STATIC = 2;

/**
 * A kinematic body moves under simulation according to its velocity. They do not respond to forces. They can be moved manually, but normally a kinematic body is moved by setting its velocity. A kinematic body behaves as if it has infinite mass. Kinematic bodies do not collide with other static or kinematic bodies.
 * @static
 * @property KINEMATIC
 * @type {Number}
 */
Body.KINEMATIC = 4;



/**
 * @static
 * @property AWAKE
 * @type {number}
 */
Body.AWAKE = 0;

/**
 * @static
 * @property SLEEPY
 * @type {number}
 */
Body.SLEEPY = 1;

/**
 * @static
 * @property SLEEPING
 * @type {number}
 */
Body.SLEEPING = 2;

Body.idCounter = 0;

/**
 * Wake the body up.
 * @method wakeUp
 */
Body.prototype.wakeUp = function(){
    var s = this.sleepState;
    this.sleepState = 0;
    if(s === Body.SLEEPING){
        this.dispatchEvent({type:"wakeup"});
    }
};

/**
 * Force body sleep
 * @method sleep
 */
Body.prototype.sleep = function(){
    this.sleepState = Body.SLEEPING;
    this.velocity.set(0,0,0);
    this.angularVelocity.set(0,0,0);
};

Body.sleepyEvent = {
    type: "sleepy"
};

Body.sleepEvent = {
    type: "sleep"
};

/**
 * Called every timestep to update internal sleep timer and change sleep state if needed.
 * @method sleepTick
 * @param {Number} time The world time in seconds
 */
Body.prototype.sleepTick = function(time){
    if(this.allowSleep){
        var sleepState = this.sleepState;
        var speedSquared = this.velocity.norm2() + this.angularVelocity.norm2();
        var speedLimitSquared = Math.pow(this.sleepSpeedLimit,2);
        if(sleepState===Body.AWAKE && speedSquared < speedLimitSquared){
            this.sleepState = Body.SLEEPY; // Sleepy
            this.timeLastSleepy = time;
            this.dispatchEvent(Body.sleepyEvent);
        } else if(sleepState===Body.SLEEPY && speedSquared > speedLimitSquared){
            this.wakeUp(); // Wake up
        } else if(sleepState===Body.SLEEPY && (time - this.timeLastSleepy ) > this.sleepTimeLimit){
            this.sleep(); // Sleeping
            this.dispatchEvent(Body.sleepEvent);
        }
    }
};

/**
 * If the body is sleeping, it should be immovable / have infinite mass during solve. We solve it by having a separate "solve mass".
 * @method updateSolveMassProperties
 */
Body.prototype.updateSolveMassProperties = function(){
    if(this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC){
        this.invMassSolve = 0;
        this.invInertiaSolve.setZero();
        this.invInertiaWorldSolve.setZero();
    } else {
        this.invMassSolve = this.invMass;
        this.invInertiaSolve.copy(this.invInertia);
        this.invInertiaWorldSolve.copy(this.invInertiaWorld);
    }
};

/**
 * Convert a world point to local body frame.
 * @method pointToLocalFrame
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.pointToLocalFrame = function(worldPoint,result){
    var result = result || new Vec3();
    worldPoint.vsub(this.position,result);
    this.quaternion.conjugate().vmult(result,result);
    return result;
};

/**
 * Convert a world vector to local body frame.
 * @method vectorToLocalFrame
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.vectorToLocalFrame = function(worldVector, result){
    var result = result || new Vec3();
    this.quaternion.conjugate().vmult(worldVector,result);
    return result;
};

/**
 * Convert a local body point to world frame.
 * @method pointToWorldFrame
 * @param  {Vec3} localPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.pointToWorldFrame = function(localPoint,result){
    var result = result || new Vec3();
    this.quaternion.vmult(localPoint,result);
    result.vadd(this.position,result);
    return result;
};

/**
 * Convert a local body point to world frame.
 * @method vectorToWorldFrame
 * @param  {Vec3} localVector
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.vectorToWorldFrame = function(localVector, result){
    var result = result || new Vec3();
    this.quaternion.vmult(localVector, result);
    return result;
};

var tmpVec = new Vec3();
var tmpQuat = new Quaternion();

/**
 * Add a shape to the body with a local offset and orientation.
 * @method addShape
 * @param {Shape} shape
 * @param {Vec3} offset
 * @param {Quaternion} quaternion
 * @return {Body} The body object, for chainability.
 */
Body.prototype.addShape = function(shape, _offset, _orientation){
    var offset = new Vec3();
    var orientation = new Quaternion();

    if(_offset){
        offset.copy(_offset);
    }
    if(_orientation){
        orientation.copy(_orientation);
    }

    this.shapes.push(shape);
    this.shapeOffsets.push(offset);
    this.shapeOrientations.push(orientation);
    this.updateMassProperties();
    this.updateBoundingRadius();

    this.aabbNeedsUpdate = true;

    return this;
};

/**
 * Update the bounding radius of the body. Should be done if any of the shapes are changed.
 * @method updateBoundingRadius
 */
Body.prototype.updateBoundingRadius = function(){
    var shapes = this.shapes,
        shapeOffsets = this.shapeOffsets,
        N = shapes.length,
        radius = 0;

    for(var i=0; i!==N; i++){
        var shape = shapes[i];
        shape.updateBoundingSphereRadius();
        var offset = shapeOffsets[i].norm(),
            r = shape.boundingSphereRadius;
        if(offset + r > radius){
            radius = offset + r;
        }
    }

    this.boundingRadius = radius;
};

var computeAABB_shapeAABB = new AABB();

/**
 * Updates the .aabb
 * @method computeAABB
 * @todo rename to updateAABB()
 */
Body.prototype.computeAABB = function(){
    var shapes = this.shapes,
        shapeOffsets = this.shapeOffsets,
        shapeOrientations = this.shapeOrientations,
        N = shapes.length,
        offset = tmpVec,
        orientation = tmpQuat,
        bodyQuat = this.quaternion,
        aabb = this.aabb,
        shapeAABB = computeAABB_shapeAABB;

    for(var i=0; i!==N; i++){
        var shape = shapes[i];

        // Get shape world quaternion
        shapeOrientations[i].mult(bodyQuat, orientation);

        // Get shape world position
        orientation.vmult(shapeOffsets[i], offset);
        offset.vadd(this.position, offset);

        // vec2.rotate(offset, shapeOffsets[i], bodyAngle);
        // vec2.add(offset, offset, this.position);

        // Get shape AABB
        shape.calculateWorldAABB(offset, orientation, shapeAABB.lowerBound, shapeAABB.upperBound);

        if(i === 0){
            aabb.copy(shapeAABB);
        } else {
            aabb.extend(shapeAABB);
        }
    }

    this.aabbNeedsUpdate = false;
};

var uiw_m1 = new Mat3(),
    uiw_m2 = new Mat3(),
    uiw_m3 = new Mat3();

/**
 * Update .inertiaWorld and .invInertiaWorld
 * @method updateInertiaWorld
 */
Body.prototype.updateInertiaWorld = function(force){
    var I = this.invInertia;
    if (I.x === I.y && I.y === I.z && !force) {
        // If inertia M = s*I, where I is identity and s a scalar, then
        //    R*M*R' = R*(s*I)*R' = s*R*I*R' = s*R*R' = s*I = M
        // where R is the rotation matrix.
        // In other words, we don't have to transform the inertia if all
        // inertia diagonal entries are equal.
    } else {
        var m1 = uiw_m1,
            m2 = uiw_m2,
            m3 = uiw_m3;
        m1.setRotationFromQuaternion(this.quaternion);
        m1.transpose(m2);
        m1.scale(I,m1);
        m1.mmult(m2,this.invInertiaWorld);
        //m3.getTrace(this.invInertiaWorld);
    }

    /*
    this.quaternion.vmult(this.inertia,this.inertiaWorld);
    this.quaternion.vmult(this.invInertia,this.invInertiaWorld);
    */
};

/**
 * Apply force to a world point. This could for example be a point on the Body surface. Applying force this way will add to Body.force and Body.torque.
 * @method applyForce
 * @param  {Vec3} force The amount of force to add.
 * @param  {Vec3} worldPoint A world point to apply the force on.
 */
var Body_applyForce_r = new Vec3();
var Body_applyForce_rotForce = new Vec3();
Body.prototype.applyForce = function(force,worldPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    // Compute point position relative to the body center
    var r = Body_applyForce_r;
    worldPoint.vsub(this.position,r);

    // Compute produced rotational force
    var rotForce = Body_applyForce_rotForce;
    r.cross(force,rotForce);

    // Add linear force
    this.force.vadd(force,this.force);

    // Add rotational force
    this.torque.vadd(rotForce,this.torque);
};

/**
 * Apply force to a local point in the body.
 * @method applyLocalForce
 * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
 * @param  {Vec3} localPoint A local point in the body to apply the force on.
 */
var Body_applyLocalForce_worldForce = new Vec3();
var Body_applyLocalForce_worldPoint = new Vec3();
Body.prototype.applyLocalForce = function(localForce, localPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    var worldForce = Body_applyLocalForce_worldForce;
    var worldPoint = Body_applyLocalForce_worldPoint;

    // Transform the force vector to world space
    this.vectorToWorldFrame(localForce, worldForce);
    this.pointToWorldFrame(localPoint, worldPoint);

    this.applyForce(worldForce, worldPoint);
};

/**
 * Apply impulse to a world point. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.
 * @method applyImpulse
 * @param  {Vec3} impulse The amount of impulse to add.
 * @param  {Vec3} worldPoint A world point to apply the force on.
 */
var Body_applyImpulse_r = new Vec3();
var Body_applyImpulse_velo = new Vec3();
var Body_applyImpulse_rotVelo = new Vec3();
Body.prototype.applyImpulse = function(impulse, worldPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    // Compute point position relative to the body center
    var r = Body_applyImpulse_r;
    worldPoint.vsub(this.position,r);

    // Compute produced central impulse velocity
    var velo = Body_applyImpulse_velo;
    velo.copy(impulse);
    velo.mult(this.invMass,velo);

    // Add linear impulse
    this.velocity.vadd(velo, this.velocity);

    // Compute produced rotational impulse velocity
    var rotVelo = Body_applyImpulse_rotVelo;
    r.cross(impulse,rotVelo);

    /*
    rotVelo.x *= this.invInertia.x;
    rotVelo.y *= this.invInertia.y;
    rotVelo.z *= this.invInertia.z;
    */
    this.invInertiaWorld.vmult(rotVelo,rotVelo);

    // Add rotational Impulse
    this.angularVelocity.vadd(rotVelo, this.angularVelocity);
};

/**
 * Apply locally-defined impulse to a local point in the body.
 * @method applyLocalImpulse
 * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
 * @param  {Vec3} localPoint A local point in the body to apply the force on.
 */
var Body_applyLocalImpulse_worldImpulse = new Vec3();
var Body_applyLocalImpulse_worldPoint = new Vec3();
Body.prototype.applyLocalImpulse = function(localImpulse, localPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    var worldImpulse = Body_applyLocalImpulse_worldImpulse;
    var worldPoint = Body_applyLocalImpulse_worldPoint;

    // Transform the force vector to world space
    this.vectorToWorldFrame(localImpulse, worldImpulse);
    this.pointToWorldFrame(localPoint, worldPoint);

    this.applyImpulse(worldImpulse, worldPoint);
};

var Body_updateMassProperties_halfExtents = new Vec3();

/**
 * Should be called whenever you change the body shape or mass.
 * @method updateMassProperties
 */
Body.prototype.updateMassProperties = function(){
    var halfExtents = Body_updateMassProperties_halfExtents;

    this.invMass = this.mass > 0 ? 1.0 / this.mass : 0;
    var I = this.inertia;
    var fixed = this.fixedRotation;

    // Approximate with AABB box
    this.computeAABB();
    halfExtents.set(
        (this.aabb.upperBound.x-this.aabb.lowerBound.x) / 2,
        (this.aabb.upperBound.y-this.aabb.lowerBound.y) / 2,
        (this.aabb.upperBound.z-this.aabb.lowerBound.z) / 2
    );
    Box.calculateInertia(halfExtents, this.mass, I);

    this.invInertia.set(
        I.x > 0 && !fixed ? 1.0 / I.x : 0,
        I.y > 0 && !fixed ? 1.0 / I.y : 0,
        I.z > 0 && !fixed ? 1.0 / I.z : 0
    );
    this.updateInertiaWorld(true);
};

/**
 * Get world velocity of a point in the body.
 * @method getVelocityAtWorldPoint
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3} The result vector.
 */
Body.prototype.getVelocityAtWorldPoint = function(worldPoint, result){
    var r = new Vec3();
    worldPoint.vsub(this.position, r);
    this.angularVelocity.cross(r, result);
    this.velocity.vadd(result, result);
    return result;
};

},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(_dereq_,module,exports){
var Body = _dereq_('./Body');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var RaycastResult = _dereq_('../collision/RaycastResult');
var Ray = _dereq_('../collision/Ray');
var WheelInfo = _dereq_('../objects/WheelInfo');

module.exports = RaycastVehicle;

/**
 * Vehicle helper class that casts rays from the wheel positions towards the ground and applies forces.
 * @class RaycastVehicle
 * @constructor
 * @param {object} [options]
 * @param {Body} [options.chassisBody] The car chassis body.
 * @param {integer} [options.indexRightAxis] Axis to use for right. x=0, y=1, z=2
 * @param {integer} [options.indexLeftAxis]
 * @param {integer} [options.indexUpAxis]
 */
function RaycastVehicle(options){

    /**
     * @property {Body} chassisBody
     */
    this.chassisBody = options.chassisBody;

    /**
     * An array of WheelInfo objects.
     * @property {array} wheelInfos
     */
    this.wheelInfos = [];

    /**
     * Will be set to true if the car is sliding.
     * @property {boolean} sliding
     */
    this.sliding = false;

    /**
     * @property {World} world
     */
    this.world = null;

    /**
     * Index of the right axis, 0=x, 1=y, 2=z
     * @property {integer} indexRightAxis
     * @default 1
     */
    this.indexRightAxis = typeof(options.indexRightAxis) !== 'undefined' ? options.indexRightAxis : 1;

    /**
     * Index of the forward axis, 0=x, 1=y, 2=z
     * @property {integer} indexForwardAxis
     * @default 0
     */
    this.indexForwardAxis = typeof(options.indexForwardAxis) !== 'undefined' ? options.indexForwardAxis : 0;

    /**
     * Index of the up axis, 0=x, 1=y, 2=z
     * @property {integer} indexUpAxis
     * @default 2
     */
    this.indexUpAxis = typeof(options.indexUpAxis) !== 'undefined' ? options.indexUpAxis : 2;
}

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();
var tmpVec3 = new Vec3();
var tmpVec4 = new Vec3();
var tmpVec5 = new Vec3();
var tmpVec6 = new Vec3();
var tmpRay = new Ray();

/**
 * Add a wheel. For information about the options, see WheelInfo.
 * @method addWheel
 * @param {object} [options]
 */
RaycastVehicle.prototype.addWheel = function(options){
    options = options || {};

    var info = new WheelInfo(options);
    var index = this.wheelInfos.length;
    this.wheelInfos.push(info);

    return index;
};

/**
 * Set the steering value of a wheel.
 * @method setSteeringValue
 * @param {number} value
 * @param {integer} wheelIndex
 */
RaycastVehicle.prototype.setSteeringValue = function(value, wheelIndex){
    var wheel = this.wheelInfos[wheelIndex];
    wheel.steering = value;
};

var torque = new Vec3();

/**
 * Set the wheel force to apply on one of the wheels each time step
 * @method applyEngineForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RaycastVehicle.prototype.applyEngineForce = function(value, wheelIndex){
    this.wheelInfos[wheelIndex].engineForce = value;
};

/**
 * Set the braking force of a wheel
 * @method setBrake
 * @param {number} brake
 * @param {integer} wheelIndex
 */
RaycastVehicle.prototype.setBrake = function(brake, wheelIndex){
    this.wheelInfos[wheelIndex].brake = brake;
};

/**
 * Add the vehicle including its constraints to the world.
 * @method addToWorld
 * @param {World} world
 */
RaycastVehicle.prototype.addToWorld = function(world){
    var constraints = this.constraints;
    world.add(this.chassisBody);
    var that = this;
    this.preStepCallback = function(){
        that.updateVehicle(world.dt);
    };
    world.addEventListener('preStep', this.preStepCallback);
    this.world = world;
};

/**
 * Get one of the wheel axles, world-oriented.
 * @private
 * @method getVehicleAxisWorld
 * @param  {integer} axisIndex
 * @param  {Vec3} result
 */
RaycastVehicle.prototype.getVehicleAxisWorld = function(axisIndex, result){
    result.set(
        axisIndex === 0 ? 1 : 0,
        axisIndex === 1 ? 1 : 0,
        axisIndex === 2 ? 1 : 0
    );
    this.chassisBody.vectorToWorldFrame(result, result);
};

RaycastVehicle.prototype.updateVehicle = function(timeStep){
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;
    var chassisBody = this.chassisBody;

    for (var i = 0; i < numWheels; i++) {
        this.updateWheelTransform(i);
    }

    this.currentVehicleSpeedKmHour = 3.6 * chassisBody.velocity.norm();

    var forwardWorld = new Vec3();
    this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);

    if (forwardWorld.dot(chassisBody.velocity) < 0){
        this.currentVehicleSpeedKmHour *= -1;
    }

    // simulate suspension
    for (var i = 0; i < numWheels; i++) {
        this.castRay(wheelInfos[i]);
    }

    this.updateSuspension(timeStep);

    var impulse = new Vec3();
    var relpos = new Vec3();
    for (var i = 0; i < numWheels; i++) {
        //apply suspension force
        var wheel = wheelInfos[i];
        var suspensionForce = wheel.suspensionForce;
        if (suspensionForce > wheel.maxSuspensionForce) {
            suspensionForce = wheel.maxSuspensionForce;
        }
        wheel.raycastResult.hitNormalWorld.scale(suspensionForce * timeStep, impulse);

        wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, relpos);
        chassisBody.applyImpulse(impulse, wheel.raycastResult.hitPointWorld/*relpos*/);
    }

    this.updateFriction(timeStep);

    var hitNormalWorldScaledWithProj = new Vec3();
    var fwd  = new Vec3();
    var vel = new Vec3();
    for (i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];
        //var relpos = new Vec3();
        //wheel.chassisConnectionPointWorld.vsub(chassisBody.position, relpos);
        chassisBody.getVelocityAtWorldPoint(wheel.chassisConnectionPointWorld, vel);

        // Hack to get the rotation in the correct direction
        var m = 1;
        switch(this.indexUpAxis){
        case 1:
            m = -1;
            break;
        }

        if (wheel.isInContact) {

            this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
            var proj = fwd.dot(wheel.raycastResult.hitNormalWorld);
            wheel.raycastResult.hitNormalWorld.scale(proj, hitNormalWorldScaledWithProj);

            fwd.vsub(hitNormalWorldScaledWithProj, fwd);

            var proj2 = fwd.dot(vel);
            wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
        }

        if((wheel.sliding || !wheel.isInContact) && wheel.engineForce !== 0 && wheel.useCustomSlidingRotationalSpeed){
            // Apply custom rotation when accelerating and sliding
            wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep;
        }

        // Lock wheels
        if(Math.abs(wheel.brake) > Math.abs(wheel.engineForce)){
            wheel.deltaRotation = 0;
        }

        wheel.rotation += wheel.deltaRotation; // Use the old value
        wheel.deltaRotation *= 0.99; // damping of rotation when not in contact
    }
};

RaycastVehicle.prototype.updateSuspension = function(deltaTime) {
    var chassisBody = this.chassisBody;
    var chassisMass = chassisBody.mass;
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;

    for (var w_it = 0; w_it < numWheels; w_it++){
        var wheel = wheelInfos[w_it];

        if (wheel.isInContact){
            var force;

            // Spring
            var susp_length = wheel.suspensionRestLength;
            var current_length = wheel.suspensionLength;
            var length_diff = (susp_length - current_length);

            force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;

            // Damper
            var projected_rel_vel = wheel.suspensionRelativeVelocity;
            var susp_damping;
            if (projected_rel_vel < 0) {
                susp_damping = wheel.dampingCompression;
            } else {
                susp_damping = wheel.dampingRelaxation;
            }
            force -= susp_damping * projected_rel_vel;

            wheel.suspensionForce = force * chassisMass;
            if (wheel.suspensionForce < 0) {
                wheel.suspensionForce = 0;
            }
        } else {
            wheel.suspensionForce = 0;
        }
    }
};

/**
 * Remove the vehicle including its constraints from the world.
 * @method removeFromWorld
 * @param {World} world
 */
RaycastVehicle.prototype.removeFromWorld = function(world){
    var constraints = this.constraints;
    world.remove(this.chassisBody);
    world.removeEventListener('preStep', this.preStepCallback);
    this.world = null;
};

var castRay_rayvector = new Vec3();
var castRay_target = new Vec3();
RaycastVehicle.prototype.castRay = function(wheel) {
    var rayvector = castRay_rayvector;
    var target = castRay_target;

    this.updateWheelTransformWorld(wheel);
    var chassisBody = this.chassisBody;

    var depth = -1;

    var raylen = wheel.suspensionRestLength + wheel.radius;

    wheel.directionWorld.scale(raylen, rayvector);
    var source = wheel.chassisConnectionPointWorld;
    source.vadd(rayvector, target);
    var raycastResult = wheel.raycastResult;

    var param = 0;

    raycastResult.reset();
    // Turn off ray collision with the chassis temporarily
    var oldState = chassisBody.collisionResponse;
    chassisBody.collisionResponse = false;

    // Cast ray against world
    this.world.rayTest(source, target, raycastResult);
    chassisBody.collisionResponse = oldState;

    var object = raycastResult.body;

    wheel.raycastResult.groundObject = 0;

    if (object) {
        depth = raycastResult.distance;
        wheel.raycastResult.hitNormalWorld  = raycastResult.hitNormalWorld;
        wheel.isInContact = true;

        var hitDistance = raycastResult.distance;
        wheel.suspensionLength = hitDistance - wheel.radius;

        // clamp on max suspension travel
        var minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel;
        var maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel;
        if (wheel.suspensionLength < minSuspensionLength) {
            wheel.suspensionLength = minSuspensionLength;
        }
        if (wheel.suspensionLength > maxSuspensionLength) {
            wheel.suspensionLength = maxSuspensionLength;
            wheel.raycastResult.reset();
        }

        var denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld);

        var chassis_velocity_at_contactPoint = new Vec3();
        chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint);

        var projVel = wheel.raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );

        if (denominator >= -0.1) {
            wheel.suspensionRelativeVelocity = 0;
            wheel.clippedInvContactDotSuspension = 1 / 0.1;
        } else {
            var inv = -1 / denominator;
            wheel.suspensionRelativeVelocity = projVel * inv;
            wheel.clippedInvContactDotSuspension = inv;
        }

    } else {

        //put wheel info as in rest position
        wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel;
        wheel.suspensionRelativeVelocity = 0.0;
        wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld);
        wheel.clippedInvContactDotSuspension = 1.0;
    }

    return depth;
};

RaycastVehicle.prototype.updateWheelTransformWorld = function(wheel){
    wheel.isInContact = false;
    var chassisBody = this.chassisBody;
    chassisBody.pointToWorldFrame(wheel.chassisConnectionPointLocal, wheel.chassisConnectionPointWorld);
    chassisBody.vectorToWorldFrame(wheel.directionLocal, wheel.directionWorld);
    chassisBody.vectorToWorldFrame(wheel.axleLocal, wheel.axleWorld);
};


/**
 * Update one of the wheel transform.
 * Note when rendering wheels: during each step, wheel transforms are updated BEFORE the chassis; ie. their position becomes invalid after the step. Thus when you render wheels, you must update wheel transforms before rendering them. See raycastVehicle demo for an example.
 * @method updateWheelTransform
 * @param {integer} wheelIndex The wheel index to update.
 */
RaycastVehicle.prototype.updateWheelTransform = function(wheelIndex){
    var up = tmpVec4;
    var right = tmpVec5;
    var fwd = tmpVec6;

    var wheel = this.wheelInfos[wheelIndex];
    this.updateWheelTransformWorld(wheel);

    wheel.directionLocal.scale(-1, up);
    right.copy(wheel.axleLocal);
    up.cross(right, fwd);
    fwd.normalize();
    right.normalize();

    // Rotate around steering over the wheelAxle
    var steering = wheel.steering;
    var steeringOrn = new Quaternion();
    steeringOrn.setFromAxisAngle(up, steering);

    var rotatingOrn = new Quaternion();
    rotatingOrn.setFromAxisAngle(right, wheel.rotation);

    // World rotation of the wheel
    var q = wheel.worldTransform.quaternion;
    this.chassisBody.quaternion.mult(steeringOrn, q);
    q.mult(rotatingOrn, q);

    q.normalize();

    // world position of the wheel
    var p = wheel.worldTransform.position;
    p.copy(wheel.directionWorld);
    p.scale(wheel.suspensionLength, p);
    p.vadd(wheel.chassisConnectionPointWorld, p);
};

var directions = [
    new Vec3(1, 0, 0),
    new Vec3(0, 1, 0),
    new Vec3(0, 0, 1)
];

/**
 * Get the world transform of one of the wheels
 * @method getWheelTransformWorld
 * @param  {integer} wheelIndex
 * @return {Transform}
 */
RaycastVehicle.prototype.getWheelTransformWorld = function(wheelIndex) {
    return this.wheelInfos[wheelIndex].worldTransform;
};


var updateFriction_surfNormalWS_scaled_proj = new Vec3();
var updateFriction_axle = [];
var updateFriction_forwardWS = [];
var sideFrictionStiffness2 = 1;
RaycastVehicle.prototype.updateFriction = function(timeStep) {
    var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;

    //calculate the impulse, so that the wheels don't move sidewards
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;
    var chassisBody = this.chassisBody;
    var forwardWS = updateFriction_forwardWS;
    var axle = updateFriction_axle;

    var numWheelsOnGround = 0;

    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];

        var groundObject = wheel.raycastResult.body;
        if (groundObject){
            numWheelsOnGround++;
        }

        wheel.sideImpulse = 0;
        wheel.forwardImpulse = 0;
        if(!forwardWS[i]){
            forwardWS[i] = new Vec3();
        }
        if(!axle[i]){
            axle[i] = new Vec3();
        }
    }

    for (var i = 0; i < numWheels; i++){
        var wheel = wheelInfos[i];

        var groundObject = wheel.raycastResult.body;

        if (groundObject) {
            var axlei = axle[i];
            var wheelTrans = this.getWheelTransformWorld(i);

            // Get world axle
            wheelTrans.vectorToWorldFrame(directions[this.indexRightAxis], axlei);

            var surfNormalWS = wheel.raycastResult.hitNormalWorld;
            var proj = axlei.dot(surfNormalWS);
            surfNormalWS.scale(proj, surfNormalWS_scaled_proj);
            axlei.vsub(surfNormalWS_scaled_proj, axlei);
            axlei.normalize();

            surfNormalWS.cross(axlei, forwardWS[i]);
            forwardWS[i].normalize();

            wheel.sideImpulse = resolveSingleBilateral(
                chassisBody,
                wheel.raycastResult.hitPointWorld,
                groundObject,
                wheel.raycastResult.hitPointWorld,
                axlei
            );

            wheel.sideImpulse *= sideFrictionStiffness2;
        }
    }

    var sideFactor = 1;
    var fwdFactor = 0.5;

    this.sliding = false;
    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];
        var groundObject = wheel.raycastResult.body;

        var rollingFriction = 0;

        wheel.slipInfo = 1;
        if (groundObject) {
            var defaultRollingFrictionImpulse = 0;
            var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;

            // btWheelContactPoint contactPt(chassisBody,groundObject,wheelInfraycastInfo.hitPointWorld,forwardWS[wheel],maxImpulse);
            // rollingFriction = calcRollingFriction(contactPt);
            rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);

            rollingFriction += wheel.engineForce * timeStep;

            // rollingFriction = 0;
            var factor = maxImpulse / rollingFriction;
            wheel.slipInfo *= factor;
        }

        //switch between active rolling (throttle), braking and non-active rolling friction (nthrottle/break)

        wheel.forwardImpulse = 0;
        wheel.skidInfo = 1;

        if (groundObject) {
            wheel.skidInfo = 1;

            var maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
            var maximpSide = maximp;

            var maximpSquared = maximp * maximpSide;

            wheel.forwardImpulse = rollingFriction;//wheelInfo.engineForce* timeStep;

            var x = wheel.forwardImpulse * fwdFactor;
            var y = wheel.sideImpulse * sideFactor;

            var impulseSquared = x * x + y * y;

            wheel.sliding = false;
            if (impulseSquared > maximpSquared) {
                this.sliding = true;
                wheel.sliding = true;

                var factor = maximp / Math.sqrt(impulseSquared);

                wheel.skidInfo *= factor;
            }
        }
    }

    if (this.sliding) {
        for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            if (wheel.sideImpulse !== 0) {
                if (wheel.skidInfo < 1){
                    wheel.forwardImpulse *= wheel.skidInfo;
                    wheel.sideImpulse *= wheel.skidInfo;
                }
            }
        }
    }

    // apply the impulses
    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];

        var rel_pos = new Vec3();
        //wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, rel_pos);
        // cannons applyimpulse is using world coord for the position
        rel_pos.copy(wheel.raycastResult.hitPointWorld);

        if (wheel.forwardImpulse !== 0) {
            var impulse = new Vec3();
            forwardWS[i].scale(wheel.forwardImpulse, impulse);
            chassisBody.applyImpulse(impulse, rel_pos);
        }

        if (wheel.sideImpulse !== 0){
            var groundObject = wheel.raycastResult.body;

            var rel_pos2 = new Vec3();
            //wheel.raycastResult.hitPointWorld.vsub(groundObject.position, rel_pos2);
            rel_pos2.copy(wheel.raycastResult.hitPointWorld);
            var sideImp = new Vec3();
            axle[i].scale(wheel.sideImpulse, sideImp);

            // Scale the relative position in the up direction with rollInfluence.
            // If rollInfluence is 1, the impulse will be applied on the hitPoint (easy to roll over), if it is zero it will be applied in the same plane as the center of mass (not easy to roll over).
            chassisBody.pointToLocalFrame(rel_pos, rel_pos);
            rel_pos['xyz'[this.indexUpAxis]] *= wheel.rollInfluence;
            chassisBody.pointToWorldFrame(rel_pos, rel_pos);
            chassisBody.applyImpulse(sideImp, rel_pos);

            //apply friction impulse on the ground
            sideImp.scale(-1, sideImp);
            groundObject.applyImpulse(sideImp, rel_pos2);
        }
    }
};

var calcRollingFriction_vel1 = new Vec3();
var calcRollingFriction_vel2 = new Vec3();
var calcRollingFriction_vel = new Vec3();

function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
    var j1 = 0;
    var contactPosWorld = frictionPosWorld;

    // var rel_pos1 = new Vec3();
    // var rel_pos2 = new Vec3();
    var vel1 = calcRollingFriction_vel1;
    var vel2 = calcRollingFriction_vel2;
    var vel = calcRollingFriction_vel;
    // contactPosWorld.vsub(body0.position, rel_pos1);
    // contactPosWorld.vsub(body1.position, rel_pos2);

    body0.getVelocityAtWorldPoint(contactPosWorld, vel1);
    body1.getVelocityAtWorldPoint(contactPosWorld, vel2);
    vel1.vsub(vel2, vel);

    var vrel = frictionDirectionWorld.dot(vel);

    var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
    var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
    var relaxation = 1;
    var jacDiagABInv = relaxation / (denom0 + denom1);

    // calculate j that moves us to zero relative velocity
    j1 = -vrel * jacDiagABInv;

    if (maxImpulse < j1) {
        j1 = maxImpulse;
    }
    if (j1 < -maxImpulse) {
        j1 = -maxImpulse;
    }

    return j1;
}

var computeImpulseDenominator_r0 = new Vec3();
var computeImpulseDenominator_c0 = new Vec3();
var computeImpulseDenominator_vec = new Vec3();
var computeImpulseDenominator_m = new Vec3();
function computeImpulseDenominator(body, pos, normal) {
    var r0 = computeImpulseDenominator_r0;
    var c0 = computeImpulseDenominator_c0;
    var vec = computeImpulseDenominator_vec;
    var m = computeImpulseDenominator_m;

    pos.vsub(body.position, r0);
    r0.cross(normal, c0);
    body.invInertiaWorld.vmult(c0, m);
    m.cross(r0, vec);

    return body.invMass + normal.dot(vec);
}


var resolveSingleBilateral_vel1 = new Vec3();
var resolveSingleBilateral_vel2 = new Vec3();
var resolveSingleBilateral_vel = new Vec3();

//bilateral constraint between two dynamic objects
function resolveSingleBilateral(body1, pos1, body2, pos2, normal, impulse){
    var normalLenSqr = normal.norm2();
    if (normalLenSqr > 1.1){
        return 0; // no impulse
    }
    // var rel_pos1 = new Vec3();
    // var rel_pos2 = new Vec3();
    // pos1.vsub(body1.position, rel_pos1);
    // pos2.vsub(body2.position, rel_pos2);

    var vel1 = resolveSingleBilateral_vel1;
    var vel2 = resolveSingleBilateral_vel2;
    var vel = resolveSingleBilateral_vel;
    body1.getVelocityAtWorldPoint(pos1, vel1);
    body2.getVelocityAtWorldPoint(pos2, vel2);

    vel1.vsub(vel2, vel);

    var rel_vel = normal.dot(vel);

    var contactDamping = 0.2;
    var massTerm = 1 / (body1.invMass + body2.invMass);
    var impulse = - contactDamping * rel_vel * massTerm;

    return impulse;
}
},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(_dereq_,module,exports){
var Body = _dereq_('./Body');
var Sphere = _dereq_('../shapes/Sphere');
var Box = _dereq_('../shapes/Box');
var Vec3 = _dereq_('../math/Vec3');
var HingeConstraint = _dereq_('../constraints/HingeConstraint');

module.exports = RigidVehicle;

/**
 * Simple vehicle helper class with spherical rigid body wheels.
 * @class RigidVehicle
 * @constructor
 * @param {Body} [options.chassisBody]
 */
function RigidVehicle(options){
    this.wheelBodies = [];

    /**
     * @property coordinateSystem
     * @type {Vec3}
     */
    this.coordinateSystem = typeof(options.coordinateSystem)==='undefined' ? new Vec3(1, 2, 3) : options.coordinateSystem.clone();

    /**
     * @property {Body} chassisBody
     */
    this.chassisBody = options.chassisBody;

    if(!this.chassisBody){
        // No chassis body given. Create it!
        var chassisShape = new Box(new Vec3(5, 2, 0.5));
        this.chassisBody = new Body(1, chassisShape);
    }

    /**
     * @property constraints
     * @type {Array}
     */
    this.constraints = [];

    this.wheelAxes = [];
    this.wheelForces = [];
}

/**
 * Add a wheel
 * @method addWheel
 * @param {object} options
 * @param {boolean} [options.isFrontWheel]
 * @param {Vec3} [options.position] Position of the wheel, locally in the chassis body.
 * @param {Vec3} [options.direction] Slide direction of the wheel along the suspension.
 * @param {Vec3} [options.axis] Axis of rotation of the wheel, locally defined in the chassis.
 * @param {Body} [options.body] The wheel body.
 */
RigidVehicle.prototype.addWheel = function(options){
    options = options || {};
    var wheelBody = options.body;
    if(!wheelBody){
        wheelBody =  new Body(1, new Sphere(1.2));
    }
    this.wheelBodies.push(wheelBody);
    this.wheelForces.push(0);

    // Position constrain wheels
    var zero = new Vec3();
    var position = typeof(options.position) !== 'undefined' ? options.position.clone() : new Vec3();

    // Set position locally to the chassis
    var worldPosition = new Vec3();
    this.chassisBody.pointToWorldFrame(position, worldPosition);
    wheelBody.position.set(worldPosition.x, worldPosition.y, worldPosition.z);

    // Constrain wheel
    var axis = typeof(options.axis) !== 'undefined' ? options.axis.clone() : new Vec3(0, 1, 0);
    this.wheelAxes.push(axis);

    var hingeConstraint = new HingeConstraint(this.chassisBody, wheelBody, {
        pivotA: position,
        axisA: axis,
        pivotB: Vec3.ZERO,
        axisB: axis,
        collideConnected: false
    });
    this.constraints.push(hingeConstraint);

    return this.wheelBodies.length - 1;
};

/**
 * Set the steering value of a wheel.
 * @method setSteeringValue
 * @param {number} value
 * @param {integer} wheelIndex
 * @todo check coordinateSystem
 */
RigidVehicle.prototype.setSteeringValue = function(value, wheelIndex){
    // Set angle of the hinge axis
    var axis = this.wheelAxes[wheelIndex];

    var c = Math.cos(value),
        s = Math.sin(value),
        x = axis.x,
        y = axis.y;
    this.constraints[wheelIndex].axisA.set(
        c*x -s*y,
        s*x +c*y,
        0
    );
};

/**
 * Set the target rotational speed of the hinge constraint.
 * @method setMotorSpeed
 * @param {number} value
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.setMotorSpeed = function(value, wheelIndex){
    var hingeConstraint = this.constraints[wheelIndex];
    hingeConstraint.enableMotor();
    hingeConstraint.motorTargetVelocity = value;
};

/**
 * Set the target rotational speed of the hinge constraint.
 * @method disableMotor
 * @param {number} value
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.disableMotor = function(wheelIndex){
    var hingeConstraint = this.constraints[wheelIndex];
    hingeConstraint.disableMotor();
};

var torque = new Vec3();

/**
 * Set the wheel force to apply on one of the wheels each time step
 * @method setWheelForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RigidVehicle.prototype.setWheelForce = function(value, wheelIndex){
    this.wheelForces[wheelIndex] = value;
};

/**
 * Apply a torque on one of the wheels.
 * @method applyWheelForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RigidVehicle.prototype.applyWheelForce = function(value, wheelIndex){
    var axis = this.wheelAxes[wheelIndex];
    var wheelBody = this.wheelBodies[wheelIndex];
    var bodyTorque = wheelBody.torque;

    axis.scale(value, torque);
    wheelBody.vectorToWorldFrame(torque, torque);
    bodyTorque.vadd(torque, bodyTorque);
};

/**
 * Add the vehicle including its constraints to the world.
 * @method addToWorld
 * @param {World} world
 */
RigidVehicle.prototype.addToWorld = function(world){
    var constraints = this.constraints;
    var bodies = this.wheelBodies.concat([this.chassisBody]);

    for (var i = 0; i < bodies.length; i++) {
        world.add(bodies[i]);
    }

    for (var i = 0; i < constraints.length; i++) {
        world.addConstraint(constraints[i]);
    }

    world.addEventListener('preStep', this._update.bind(this));
};

RigidVehicle.prototype._update = function(){
    var wheelForces = this.wheelForces;
    for (var i = 0; i < wheelForces.length; i++) {
        this.applyWheelForce(wheelForces[i], i);
    }
};

/**
 * Remove the vehicle including its constraints from the world.
 * @method removeFromWorld
 * @param {World} world
 */
RigidVehicle.prototype.removeFromWorld = function(world){
    var constraints = this.constraints;
    var bodies = this.wheelBodies.concat([this.chassisBody]);

    for (var i = 0; i < bodies.length; i++) {
        world.remove(bodies[i]);
    }

    for (var i = 0; i < constraints.length; i++) {
        world.removeConstraint(constraints[i]);
    }
};

var worldAxis = new Vec3();

/**
 * Get current rotational velocity of a wheel
 * @method getWheelSpeed
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.getWheelSpeed = function(wheelIndex){
    var axis = this.wheelAxes[wheelIndex];
    var wheelBody = this.wheelBodies[wheelIndex];
    var w = wheelBody.angularVelocity;
    this.chassisBody.vectorToWorldFrame(axis, worldAxis);
    return w.dot(worldAxis);
};

},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(_dereq_,module,exports){
module.exports = SPHSystem;

var Shape = _dereq_('../shapes/Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Particle = _dereq_('../shapes/Particle');
var Body = _dereq_('../objects/Body');
var Material = _dereq_('../material/Material');

/**
 * Smoothed-particle hydrodynamics system
 * @class SPHSystem
 * @constructor
 */
function SPHSystem(){
    this.particles = [];
	
    /**
     * Density of the system (kg/m3).
     * @property {number} density
     */
    this.density = 1;
	
    /**
     * Distance below which two particles are considered to be neighbors.
     * It should be adjusted so there are about 15-20 neighbor particles within this radius.
     * @property {number} smoothingRadius
     */
    this.smoothingRadius = 1;
    this.speedOfSound = 1;
	
    /**
     * Viscosity of the system.
     * @property {number} viscosity
     */
    this.viscosity = 0.01;
    this.eps = 0.000001;

    // Stuff Computed per particle
    this.pressures = [];
    this.densities = [];
    this.neighbors = [];
}

/**
 * Add a particle to the system.
 * @method add
 * @param {Body} particle
 */
SPHSystem.prototype.add = function(particle){
    this.particles.push(particle);
    if(this.neighbors.length < this.particles.length){
        this.neighbors.push([]);
    }
};

/**
 * Remove a particle from the system.
 * @method remove
 * @param {Body} particle
 */
SPHSystem.prototype.remove = function(particle){
    var idx = this.particles.indexOf(particle);
    if(idx !== -1){
        this.particles.splice(idx,1);
        if(this.neighbors.length > this.particles.length){
            this.neighbors.pop();
        }
    }
};

/**
 * Get neighbors within smoothing volume, save in the array neighbors
 * @method getNeighbors
 * @param {Body} particle
 * @param {Array} neighbors
 */
var SPHSystem_getNeighbors_dist = new Vec3();
SPHSystem.prototype.getNeighbors = function(particle,neighbors){
    var N = this.particles.length,
        id = particle.id,
        R2 = this.smoothingRadius * this.smoothingRadius,
        dist = SPHSystem_getNeighbors_dist;
    for(var i=0; i!==N; i++){
        var p = this.particles[i];
        p.position.vsub(particle.position,dist);
        if(id!==p.id && dist.norm2() < R2){
            neighbors.push(p);
        }
    }
};

// Temp vectors for calculation
var SPHSystem_update_dist = new Vec3(),
    SPHSystem_update_a_pressure = new Vec3(),
    SPHSystem_update_a_visc = new Vec3(),
    SPHSystem_update_gradW = new Vec3(),
    SPHSystem_update_r_vec = new Vec3(),
    SPHSystem_update_u = new Vec3(); // Relative velocity
SPHSystem.prototype.update = function(){
    var N = this.particles.length,
        dist = SPHSystem_update_dist,
        cs = this.speedOfSound,
        eps = this.eps;

    for(var i=0; i!==N; i++){
        var p = this.particles[i]; // Current particle
        var neighbors = this.neighbors[i];

        // Get neighbors
        neighbors.length = 0;
        this.getNeighbors(p,neighbors);
        neighbors.push(this.particles[i]); // Add current too
        var numNeighbors = neighbors.length;

        // Accumulate density for the particle
        var sum = 0.0;
        for(var j=0; j!==numNeighbors; j++){

            //printf("Current particle has position %f %f %f\n",objects[id].pos.x(),objects[id].pos.y(),objects[id].pos.z());
            p.position.vsub(neighbors[j].position, dist);
            var len = dist.norm();

            var weight = this.w(len);
            sum += neighbors[j].mass * weight;
        }

        // Save
        this.densities[i] = sum;
        this.pressures[i] = cs * cs * (this.densities[i] - this.density);
    }

    // Add forces

    // Sum to these accelerations
    var a_pressure= SPHSystem_update_a_pressure;
    var a_visc =    SPHSystem_update_a_visc;
    var gradW =     SPHSystem_update_gradW;
    var r_vec =     SPHSystem_update_r_vec;
    var u =         SPHSystem_update_u;

    for(var i=0; i!==N; i++){

        var particle = this.particles[i];

        a_pressure.set(0,0,0);
        a_visc.set(0,0,0);

        // Init vars
        var Pij;
        var nabla;
        var Vij;

        // Sum up for all other neighbors
        var neighbors = this.neighbors[i];
        var numNeighbors = neighbors.length;

        //printf("Neighbors: ");
        for(var j=0; j!==numNeighbors; j++){

            var neighbor = neighbors[j];
            //printf("%d ",nj);

            // Get r once for all..
            particle.position.vsub(neighbor.position,r_vec);
            var r = r_vec.norm();

            // Pressure contribution
            Pij = -neighbor.mass * (this.pressures[i] / (this.densities[i]*this.densities[i] + eps) + this.pressures[j] / (this.densities[j]*this.densities[j] + eps));
            this.gradw(r_vec, gradW);
            // Add to pressure acceleration
            gradW.mult(Pij , gradW);
            a_pressure.vadd(gradW, a_pressure);

            // Viscosity contribution
            neighbor.velocity.vsub(particle.velocity, u);
            u.mult( 1.0 / (0.0001+this.densities[i] * this.densities[j]) * this.viscosity * neighbor.mass , u );
            nabla = this.nablaw(r);
            u.mult(nabla,u);
            // Add to viscosity acceleration
            a_visc.vadd( u, a_visc );
        }

        // Calculate force
        a_visc.mult(particle.mass, a_visc);
        a_pressure.mult(particle.mass, a_pressure);

        // Add force to particles
        particle.force.vadd(a_visc, particle.force);
        particle.force.vadd(a_pressure, particle.force);
    }
};

// Calculate the weight using the W(r) weightfunction
SPHSystem.prototype.w = function(r){
    // 315
    var h = this.smoothingRadius;
    return 315.0/(64.0*Math.PI*Math.pow(h,9)) * Math.pow(h*h-r*r,3);
};

// calculate gradient of the weight function
SPHSystem.prototype.gradw = function(rVec,resultVec){
    var r = rVec.norm(),
        h = this.smoothingRadius;
    rVec.mult(945.0/(32.0*Math.PI*Math.pow(h,9)) * Math.pow((h*h-r*r),2) , resultVec);
};

// Calculate nabla(W)
SPHSystem.prototype.nablaw = function(r){
    var h = this.smoothingRadius;
    var nabla = 945.0/(32.0*Math.PI*Math.pow(h,9)) * (h*h-r*r)*(7*r*r - 3*h*h);
    return nabla;
};

},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');

module.exports = Spring;

/**
 * A spring, connecting two bodies.
 *
 * @class Spring
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Object} [options]
 * @param {number} [options.restLength]   A number > 0. Default: 1
 * @param {number} [options.stiffness]    A number >= 0. Default: 100
 * @param {number} [options.damping]      A number >= 0. Default: 1
 * @param {Vec3}  [options.worldAnchorA] Where to hook the spring to body A, in world coordinates.
 * @param {Vec3}  [options.worldAnchorB]
 * @param {Vec3}  [options.localAnchorA] Where to hook the spring to body A, in local body coordinates.
 * @param {Vec3}  [options.localAnchorB]
 */
function Spring(bodyA,bodyB,options){
    options = options || {};

    /**
     * Rest length of the spring.
     * @property restLength
     * @type {number}
     */
    this.restLength = typeof(options.restLength) === "number" ? options.restLength : 1;

    /**
     * Stiffness of the spring.
     * @property stiffness
     * @type {number}
     */
    this.stiffness = options.stiffness || 100;

    /**
     * Damping of the spring.
     * @property damping
     * @type {number}
     */
    this.damping = options.damping || 1;

    /**
     * First connected body.
     * @property bodyA
     * @type {Body}
     */
    this.bodyA = bodyA;

    /**
     * Second connected body.
     * @property bodyB
     * @type {Body}
     */
    this.bodyB = bodyB;

    /**
     * Anchor for bodyA in local bodyA coordinates.
     * @property localAnchorA
     * @type {Vec3}
     */
    this.localAnchorA = new Vec3();

    /**
     * Anchor for bodyB in local bodyB coordinates.
     * @property localAnchorB
     * @type {Vec3}
     */
    this.localAnchorB = new Vec3();

    if(options.localAnchorA){
        this.localAnchorA.copy(options.localAnchorA);
    }
    if(options.localAnchorB){
        this.localAnchorB.copy(options.localAnchorB);
    }
    if(options.worldAnchorA){
        this.setWorldAnchorA(options.worldAnchorA);
    }
    if(options.worldAnchorB){
        this.setWorldAnchorB(options.worldAnchorB);
    }
}

/**
 * Set the anchor point on body A, using world coordinates.
 * @method setWorldAnchorA
 * @param {Vec3} worldAnchorA
 */
Spring.prototype.setWorldAnchorA = function(worldAnchorA){
    this.bodyA.pointToLocalFrame(worldAnchorA,this.localAnchorA);
};

/**
 * Set the anchor point on body B, using world coordinates.
 * @method setWorldAnchorB
 * @param {Vec3} worldAnchorB
 */
Spring.prototype.setWorldAnchorB = function(worldAnchorB){
    this.bodyB.pointToLocalFrame(worldAnchorB,this.localAnchorB);
};

/**
 * Get the anchor point on body A, in world coordinates.
 * @method getWorldAnchorA
 * @param {Vec3} result The vector to store the result in.
 */
Spring.prototype.getWorldAnchorA = function(result){
    this.bodyA.pointToWorldFrame(this.localAnchorA,result);
};

/**
 * Get the anchor point on body B, in world coordinates.
 * @method getWorldAnchorB
 * @param {Vec3} result The vector to store the result in.
 */
Spring.prototype.getWorldAnchorB = function(result){
    this.bodyB.pointToWorldFrame(this.localAnchorB,result);
};

var applyForce_r =              new Vec3(),
    applyForce_r_unit =         new Vec3(),
    applyForce_u =              new Vec3(),
    applyForce_f =              new Vec3(),
    applyForce_worldAnchorA =   new Vec3(),
    applyForce_worldAnchorB =   new Vec3(),
    applyForce_ri =             new Vec3(),
    applyForce_rj =             new Vec3(),
    applyForce_ri_x_f =         new Vec3(),
    applyForce_rj_x_f =         new Vec3(),
    applyForce_tmp =            new Vec3();

/**
 * Apply the spring force to the connected bodies.
 * @method applyForce
 */
Spring.prototype.applyForce = function(){
    var k = this.stiffness,
        d = this.damping,
        l = this.restLength,
        bodyA = this.bodyA,
        bodyB = this.bodyB,
        r = applyForce_r,
        r_unit = applyForce_r_unit,
        u = applyForce_u,
        f = applyForce_f,
        tmp = applyForce_tmp;

    var worldAnchorA = applyForce_worldAnchorA,
        worldAnchorB = applyForce_worldAnchorB,
        ri = applyForce_ri,
        rj = applyForce_rj,
        ri_x_f = applyForce_ri_x_f,
        rj_x_f = applyForce_rj_x_f;

    // Get world anchors
    this.getWorldAnchorA(worldAnchorA);
    this.getWorldAnchorB(worldAnchorB);

    // Get offset points
    worldAnchorA.vsub(bodyA.position,ri);
    worldAnchorB.vsub(bodyB.position,rj);

    // Compute distance vector between world anchor points
    worldAnchorB.vsub(worldAnchorA,r);
    var rlen = r.norm();
    r_unit.copy(r);
    r_unit.normalize();

    // Compute relative velocity of the anchor points, u
    bodyB.velocity.vsub(bodyA.velocity,u);
    // Add rotational velocity

    bodyB.angularVelocity.cross(rj,tmp);
    u.vadd(tmp,u);
    bodyA.angularVelocity.cross(ri,tmp);
    u.vsub(tmp,u);

    // F = - k * ( x - L ) - D * ( u )
    r_unit.mult(-k*(rlen-l) - d*u.dot(r_unit), f);

    // Add forces to bodies
    bodyA.force.vsub(f,bodyA.force);
    bodyB.force.vadd(f,bodyB.force);

    // Angular force
    ri.cross(f,ri_x_f);
    rj.cross(f,rj_x_f);
    bodyA.torque.vsub(ri_x_f,bodyA.torque);
    bodyB.torque.vadd(rj_x_f,bodyB.torque);
};

},{"../math/Vec3":30}],36:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');
var Transform = _dereq_('../math/Transform');
var RaycastResult = _dereq_('../collision/RaycastResult');
var Utils = _dereq_('../utils/Utils');

module.exports = WheelInfo;

/**
 * @class WheelInfo
 * @constructor
 * @param {Object} [options]
 *
 * @param {Vec3} [options.chassisConnectionPointLocal]
 * @param {Vec3} [options.chassisConnectionPointWorld]
 * @param {Vec3} [options.directionLocal]
 * @param {Vec3} [options.directionWorld]
 * @param {Vec3} [options.axleLocal]
 * @param {Vec3} [options.axleWorld]
 * @param {number} [options.suspensionRestLength=1]
 * @param {number} [options.suspensionMaxLength=2]
 * @param {number} [options.radius=1]
 * @param {number} [options.suspensionStiffness=100]
 * @param {number} [options.dampingCompression=10]
 * @param {number} [options.dampingRelaxation=10]
 * @param {number} [options.frictionSlip=10000]
 * @param {number} [options.steering=0]
 * @param {number} [options.rotation=0]
 * @param {number} [options.deltaRotation=0]
 * @param {number} [options.rollInfluence=0.01]
 * @param {number} [options.maxSuspensionForce]
 * @param {boolean} [options.isFrontWheel=true]
 * @param {number} [options.clippedInvContactDotSuspension=1]
 * @param {number} [options.suspensionRelativeVelocity=0]
 * @param {number} [options.suspensionForce=0]
 * @param {number} [options.skidInfo=0]
 * @param {number} [options.suspensionLength=0]
 * @param {number} [options.maxSuspensionTravel=1]
 * @param {boolean} [options.useCustomSlidingRotationalSpeed=false]
 * @param {number} [options.customSlidingRotationalSpeed=-0.1]
 */
function WheelInfo(options){
    options = Utils.defaults(options, {
        chassisConnectionPointLocal: new Vec3(),
        chassisConnectionPointWorld: new Vec3(),
        directionLocal: new Vec3(),
        directionWorld: new Vec3(),
        axleLocal: new Vec3(),
        axleWorld: new Vec3(),
        suspensionRestLength: 1,
        suspensionMaxLength: 2,
        radius: 1,
        suspensionStiffness: 100,
        dampingCompression: 10,
        dampingRelaxation: 10,
        frictionSlip: 10000,
        steering: 0,
        rotation: 0,
        deltaRotation: 0,
        rollInfluence: 0.01,
        maxSuspensionForce: Number.MAX_VALUE,
        isFrontWheel: true,
        clippedInvContactDotSuspension: 1,
        suspensionRelativeVelocity: 0,
        suspensionForce: 0,
        skidInfo: 0,
        suspensionLength: 0,
        maxSuspensionTravel: 1,
        useCustomSlidingRotationalSpeed: false,
        customSlidingRotationalSpeed: -0.1
    });

    /**
     * Max travel distance of the suspension, in meters.
     * @property {number} maxSuspensionTravel
     */
    this.maxSuspensionTravel = options.maxSuspensionTravel;

    /**
     * Speed to apply to the wheel rotation when the wheel is sliding.
     * @property {number} customSlidingRotationalSpeed
     */
    this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;

    /**
     * If the customSlidingRotationalSpeed should be used.
     * @property {Boolean} useCustomSlidingRotationalSpeed
     */
    this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;

    /**
     * @property {Boolean} sliding
     */
    this.sliding = false;

    /**
     * Connection point, defined locally in the chassis body frame.
     * @property {Vec3} chassisConnectionPointLocal
     */
    this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();

    /**
     * @property {Vec3} chassisConnectionPointWorld
     */
    this.chassisConnectionPointWorld = options.chassisConnectionPointWorld.clone();

    /**
     * @property {Vec3} directionLocal
     */
    this.directionLocal = options.directionLocal.clone();

    /**
     * @property {Vec3} directionWorld
     */
    this.directionWorld = options.directionWorld.clone();

    /**
     * @property {Vec3} axleLocal
     */
    this.axleLocal = options.axleLocal.clone();

    /**
     * @property {Vec3} axleWorld
     */
    this.axleWorld = options.axleWorld.clone();

    /**
     * @property {number} suspensionRestLength
     */
    this.suspensionRestLength = options.suspensionRestLength;

    /**
     * @property {number} suspensionMaxLength
     */
    this.suspensionMaxLength = options.suspensionMaxLength;

    /**
     * @property {number} radius
     */
    this.radius = options.radius;

    /**
     * @property {number} suspensionStiffness
     */
    this.suspensionStiffness = options.suspensionStiffness;

    /**
     * @property {number} dampingCompression
     */
    this.dampingCompression = options.dampingCompression;

    /**
     * @property {number} dampingRelaxation
     */
    this.dampingRelaxation = options.dampingRelaxation;

    /**
     * @property {number} frictionSlip
     */
    this.frictionSlip = options.frictionSlip;

    /**
     * @property {number} steering
     */
    this.steering = 0;

    /**
     * Rotation value, in radians.
     * @property {number} rotation
     */
    this.rotation = 0;

    /**
     * @property {number} deltaRotation
     */
    this.deltaRotation = 0;

    /**
     * @property {number} rollInfluence
     */
    this.rollInfluence = options.rollInfluence;

    /**
     * @property {number} maxSuspensionForce
     */
    this.maxSuspensionForce = options.maxSuspensionForce;

    /**
     * @property {number} engineForce
     */
    this.engineForce = 0;

    /**
     * @property {number} brake
     */
    this.brake = 0;

    /**
     * @property {number} isFrontWheel
     */
    this.isFrontWheel = options.isFrontWheel;

    /**
     * @property {number} clippedInvContactDotSuspension
     */
    this.clippedInvContactDotSuspension = 1;

    /**
     * @property {number} suspensionRelativeVelocity
     */
    this.suspensionRelativeVelocity = 0;

    /**
     * @property {number} suspensionForce
     */
    this.suspensionForce = 0;

    /**
     * @property {number} skidInfo
     */
    this.skidInfo = 0;

    /**
     * @property {number} suspensionLength
     */
    this.suspensionLength = 0;

    /**
     * @property {number} sideImpulse
     */
    this.sideImpulse = 0;

    /**
     * @property {number} forwardImpulse
     */
    this.forwardImpulse = 0;

    /**
     * The result from raycasting
     * @property {RaycastResult} raycastResult
     */
    this.raycastResult = new RaycastResult();

    /**
     * Wheel world transform
     * @property {Transform} worldTransform
     */
    this.worldTransform = new Transform();

    /**
     * @property {boolean} isInContact
     */
    this.isInContact = false;
}

var chassis_velocity_at_contactPoint = new Vec3();
var relpos = new Vec3();
var chassis_velocity_at_contactPoint = new Vec3();
WheelInfo.prototype.updateWheel = function(chassis){
    var raycastResult = this.raycastResult;

    if (this.isInContact){
        var project= raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
        raycastResult.hitPointWorld.vsub(chassis.position, relpos);
        chassis.getVelocityAtWorldPoint(relpos, chassis_velocity_at_contactPoint);
        var projVel = raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );
        if (project >= -0.1) {
            this.suspensionRelativeVelocity = 0.0;
            this.clippedInvContactDotSuspension = 1.0 / 0.1;
        } else {
            var inv = -1 / project;
            this.suspensionRelativeVelocity = projVel * inv;
            this.clippedInvContactDotSuspension = inv;
        }

    } else {
        // Not in contact : position wheel in a nice (rest length) position
        raycastResult.suspensionLength = this.suspensionRestLength;
        this.suspensionRelativeVelocity = 0.0;
        raycastResult.directionWorld.scale(-1, raycastResult.hitNormalWorld);
        this.clippedInvContactDotSuspension = 1.0;
    }
};
},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(_dereq_,module,exports){
module.exports = Box;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');

/**
 * A 3d box shape.
 * @class Box
 * @constructor
 * @param {Vec3} halfExtents
 * @author schteppe
 * @extends Shape
 */
function Box(halfExtents){
    Shape.call(this);

    this.type = Shape.types.BOX;

    /**
     * @property halfExtents
     * @type {Vec3}
     */
    this.halfExtents = halfExtents;

    /**
     * Used by the contact generator to make contacts with other convex polyhedra for example
     * @property convexPolyhedronRepresentation
     * @type {ConvexPolyhedron}
     */
    this.convexPolyhedronRepresentation = null;

    this.updateConvexPolyhedronRepresentation();
    this.updateBoundingSphereRadius();
}
Box.prototype = new Shape();
Box.prototype.constructor = Box;

/**
 * Updates the local convex polyhedron representation used for some collisions.
 * @method updateConvexPolyhedronRepresentation
 */
Box.prototype.updateConvexPolyhedronRepresentation = function(){
    var sx = this.halfExtents.x;
    var sy = this.halfExtents.y;
    var sz = this.halfExtents.z;
    var V = Vec3;

    var vertices = [
        new V(-sx,-sy,-sz),
        new V( sx,-sy,-sz),
        new V( sx, sy,-sz),
        new V(-sx, sy,-sz),
        new V(-sx,-sy, sz),
        new V( sx,-sy, sz),
        new V( sx, sy, sz),
        new V(-sx, sy, sz)
    ];

    var indices = [
        [3,2,1,0], // -z
        [4,5,6,7], // +z
        [5,4,0,1], // -y
        [2,3,7,6], // +y
        [0,4,7,3], // -x
        [1,2,6,5], // +x
    ];

    var axes = [
        new V(0, 0, 1),
        new V(0, 1, 0),
        new V(1, 0, 0)
    ];

    var h = new ConvexPolyhedron(vertices, indices);
    this.convexPolyhedronRepresentation = h;
    h.material = this.material;
};

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3}
 */
Box.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    Box.calculateInertia(this.halfExtents, mass, target);
    return target;
};

Box.calculateInertia = function(halfExtents,mass,target){
    var e = halfExtents;
    target.x = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.z*2*e.z );
    target.y = 1.0 / 12.0 * mass * (   2*e.x*2*e.x + 2*e.z*2*e.z );
    target.z = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.x*2*e.x );
};

/**
 * Get the box 6 side normals
 * @method getSideNormals
 * @param {array}      sixTargetVectors An array of 6 vectors, to store the resulting side normals in.
 * @param {Quaternion} quat             Orientation to apply to the normal vectors. If not provided, the vectors will be in respect to the local frame.
 * @return {array}
 */
Box.prototype.getSideNormals = function(sixTargetVectors,quat){
    var sides = sixTargetVectors;
    var ex = this.halfExtents;
    sides[0].set(  ex.x,     0,     0);
    sides[1].set(     0,  ex.y,     0);
    sides[2].set(     0,     0,  ex.z);
    sides[3].set( -ex.x,     0,     0);
    sides[4].set(     0, -ex.y,     0);
    sides[5].set(     0,     0, -ex.z);

    if(quat!==undefined){
        for(var i=0; i!==sides.length; i++){
            quat.vmult(sides[i],sides[i]);
        }
    }

    return sides;
};

Box.prototype.volume = function(){
    return 8.0 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
};

Box.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = this.halfExtents.norm();
};

var worldCornerTempPos = new Vec3();
var worldCornerTempNeg = new Vec3();
Box.prototype.forEachWorldCorner = function(pos,quat,callback){

    var e = this.halfExtents;
    var corners = [[  e.x,  e.y,  e.z],
                   [ -e.x,  e.y,  e.z],
                   [ -e.x, -e.y,  e.z],
                   [ -e.x, -e.y, -e.z],
                   [  e.x, -e.y, -e.z],
                   [  e.x,  e.y, -e.z],
                   [ -e.x,  e.y, -e.z],
                   [  e.x, -e.y,  e.z]];
    for(var i=0; i<corners.length; i++){
        worldCornerTempPos.set(corners[i][0],corners[i][1],corners[i][2]);
        quat.vmult(worldCornerTempPos,worldCornerTempPos);
        pos.vadd(worldCornerTempPos,worldCornerTempPos);
        callback(worldCornerTempPos.x,
                 worldCornerTempPos.y,
                 worldCornerTempPos.z);
    }
};

var worldCornersTemp = [
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3()
];
Box.prototype.calculateWorldAABB = function(pos,quat,min,max){

    var e = this.halfExtents;
    worldCornersTemp[0].set(e.x, e.y, e.z);
    worldCornersTemp[1].set(-e.x,  e.y, e.z);
    worldCornersTemp[2].set(-e.x, -e.y, e.z);
    worldCornersTemp[3].set(-e.x, -e.y, -e.z);
    worldCornersTemp[4].set(e.x, -e.y, -e.z);
    worldCornersTemp[5].set(e.x,  e.y, -e.z);
    worldCornersTemp[6].set(-e.x,  e.y, -e.z);
    worldCornersTemp[7].set(e.x, -e.y,  e.z);

    var wc = worldCornersTemp[0];
    quat.vmult(wc, wc);
    pos.vadd(wc, wc);
    max.copy(wc);
    min.copy(wc);
    for(var i=1; i<8; i++){
        var wc = worldCornersTemp[i];
        quat.vmult(wc, wc);
        pos.vadd(wc, wc);
        var x = wc.x;
        var y = wc.y;
        var z = wc.z;
        if(x > max.x){
            max.x = x;
        }
        if(y > max.y){
            max.y = y;
        }
        if(z > max.z){
            max.z = z;
        }

        if(x < min.x){
            min.x = x;
        }
        if(y < min.y){
            min.y = y;
        }
        if(z < min.z){
            min.z = z;
        }
    }

    // Get each axis max
    // min.set(Infinity,Infinity,Infinity);
    // max.set(-Infinity,-Infinity,-Infinity);
    // this.forEachWorldCorner(pos,quat,function(x,y,z){
    //     if(x > max.x){
    //         max.x = x;
    //     }
    //     if(y > max.y){
    //         max.y = y;
    //     }
    //     if(z > max.z){
    //         max.z = z;
    //     }

    //     if(x < min.x){
    //         min.x = x;
    //     }
    //     if(y < min.y){
    //         min.y = y;
    //     }
    //     if(z < min.z){
    //         min.z = z;
    //     }
    // });
};

},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(_dereq_,module,exports){
module.exports = ConvexPolyhedron;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Transform = _dereq_('../math/Transform');

/**
 * A set of polygons describing a convex shape.
 * @class ConvexPolyhedron
 * @constructor
 * @extends Shape
 * @description The shape MUST be convex for the code to work properly. No polygons may be coplanar (contained
 * in the same 3D plane), instead these should be merged into one polygon.
 *
 * @param {array} points An array of Vec3's
 * @param {array} faces Array of integer arrays, describing which vertices that is included in each face.
 *
 * @author qiao / https://github.com/qiao (original author, see https://github.com/qiao/three.js/commit/85026f0c769e4000148a67d45a9e9b9c5108836f)
 * @author schteppe / https://github.com/schteppe
 * @see http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/
 * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
 *
 * @todo Move the clipping functions to ContactGenerator?
 * @todo Automatically merge coplanar polygons in constructor.
 */
function ConvexPolyhedron(points, faces, uniqueAxes) {
    var that = this;
    Shape.call(this);
    this.type = Shape.types.CONVEXPOLYHEDRON;

    /**
     * Array of Vec3
     * @property vertices
     * @type {Array}
     */
    this.vertices = points||[];

    this.worldVertices = []; // World transformed version of .vertices
    this.worldVerticesNeedsUpdate = true;

    /**
     * Array of integer arrays, indicating which vertices each face consists of
     * @property faces
     * @type {Array}
     */
    this.faces = faces||[];

    /**
     * Array of Vec3
     * @property faceNormals
     * @type {Array}
     */
    this.faceNormals = [];
    this.computeNormals();

    this.worldFaceNormalsNeedsUpdate = true;
    this.worldFaceNormals = []; // World transformed version of .faceNormals

    /**
     * Array of Vec3
     * @property uniqueEdges
     * @type {Array}
     */
    this.uniqueEdges = [];

    /**
     * If given, these locally defined, normalized axes are the only ones being checked when doing separating axis check.
     * @property {Array} uniqueAxes
     */
    this.uniqueAxes = uniqueAxes ? uniqueAxes.slice() : null;

    this.computeEdges();
    this.updateBoundingSphereRadius();
}
ConvexPolyhedron.prototype = new Shape();
ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;

var computeEdges_tmpEdge = new Vec3();
/**
 * Computes uniqueEdges
 * @method computeEdges
 */
ConvexPolyhedron.prototype.computeEdges = function(){
    var faces = this.faces;
    var vertices = this.vertices;
    var nv = vertices.length;
    var edges = this.uniqueEdges;

    edges.length = 0;

    var edge = computeEdges_tmpEdge;

    for(var i=0; i !== faces.length; i++){
        var face = faces[i];
        var numVertices = face.length;
        for(var j = 0; j !== numVertices; j++){
            var k = ( j+1 ) % numVertices;
            vertices[face[j]].vsub(vertices[face[k]], edge);
            edge.normalize();
            var found = false;
            for(var p=0; p !== edges.length; p++){
                if (edges[p].almostEquals(edge) || edges[p].almostEquals(edge)){
                    found = true;
                    break;
                }
            }

            if (!found){
                edges.push(edge.clone());
            }
        }
    }
};

/**
 * Compute the normals of the faces. Will reuse existing Vec3 objects in the .faceNormals array if they exist.
 * @method computeNormals
 */
ConvexPolyhedron.prototype.computeNormals = function(){
    this.faceNormals.length = this.faces.length;

    // Generate normals
    for(var i=0; i<this.faces.length; i++){

        // Check so all vertices exists for this face
        for(var j=0; j<this.faces[i].length; j++){
            if(!this.vertices[this.faces[i][j]]){
                throw new Error("Vertex "+this.faces[i][j]+" not found!");
            }
        }

        var n = this.faceNormals[i] || new Vec3();
        this.getFaceNormal(i,n);
        n.negate(n);
        this.faceNormals[i] = n;
        var vertex = this.vertices[this.faces[i][0]];
        if(n.dot(vertex) < 0){
            console.error(".faceNormals[" + i + "] = Vec3("+n.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
            for(var j=0; j<this.faces[i].length; j++){
                console.warn(".vertices["+this.faces[i][j]+"] = Vec3("+this.vertices[this.faces[i][j]].toString()+")");
            }
        }
    }
};

/**
 * Get face normal given 3 vertices
 * @static
 * @method getFaceNormal
 * @param {Vec3} va
 * @param {Vec3} vb
 * @param {Vec3} vc
 * @param {Vec3} target
 */
var cb = new Vec3();
var ab = new Vec3();
ConvexPolyhedron.computeNormal = function ( va, vb, vc, target ) {
    vb.vsub(va,ab);
    vc.vsub(vb,cb);
    cb.cross(ab,target);
    if ( !target.isZero() ) {
        target.normalize();
    }
};

/**
 * Compute the normal of a face from its vertices
 * @method getFaceNormal
 * @param  {Number} i
 * @param  {Vec3} target
 */
ConvexPolyhedron.prototype.getFaceNormal = function(i,target){
    var f = this.faces[i];
    var va = this.vertices[f[0]];
    var vb = this.vertices[f[1]];
    var vc = this.vertices[f[2]];
    return ConvexPolyhedron.computeNormal(va,vb,vc,target);
};

/**
 * @method clipAgainstHull
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @param {Vec3} separatingNormal
 * @param {Number} minDist Clamp distance
 * @param {Number} maxDist
 * @param {array} result The an array of contact point objects, see clipFaceAgainstHull
 * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
 */
var cah_WorldNormal = new Vec3();
ConvexPolyhedron.prototype.clipAgainstHull = function(posA,quatA,hullB,posB,quatB,separatingNormal,minDist,maxDist,result){
    var WorldNormal = cah_WorldNormal;
    var hullA = this;
    var curMaxDist = maxDist;
    var closestFaceB = -1;
    var dmax = -Number.MAX_VALUE;
    for(var face=0; face < hullB.faces.length; face++){
        WorldNormal.copy(hullB.faceNormals[face]);
        quatB.vmult(WorldNormal,WorldNormal);
        //posB.vadd(WorldNormal,WorldNormal);
        var d = WorldNormal.dot(separatingNormal);
        if (d > dmax){
            dmax = d;
            closestFaceB = face;
        }
    }
    var worldVertsB1 = [];
    var polyB = hullB.faces[closestFaceB];
    var numVertices = polyB.length;
    for(var e0=0; e0<numVertices; e0++){
        var b = hullB.vertices[polyB[e0]];
        var worldb = new Vec3();
        worldb.copy(b);
        quatB.vmult(worldb,worldb);
        posB.vadd(worldb,worldb);
        worldVertsB1.push(worldb);
    }

    if (closestFaceB>=0){
        this.clipFaceAgainstHull(separatingNormal,
                                 posA,
                                 quatA,
                                 worldVertsB1,
                                 minDist,
                                 maxDist,
                                 result);
    }
};

/**
 * Find the separating axis between this hull and another
 * @method findSeparatingAxis
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @param {Vec3} target The target vector to save the axis in
 * @return {bool} Returns false if a separation is found, else true
 */
var fsa_faceANormalWS3 = new Vec3(),
    fsa_Worldnormal1 = new Vec3(),
    fsa_deltaC = new Vec3(),
    fsa_worldEdge0 = new Vec3(),
    fsa_worldEdge1 = new Vec3(),
    fsa_Cross = new Vec3();
ConvexPolyhedron.prototype.findSeparatingAxis = function(hullB,posA,quatA,posB,quatB,target, faceListA, faceListB){
    var faceANormalWS3 = fsa_faceANormalWS3,
        Worldnormal1 = fsa_Worldnormal1,
        deltaC = fsa_deltaC,
        worldEdge0 = fsa_worldEdge0,
        worldEdge1 = fsa_worldEdge1,
        Cross = fsa_Cross;

    var dmin = Number.MAX_VALUE;
    var hullA = this;
    var curPlaneTests=0;

    if(!hullA.uniqueAxes){

        var numFacesA = faceListA ? faceListA.length : hullA.faces.length;

        // Test face normals from hullA
        for(var i=0; i<numFacesA; i++){
            var fi = faceListA ? faceListA[i] : i;

            // Get world face normal
            faceANormalWS3.copy(hullA.faceNormals[fi]);
            quatA.vmult(faceANormalWS3,faceANormalWS3);

            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(faceANormalWS3);
            }
        }

    } else {

        // Test unique axes
        for(var i = 0; i !== hullA.uniqueAxes.length; i++){

            // Get world axis
            quatA.vmult(hullA.uniqueAxes[i],faceANormalWS3);

            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(faceANormalWS3);
            }
        }
    }

    if(!hullB.uniqueAxes){

        // Test face normals from hullB
        var numFacesB = faceListB ? faceListB.length : hullB.faces.length;
        for(var i=0;i<numFacesB;i++){

            var fi = faceListB ? faceListB[i] : i;

            Worldnormal1.copy(hullB.faceNormals[fi]);
            quatB.vmult(Worldnormal1,Worldnormal1);
            curPlaneTests++;
            var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(Worldnormal1);
            }
        }
    } else {

        // Test unique axes in B
        for(var i = 0; i !== hullB.uniqueAxes.length; i++){
            quatB.vmult(hullB.uniqueAxes[i],Worldnormal1);

            curPlaneTests++;
            var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(Worldnormal1);
            }
        }
    }

    // Test edges
    for(var e0=0; e0 !== hullA.uniqueEdges.length; e0++){

        // Get world edge
        quatA.vmult(hullA.uniqueEdges[e0],worldEdge0);

        for(var e1=0; e1 !== hullB.uniqueEdges.length; e1++){

            // Get world edge 2
            quatB.vmult(hullB.uniqueEdges[e1], worldEdge1);
            worldEdge0.cross(worldEdge1,Cross);

            if(!Cross.almostZero()){
                Cross.normalize();
                var dist = hullA.testSepAxis(Cross, hullB, posA, quatA, posB, quatB);
                if(dist === false){
                    return false;
                }
                if(dist < dmin){
                    dmin = dist;
                    target.copy(Cross);
                }
            }
        }
    }

    posB.vsub(posA,deltaC);
    if((deltaC.dot(target))>0.0){
        target.negate(target);
    }

    return true;
};

var maxminA=[], maxminB=[];

/**
 * Test separating axis against two hulls. Both hulls are projected onto the axis and the overlap size is returned if there is one.
 * @method testSepAxis
 * @param {Vec3} axis
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @return {number} The overlap depth, or FALSE if no penetration.
 */
ConvexPolyhedron.prototype.testSepAxis = function(axis, hullB, posA, quatA, posB, quatB){
    var hullA=this;
    ConvexPolyhedron.project(hullA, axis, posA, quatA, maxminA);
    ConvexPolyhedron.project(hullB, axis, posB, quatB, maxminB);
    var maxA = maxminA[0];
    var minA = maxminA[1];
    var maxB = maxminB[0];
    var minB = maxminB[1];
    if(maxA<minB || maxB<minA){
        return false; // Separated
    }
    var d0 = maxA - minB;
    var d1 = maxB - minA;
    var depth = d0<d1 ? d0:d1;
    return depth;
};

var cli_aabbmin = new Vec3(),
    cli_aabbmax = new Vec3();

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 */
ConvexPolyhedron.prototype.calculateLocalInertia = function(mass,target){
    // Approximate with box inertia
    // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
    this.computeLocalAABB(cli_aabbmin,cli_aabbmax);
    var x = cli_aabbmax.x - cli_aabbmin.x,
        y = cli_aabbmax.y - cli_aabbmin.y,
        z = cli_aabbmax.z - cli_aabbmin.z;
    target.x = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z );
    target.y = 1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z );
    target.z = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x );
};

/**
 * @method getPlaneConstantOfFace
 * @param  {Number} face_i Index of the face
 * @return {Number}
 */
ConvexPolyhedron.prototype.getPlaneConstantOfFace = function(face_i){
    var f = this.faces[face_i];
    var n = this.faceNormals[face_i];
    var v = this.vertices[f[0]];
    var c = -n.dot(v);
    return c;
};

/**
 * Clip a face against a hull.
 * @method clipFaceAgainstHull
 * @param {Vec3} separatingNormal
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Array} worldVertsB1 An array of Vec3 with vertices in the world frame.
 * @param {Number} minDist Distance clamping
 * @param {Number} maxDist
 * @param Array result Array to store resulting contact points in. Will be objects with properties: point, depth, normal. These are represented in world coordinates.
 */
var cfah_faceANormalWS = new Vec3(),
    cfah_edge0 = new Vec3(),
    cfah_WorldEdge0 = new Vec3(),
    cfah_worldPlaneAnormal1 = new Vec3(),
    cfah_planeNormalWS1 = new Vec3(),
    cfah_worldA1 = new Vec3(),
    cfah_localPlaneNormal = new Vec3(),
    cfah_planeNormalWS = new Vec3();
ConvexPolyhedron.prototype.clipFaceAgainstHull = function(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist,result){
    var faceANormalWS = cfah_faceANormalWS,
        edge0 = cfah_edge0,
        WorldEdge0 = cfah_WorldEdge0,
        worldPlaneAnormal1 = cfah_worldPlaneAnormal1,
        planeNormalWS1 = cfah_planeNormalWS1,
        worldA1 = cfah_worldA1,
        localPlaneNormal = cfah_localPlaneNormal,
        planeNormalWS = cfah_planeNormalWS;

    var hullA = this;
    var worldVertsB2 = [];
    var pVtxIn = worldVertsB1;
    var pVtxOut = worldVertsB2;
    // Find the face with normal closest to the separating axis
    var closestFaceA = -1;
    var dmin = Number.MAX_VALUE;
    for(var face=0; face<hullA.faces.length; face++){
        faceANormalWS.copy(hullA.faceNormals[face]);
        quatA.vmult(faceANormalWS,faceANormalWS);
        //posA.vadd(faceANormalWS,faceANormalWS);
        var d = faceANormalWS.dot(separatingNormal);
        if (d < dmin){
            dmin = d;
            closestFaceA = face;
        }
    }
    if (closestFaceA < 0){
        // console.log("--- did not find any closest face... ---");
        return;
    }
    //console.log("closest A: ",closestFaceA);
    // Get the face and construct connected faces
    var polyA = hullA.faces[closestFaceA];
    polyA.connectedFaces = [];
    for(var i=0; i<hullA.faces.length; i++){
        for(var j=0; j<hullA.faces[i].length; j++){
            if(polyA.indexOf(hullA.faces[i][j])!==-1 /* Sharing a vertex*/ && i!==closestFaceA /* Not the one we are looking for connections from */ && polyA.connectedFaces.indexOf(i)===-1 /* Not already added */ ){
                polyA.connectedFaces.push(i);
            }
        }
    }
    // Clip the polygon to the back of the planes of all faces of hull A, that are adjacent to the witness face
    var numContacts = pVtxIn.length;
    var numVerticesA = polyA.length;
    var res = [];
    for(var e0=0; e0<numVerticesA; e0++){
        var a = hullA.vertices[polyA[e0]];
        var b = hullA.vertices[polyA[(e0+1)%numVerticesA]];
        a.vsub(b,edge0);
        WorldEdge0.copy(edge0);
        quatA.vmult(WorldEdge0,WorldEdge0);
        posA.vadd(WorldEdge0,WorldEdge0);
        worldPlaneAnormal1.copy(this.faceNormals[closestFaceA]);//transA.getBasis()* btVector3(polyA.m_plane[0],polyA.m_plane[1],polyA.m_plane[2]);
        quatA.vmult(worldPlaneAnormal1,worldPlaneAnormal1);
        posA.vadd(worldPlaneAnormal1,worldPlaneAnormal1);
        WorldEdge0.cross(worldPlaneAnormal1,planeNormalWS1);
        planeNormalWS1.negate(planeNormalWS1);
        worldA1.copy(a);
        quatA.vmult(worldA1,worldA1);
        posA.vadd(worldA1,worldA1);
        var planeEqWS1 = -worldA1.dot(planeNormalWS1);
        var planeEqWS;
        if(true){
            var otherFace = polyA.connectedFaces[e0];
            localPlaneNormal.copy(this.faceNormals[otherFace]);
            var localPlaneEq = this.getPlaneConstantOfFace(otherFace);

            planeNormalWS.copy(localPlaneNormal);
            quatA.vmult(planeNormalWS,planeNormalWS);
            //posA.vadd(planeNormalWS,planeNormalWS);
            var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
        } else  {
            planeNormalWS.copy(planeNormalWS1);
            planeEqWS = planeEqWS1;
        }

        // Clip face against our constructed plane
        this.clipFaceAgainstPlane(pVtxIn, pVtxOut, planeNormalWS, planeEqWS);

        // Throw away all clipped points, but save the reamining until next clip
        while(pVtxIn.length){
            pVtxIn.shift();
        }
        while(pVtxOut.length){
            pVtxIn.push(pVtxOut.shift());
        }
    }

    //console.log("Resulting points after clip:",pVtxIn);

    // only keep contact points that are behind the witness face
    localPlaneNormal.copy(this.faceNormals[closestFaceA]);

    var localPlaneEq = this.getPlaneConstantOfFace(closestFaceA);
    planeNormalWS.copy(localPlaneNormal);
    quatA.vmult(planeNormalWS,planeNormalWS);

    var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
    for (var i=0; i<pVtxIn.length; i++){
        var depth = planeNormalWS.dot(pVtxIn[i]) + planeEqWS; //???
        /*console.log("depth calc from normal=",planeNormalWS.toString()," and constant "+planeEqWS+" and vertex ",pVtxIn[i].toString()," gives "+depth);*/
        if (depth <=minDist){
            console.log("clamped: depth="+depth+" to minDist="+(minDist+""));
            depth = minDist;
        }

        if (depth <=maxDist){
            var point = pVtxIn[i];
            if(depth<=0){
                /*console.log("Got contact point ",point.toString(),
                  ", depth=",depth,
                  "contact normal=",separatingNormal.toString(),
                  "plane",planeNormalWS.toString(),
                  "planeConstant",planeEqWS);*/
                var p = {
                    point:point,
                    normal:planeNormalWS,
                    depth: depth,
                };
                result.push(p);
            }
        }
    }
};

/**
 * Clip a face in a hull against the back of a plane.
 * @method clipFaceAgainstPlane
 * @param {Array} inVertices
 * @param {Array} outVertices
 * @param {Vec3} planeNormal
 * @param {Number} planeConstant The constant in the mathematical plane equation
 */
ConvexPolyhedron.prototype.clipFaceAgainstPlane = function(inVertices,outVertices, planeNormal, planeConstant){
    var n_dot_first, n_dot_last;
    var numVerts = inVertices.length;

    if(numVerts < 2){
        return outVertices;
    }

    var firstVertex = inVertices[inVertices.length-1],
        lastVertex =   inVertices[0];

    n_dot_first = planeNormal.dot(firstVertex) + planeConstant;

    for(var vi = 0; vi < numVerts; vi++){
        lastVertex = inVertices[vi];
        n_dot_last = planeNormal.dot(lastVertex) + planeConstant;
        if(n_dot_first < 0){
            if(n_dot_last < 0){
                // Start < 0, end < 0, so output lastVertex
                var newv = new Vec3();
                newv.copy(lastVertex);
                outVertices.push(newv);
            } else {
                // Start < 0, end >= 0, so output intersection
                var newv = new Vec3();
                firstVertex.lerp(lastVertex,
                                 n_dot_first / (n_dot_first - n_dot_last),
                                 newv);
                outVertices.push(newv);
            }
        } else {
            if(n_dot_last<0){
                // Start >= 0, end < 0 so output intersection and end
                var newv = new Vec3();
                firstVertex.lerp(lastVertex,
                                 n_dot_first / (n_dot_first - n_dot_last),
                                 newv);
                outVertices.push(newv);
                outVertices.push(lastVertex);
            }
        }
        firstVertex = lastVertex;
        n_dot_first = n_dot_last;
    }
    return outVertices;
};

// Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
ConvexPolyhedron.prototype.computeWorldVertices = function(position,quat){
    var N = this.vertices.length;
    while(this.worldVertices.length < N){
        this.worldVertices.push( new Vec3() );
    }

    var verts = this.vertices,
        worldVerts = this.worldVertices;
    for(var i=0; i!==N; i++){
        quat.vmult( verts[i] , worldVerts[i] );
        position.vadd( worldVerts[i] , worldVerts[i] );
    }

    this.worldVerticesNeedsUpdate = false;
};

var computeLocalAABB_worldVert = new Vec3();
ConvexPolyhedron.prototype.computeLocalAABB = function(aabbmin,aabbmax){
    var n = this.vertices.length,
        vertices = this.vertices,
        worldVert = computeLocalAABB_worldVert;

    aabbmin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
    aabbmax.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);

    for(var i=0; i<n; i++){
        var v = vertices[i];
        if     (v.x < aabbmin.x){
            aabbmin.x = v.x;
        } else if(v.x > aabbmax.x){
            aabbmax.x = v.x;
        }
        if     (v.y < aabbmin.y){
            aabbmin.y = v.y;
        } else if(v.y > aabbmax.y){
            aabbmax.y = v.y;
        }
        if     (v.z < aabbmin.z){
            aabbmin.z = v.z;
        } else if(v.z > aabbmax.z){
            aabbmax.z = v.z;
        }
    }
};

/**
 * Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
 * @method computeWorldFaceNormals
 * @param  {Quaternion} quat
 */
ConvexPolyhedron.prototype.computeWorldFaceNormals = function(quat){
    var N = this.faceNormals.length;
    while(this.worldFaceNormals.length < N){
        this.worldFaceNormals.push( new Vec3() );
    }

    var normals = this.faceNormals,
        worldNormals = this.worldFaceNormals;
    for(var i=0; i!==N; i++){
        quat.vmult( normals[i] , worldNormals[i] );
    }

    this.worldFaceNormalsNeedsUpdate = false;
};

/**
 * @method updateBoundingSphereRadius
 */
ConvexPolyhedron.prototype.updateBoundingSphereRadius = function(){
    // Assume points are distributed with local (0,0,0) as center
    var max2 = 0;
    var verts = this.vertices;
    for(var i=0, N=verts.length; i!==N; i++) {
        var norm2 = verts[i].norm2();
        if(norm2 > max2){
            max2 = norm2;
        }
    }
    this.boundingSphereRadius = Math.sqrt(max2);
};

var tempWorldVertex = new Vec3();

/**
 * @method calculateWorldAABB
 * @param {Vec3}        pos
 * @param {Quaternion}  quat
 * @param {Vec3}        min
 * @param {Vec3}        max
 */
ConvexPolyhedron.prototype.calculateWorldAABB = function(pos,quat,min,max){
    var n = this.vertices.length, verts = this.vertices;
    var minx,miny,minz,maxx,maxy,maxz;
    for(var i=0; i<n; i++){
        tempWorldVertex.copy(verts[i]);
        quat.vmult(tempWorldVertex,tempWorldVertex);
        pos.vadd(tempWorldVertex,tempWorldVertex);
        var v = tempWorldVertex;
        if     (v.x < minx || minx===undefined){
            minx = v.x;
        } else if(v.x > maxx || maxx===undefined){
            maxx = v.x;
        }

        if     (v.y < miny || miny===undefined){
            miny = v.y;
        } else if(v.y > maxy || maxy===undefined){
            maxy = v.y;
        }

        if     (v.z < minz || minz===undefined){
            minz = v.z;
        } else if(v.z > maxz || maxz===undefined){
            maxz = v.z;
        }
    }
    min.set(minx,miny,minz);
    max.set(maxx,maxy,maxz);
};

/**
 * Get approximate convex volume
 * @method volume
 * @return {Number}
 */
ConvexPolyhedron.prototype.volume = function(){
    return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
};

/**
 * Get an average of all the vertices positions
 * @method getAveragePointLocal
 * @param  {Vec3} target
 * @return {Vec3}
 */
ConvexPolyhedron.prototype.getAveragePointLocal = function(target){
    target = target || new Vec3();
    var n = this.vertices.length,
        verts = this.vertices;
    for(var i=0; i<n; i++){
        target.vadd(verts[i],target);
    }
    target.mult(1/n,target);
    return target;
};

/**
 * Transform all local points. Will change the .vertices
 * @method transformAllPoints
 * @param  {Vec3} offset
 * @param  {Quaternion} quat
 */
ConvexPolyhedron.prototype.transformAllPoints = function(offset,quat){
    var n = this.vertices.length,
        verts = this.vertices;

    // Apply rotation
    if(quat){
        // Rotate vertices
        for(var i=0; i<n; i++){
            var v = verts[i];
            quat.vmult(v,v);
        }
        // Rotate face normals
        for(var i=0; i<this.faceNormals.length; i++){
            var v = this.faceNormals[i];
            quat.vmult(v,v);
        }
        /*
        // Rotate edges
        for(var i=0; i<this.uniqueEdges.length; i++){
            var v = this.uniqueEdges[i];
            quat.vmult(v,v);
        }*/
    }

    // Apply offset
    if(offset){
        for(var i=0; i<n; i++){
            var v = verts[i];
            v.vadd(offset,v);
        }
    }
};

/**
 * Checks whether p is inside the polyhedra. Must be in local coords. The point lies outside of the convex hull of the other points if and only if the direction of all the vectors from it to those other points are on less than one half of a sphere around it.
 * @method pointIsInside
 * @param  {Vec3} p      A point given in local coordinates
 * @return {Boolean}
 */
var ConvexPolyhedron_pointIsInside = new Vec3();
var ConvexPolyhedron_vToP = new Vec3();
var ConvexPolyhedron_vToPointInside = new Vec3();
ConvexPolyhedron.prototype.pointIsInside = function(p){
    var n = this.vertices.length,
        verts = this.vertices,
        faces = this.faces,
        normals = this.faceNormals;
    var positiveResult = null;
    var N = this.faces.length;
    var pointInside = ConvexPolyhedron_pointIsInside;
    this.getAveragePointLocal(pointInside);
    for(var i=0; i<N; i++){
        var numVertices = this.faces[i].length;
        var n = normals[i];
        var v = verts[faces[i][0]]; // We only need one point in the face

        // This dot product determines which side of the edge the point is
        var vToP = ConvexPolyhedron_vToP;
        p.vsub(v,vToP);
        var r1 = n.dot(vToP);

        var vToPointInside = ConvexPolyhedron_vToPointInside;
        pointInside.vsub(v,vToPointInside);
        var r2 = n.dot(vToPointInside);

        if((r1<0 && r2>0) || (r1>0 && r2<0)){
            return false; // Encountered some other sign. Exit.
        } else {
        }
    }

    // If we got here, all dot products were of the same sign.
    return positiveResult ? 1 : -1;
};

/**
 * Get max and min dot product of a convex hull at position (pos,quat) projected onto an axis. Results are saved in the array maxmin.
 * @static
 * @method project
 * @param {ConvexPolyhedron} hull
 * @param {Vec3} axis
 * @param {Vec3} pos
 * @param {Quaternion} quat
 * @param {array} result result[0] and result[1] will be set to maximum and minimum, respectively.
 */
var project_worldVertex = new Vec3();
var project_localAxis = new Vec3();
var project_localOrigin = new Vec3();
ConvexPolyhedron.project = function(hull, axis, pos, quat, result){
    var n = hull.vertices.length,
        worldVertex = project_worldVertex,
        localAxis = project_localAxis,
        max = 0,
        min = 0,
        localOrigin = project_localOrigin,
        vs = hull.vertices;

    localOrigin.setZero();

    // Transform the axis to local
    Transform.vectorToLocalFrame(pos, quat, axis, localAxis);
    Transform.pointToLocalFrame(pos, quat, localOrigin, localOrigin);
    var add = localOrigin.dot(localAxis);

    min = max = vs[0].dot(localAxis);

    for(var i = 1; i < n; i++){
        var val = vs[i].dot(localAxis);

        if(val > max){
            max = val;
        }

        if(val < min){
            min = val;
        }
    }

    min -= add;
    max -= add;

    if(min > max){
        // Inconsistent - swap
        var temp = min;
        min = max;
        max = temp;
    }
    // Output
    result[0] = max;
    result[1] = min;
};

},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(_dereq_,module,exports){
module.exports = Cylinder;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');

/**
 * @class Cylinder
 * @constructor
 * @extends ConvexPolyhedron
 * @author schteppe / https://github.com/schteppe
 * @param {Number} radiusTop
 * @param {Number} radiusBottom
 * @param {Number} height
 * @param {Number} numSegments The number of segments to build the cylinder out of
 */
function Cylinder( radiusTop, radiusBottom, height , numSegments ) {
    var N = numSegments,
        verts = [],
        axes = [],
        faces = [],
        bottomface = [],
        topface = [],
        cos = Math.cos,
        sin = Math.sin;

    // First bottom point
    verts.push(new Vec3(radiusBottom*cos(0),
                               radiusBottom*sin(0),
                               -height*0.5));
    bottomface.push(0);

    // First top point
    verts.push(new Vec3(radiusTop*cos(0),
                               radiusTop*sin(0),
                               height*0.5));
    topface.push(1);

    for(var i=0; i<N; i++){
        var theta = 2*Math.PI/N * (i+1);
        var thetaN = 2*Math.PI/N * (i+0.5);
        if(i<N-1){
            // Bottom
            verts.push(new Vec3(radiusBottom*cos(theta),
                                       radiusBottom*sin(theta),
                                       -height*0.5));
            bottomface.push(2*i+2);
            // Top
            verts.push(new Vec3(radiusTop*cos(theta),
                                       radiusTop*sin(theta),
                                       height*0.5));
            topface.push(2*i+3);

            // Face
            faces.push([2*i+2, 2*i+3, 2*i+1,2*i]);
        } else {
            faces.push([0,1, 2*i+1, 2*i]); // Connect
        }

        // Axis: we can cut off half of them if we have even number of segments
        if(N % 2 === 1 || i < N / 2){
            axes.push(new Vec3(cos(thetaN), sin(thetaN), 0));
        }
    }
    faces.push(topface);
    axes.push(new Vec3(0,0,1));

    // Reorder bottom face
    var temp = [];
    for(var i=0; i<bottomface.length; i++){
        temp.push(bottomface[bottomface.length - i - 1]);
    }
    faces.push(temp);

    this.type = Shape.types.CONVEXPOLYHEDRON;
    ConvexPolyhedron.call( this, verts, faces, axes );
}

Cylinder.prototype = new ConvexPolyhedron();

},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(_dereq_,module,exports){
var Shape = _dereq_('./Shape');
var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');
var Vec3 = _dereq_('../math/Vec3');
var Utils = _dereq_('../utils/Utils');

module.exports = Heightfield;

/**
 * Heightfield shape class. Height data is given as an array. These data points are spread out evenly with a given distance.
 * @class Heightfield
 * @extends Shape
 * @constructor
 * @param {Array} data An array of Y values that will be used to construct the terrain.
 * @param {object} options
 * @param {Number} [options.minValue] Minimum value of the data points in the data array. Will be computed automatically if not given.
 * @param {Number} [options.maxValue] Maximum value.
 * @param {Number} [options.elementSize=0.1] World spacing between the data points in X direction.
 * @todo Should be possible to use along all axes, not just y
 *
 * @example
 *     // Generate some height data (y-values).
 *     var data = [];
 *     for(var i = 0; i < 1000; i++){
 *         var y = 0.5 * Math.cos(0.2 * i);
 *         data.push(y);
 *     }
 *
 *     // Create the heightfield shape
 *     var heightfieldShape = new Heightfield(data, {
 *         elementSize: 1 // Distance between the data points in X and Y directions
 *     });
 *     var heightfieldBody = new Body();
 *     heightfieldBody.addShape(heightfieldShape);
 *     world.addBody(heightfieldBody);
 */
function Heightfield(data, options){
    options = Utils.defaults(options, {
        maxValue : null,
        minValue : null,
        elementSize : 1
    });

    /**
     * An array of numbers, or height values, that are spread out along the x axis.
     * @property {array} data
     */
    this.data = data;

    /**
     * Max value of the data
     * @property {number} maxValue
     */
    this.maxValue = options.maxValue;

    /**
     * Max value of the data
     * @property {number} minValue
     */
    this.minValue = options.minValue;

    /**
     * The width of each element
     * @property {number} elementSize
     * @todo elementSizeX and Y
     */
    this.elementSize = options.elementSize;

    if(options.minValue === null){
        this.updateMinValue();
    }
    if(options.maxValue === null){
        this.updateMaxValue();
    }

    this.cacheEnabled = true;

    Shape.call(this);

    this.pillarConvex = new ConvexPolyhedron();
    this.pillarOffset = new Vec3();

    this.type = Shape.types.HEIGHTFIELD;
    this.updateBoundingSphereRadius();

    // "i_j_isUpper" => { convex: ..., offset: ... }
    // for example:
    // _cachedPillars["0_2_1"]
    this._cachedPillars = {};
}
Heightfield.prototype = new Shape();

/**
 * Call whenever you change the data array.
 * @method update
 */
Heightfield.prototype.update = function(){
    this._cachedPillars = {};
};

/**
 * Update the .minValue property
 * @method updateMinValue
 */
Heightfield.prototype.updateMinValue = function(){
    var data = this.data;
    var minValue = data[0][0];
    for(var i=0; i !== data.length; i++){
        for(var j=0; j !== data[i].length; j++){
            var v = data[i][j];
            if(v < minValue){
                minValue = v;
            }
        }
    }
    this.minValue = minValue;
};

/**
 * Update the .maxValue property
 * @method updateMaxValue
 */
Heightfield.prototype.updateMaxValue = function(){
    var data = this.data;
    var maxValue = data[0][0];
    for(var i=0; i !== data.length; i++){
        for(var j=0; j !== data[i].length; j++){
            var v = data[i][j];
            if(v > maxValue){
                maxValue = v;
            }
        }
    }
    this.maxValue = maxValue;
};

/**
 * Set the height value at an index. Don't forget to update maxValue and minValue after you're done.
 * @method setHeightValueAtIndex
 * @param {integer} xi
 * @param {integer} yi
 * @param {number} value
 */
Heightfield.prototype.setHeightValueAtIndex = function(xi, yi, value){
    var data = this.data;
    data[xi][yi] = value;

    // Invalidate cache
    this.clearCachedConvexTrianglePillar(xi, yi, false);
    if(xi > 0){
        this.clearCachedConvexTrianglePillar(xi - 1, yi, true);
        this.clearCachedConvexTrianglePillar(xi - 1, yi, false);
    }
    if(yi > 0){
        this.clearCachedConvexTrianglePillar(xi, yi - 1, true);
        this.clearCachedConvexTrianglePillar(xi, yi - 1, false);
    }
    if(yi > 0 && xi > 0){
        this.clearCachedConvexTrianglePillar(xi - 1, yi - 1, true);
    }
};

/**
 * Get max/min in a rectangle in the matrix data
 * @method getRectMinMax
 * @param  {integer} iMinX
 * @param  {integer} iMinY
 * @param  {integer} iMaxX
 * @param  {integer} iMaxY
 * @param  {array} [result] An array to store the results in.
 * @return {array} The result array, if it was passed in. Minimum will be at position 0 and max at 1.
 */
Heightfield.prototype.getRectMinMax = function (iMinX, iMinY, iMaxX, iMaxY, result) {
    result = result || [];

    // Get max and min of the data
    var data = this.data,
        max = this.minValue; // Set first value
    for(var i = iMinX; i <= iMaxX; i++){
        for(var j = iMinY; j <= iMaxY; j++){
            var height = data[i][j];
            if(height > max){
                max = height;
            }
        }
    }

    result[0] = this.minValue;
    result[1] = max;
};

/**
 * Get the index of a local position on the heightfield. The indexes indicate the rectangles, so if your terrain is made of N x N height data points, you will have rectangle indexes ranging from 0 to N-1.
 * @method getIndexOfPosition
 * @param  {number} x
 * @param  {number} y
 * @param  {array} result Two-element array
 * @param  {boolean} clamp If the position should be clamped to the heightfield edge.
 * @return {boolean}
 */
Heightfield.prototype.getIndexOfPosition = function (x, y, result, clamp) {

    // Get the index of the data points to test against
    var w = this.elementSize;
    var data = this.data;
    var xi = Math.floor(x / w);
    var yi = Math.floor(y / w);

    result[0] = xi;
    result[1] = yi;

    if(clamp){
        // Clamp index to edges
        if(xi < 0){ xi = 0; }
        if(yi < 0){ yi = 0; }
        if(xi >= data.length - 1){ xi = data.length - 1; }
        if(yi >= data[0].length - 1){ yi = data[0].length - 1; }
    }

    // Bail out if we are out of the terrain
    if(xi < 0 || yi < 0 || xi >= data.length-1 || yi >= data[0].length-1){
        return false;
    }

    return true;
};

Heightfield.prototype.getHeightAt = function(x, y, edgeClamp){
    var idx = [];
    this.getIndexOfPosition(x, y, idx, edgeClamp);

    // TODO: get upper or lower triangle, then use barycentric interpolation to get the height in the triangle.
    var minmax = [];
    this.getRectMinMax(idx[0], idx[1] + 1, idx[0], idx[1] + 1, minmax);

    return (minmax[0] + minmax[1]) / 2; // average
};

Heightfield.prototype.getCacheConvexTrianglePillarKey = function(xi, yi, getUpperTriangle){
    return xi + '_' + yi + '_' + (getUpperTriangle ? 1 : 0);
};

Heightfield.prototype.getCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    return this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
};

Heightfield.prototype.setCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle, convex, offset){
    this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)] = {
        convex: convex,
        offset: offset
    };
};

Heightfield.prototype.clearCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
};

/**
 * Get a triangle in the terrain in the form of a triangular convex shape.
 * @method getConvexTrianglePillar
 * @param  {integer} i
 * @param  {integer} j
 * @param  {boolean} getUpperTriangle
 */
Heightfield.prototype.getConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    var result = this.pillarConvex;
    var offsetResult = this.pillarOffset;

    if(this.cacheEnabled){
        var data = this.getCachedConvexTrianglePillar(xi, yi, getUpperTriangle);
        if(data){
            this.pillarConvex = data.convex;
            this.pillarOffset = data.offset;
            return;
        }

        result = new ConvexPolyhedron();
        offsetResult = new Vec3();

        this.pillarConvex = result;
        this.pillarOffset = offsetResult;
    }

    var data = this.data;
    var elementSize = this.elementSize;
    var faces = result.faces;

    // Reuse verts if possible
    result.vertices.length = 6;
    for (var i = 0; i < 6; i++) {
        if(!result.vertices[i]){
            result.vertices[i] = new Vec3();
        }
    }

    // Reuse faces if possible
    faces.length = 5;
    for (var i = 0; i < 5; i++) {
        if(!faces[i]){
            faces[i] = [];
        }
    }

    var verts = result.vertices;

    var h = (Math.min(
        data[xi][yi],
        data[xi+1][yi],
        data[xi][yi+1],
        data[xi+1][yi+1]
    ) - this.minValue ) / 2 + this.minValue;

    if (!getUpperTriangle) {

        // Center of the triangle pillar - all polygons are given relative to this one
        offsetResult.set(
            (xi + 0.25) * elementSize, // sort of center of a triangle
            (yi + 0.25) * elementSize,
            h // vertical center
        );

        // Top triangle verts
        verts[0].set(
            -0.25 * elementSize,
            -0.25 * elementSize,
            data[xi][yi] - h
        );
        verts[1].set(
            0.75 * elementSize,
            -0.25 * elementSize,
            data[xi + 1][yi] - h
        );
        verts[2].set(
            -0.25 * elementSize,
            0.75 * elementSize,
            data[xi][yi + 1] - h
        );

        // bottom triangle verts
        verts[3].set(
            -0.25 * elementSize,
            -0.25 * elementSize,
            -h-1
        );
        verts[4].set(
            0.75 * elementSize,
            -0.25 * elementSize,
            -h-1
        );
        verts[5].set(
            -0.25 * elementSize,
            0.75  * elementSize,
            -h-1
        );

        // top triangle
        faces[0][0] = 0;
        faces[0][1] = 1;
        faces[0][2] = 2;

        // bottom triangle
        faces[1][0] = 5;
        faces[1][1] = 4;
        faces[1][2] = 3;

        // -x facing quad
        faces[2][0] = 0;
        faces[2][1] = 2;
        faces[2][2] = 5;
        faces[2][3] = 3;

        // -y facing quad
        faces[3][0] = 1;
        faces[3][1] = 0;
        faces[3][2] = 3;
        faces[3][3] = 4;

        // +xy facing quad
        faces[4][0] = 4;
        faces[4][1] = 5;
        faces[4][2] = 2;
        faces[4][3] = 1;


    } else {

        // Center of the triangle pillar - all polygons are given relative to this one
        offsetResult.set(
            (xi + 0.75) * elementSize, // sort of center of a triangle
            (yi + 0.75) * elementSize,
            h // vertical center
        );

        // Top triangle verts
        verts[0].set(
            0.25 * elementSize,
            0.25 * elementSize,
            data[xi + 1][yi + 1] - h
        );
        verts[1].set(
            -0.75 * elementSize,
            0.25 * elementSize,
            data[xi][yi + 1] - h
        );
        verts[2].set(
            0.25 * elementSize,
            -0.75 * elementSize,
            data[xi + 1][yi] - h
        );

        // bottom triangle verts
        verts[3].set(
            0.25 * elementSize,
            0.25 * elementSize,
            - h-1
        );
        verts[4].set(
            -0.75 * elementSize,
            0.25 * elementSize,
            - h-1
        );
        verts[5].set(
            0.25 * elementSize,
            -0.75 * elementSize,
            - h-1
        );

        // Top triangle
        faces[0][0] = 0;
        faces[0][1] = 1;
        faces[0][2] = 2;

        // bottom triangle
        faces[1][0] = 5;
        faces[1][1] = 4;
        faces[1][2] = 3;

        // +x facing quad
        faces[2][0] = 2;
        faces[2][1] = 5;
        faces[2][2] = 3;
        faces[2][3] = 0;

        // +y facing quad
        faces[3][0] = 3;
        faces[3][1] = 4;
        faces[3][2] = 1;
        faces[3][3] = 0;

        // -xy facing quad
        faces[4][0] = 1;
        faces[4][1] = 4;
        faces[4][2] = 5;
        faces[4][3] = 2;
    }

    result.computeNormals();
    result.computeEdges();
    result.updateBoundingSphereRadius();

    this.setCachedConvexTrianglePillar(xi, yi, getUpperTriangle, result, offsetResult);
};

Heightfield.prototype.calculateLocalInertia = function(mass, target){
    target = target || new Vec3();
    target.set(0, 0, 0);
    return target;
};

Heightfield.prototype.volume = function(){
    return Number.MAX_VALUE; // The terrain is infinite
};

Heightfield.prototype.calculateWorldAABB = function(pos, quat, min, max){
    // TODO: do it properly
    min.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    max.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
};

Heightfield.prototype.updateBoundingSphereRadius = function(){
    // Use the bounding box of the min/max values
    var data = this.data,
        s = this.elementSize;
    this.boundingSphereRadius = new Vec3(data.length * s, data[0].length * s, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
};

},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(_dereq_,module,exports){
module.exports = Particle;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Particle shape.
 * @class Particle
 * @constructor
 * @author schteppe
 * @extends Shape
 */
function Particle(){
    Shape.call(this);

    this.type = Shape.types.PARTICLE;
}
Particle.prototype = new Shape();
Particle.prototype.constructor = Particle;

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3}
 */
Particle.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    target.set(0, 0, 0);
    return target;
};

Particle.prototype.volume = function(){
    return 0;
};

Particle.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = 0;
};

Particle.prototype.calculateWorldAABB = function(pos,quat,min,max){
    // Get each axis max
    min.copy(pos);
    max.copy(pos);
};

},{"../math/Vec3":30,"./Shape":43}],42:[function(_dereq_,module,exports){
module.exports = Plane;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');

/**
 * A plane, facing in the Z direction. The plane has its surface at z=0 and everything below z=0 is assumed to be solid plane. To make the plane face in some other direction than z, you must put it inside a RigidBody and rotate that body. See the demos.
 * @class Plane
 * @constructor
 * @extends Shape
 * @author schteppe
 */
function Plane(){
    Shape.call(this);
    this.type = Shape.types.PLANE;

    // World oriented normal
    this.worldNormal = new Vec3();
    this.worldNormalNeedsUpdate = true;

    this.boundingSphereRadius = Number.MAX_VALUE;
}
Plane.prototype = new Shape();
Plane.prototype.constructor = Plane;

Plane.prototype.computeWorldNormal = function(quat){
    var n = this.worldNormal;
    n.set(0,0,1);
    quat.vmult(n,n);
    this.worldNormalNeedsUpdate = false;
};

Plane.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    return target;
};

Plane.prototype.volume = function(){
    return Number.MAX_VALUE; // The plane is infinite...
};

var tempNormal = new Vec3();
Plane.prototype.calculateWorldAABB = function(pos, quat, min, max){
    // The plane AABB is infinite, except if the normal is pointing along any axis
    tempNormal.set(0,0,1); // Default plane normal is z
    quat.vmult(tempNormal,tempNormal);
    var maxVal = Number.MAX_VALUE;
    min.set(-maxVal, -maxVal, -maxVal);
    max.set(maxVal, maxVal, maxVal);

    if(tempNormal.x === 1){ max.x = pos.x; }
    if(tempNormal.y === 1){ max.y = pos.y; }
    if(tempNormal.z === 1){ max.z = pos.z; }

    if(tempNormal.x === -1){ min.x = pos.x; }
    if(tempNormal.y === -1){ min.y = pos.y; }
    if(tempNormal.z === -1){ min.z = pos.z; }
};

Plane.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = Number.MAX_VALUE;
};
},{"../math/Vec3":30,"./Shape":43}],43:[function(_dereq_,module,exports){
module.exports = Shape;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Material = _dereq_('../material/Material');

/**
 * Base class for shapes
 * @class Shape
 * @constructor
 * @author schteppe
 * @todo Should have a mechanism for caching bounding sphere radius instead of calculating it each time
 */
function Shape(){

    /**
     * Identifyer of the Shape.
     * @property {number} id
     */
    this.id = Shape.idCounter++;

    /**
     * The type of this shape. Must be set to an int > 0 by subclasses.
     * @property type
     * @type {Number}
     * @see Shape.types
     */
    this.type = 0;

    /**
     * The local bounding sphere radius of this shape.
     * @property {Number} boundingSphereRadius
     */
    this.boundingSphereRadius = 0;

    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {boolean} collisionResponse
     */
    this.collisionResponse = true;

    /**
     * @property {Material} material
     */
    this.material = null;
}
Shape.prototype.constructor = Shape;

/**
 * Computes the bounding sphere radius. The result is stored in the property .boundingSphereRadius
 * @method updateBoundingSphereRadius
 * @return {Number}
 */
Shape.prototype.updateBoundingSphereRadius = function(){
    throw "computeBoundingSphereRadius() not implemented for shape type "+this.type;
};

/**
 * Get the volume of this shape
 * @method volume
 * @return {Number}
 */
Shape.prototype.volume = function(){
    throw "volume() not implemented for shape type "+this.type;
};

/**
 * Calculates the inertia in the local frame for this shape.
 * @method calculateLocalInertia
 * @return {Vec3}
 * @see http://en.wikipedia.org/wiki/List_of_moments_of_inertia
 */
Shape.prototype.calculateLocalInertia = function(mass,target){
    throw "calculateLocalInertia() not implemented for shape type "+this.type;
};

Shape.idCounter = 0;

/**
 * The available shape types.
 * @static
 * @property types
 * @type {Object}
 */
Shape.types = {
    SPHERE:1,
    PLANE:2,
    BOX:4,
    COMPOUND:8,
    CONVEXPOLYHEDRON:16,
    HEIGHTFIELD:32,
    PARTICLE:64,
    CYLINDER:128,
    TRIMESH:256
};


},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(_dereq_,module,exports){
module.exports = Sphere;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Spherical shape
 * @class Sphere
 * @constructor
 * @extends Shape
 * @param {Number} radius The radius of the sphere, a non-negative number.
 * @author schteppe / http://github.com/schteppe
 */
function Sphere(radius){
    Shape.call(this);

    /**
     * @property {Number} radius
     */
    this.radius = radius!==undefined ? Number(radius) : 1.0;
    this.type = Shape.types.SPHERE;

    if(this.radius < 0){
        throw new Error('The sphere radius cannot be negative.');
    }

    this.updateBoundingSphereRadius();
}
Sphere.prototype = new Shape();
Sphere.prototype.constructor = Sphere;

Sphere.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    var I = 2.0*mass*this.radius*this.radius/5.0;
    target.x = I;
    target.y = I;
    target.z = I;
    return target;
};

Sphere.prototype.volume = function(){
    return 4.0 * Math.PI * this.radius / 3.0;
};

Sphere.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = this.radius;
};

Sphere.prototype.calculateWorldAABB = function(pos,quat,min,max){
    var r = this.radius;
    var axes = ['x','y','z'];
    for(var i=0; i<axes.length; i++){
        var ax = axes[i];
        min[ax] = pos[ax] - r;
        max[ax] = pos[ax] + r;
    }
};

},{"../math/Vec3":30,"./Shape":43}],45:[function(_dereq_,module,exports){
module.exports = Trimesh;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Transform = _dereq_('../math/Transform');
var AABB = _dereq_('../collision/AABB');
var Octree = _dereq_('../utils/Octree');

/**
 * @class Trimesh
 * @constructor
 * @param {array} vertices
 * @param {array} indices
 * @extends Shape
 * @example
 *     // How to make a mesh with a single triangle
 *     var vertices = [
 *         0, 0, 0, // vertex 0
 *         1, 0, 0, // vertex 1
 *         0, 1, 0  // vertex 2
 *     ];
 *     var indices = [
 *         0, 1, 2  // triangle 0
 *     ];
 *     var trimeshShape = new Trimesh(vertices, indices);
 */
function Trimesh(vertices, indices) {
    Shape.call(this);
    this.type = Shape.types.TRIMESH;

    /**
     * @property vertices
     * @type {Array}
     */
    this.vertices = new Float32Array(vertices);

    /**
     * Array of integers, indicating which vertices each triangle consists of. The length of this array is thus 3 times the number of triangles.
     * @property indices
     * @type {Array}
     */
    this.indices = new Int16Array(indices);

    /**
     * The normals data.
     * @property normals
     * @type {Array}
     */
    this.normals = new Float32Array(indices.length);

    /**
     * The local AABB of the mesh.
     * @property aabb
     * @type {Array}
     */
    this.aabb = new AABB();

    /**
     * References to vertex pairs, making up all unique edges in the trimesh.
     * @property {array} edges
     */
    this.edges = null;

    /**
     * Local scaling of the mesh. Use .setScale() to set it.
     * @property {Vec3} scale
     */
    this.scale = new Vec3(1, 1, 1);

    /**
     * The indexed triangles. Use .updateTree() to update it.
     * @property {Octree} tree
     */
    this.tree = new Octree();

    this.updateEdges();
    this.updateNormals();
    this.updateAABB();
    this.updateBoundingSphereRadius();
    this.updateTree();
}
Trimesh.prototype = new Shape();
Trimesh.prototype.constructor = Trimesh;

var computeNormals_n = new Vec3();

/**
 * @method updateTree
 */
Trimesh.prototype.updateTree = function(){
    var tree = this.tree;

    tree.reset();
    tree.aabb.copy(this.aabb);
    var scale = this.scale; // The local mesh AABB is scaled, but the octree AABB should be unscaled
    tree.aabb.lowerBound.x *= 1 / scale.x;
    tree.aabb.lowerBound.y *= 1 / scale.y;
    tree.aabb.lowerBound.z *= 1 / scale.z;
    tree.aabb.upperBound.x *= 1 / scale.x;
    tree.aabb.upperBound.y *= 1 / scale.y;
    tree.aabb.upperBound.z *= 1 / scale.z;

    // Insert all triangles
    var triangleAABB = new AABB();
    var a = new Vec3();
    var b = new Vec3();
    var c = new Vec3();
    var points = [a, b, c];
    for (var i = 0; i < this.indices.length / 3; i++) {
        //this.getTriangleVertices(i, a, b, c);

        // Get unscaled triangle verts
        var i3 = i * 3;
        this._getUnscaledVertex(this.indices[i3], a);
        this._getUnscaledVertex(this.indices[i3 + 1], b);
        this._getUnscaledVertex(this.indices[i3 + 2], c);

        triangleAABB.setFromPoints(points);
        tree.insert(triangleAABB, i);
    }
    tree.removeEmptyNodes();
};

var unscaledAABB = new AABB();

/**
 * Get triangles in a local AABB from the trimesh.
 * @method getTrianglesInAABB
 * @param  {AABB} aabb
 * @param  {array} result An array of integers, referencing the queried triangles.
 */
Trimesh.prototype.getTrianglesInAABB = function(aabb, result){
    unscaledAABB.copy(aabb);

    // Scale it to local
    var scale = this.scale;
    var isx = scale.x;
    var isy = scale.y;
    var isz = scale.z;
    var l = unscaledAABB.lowerBound;
    var u = unscaledAABB.upperBound;
    l.x /= isx;
    l.y /= isy;
    l.z /= isz;
    u.x /= isx;
    u.y /= isy;
    u.z /= isz;

    return this.tree.aabbQuery(unscaledAABB, result);
};

/**
 * @method setScale
 * @param {Vec3} scale
 */
Trimesh.prototype.setScale = function(scale){
    var wasUniform = this.scale.x === this.scale.y === this.scale.z;
    var isUniform = scale.x === scale.y === scale.z;

    if(!(wasUniform && isUniform)){
        // Non-uniform scaling. Need to update normals.
        this.updateNormals();
    }
    this.scale.copy(scale);
    this.updateAABB();
    this.updateBoundingSphereRadius();
};

/**
 * Compute the normals of the faces. Will save in the .normals array.
 * @method updateNormals
 */
Trimesh.prototype.updateNormals = function(){
    var n = computeNormals_n;

    // Generate normals
    var normals = this.normals;
    for(var i=0; i < this.indices.length / 3; i++){
        var i3 = i * 3;

        var a = this.indices[i3],
            b = this.indices[i3 + 1],
            c = this.indices[i3 + 2];

        this.getVertex(a, va);
        this.getVertex(b, vb);
        this.getVertex(c, vc);

        Trimesh.computeNormal(vb, va, vc, n);

        normals[i3] = n.x;
        normals[i3 + 1] = n.y;
        normals[i3 + 2] = n.z;
    }
};

/**
 * Update the .edges property
 * @method updateEdges
 */
Trimesh.prototype.updateEdges = function(){
    var edges = {};
    var add = function(indexA, indexB){
        var key = a < b ? a + '_' + b : b + '_' + a;
        edges[key] = true;
    };
    for(var i=0; i < this.indices.length / 3; i++){
        var i3 = i * 3;
        var a = this.indices[i3],
            b = this.indices[i3 + 1],
            c = this.indices[i3 + 2];
        add(a,b);
        add(b,c);
        add(c,a);
    }
    var keys = Object.keys(edges);
    this.edges = new Int16Array(keys.length * 2);
    for (var i = 0; i < keys.length; i++) {
        var indices = keys[i].split('_');
        this.edges[2 * i] = parseInt(indices[0], 10);
        this.edges[2 * i + 1] = parseInt(indices[1], 10);
    }
};

/**
 * Get an edge vertex
 * @method getEdgeVertex
 * @param  {number} edgeIndex
 * @param  {number} firstOrSecond 0 or 1, depending on which one of the vertices you need.
 * @param  {Vec3} vertexStore Where to store the result
 */
Trimesh.prototype.getEdgeVertex = function(edgeIndex, firstOrSecond, vertexStore){
    var vertexIndex = this.edges[edgeIndex * 2 + (firstOrSecond ? 1 : 0)];
    this.getVertex(vertexIndex, vertexStore);
};

var getEdgeVector_va = new Vec3();
var getEdgeVector_vb = new Vec3();

/**
 * Get a vector along an edge.
 * @method getEdgeVector
 * @param  {number} edgeIndex
 * @param  {Vec3} vectorStore
 */
Trimesh.prototype.getEdgeVector = function(edgeIndex, vectorStore){
    var va = getEdgeVector_va;
    var vb = getEdgeVector_vb;
    this.getEdgeVertex(edgeIndex, 0, va);
    this.getEdgeVertex(edgeIndex, 1, vb);
    vb.vsub(va, vectorStore);
};

/**
 * Get face normal given 3 vertices
 * @static
 * @method computeNormal
 * @param {Vec3} va
 * @param {Vec3} vb
 * @param {Vec3} vc
 * @param {Vec3} target
 */
var cb = new Vec3();
var ab = new Vec3();
Trimesh.computeNormal = function ( va, vb, vc, target ) {
    vb.vsub(va,ab);
    vc.vsub(vb,cb);
    cb.cross(ab,target);
    if ( !target.isZero() ) {
        target.normalize();
    }
};

var va = new Vec3();
var vb = new Vec3();
var vc = new Vec3();

/**
 * Get vertex i.
 * @method getVertex
 * @param  {number} i
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype.getVertex = function(i, out){
    var scale = this.scale;
    this._getUnscaledVertex(i, out);
    out.x *= scale.x;
    out.y *= scale.y;
    out.z *= scale.z;
    return out;
};

/**
 * Get raw vertex i
 * @private
 * @method _getUnscaledVertex
 * @param  {number} i
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype._getUnscaledVertex = function(i, out){
    var i3 = i * 3;
    var vertices = this.vertices;
    return out.set(
        vertices[i3],
        vertices[i3 + 1],
        vertices[i3 + 2]
    );
};

/**
 * Get a vertex from the trimesh,transformed by the given position and quaternion.
 * @method getWorldVertex
 * @param  {number} i
 * @param  {Vec3} pos
 * @param  {Quaternion} quat
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype.getWorldVertex = function(i, pos, quat, out){
    this.getVertex(i, out);
    Transform.pointToWorldFrame(pos, quat, out, out);
    return out;
};

/**
 * Get the three vertices for triangle i.
 * @method getTriangleVertices
 * @param  {number} i
 * @param  {Vec3} a
 * @param  {Vec3} b
 * @param  {Vec3} c
 */
Trimesh.prototype.getTriangleVertices = function(i, a, b, c){
    var i3 = i * 3;
    this.getVertex(this.indices[i3], a);
    this.getVertex(this.indices[i3 + 1], b);
    this.getVertex(this.indices[i3 + 2], c);
};

/**
 * Compute the normal of triangle i.
 * @method getNormal
 * @param  {Number} i
 * @param  {Vec3} target
 * @return {Vec3} The "target" vector object
 */
Trimesh.prototype.getNormal = function(i, target){
    var i3 = i * 3;
    return target.set(
        this.normals[i3],
        this.normals[i3 + 1],
        this.normals[i3 + 2]
    );
};

var cli_aabb = new AABB();

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3} The "target" vector object
 */
Trimesh.prototype.calculateLocalInertia = function(mass,target){
    // Approximate with box inertia
    // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
    this.computeLocalAABB(cli_aabb);
    var x = cli_aabb.upperBound.x - cli_aabb.lowerBound.x,
        y = cli_aabb.upperBound.y - cli_aabb.lowerBound.y,
        z = cli_aabb.upperBound.z - cli_aabb.lowerBound.z;
    return target.set(
        1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z ),
        1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z ),
        1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x )
    );
};

var computeLocalAABB_worldVert = new Vec3();

/**
 * Compute the local AABB for the trimesh
 * @method computeLocalAABB
 * @param  {AABB} aabb
 */
Trimesh.prototype.computeLocalAABB = function(aabb){
    var l = aabb.lowerBound,
        u = aabb.upperBound,
        n = this.vertices.length,
        vertices = this.vertices,
        v = computeLocalAABB_worldVert;

    this.getVertex(0, v);
    l.copy(v);
    u.copy(v);

    for(var i=0; i !== n; i++){
        this.getVertex(i, v);

        if(v.x < l.x){
            l.x = v.x;
        } else if(v.x > u.x){
            u.x = v.x;
        }

        if(v.y < l.y){
            l.y = v.y;
        } else if(v.y > u.y){
            u.y = v.y;
        }

        if(v.z < l.z){
            l.z = v.z;
        } else if(v.z > u.z){
            u.z = v.z;
        }
    }
};


/**
 * Update the .aabb property
 * @method updateAABB
 */
Trimesh.prototype.updateAABB = function(){
    this.computeLocalAABB(this.aabb);
};

/**
 * Will update the .boundingSphereRadius property
 * @method updateBoundingSphereRadius
 */
Trimesh.prototype.updateBoundingSphereRadius = function(){
    // Assume points are distributed with local (0,0,0) as center
    var max2 = 0;
    var vertices = this.vertices;
    var v = new Vec3();
    for(var i=0, N=vertices.length / 3; i !== N; i++) {
        this.getVertex(i, v);
        var norm2 = v.norm2();
        if(norm2 > max2){
            max2 = norm2;
        }
    }
    this.boundingSphereRadius = Math.sqrt(max2);
};

var tempWorldVertex = new Vec3();
var calculateWorldAABB_frame = new Transform();
var calculateWorldAABB_aabb = new AABB();

/**
 * @method calculateWorldAABB
 * @param {Vec3}        pos
 * @param {Quaternion}  quat
 * @param {Vec3}        min
 * @param {Vec3}        max
 */
Trimesh.prototype.calculateWorldAABB = function(pos,quat,min,max){
    /*
    var n = this.vertices.length / 3,
        verts = this.vertices;
    var minx,miny,minz,maxx,maxy,maxz;

    var v = tempWorldVertex;
    for(var i=0; i<n; i++){
        this.getVertex(i, v);
        quat.vmult(v, v);
        pos.vadd(v, v);
        if (v.x < minx || minx===undefined){
            minx = v.x;
        } else if(v.x > maxx || maxx===undefined){
            maxx = v.x;
        }

        if (v.y < miny || miny===undefined){
            miny = v.y;
        } else if(v.y > maxy || maxy===undefined){
            maxy = v.y;
        }

        if (v.z < minz || minz===undefined){
            minz = v.z;
        } else if(v.z > maxz || maxz===undefined){
            maxz = v.z;
        }
    }
    min.set(minx,miny,minz);
    max.set(maxx,maxy,maxz);
    */

    // Faster approximation using local AABB
    var frame = calculateWorldAABB_frame;
    var result = calculateWorldAABB_aabb;
    frame.position = pos;
    frame.quaternion = quat;
    this.aabb.toWorldFrame(frame, result);
    min.copy(result.lowerBound);
    max.copy(result.upperBound);
};

/**
 * Get approximate volume
 * @method volume
 * @return {Number}
 */
Trimesh.prototype.volume = function(){
    return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
};

/**
 * Create a Trimesh instance, shaped as a torus.
 * @static
 * @method createTorus
 * @param  {number} [radius=1]
 * @param  {number} [tube=0.5]
 * @param  {number} [radialSegments=8]
 * @param  {number} [tubularSegments=6]
 * @param  {number} [arc=6.283185307179586]
 * @return {Trimesh} A torus
 */
Trimesh.createTorus = function (radius, tube, radialSegments, tubularSegments, arc) {
    radius = radius || 1;
    tube = tube || 0.5;
    radialSegments = radialSegments || 8;
    tubularSegments = tubularSegments || 6;
    arc = arc || Math.PI * 2;

    var vertices = [];
    var indices = [];

    for ( var j = 0; j <= radialSegments; j ++ ) {
        for ( var i = 0; i <= tubularSegments; i ++ ) {
            var u = i / tubularSegments * arc;
            var v = j / radialSegments * Math.PI * 2;

            var x = ( radius + tube * Math.cos( v ) ) * Math.cos( u );
            var y = ( radius + tube * Math.cos( v ) ) * Math.sin( u );
            var z = tube * Math.sin( v );

            vertices.push( x, y, z );
        }
    }

    for ( var j = 1; j <= radialSegments; j ++ ) {
        for ( var i = 1; i <= tubularSegments; i ++ ) {
            var a = ( tubularSegments + 1 ) * j + i - 1;
            var b = ( tubularSegments + 1 ) * ( j - 1 ) + i - 1;
            var c = ( tubularSegments + 1 ) * ( j - 1 ) + i;
            var d = ( tubularSegments + 1 ) * j + i;

            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }

    return new Trimesh(vertices, indices);
};

},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(_dereq_,module,exports){
module.exports = GSSolver;

var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Solver = _dereq_('./Solver');

/**
 * Constraint equation Gauss-Seidel solver.
 * @class GSSolver
 * @constructor
 * @todo The spook parameters should be specified for each constraint, not globally.
 * @author schteppe / https://github.com/schteppe
 * @see https://www8.cs.umu.se/kurser/5DV058/VT09/lectures/spooknotes.pdf
 * @extends Solver
 */
function GSSolver(){
    Solver.call(this);

    /**
     * The number of solver iterations determines quality of the constraints in the world. The more iterations, the more correct simulation. More iterations need more computations though. If you have a large gravity force in your world, you will need more iterations.
     * @property iterations
     * @type {Number}
     * @todo write more about solver and iterations in the wiki
     */
    this.iterations = 10;

    /**
     * When tolerance is reached, the system is assumed to be converged.
     * @property tolerance
     * @type {Number}
     */
    this.tolerance = 1e-7;
}
GSSolver.prototype = new Solver();

var GSSolver_solve_lambda = []; // Just temporary number holders that we want to reuse each solve.
var GSSolver_solve_invCs = [];
var GSSolver_solve_Bs = [];
GSSolver.prototype.solve = function(dt,world){
    var iter = 0,
        maxIter = this.iterations,
        tolSquared = this.tolerance*this.tolerance,
        equations = this.equations,
        Neq = equations.length,
        bodies = world.bodies,
        Nbodies = bodies.length,
        h = dt,
        q, B, invC, deltalambda, deltalambdaTot, GWlambda, lambdaj;

    // Update solve mass
    if(Neq !== 0){
        for(var i=0; i!==Nbodies; i++){
            bodies[i].updateSolveMassProperties();
        }
    }

    // Things that does not change during iteration can be computed once
    var invCs = GSSolver_solve_invCs,
        Bs = GSSolver_solve_Bs,
        lambda = GSSolver_solve_lambda;
    invCs.length = Neq;
    Bs.length = Neq;
    lambda.length = Neq;
    for(var i=0; i!==Neq; i++){
        var c = equations[i];
        lambda[i] = 0.0;
        Bs[i] = c.computeB(h);
        invCs[i] = 1.0 / c.computeC();
    }

    if(Neq !== 0){

        // Reset vlambda
        for(var i=0; i!==Nbodies; i++){
            var b=bodies[i],
                vlambda=b.vlambda,
                wlambda=b.wlambda;
            vlambda.set(0,0,0);
            if(wlambda){
                wlambda.set(0,0,0);
            }
        }

        // Iterate over equations
        for(iter=0; iter!==maxIter; iter++){

            // Accumulate the total error for each iteration.
            deltalambdaTot = 0.0;

            for(var j=0; j!==Neq; j++){

                var c = equations[j];

                // Compute iteration
                B = Bs[j];
                invC = invCs[j];
                lambdaj = lambda[j];
                GWlambda = c.computeGWlambda();
                deltalambda = invC * ( B - GWlambda - c.eps * lambdaj );

                // Clamp if we are not within the min/max interval
                if(lambdaj + deltalambda < c.minForce){
                    deltalambda = c.minForce - lambdaj;
                } else if(lambdaj + deltalambda > c.maxForce){
                    deltalambda = c.maxForce - lambdaj;
                }
                lambda[j] += deltalambda;

                deltalambdaTot += deltalambda > 0.0 ? deltalambda : -deltalambda; // abs(deltalambda)

                c.addToWlambda(deltalambda);
            }

            // If the total error is small enough - stop iterate
            if(deltalambdaTot*deltalambdaTot < tolSquared){
                break;
            }
        }

        // Add result to velocity
        for(var i=0; i!==Nbodies; i++){
            var b=bodies[i],
                v=b.velocity,
                w=b.angularVelocity;
            v.vadd(b.vlambda, v);
            if(w){
                w.vadd(b.wlambda, w);
            }
        }
    }

    return iter;
};

},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(_dereq_,module,exports){
module.exports = Solver;

/**
 * Constraint equation solver base class.
 * @class Solver
 * @constructor
 * @author schteppe / https://github.com/schteppe
 */
function Solver(){
    /**
     * All equations to be solved
     * @property {Array} equations
     */
    this.equations = [];
}

/**
 * Should be implemented in subclasses!
 * @method solve
 * @param  {Number} dt
 * @param  {World} world
 */
Solver.prototype.solve = function(dt,world){
    // Should return the number of iterations done!
    return 0;
};

/**
 * Add an equation
 * @method addEquation
 * @param {Equation} eq
 */
Solver.prototype.addEquation = function(eq){
    if (eq.enabled) {
        this.equations.push(eq);
    }
};

/**
 * Remove an equation
 * @method removeEquation
 * @param {Equation} eq
 */
Solver.prototype.removeEquation = function(eq){
    var eqs = this.equations;
    var i = eqs.indexOf(eq);
    if(i !== -1){
        eqs.splice(i,1);
    }
};

/**
 * Add all equations
 * @method removeAllEquations
 */
Solver.prototype.removeAllEquations = function(){
    this.equations.length = 0;
};


},{}],48:[function(_dereq_,module,exports){
module.exports = SplitSolver;

var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Solver = _dereq_('./Solver');
var Body = _dereq_('../objects/Body');

/**
 * Splits the equations into islands and solves them independently. Can improve performance.
 * @class SplitSolver
 * @constructor
 * @extends Solver
 * @param {Solver} subsolver
 */
function SplitSolver(subsolver){
    Solver.call(this);
    this.iterations = 10;
    this.tolerance = 1e-7;
    this.subsolver = subsolver;
    this.nodes = [];
    this.nodePool = [];

    // Create needed nodes, reuse if possible
    while(this.nodePool.length < 128){
        this.nodePool.push(this.createNode());
    }
}
SplitSolver.prototype = new Solver();

// Returns the number of subsystems
var SplitSolver_solve_nodes = []; // All allocated node objects
var SplitSolver_solve_nodePool = []; // All allocated node objects
var SplitSolver_solve_eqs = [];   // Temp array
var SplitSolver_solve_bds = [];   // Temp array
var SplitSolver_solve_dummyWorld = {bodies:[]}; // Temp object

var STATIC = Body.STATIC;
function getUnvisitedNode(nodes){
    var Nnodes = nodes.length;
    for(var i=0; i!==Nnodes; i++){
        var node = nodes[i];
        if(!node.visited && !(node.body.type & STATIC)){
            return node;
        }
    }
    return false;
}

var queue = [];
function bfs(root,visitFunc,bds,eqs){
    queue.push(root);
    root.visited = true;
    visitFunc(root,bds,eqs);
    while(queue.length) {
        var node = queue.pop();
        // Loop over unvisited child nodes
        var child;
        while((child = getUnvisitedNode(node.children))) {
            child.visited = true;
            visitFunc(child,bds,eqs);
            queue.push(child);
        }
    }
}

function visitFunc(node,bds,eqs){
    bds.push(node.body);
    var Neqs = node.eqs.length;
    for(var i=0; i!==Neqs; i++){
        var eq = node.eqs[i];
        if(eqs.indexOf(eq) === -1){
            eqs.push(eq);
        }
    }
}

SplitSolver.prototype.createNode = function(){
    return { body:null, children:[], eqs:[], visited:false };
};

/**
 * Solve the subsystems
 * @method solve
 * @param  {Number} dt
 * @param  {World} world
 */
SplitSolver.prototype.solve = function(dt,world){
    var nodes=SplitSolver_solve_nodes,
        nodePool=this.nodePool,
        bodies=world.bodies,
        equations=this.equations,
        Neq=equations.length,
        Nbodies=bodies.length,
        subsolver=this.subsolver;

    // Create needed nodes, reuse if possible
    while(nodePool.length < Nbodies){
        nodePool.push(this.createNode());
    }
    nodes.length = Nbodies;
    for (var i = 0; i < Nbodies; i++) {
        nodes[i] = nodePool[i];
    }

    // Reset node values
    for(var i=0; i!==Nbodies; i++){
        var node = nodes[i];
        node.body = bodies[i];
        node.children.length = 0;
        node.eqs.length = 0;
        node.visited = false;
    }
    for(var k=0; k!==Neq; k++){
        var eq=equations[k],
            i=bodies.indexOf(eq.bi),
            j=bodies.indexOf(eq.bj),
            ni=nodes[i],
            nj=nodes[j];
        ni.children.push(nj);
        ni.eqs.push(eq);
        nj.children.push(ni);
        nj.eqs.push(eq);
    }

    var child, n=0, eqs=SplitSolver_solve_eqs;

    subsolver.tolerance = this.tolerance;
    subsolver.iterations = this.iterations;

    var dummyWorld = SplitSolver_solve_dummyWorld;
    while((child = getUnvisitedNode(nodes))){
        eqs.length = 0;
        dummyWorld.bodies.length = 0;
        bfs(child, visitFunc, dummyWorld.bodies, eqs);

        var Neqs = eqs.length;

        eqs = eqs.sort(sortById);

        for(var i=0; i!==Neqs; i++){
            subsolver.addEquation(eqs[i]);
        }

        var iter = subsolver.solve(dt,dummyWorld);
        subsolver.removeAllEquations();
        n++;
    }

    return n;
};

function sortById(a, b){
    return b.id - a.id;
}
},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(_dereq_,module,exports){
/**
 * Base class for objects that dispatches events.
 * @class EventTarget
 * @constructor
 */
var EventTarget = function () {

};

module.exports = EventTarget;

EventTarget.prototype = {
    constructor: EventTarget,

    /**
     * Add an event listener
     * @method addEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {EventTarget} The self object, for chainability.
     */
    addEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ this._listeners = {}; }
        var listeners = this._listeners;
        if ( listeners[ type ] === undefined ) {
            listeners[ type ] = [];
        }
        if ( listeners[ type ].indexOf( listener ) === - 1 ) {
            listeners[ type ].push( listener );
        }
        return this;
    },

    /**
     * Check if an event listener is added
     * @method hasEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {Boolean}
     */
    hasEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ return false; }
        var listeners = this._listeners;
        if ( listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1 ) {
            return true;
        }
        return false;
    },

    /**
     * Remove an event listener
     * @method removeEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {EventTarget} The self object, for chainability.
     */
    removeEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ return this; }
        var listeners = this._listeners;
        if ( listeners[type] === undefined ){ return this; }
        var index = listeners[ type ].indexOf( listener );
        if ( index !== - 1 ) {
            listeners[ type ].splice( index, 1 );
        }
        return this;
    },

    /**
     * Emit an event.
     * @method dispatchEvent
     * @param  {Object} event
     * @param  {String} event.type
     * @return {EventTarget} The self object, for chainability.
     */
    dispatchEvent: function ( event ) {
        if ( this._listeners === undefined ){ return this; }
        var listeners = this._listeners;
        var listenerArray = listeners[ event.type ];
        if ( listenerArray !== undefined ) {
            event.target = this;
            for ( var i = 0, l = listenerArray.length; i < l; i ++ ) {
                listenerArray[ i ].call( this, event );
            }
        }
        return this;
    }
};

},{}],50:[function(_dereq_,module,exports){
var AABB = _dereq_('../collision/AABB');
var Vec3 = _dereq_('../math/Vec3');

module.exports = Octree;

/**
 * @class OctreeNode
 * @param {object} [options]
 * @param {Octree} [options.root]
 * @param {AABB} [options.aabb]
 */
function OctreeNode(options){
    options = options || {};

    /**
     * The root node
     * @property {OctreeNode} root
     */
    this.root = options.root || null;

    /**
     * Boundary of this node
     * @property {AABB} aabb
     */
    this.aabb = options.aabb ? options.aabb.clone() : new AABB();

    /**
     * Contained data at the current node level.
     * @property {Array} data
     */
    this.data = [];

    /**
     * Children to this node
     * @property {Array} children
     */
    this.children = [];
}

/**
 * @class Octree
 * @param {AABB} aabb The total AABB of the tree
 * @param {object} [options]
 * @param {number} [options.maxDepth=8]
 * @extends OctreeNode
 */
function Octree(aabb, options){
    options = options || {};
    options.root = null;
    options.aabb = aabb;
    OctreeNode.call(this, options);

    /**
     * Maximum subdivision depth
     * @property {number} maxDepth
     */
    this.maxDepth = typeof(options.maxDepth) !== 'undefined' ? options.maxDepth : 8;
}
Octree.prototype = new OctreeNode();

OctreeNode.prototype.reset = function(aabb, options){
    this.children.length = this.data.length = 0;
};

/**
 * Insert data into this node
 * @method insert
 * @param  {AABB} aabb
 * @param  {object} elementData
 * @return {boolean} True if successful, otherwise false
 */
OctreeNode.prototype.insert = function(aabb, elementData, level){
    var nodeData = this.data;
    level = level || 0;

    // Ignore objects that do not belong in this node
    if (!this.aabb.contains(aabb)){
        return false; // object cannot be added
    }

    var children = this.children;

    if(level < (this.maxDepth || this.root.maxDepth)){
        // Subdivide if there are no children yet
        var subdivided = false;
        if (!children.length){
            this.subdivide();
            subdivided = true;
        }

        // add to whichever node will accept it
        for (var i = 0; i !== 8; i++) {
            if (children[i].insert(aabb, elementData, level + 1)){
                return true;
            }
        }

        if(subdivided){
            // No children accepted! Might as well just remove em since they contain none
            children.length = 0;
        }
    }

    // Too deep, or children didnt want it. add it in current node
    nodeData.push(elementData);

    return true;
};

var halfDiagonal = new Vec3();

/**
 * Create 8 equally sized children nodes and put them in the .children array.
 * @method subdivide
 */
OctreeNode.prototype.subdivide = function() {
    var aabb = this.aabb;
    var l = aabb.lowerBound;
    var u = aabb.upperBound;

    var children = this.children;

    children.push(
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,0) }) })
    );

    u.vsub(l, halfDiagonal);
    halfDiagonal.scale(0.5, halfDiagonal);

    var root = this.root || this;

    for (var i = 0; i !== 8; i++) {
        var child = children[i];

        // Set current node as root
        child.root = root;

        // Compute bounds
        var lowerBound = child.aabb.lowerBound;
        lowerBound.x *= halfDiagonal.x;
        lowerBound.y *= halfDiagonal.y;
        lowerBound.z *= halfDiagonal.z;

        lowerBound.vadd(l, lowerBound);

        // Upper bound is always lower bound + halfDiagonal
        lowerBound.vadd(halfDiagonal, child.aabb.upperBound);
    }
};

/**
 * Get all data, potentially within an AABB
 * @method aabbQuery
 * @param  {AABB} aabb
 * @param  {array} result
 * @return {array} The "result" object
 */
OctreeNode.prototype.aabbQuery = function(aabb, result) {

    var nodeData = this.data;

    // abort if the range does not intersect this node
    // if (!this.aabb.overlaps(aabb)){
    //     return result;
    // }

    // Add objects at this level
    // Array.prototype.push.apply(result, nodeData);

    // Add child data
    // @todo unwrap recursion into a queue / loop, that's faster in JS
    var children = this.children;


    // for (var i = 0, N = this.children.length; i !== N; i++) {
    //     children[i].aabbQuery(aabb, result);
    // }

    var queue = [this];
    while (queue.length) {
        var node = queue.pop();
        if (node.aabb.overlaps(aabb)){
            Array.prototype.push.apply(result, node.data);
        }
        Array.prototype.push.apply(queue, node.children);
    }

    return result;
};

var tmpAABB = new AABB();

/**
 * Get all data, potentially intersected by a ray.
 * @method rayQuery
 * @param  {Ray} ray
 * @param  {Transform} treeTransform
 * @param  {array} result
 * @return {array} The "result" object
 */
OctreeNode.prototype.rayQuery = function(ray, treeTransform, result) {

    // Use aabb query for now.
    // @todo implement real ray query which needs less lookups
    ray.getAABB(tmpAABB);
    tmpAABB.toLocalFrame(treeTransform, tmpAABB);
    this.aabbQuery(tmpAABB, result);

    return result;
};

/**
 * @method removeEmptyNodes
 */
OctreeNode.prototype.removeEmptyNodes = function() {
    var queue = [this];
    while (queue.length) {
        var node = queue.pop();
        for (var i = node.children.length - 1; i >= 0; i--) {
            if(!node.children[i].data.length){
                node.children.splice(i, 1);
            }
        }
        Array.prototype.push.apply(queue, node.children);
    }
};

},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(_dereq_,module,exports){
module.exports = Pool;

/**
 * For pooling objects that can be reused.
 * @class Pool
 * @constructor
 */
function Pool(){
    /**
     * The pooled objects
     * @property {Array} objects
     */
    this.objects = [];

    /**
     * Constructor of the objects
     * @property {mixed} type
     */
    this.type = Object;
}

/**
 * Release an object after use
 * @method release
 * @param {Object} obj
 */
Pool.prototype.release = function(){
    var Nargs = arguments.length;
    for(var i=0; i!==Nargs; i++){
        this.objects.push(arguments[i]);
    }
};

/**
 * Get an object
 * @method get
 * @return {mixed}
 */
Pool.prototype.get = function(){
    if(this.objects.length===0){
        return this.constructObject();
    } else {
        return this.objects.pop();
    }
};

/**
 * Construct an object. Should be implmented in each subclass.
 * @method constructObject
 * @return {mixed}
 */
Pool.prototype.constructObject = function(){
    throw new Error("constructObject() not implemented in this Pool subclass yet!");
};

},{}],52:[function(_dereq_,module,exports){
module.exports = TupleDictionary;

/**
 * @class TupleDictionary
 * @constructor
 */
function TupleDictionary() {

    /**
     * The data storage
     * @property data
     * @type {Object}
     */
    this.data = { keys:[] };
}

/**
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
TupleDictionary.prototype.get = function(i, j) {
    if (i > j) {
        // swap
        var temp = j;
        j = i;
        i = temp;
    }
    return this.data[i+'-'+j];
};

/**
 * @method set
 * @param  {Number} i
 * @param  {Number} j
 * @param {Number} value
 */
TupleDictionary.prototype.set = function(i, j, value) {
    if (i > j) {
        var temp = j;
        j = i;
        i = temp;
    }
    var key = i+'-'+j;

    // Check if key already exists
    if(!this.get(i,j)){
        this.data.keys.push(key);
    }

    this.data[key] = value;
};

/**
 * @method reset
 */
TupleDictionary.prototype.reset = function() {
    var data = this.data,
        keys = data.keys;
    while(keys.length > 0){
        var key = keys.pop();
        delete data[key];
    }
};

},{}],53:[function(_dereq_,module,exports){
function Utils(){}

module.exports = Utils;

/**
 * Extend an options object with default values.
 * @static
 * @method defaults
 * @param  {object} options The options object. May be falsy: in this case, a new object is created and returned.
 * @param  {object} defaults An object containing default values.
 * @return {object} The modified options object.
 */
Utils.defaults = function(options, defaults){
    options = options || {};

    for(var key in defaults){
        if(!(key in options)){
            options[key] = defaults[key];
        }
    }

    return options;
};

},{}],54:[function(_dereq_,module,exports){
module.exports = Vec3Pool;

var Vec3 = _dereq_('../math/Vec3');
var Pool = _dereq_('./Pool');

/**
 * @class Vec3Pool
 * @constructor
 * @extends Pool
 */
function Vec3Pool(){
    Pool.call(this);
    this.type = Vec3;
}
Vec3Pool.prototype = new Pool();

/**
 * Construct a vector
 * @method constructObject
 * @return {Vec3}
 */
Vec3Pool.prototype.constructObject = function(){
    return new Vec3();
};

},{"../math/Vec3":30,"./Pool":51}],55:[function(_dereq_,module,exports){
module.exports = Narrowphase;

var AABB = _dereq_('../collision/AABB');
var Shape = _dereq_('../shapes/Shape');
var Ray = _dereq_('../collision/Ray');
var Vec3 = _dereq_('../math/Vec3');
var Transform = _dereq_('../math/Transform');
var ConvexPolyhedron = _dereq_('../shapes/ConvexPolyhedron');
var Quaternion = _dereq_('../math/Quaternion');
var Solver = _dereq_('../solver/Solver');
var Vec3Pool = _dereq_('../utils/Vec3Pool');
var ContactEquation = _dereq_('../equations/ContactEquation');
var FrictionEquation = _dereq_('../equations/FrictionEquation');

/**
 * Helper class for the World. Generates ContactEquations.
 * @class Narrowphase
 * @constructor
 * @todo Sphere-ConvexPolyhedron contacts
 * @todo Contact reduction
 * @todo  should move methods to prototype
 */
function Narrowphase(world){

    /**
     * Internal storage of pooled contact points.
     * @property {Array} contactPointPool
     */
    this.contactPointPool = [];

    this.frictionEquationPool = [];

    this.result = [];
    this.frictionResult = [];

    /**
     * Pooled vectors.
     * @property {Vec3Pool} v3pool
     */
    this.v3pool = new Vec3Pool();

    this.world = world;
    this.currentContactMaterial = null;

    /**
     * @property {Boolean} enableFrictionReduction
     */
    this.enableFrictionReduction = false;
}

/**
 * Make a contact object, by using the internal pool or creating a new one.
 * @method createContactEquation
 * @return {ContactEquation}
 */
Narrowphase.prototype.createContactEquation = function(bi, bj, si, sj, rsi, rsj){
    var c;
    if(this.contactPointPool.length){
        c = this.contactPointPool.pop();
        c.bi = bi;
        c.bj = bj;
    } else {
        c = new ContactEquation(bi, bj);
    }

    c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

    var cm = this.currentContactMaterial;

    c.restitution = cm.restitution;

    c.setSpookParams(
        cm.contactEquationStiffness,
        cm.contactEquationRelaxation,
        this.world.dt
    );

    var matA = si.material || bi.material;
    var matB = sj.material || bj.material;
    if(matA && matB && matA.restitution >= 0 && matB.restitution >= 0){
        c.restitution = matA.restitution * matB.restitution;
    }

    c.si = rsi || si;
    c.sj = rsj || sj;

    return c;
};

Narrowphase.prototype.createFrictionEquationsFromContact = function(contactEquation, outArray){
    var bodyA = contactEquation.bi;
    var bodyB = contactEquation.bj;
    var shapeA = contactEquation.si;
    var shapeB = contactEquation.sj;

    var world = this.world;
    var cm = this.currentContactMaterial;

    // If friction or restitution were specified in the material, use them
    var friction = cm.friction;
    var matA = shapeA.material || bodyA.material;
    var matB = shapeB.material || bodyB.material;
    if(matA && matB && matA.friction >= 0 && matB.friction >= 0){
        friction = matA.friction * matB.friction;
    }

    if(friction > 0){

        // Create 2 tangent equations
        var mug = friction * world.gravity.length();
        var reducedMass = (bodyA.invMass + bodyB.invMass);
        if(reducedMass > 0){
            reducedMass = 1/reducedMass;
        }
        var pool = this.frictionEquationPool;
        var c1 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);
        var c2 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);

        c1.bi = c2.bi = bodyA;
        c1.bj = c2.bj = bodyB;
        c1.minForce = c2.minForce = -mug*reducedMass;
        c1.maxForce = c2.maxForce = mug*reducedMass;

        // Copy over the relative vectors
        c1.ri.copy(contactEquation.ri);
        c1.rj.copy(contactEquation.rj);
        c2.ri.copy(contactEquation.ri);
        c2.rj.copy(contactEquation.rj);

        // Construct tangents
        contactEquation.ni.tangents(c1.t, c2.t);

        // Set spook params
        c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
        c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);

        c1.enabled = c2.enabled = contactEquation.enabled;

        outArray.push(c1, c2);

        return true;
    }

    return false;
};

var averageNormal = new Vec3();
var averageContactPointA = new Vec3();
var averageContactPointB = new Vec3();

// Take the average N latest contact point on the plane.
Narrowphase.prototype.createFrictionFromAverage = function(numContacts){
    // The last contactEquation
    var c = this.result[this.result.length - 1];

    // Create the result: two "average" friction equations
    if (!this.createFrictionEquationsFromContact(c, this.frictionResult) || numContacts === 1) {
        return;
    }

    var f1 = this.frictionResult[this.frictionResult.length - 2];
    var f2 = this.frictionResult[this.frictionResult.length - 1];

    averageNormal.setZero();
    averageContactPointA.setZero();
    averageContactPointB.setZero();

    var bodyA = c.bi;
    var bodyB = c.bj;
    for(var i=0; i!==numContacts; i++){
        c = this.result[this.result.length - 1 - i];
        if(c.bodyA !== bodyA){
            averageNormal.vadd(c.ni, averageNormal); // vec2.add(eq.t, eq.t, c.normalA);
            averageContactPointA.vadd(c.ri, averageContactPointA); // vec2.add(eq.contactPointA, eq.contactPointA, c.contactPointA);
            averageContactPointB.vadd(c.rj, averageContactPointB);
        } else {
            averageNormal.vsub(c.ni, averageNormal); // vec2.sub(eq.t, eq.t, c.normalA);
            averageContactPointA.vadd(c.rj, averageContactPointA); // vec2.add(eq.contactPointA, eq.contactPointA, c.contactPointA);
            averageContactPointB.vadd(c.ri, averageContactPointB);
        }
    }

    var invNumContacts = 1 / numContacts;
    averageContactPointA.scale(invNumContacts, f1.ri); // vec2.scale(eq.contactPointA, eq.contactPointA, invNumContacts);
    averageContactPointB.scale(invNumContacts, f1.rj); // vec2.scale(eq.contactPointB, eq.contactPointB, invNumContacts);
    f2.ri.copy(f1.ri); // Should be the same
    f2.rj.copy(f1.rj);
    averageNormal.normalize();
    averageNormal.tangents(f1.t, f2.t);
    // return eq;
};


var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();
var tmpQuat1 = new Quaternion();
var tmpQuat2 = new Quaternion();

/**
 * Generate all contacts between a list of body pairs
 * @method getContacts
 * @param {array} p1 Array of body indices
 * @param {array} p2 Array of body indices
 * @param {World} world
 * @param {array} result Array to store generated contacts
 * @param {array} oldcontacts Optional. Array of reusable contact objects
 */
Narrowphase.prototype.getContacts = function(p1, p2, world, result, oldcontacts, frictionResult, frictionPool){
    // Save old contact objects
    this.contactPointPool = oldcontacts;
    this.frictionEquationPool = frictionPool;
    this.result = result;
    this.frictionResult = frictionResult;

    var qi = tmpQuat1;
    var qj = tmpQuat2;
    var xi = tmpVec1;
    var xj = tmpVec2;

    for(var k=0, N=p1.length; k!==N; k++){

        // Get current collision bodies
        var bi = p1[k],
            bj = p2[k];

        // Get contact material
        var bodyContactMaterial = null;
        if(bi.material && bj.material){
            bodyContactMaterial = world.getContactMaterial(bi.material,bj.material) || null;
        }

        for (var i = 0; i < bi.shapes.length; i++) {
            bi.quaternion.mult(bi.shapeOrientations[i], qi);
            bi.quaternion.vmult(bi.shapeOffsets[i], xi);
            xi.vadd(bi.position, xi);
            var si = bi.shapes[i];

            for (var j = 0; j < bj.shapes.length; j++) {

                // Compute world transform of shapes
                bj.quaternion.mult(bj.shapeOrientations[j], qj);
                bj.quaternion.vmult(bj.shapeOffsets[j], xj);
                xj.vadd(bj.position, xj);
                var sj = bj.shapes[j];

                if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
                    continue;
                }

                // Get collision material
                var shapeContactMaterial = null;
                if(si.material && sj.material){
                    shapeContactMaterial = world.getContactMaterial(si.material,sj.material) || null;
                }

                this.currentContactMaterial = shapeContactMaterial || bodyContactMaterial || world.defaultContactMaterial;

                // Get contacts
                var resolver = this[si.type | sj.type];
                if(resolver){
                    if (si.type < sj.type) {
                        resolver.call(this, si, sj, xi, xj, qi, qj, bi, bj, si, sj);
                    } else {
                        resolver.call(this, sj, si, xj, xi, qj, qi, bj, bi, si, sj);
                    }
                }
            }
        }
    }
};

var numWarnings = 0;
var maxWarnings = 10;

function warn(msg){
    if(numWarnings > maxWarnings){
        return;
    }

    numWarnings++;

    console.warn(msg);
}

Narrowphase.prototype[Shape.types.BOX | Shape.types.BOX] =
Narrowphase.prototype.boxBox = function(si,sj,xi,xj,qi,qj,bi,bj){
    si.convexPolyhedronRepresentation.material = si.material;
    sj.convexPolyhedronRepresentation.material = sj.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
    this.convexConvex(si.convexPolyhedronRepresentation,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj,si,sj);
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.boxConvex = function(si,sj,xi,xj,qi,qj,bi,bj){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    this.convexConvex(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj);
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.PARTICLE] =
Narrowphase.prototype.boxParticle = function(si,sj,xi,xj,qi,qj,bi,bj){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    this.convexParticle(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj);
};

/**
 * @method sphereSphere
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE] =
Narrowphase.prototype.sphereSphere = function(si,sj,xi,xj,qi,qj,bi,bj){
    // We will have only one contact in this case
    var r = this.createContactEquation(bi,bj,si,sj);

    // Contact normal
    xj.vsub(xi, r.ni);
    r.ni.normalize();

    // Contact point locations
    r.ri.copy(r.ni);
    r.rj.copy(r.ni);
    r.ri.mult(si.radius, r.ri);
    r.rj.mult(-sj.radius, r.rj);

    r.ri.vadd(xi, r.ri);
    r.ri.vsub(bi.position, r.ri);

    r.rj.vadd(xj, r.rj);
    r.rj.vsub(bj.position, r.rj);

    this.result.push(r);

    this.createFrictionEquationsFromContact(r, this.frictionResult);
};

/**
 * @method planeTrimesh
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
var planeTrimesh_normal = new Vec3();
var planeTrimesh_relpos = new Vec3();
var planeTrimesh_projected = new Vec3();
Narrowphase.prototype[Shape.types.PLANE | Shape.types.TRIMESH] =
Narrowphase.prototype.planeTrimesh = function(
    planeShape,
    trimeshShape,
    planePos,
    trimeshPos,
    planeQuat,
    trimeshQuat,
    planeBody,
    trimeshBody
){
    // Make contacts!
    var v = new Vec3();

    var normal = planeTrimesh_normal;
    normal.set(0,0,1);
    planeQuat.vmult(normal,normal); // Turn normal according to plane

    for(var i=0; i<trimeshShape.vertices.length / 3; i++){

        // Get world vertex from trimesh
        trimeshShape.getVertex(i, v);

        // Safe up
        var v2 = new Vec3();
        v2.copy(v);
        Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

        // Check plane side
        var relpos = planeTrimesh_relpos;
        v.vsub(planePos, relpos);
        var dot = normal.dot(relpos);

        if(dot <= 0.0){
            var r = this.createContactEquation(planeBody,trimeshBody,planeShape,trimeshShape);

            r.ni.copy(normal); // Contact normal is the plane normal

            // Get vertex position projected on plane
            var projected = planeTrimesh_projected;
            normal.scale(relpos.dot(normal), projected);
            v.vsub(projected,projected);

            // ri is the projected world position minus plane position
            r.ri.copy(projected);
            r.ri.vsub(planeBody.position, r.ri);

            r.rj.copy(v);
            r.rj.vsub(trimeshBody.position, r.rj);

            // Store result
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
    }
};

/**
 * @method sphereTrimesh
 * @param  {Shape}      sphereShape
 * @param  {Shape}      trimeshShape
 * @param  {Vec3}       spherePos
 * @param  {Vec3}       trimeshPos
 * @param  {Quaternion} sphereQuat
 * @param  {Quaternion} trimeshQuat
 * @param  {Body}       sphereBody
 * @param  {Body}       trimeshBody
 */
var sphereTrimesh_normal = new Vec3();
var sphereTrimesh_relpos = new Vec3();
var sphereTrimesh_projected = new Vec3();
var sphereTrimesh_v = new Vec3();
var sphereTrimesh_v2 = new Vec3();
var sphereTrimesh_edgeVertexA = new Vec3();
var sphereTrimesh_edgeVertexB = new Vec3();
var sphereTrimesh_edgeVector = new Vec3();
var sphereTrimesh_edgeVectorUnit = new Vec3();
var sphereTrimesh_localSpherePos = new Vec3();
var sphereTrimesh_tmp = new Vec3();
var sphereTrimesh_va = new Vec3();
var sphereTrimesh_vb = new Vec3();
var sphereTrimesh_vc = new Vec3();
var sphereTrimesh_localSphereAABB = new AABB();
var sphereTrimesh_triangles = [];
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.TRIMESH] =
Narrowphase.prototype.sphereTrimesh = function (
    sphereShape,
    trimeshShape,
    spherePos,
    trimeshPos,
    sphereQuat,
    trimeshQuat,
    sphereBody,
    trimeshBody
) {

    var edgeVertexA = sphereTrimesh_edgeVertexA;
    var edgeVertexB = sphereTrimesh_edgeVertexB;
    var edgeVector = sphereTrimesh_edgeVector;
    var edgeVectorUnit = sphereTrimesh_edgeVectorUnit;
    var localSpherePos = sphereTrimesh_localSpherePos;
    var tmp = sphereTrimesh_tmp;
    var localSphereAABB = sphereTrimesh_localSphereAABB;
    var v2 = sphereTrimesh_v2;
    var relpos = sphereTrimesh_relpos;
    var triangles = sphereTrimesh_triangles;

    // Convert sphere position to local in the trimesh
    Transform.pointToLocalFrame(trimeshPos, trimeshQuat, spherePos, localSpherePos);

    // Get the aabb of the sphere locally in the trimesh
    var sphereRadius = sphereShape.radius;
    localSphereAABB.lowerBound.set(
        localSpherePos.x - sphereRadius,
        localSpherePos.y - sphereRadius,
        localSpherePos.z - sphereRadius
    );
    localSphereAABB.upperBound.set(
        localSpherePos.x + sphereRadius,
        localSpherePos.y + sphereRadius,
        localSpherePos.z + sphereRadius
    );

    trimeshShape.getTrianglesInAABB(localSphereAABB, triangles);
    //for (var i = 0; i < trimeshShape.indices.length / 3; i++) triangles.push(i); // All

    // Vertices
    var v = sphereTrimesh_v;
    var radiusSquared = sphereShape.radius * sphereShape.radius;
    for(var i=0; i<triangles.length; i++){
        for (var j = 0; j < 3; j++) {

            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], v);

            // Check vertex overlap in sphere
            v.vsub(localSpherePos, relpos);

            if(relpos.norm2() <= radiusSquared){

                // Safe up
                v2.copy(v);
                Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

                v.vsub(spherePos, relpos);

                var r = this.createContactEquation(sphereBody,trimeshBody,sphereShape,trimeshShape);
                r.ni.copy(relpos);
                r.ni.normalize();

                // ri is the vector from sphere center to the sphere surface
                r.ri.copy(r.ni);
                r.ri.scale(sphereShape.radius, r.ri);
                r.ri.vadd(spherePos, r.ri);
                r.ri.vsub(sphereBody.position, r.ri);

                r.rj.copy(v);
                r.rj.vsub(trimeshBody.position, r.rj);

                // Store result
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
    }

    // Check all edges
    for(var i=0; i<triangles.length; i++){
        for (var j = 0; j < 3; j++) {

            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], edgeVertexA);
            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + ((j+1)%3)], edgeVertexB);
            edgeVertexB.vsub(edgeVertexA, edgeVector);

            // Project sphere position to the edge
            localSpherePos.vsub(edgeVertexB, tmp);
            var positionAlongEdgeB = tmp.dot(edgeVector);

            localSpherePos.vsub(edgeVertexA, tmp);
            var positionAlongEdgeA = tmp.dot(edgeVector);

            if(positionAlongEdgeA > 0 && positionAlongEdgeB < 0){

                // Now check the orthogonal distance from edge to sphere center
                localSpherePos.vsub(edgeVertexA, tmp);

                edgeVectorUnit.copy(edgeVector);
                edgeVectorUnit.normalize();
                positionAlongEdgeA = tmp.dot(edgeVectorUnit);

                edgeVectorUnit.scale(positionAlongEdgeA, tmp);
                tmp.vadd(edgeVertexA, tmp);

                // tmp is now the sphere center position projected to the edge, defined locally in the trimesh frame
                var dist = tmp.distanceTo(localSpherePos);
                if(dist < sphereShape.radius){
                    var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);

                    tmp.vsub(localSpherePos, r.ni);
                    r.ni.normalize();
                    r.ni.scale(sphereShape.radius, r.ri);

                    Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                    tmp.vsub(trimeshBody.position, r.rj);

                    Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                    Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
            }
        }
    }

    // Triangle faces
    var va = sphereTrimesh_va;
    var vb = sphereTrimesh_vb;
    var vc = sphereTrimesh_vc;
    var normal = sphereTrimesh_normal;
    for(var i=0, N = triangles.length; i !== N; i++){
        trimeshShape.getTriangleVertices(triangles[i], va, vb, vc);
        trimeshShape.getNormal(triangles[i], normal);
        localSpherePos.vsub(va, tmp);
        var dist = tmp.dot(normal);
        normal.scale(dist, tmp);
        localSpherePos.vsub(tmp, tmp);

        // tmp is now the sphere position projected to the triangle plane
        dist = tmp.distanceTo(localSpherePos);
        if(Ray.pointInTriangle(tmp, va, vb, vc) && dist < sphereShape.radius){
            var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape);

            tmp.vsub(localSpherePos, r.ni);
            r.ni.normalize();
            r.ni.scale(sphereShape.radius, r.ri);

            Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
            tmp.vsub(trimeshBody.position, r.rj);

            Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
            Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
    }

    triangles.length = 0;
};

var point_on_plane_to_sphere = new Vec3();
var plane_to_sphere_ortho = new Vec3();

/**
 * @method spherePlane
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.PLANE] =
Narrowphase.prototype.spherePlane = function(si,sj,xi,xj,qi,qj,bi,bj){
    // We will have one contact in this case
    var r = this.createContactEquation(bi,bj,si,sj);

    // Contact normal
    r.ni.set(0,0,1);
    qj.vmult(r.ni, r.ni);
    r.ni.negate(r.ni); // body i is the sphere, flip normal
    r.ni.normalize(); // Needed?

    // Vector from sphere center to contact point
    r.ni.mult(si.radius, r.ri);

    // Project down sphere on plane
    xi.vsub(xj, point_on_plane_to_sphere);
    r.ni.mult(r.ni.dot(point_on_plane_to_sphere), plane_to_sphere_ortho);
    point_on_plane_to_sphere.vsub(plane_to_sphere_ortho,r.rj); // The sphere position projected to plane

    if(-point_on_plane_to_sphere.dot(r.ni) <= si.radius){

        // Make it relative to the body
        var ri = r.ri;
        var rj = r.rj;
        ri.vadd(xi, ri);
        ri.vsub(bi.position, ri);
        rj.vadd(xj, rj);
        rj.vsub(bj.position, rj);

        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

// See http://bulletphysics.com/Bullet/BulletFull/SphereTriangleDetector_8cpp_source.html
var pointInPolygon_edge = new Vec3();
var pointInPolygon_edge_x_normal = new Vec3();
var pointInPolygon_vtp = new Vec3();
function pointInPolygon(verts, normal, p){
    var positiveResult = null;
    var N = verts.length;
    for(var i=0; i!==N; i++){
        var v = verts[i];

        // Get edge to the next vertex
        var edge = pointInPolygon_edge;
        verts[(i+1) % (N)].vsub(v,edge);

        // Get cross product between polygon normal and the edge
        var edge_x_normal = pointInPolygon_edge_x_normal;
        //var edge_x_normal = new Vec3();
        edge.cross(normal,edge_x_normal);

        // Get vector between point and current vertex
        var vertex_to_p = pointInPolygon_vtp;
        p.vsub(v,vertex_to_p);

        // This dot product determines which side of the edge the point is
        var r = edge_x_normal.dot(vertex_to_p);

        // If all such dot products have same sign, we are inside the polygon.
        if(positiveResult===null || (r>0 && positiveResult===true) || (r<=0 && positiveResult===false)){
            if(positiveResult===null){
                positiveResult = r>0;
            }
            continue;
        } else {
            return false; // Encountered some other sign. Exit.
        }
    }

    // If we got here, all dot products were of the same sign.
    return true;
}

var box_to_sphere = new Vec3();
var sphereBox_ns = new Vec3();
var sphereBox_ns1 = new Vec3();
var sphereBox_ns2 = new Vec3();
var sphereBox_sides = [new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3()];
var sphereBox_sphere_to_corner = new Vec3();
var sphereBox_side_ns = new Vec3();
var sphereBox_side_ns1 = new Vec3();
var sphereBox_side_ns2 = new Vec3();

/**
 * @method sphereBox
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.BOX] =
Narrowphase.prototype.sphereBox = function(si,sj,xi,xj,qi,qj,bi,bj){
    var v3pool = this.v3pool;

    // we refer to the box as body j
    var sides = sphereBox_sides;
    xi.vsub(xj,box_to_sphere);
    sj.getSideNormals(sides,qj);
    var R =     si.radius;
    var penetrating_sides = [];

    // Check side (plane) intersections
    var found = false;

    // Store the resulting side penetration info
    var side_ns = sphereBox_side_ns;
    var side_ns1 = sphereBox_side_ns1;
    var side_ns2 = sphereBox_side_ns2;
    var side_h = null;
    var side_penetrations = 0;
    var side_dot1 = 0;
    var side_dot2 = 0;
    var side_distance = null;
    for(var idx=0,nsides=sides.length; idx!==nsides && found===false; idx++){
        // Get the plane side normal (ns)
        var ns = sphereBox_ns;
        ns.copy(sides[idx]);

        var h = ns.norm();
        ns.normalize();

        // The normal/distance dot product tells which side of the plane we are
        var dot = box_to_sphere.dot(ns);

        if(dot<h+R && dot>0){
            // Intersects plane. Now check the other two dimensions
            var ns1 = sphereBox_ns1;
            var ns2 = sphereBox_ns2;
            ns1.copy(sides[(idx+1)%3]);
            ns2.copy(sides[(idx+2)%3]);
            var h1 = ns1.norm();
            var h2 = ns2.norm();
            ns1.normalize();
            ns2.normalize();
            var dot1 = box_to_sphere.dot(ns1);
            var dot2 = box_to_sphere.dot(ns2);
            if(dot1<h1 && dot1>-h1 && dot2<h2 && dot2>-h2){
                var dist = Math.abs(dot-h-R);
                if(side_distance===null || dist < side_distance){
                    side_distance = dist;
                    side_dot1 = dot1;
                    side_dot2 = dot2;
                    side_h = h;
                    side_ns.copy(ns);
                    side_ns1.copy(ns1);
                    side_ns2.copy(ns2);
                    side_penetrations++;
                }
            }
        }
    }
    if(side_penetrations){
        found = true;
        var r = this.createContactEquation(bi,bj,si,sj);
        side_ns.mult(-R,r.ri); // Sphere r
        r.ni.copy(side_ns);
        r.ni.negate(r.ni); // Normal should be out of sphere
        side_ns.mult(side_h,side_ns);
        side_ns1.mult(side_dot1,side_ns1);
        side_ns.vadd(side_ns1,side_ns);
        side_ns2.mult(side_dot2,side_ns2);
        side_ns.vadd(side_ns2,r.rj);

        // Make relative to bodies
        r.ri.vadd(xi, r.ri);
        r.ri.vsub(bi.position, r.ri);
        r.rj.vadd(xj, r.rj);
        r.rj.vsub(bj.position, r.rj);

        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }

    // Check corners
    var rj = v3pool.get();
    var sphere_to_corner = sphereBox_sphere_to_corner;
    for(var j=0; j!==2 && !found; j++){
        for(var k=0; k!==2 && !found; k++){
            for(var l=0; l!==2 && !found; l++){
                rj.set(0,0,0);
                if(j){
                    rj.vadd(sides[0],rj);
                } else {
                    rj.vsub(sides[0],rj);
                }
                if(k){
                    rj.vadd(sides[1],rj);
                } else {
                    rj.vsub(sides[1],rj);
                }
                if(l){
                    rj.vadd(sides[2],rj);
                } else {
                    rj.vsub(sides[2],rj);
                }

                // World position of corner
                xj.vadd(rj,sphere_to_corner);
                sphere_to_corner.vsub(xi,sphere_to_corner);

                if(sphere_to_corner.norm2() < R*R){
                    found = true;
                    var r = this.createContactEquation(bi,bj,si,sj);
                    r.ri.copy(sphere_to_corner);
                    r.ri.normalize();
                    r.ni.copy(r.ri);
                    r.ri.mult(R,r.ri);
                    r.rj.copy(rj);

                    // Make relative to bodies
                    r.ri.vadd(xi, r.ri);
                    r.ri.vsub(bi.position, r.ri);
                    r.rj.vadd(xj, r.rj);
                    r.rj.vsub(bj.position, r.rj);

                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
            }
        }
    }
    v3pool.release(rj);
    rj = null;

    // Check edges
    var edgeTangent = v3pool.get();
    var edgeCenter = v3pool.get();
    var r = v3pool.get(); // r = edge center to sphere center
    var orthogonal = v3pool.get();
    var dist = v3pool.get();
    var Nsides = sides.length;
    for(var j=0; j!==Nsides && !found; j++){
        for(var k=0; k!==Nsides && !found; k++){
            if(j%3 !== k%3){
                // Get edge tangent
                sides[k].cross(sides[j],edgeTangent);
                edgeTangent.normalize();
                sides[j].vadd(sides[k], edgeCenter);
                r.copy(xi);
                r.vsub(edgeCenter,r);
                r.vsub(xj,r);
                var orthonorm = r.dot(edgeTangent); // distance from edge center to sphere center in the tangent direction
                edgeTangent.mult(orthonorm,orthogonal); // Vector from edge center to sphere center in the tangent direction

                // Find the third side orthogonal to this one
                var l = 0;
                while(l===j%3 || l===k%3){
                    l++;
                }

                // vec from edge center to sphere projected to the plane orthogonal to the edge tangent
                dist.copy(xi);
                dist.vsub(orthogonal,dist);
                dist.vsub(edgeCenter,dist);
                dist.vsub(xj,dist);

                // Distances in tangent direction and distance in the plane orthogonal to it
                var tdist = Math.abs(orthonorm);
                var ndist = dist.norm();

                if(tdist < sides[l].norm() && ndist<R){
                    found = true;
                    var res = this.createContactEquation(bi,bj,si,sj);
                    edgeCenter.vadd(orthogonal,res.rj); // box rj
                    res.rj.copy(res.rj);
                    dist.negate(res.ni);
                    res.ni.normalize();

                    res.ri.copy(res.rj);
                    res.ri.vadd(xj,res.ri);
                    res.ri.vsub(xi,res.ri);
                    res.ri.normalize();
                    res.ri.mult(R,res.ri);

                    // Make relative to bodies
                    res.ri.vadd(xi, res.ri);
                    res.ri.vsub(bi.position, res.ri);
                    res.rj.vadd(xj, res.rj);
                    res.rj.vsub(bj.position, res.rj);

                    this.result.push(res);
                    this.createFrictionEquationsFromContact(res, this.frictionResult);
                }
            }
        }
    }
    v3pool.release(edgeTangent,edgeCenter,r,orthogonal,dist);
};

var convex_to_sphere = new Vec3();
var sphereConvex_edge = new Vec3();
var sphereConvex_edgeUnit = new Vec3();
var sphereConvex_sphereToCorner = new Vec3();
var sphereConvex_worldCorner = new Vec3();
var sphereConvex_worldNormal = new Vec3();
var sphereConvex_worldPoint = new Vec3();
var sphereConvex_worldSpherePointClosestToPlane = new Vec3();
var sphereConvex_penetrationVec = new Vec3();
var sphereConvex_sphereToWorldPoint = new Vec3();

/**
 * @method sphereConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.sphereConvex = function(si,sj,xi,xj,qi,qj,bi,bj){
    var v3pool = this.v3pool;
    xi.vsub(xj,convex_to_sphere);
    var normals = sj.faceNormals;
    var faces = sj.faces;
    var verts = sj.vertices;
    var R =     si.radius;
    var penetrating_sides = [];

    // if(convex_to_sphere.norm2() > si.boundingSphereRadius + sj.boundingSphereRadius){
    //     return;
    // }

    // Check corners
    for(var i=0; i!==verts.length; i++){
        var v = verts[i];

        // World position of corner
        var worldCorner = sphereConvex_worldCorner;
        qj.vmult(v,worldCorner);
        xj.vadd(worldCorner,worldCorner);
        var sphere_to_corner = sphereConvex_sphereToCorner;
        worldCorner.vsub(xi, sphere_to_corner);
        if(sphere_to_corner.norm2() < R * R){
            found = true;
            var r = this.createContactEquation(bi,bj,si,sj);
            r.ri.copy(sphere_to_corner);
            r.ri.normalize();
            r.ni.copy(r.ri);
            r.ri.mult(R,r.ri);
            worldCorner.vsub(xj,r.rj);

            // Should be relative to the body.
            r.ri.vadd(xi, r.ri);
            r.ri.vsub(bi.position, r.ri);

            // Should be relative to the body.
            r.rj.vadd(xj, r.rj);
            r.rj.vsub(bj.position, r.rj);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
            return;
        }
    }

    // Check side (plane) intersections
    var found = false;
    for(var i=0, nfaces=faces.length; i!==nfaces && found===false; i++){
        var normal = normals[i];
        var face = faces[i];

        // Get world-transformed normal of the face
        var worldNormal = sphereConvex_worldNormal;
        qj.vmult(normal,worldNormal);

        // Get a world vertex from the face
        var worldPoint = sphereConvex_worldPoint;
        qj.vmult(verts[face[0]],worldPoint);
        worldPoint.vadd(xj,worldPoint);

        // Get a point on the sphere, closest to the face normal
        var worldSpherePointClosestToPlane = sphereConvex_worldSpherePointClosestToPlane;
        worldNormal.mult(-R, worldSpherePointClosestToPlane);
        xi.vadd(worldSpherePointClosestToPlane, worldSpherePointClosestToPlane);

        // Vector from a face point to the closest point on the sphere
        var penetrationVec = sphereConvex_penetrationVec;
        worldSpherePointClosestToPlane.vsub(worldPoint,penetrationVec);

        // The penetration. Negative value means overlap.
        var penetration = penetrationVec.dot(worldNormal);

        var worldPointToSphere = sphereConvex_sphereToWorldPoint;
        xi.vsub(worldPoint, worldPointToSphere);

        if(penetration < 0 && worldPointToSphere.dot(worldNormal)>0){
            // Intersects plane. Now check if the sphere is inside the face polygon
            var faceVerts = []; // Face vertices, in world coords
            for(var j=0, Nverts=face.length; j!==Nverts; j++){
                var worldVertex = v3pool.get();
                qj.vmult(verts[face[j]], worldVertex);
                xj.vadd(worldVertex,worldVertex);
                faceVerts.push(worldVertex);
            }

            if(pointInPolygon(faceVerts,worldNormal,xi)){ // Is the sphere center in the face polygon?
                found = true;
                var r = this.createContactEquation(bi,bj,si,sj);

                worldNormal.mult(-R, r.ri); // Contact offset, from sphere center to contact
                worldNormal.negate(r.ni); // Normal pointing out of sphere

                var penetrationVec2 = v3pool.get();
                worldNormal.mult(-penetration, penetrationVec2);
                var penetrationSpherePoint = v3pool.get();
                worldNormal.mult(-R, penetrationSpherePoint);

                //xi.vsub(xj).vadd(penetrationSpherePoint).vadd(penetrationVec2 , r.rj);
                xi.vsub(xj,r.rj);
                r.rj.vadd(penetrationSpherePoint,r.rj);
                r.rj.vadd(penetrationVec2 , r.rj);

                // Should be relative to the body.
                r.rj.vadd(xj, r.rj);
                r.rj.vsub(bj.position, r.rj);

                // Should be relative to the body.
                r.ri.vadd(xi, r.ri);
                r.ri.vsub(bi.position, r.ri);

                v3pool.release(penetrationVec2);
                v3pool.release(penetrationSpherePoint);

                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);

                // Release world vertices
                for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                    v3pool.release(faceVerts[j]);
                }

                return; // We only expect *one* face contact
            } else {
                // Edge?
                for(var j=0; j!==face.length; j++){

                    // Get two world transformed vertices
                    var v1 = v3pool.get();
                    var v2 = v3pool.get();
                    qj.vmult(verts[face[(j+1)%face.length]], v1);
                    qj.vmult(verts[face[(j+2)%face.length]], v2);
                    xj.vadd(v1, v1);
                    xj.vadd(v2, v2);

                    // Construct edge vector
                    var edge = sphereConvex_edge;
                    v2.vsub(v1,edge);

                    // Construct the same vector, but normalized
                    var edgeUnit = sphereConvex_edgeUnit;
                    edge.unit(edgeUnit);

                    // p is xi projected onto the edge
                    var p = v3pool.get();
                    var v1_to_xi = v3pool.get();
                    xi.vsub(v1, v1_to_xi);
                    var dot = v1_to_xi.dot(edgeUnit);
                    edgeUnit.mult(dot, p);
                    p.vadd(v1, p);

                    // Compute a vector from p to the center of the sphere
                    var xi_to_p = v3pool.get();
                    p.vsub(xi, xi_to_p);

                    // Collision if the edge-sphere distance is less than the radius
                    // AND if p is in between v1 and v2
                    if(dot > 0 && dot*dot<edge.norm2() && xi_to_p.norm2() < R*R){ // Collision if the edge-sphere distance is less than the radius
                        // Edge contact!
                        var r = this.createContactEquation(bi,bj,si,sj);
                        p.vsub(xj,r.rj);

                        p.vsub(xi,r.ni);
                        r.ni.normalize();

                        r.ni.mult(R,r.ri);

                        // Should be relative to the body.
                        r.rj.vadd(xj, r.rj);
                        r.rj.vsub(bj.position, r.rj);

                        // Should be relative to the body.
                        r.ri.vadd(xi, r.ri);
                        r.ri.vsub(bi.position, r.ri);

                        this.result.push(r);
                        this.createFrictionEquationsFromContact(r, this.frictionResult);

                        // Release world vertices
                        for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                            v3pool.release(faceVerts[j]);
                        }

                        v3pool.release(v1);
                        v3pool.release(v2);
                        v3pool.release(p);
                        v3pool.release(xi_to_p);
                        v3pool.release(v1_to_xi);

                        return;
                    }

                    v3pool.release(v1);
                    v3pool.release(v2);
                    v3pool.release(p);
                    v3pool.release(xi_to_p);
                    v3pool.release(v1_to_xi);
                }
            }

            // Release world vertices
            for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                v3pool.release(faceVerts[j]);
            }
        }
    }
};

var planeBox_normal = new Vec3();
var plane_to_corner = new Vec3();

/**
 * @method planeBox
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.BOX] =
Narrowphase.prototype.planeBox = function(si,sj,xi,xj,qi,qj,bi,bj){
    sj.convexPolyhedronRepresentation.material = sj.material;
    sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
    this.planeConvex(si,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj);
};

var planeConvex_v = new Vec3();
var planeConvex_normal = new Vec3();
var planeConvex_relpos = new Vec3();
var planeConvex_projected = new Vec3();

/**
 * @method planeConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.planeConvex = function(
    planeShape,
    convexShape,
    planePosition,
    convexPosition,
    planeQuat,
    convexQuat,
    planeBody,
    convexBody
){
    // Simply return the points behind the plane.
    var worldVertex = planeConvex_v,
        worldNormal = planeConvex_normal;
    worldNormal.set(0,0,1);
    planeQuat.vmult(worldNormal,worldNormal); // Turn normal according to plane orientation

    var numContacts = 0;
    var relpos = planeConvex_relpos;
    for(var i = 0; i !== convexShape.vertices.length; i++){

        // Get world convex vertex
        worldVertex.copy(convexShape.vertices[i]);
        convexQuat.vmult(worldVertex, worldVertex);
        convexPosition.vadd(worldVertex, worldVertex);
        worldVertex.vsub(planePosition, relpos);

        var dot = worldNormal.dot(relpos);
        if(dot <= 0.0){

            var r = this.createContactEquation(planeBody, convexBody, planeShape, convexShape);

            // Get vertex position projected on plane
            var projected = planeConvex_projected;
            worldNormal.mult(worldNormal.dot(relpos),projected);
            worldVertex.vsub(projected, projected);
            projected.vsub(planePosition, r.ri); // From plane to vertex projected on plane

            r.ni.copy(worldNormal); // Contact normal is the plane normal out from plane

            // rj is now just the vector from the convex center to the vertex
            worldVertex.vsub(convexPosition, r.rj);

            // Make it relative to the body
            r.ri.vadd(planePosition, r.ri);
            r.ri.vsub(planeBody.position, r.ri);
            r.rj.vadd(convexPosition, r.rj);
            r.rj.vsub(convexBody.position, r.rj);

            this.result.push(r);
            numContacts++;
            if(!this.enableFrictionReduction){
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
    }

    if(this.enableFrictionReduction && numContacts){
        this.createFrictionFromAverage(numContacts);
    }
};

var convexConvex_sepAxis = new Vec3();
var convexConvex_q = new Vec3();

/**
 * @method convexConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.convexConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,faceListA,faceListB){
    var sepAxis = convexConvex_sepAxis;

    if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
        return;
    }

    if(si.findSeparatingAxis(sj,xi,qi,xj,qj,sepAxis,faceListA,faceListB)){
        var res = [];
        var q = convexConvex_q;
        si.clipAgainstHull(xi,qi,sj,xj,qj,sepAxis,-100,100,res);
        var numContacts = 0;
        for(var j = 0; j !== res.length; j++){
            var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
                ri = r.ri,
                rj = r.rj;
            sepAxis.negate(r.ni);
            res[j].normal.negate(q);
            q.mult(res[j].depth, q);
            res[j].point.vadd(q, ri);
            rj.copy(res[j].point);

            // Contact points are in world coordinates. Transform back to relative
            ri.vsub(xi,ri);
            rj.vsub(xj,rj);

            // Make relative to bodies
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);

            this.result.push(r);
            numContacts++;
            if(!this.enableFrictionReduction){
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
        if(this.enableFrictionReduction && numContacts){
            this.createFrictionFromAverage(numContacts);
        }
    }
};


/**
 * @method convexTrimesh
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
// Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.TRIMESH] =
// Narrowphase.prototype.convexTrimesh = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,faceListA,faceListB){
//     var sepAxis = convexConvex_sepAxis;

//     if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
//         return;
//     }

//     // Construct a temp hull for each triangle
//     var hullB = new ConvexPolyhedron();

//     hullB.faces = [[0,1,2]];
//     var va = new Vec3();
//     var vb = new Vec3();
//     var vc = new Vec3();
//     hullB.vertices = [
//         va,
//         vb,
//         vc
//     ];

//     for (var i = 0; i < sj.indices.length / 3; i++) {

//         var triangleNormal = new Vec3();
//         sj.getNormal(i, triangleNormal);
//         hullB.faceNormals = [triangleNormal];

//         sj.getTriangleVertices(i, va, vb, vc);

//         var d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);
//         if(!d){
//             triangleNormal.scale(-1, triangleNormal);
//             d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);

//             if(!d){
//                 continue;
//             }
//         }

//         var res = [];
//         var q = convexConvex_q;
//         si.clipAgainstHull(xi,qi,hullB,xj,qj,triangleNormal,-100,100,res);
//         for(var j = 0; j !== res.length; j++){
//             var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
//                 ri = r.ri,
//                 rj = r.rj;
//             r.ni.copy(triangleNormal);
//             r.ni.negate(r.ni);
//             res[j].normal.negate(q);
//             q.mult(res[j].depth, q);
//             res[j].point.vadd(q, ri);
//             rj.copy(res[j].point);

//             // Contact points are in world coordinates. Transform back to relative
//             ri.vsub(xi,ri);
//             rj.vsub(xj,rj);

//             // Make relative to bodies
//             ri.vadd(xi, ri);
//             ri.vsub(bi.position, ri);
//             rj.vadd(xj, rj);
//             rj.vsub(bj.position, rj);

//             result.push(r);
//         }
//     }
// };

var particlePlane_normal = new Vec3();
var particlePlane_relpos = new Vec3();
var particlePlane_projected = new Vec3();

/**
 * @method particlePlane
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.PARTICLE] =
Narrowphase.prototype.planeParticle = function(sj,si,xj,xi,qj,qi,bj,bi){
    var normal = particlePlane_normal;
    normal.set(0,0,1);
    bj.quaternion.vmult(normal,normal); // Turn normal according to plane orientation
    var relpos = particlePlane_relpos;
    xi.vsub(bj.position,relpos);
    var dot = normal.dot(relpos);
    if(dot <= 0.0){
        var r = this.createContactEquation(bi,bj,si,sj);
        r.ni.copy(normal); // Contact normal is the plane normal
        r.ni.negate(r.ni);
        r.ri.set(0,0,0); // Center of particle

        // Get particle position projected on plane
        var projected = particlePlane_projected;
        normal.mult(normal.dot(xi),projected);
        xi.vsub(projected,projected);
        //projected.vadd(bj.position,projected);

        // rj is now the projected world position minus plane position
        r.rj.copy(projected);
        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

var particleSphere_normal = new Vec3();

/**
 * @method particleSphere
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.SPHERE] =
Narrowphase.prototype.sphereParticle = function(sj,si,xj,xi,qj,qi,bj,bi){
    // The normal is the unit vector from sphere center to particle center
    var normal = particleSphere_normal;
    normal.set(0,0,1);
    xi.vsub(xj,normal);
    var lengthSquared = normal.norm2();

    if(lengthSquared <= sj.radius * sj.radius){
        var r = this.createContactEquation(bi,bj,si,sj);
        normal.normalize();
        r.rj.copy(normal);
        r.rj.mult(sj.radius,r.rj);
        r.ni.copy(normal); // Contact normal
        r.ni.negate(r.ni);
        r.ri.set(0,0,0); // Center of particle
        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

// WIP
var cqj = new Quaternion();
var convexParticle_local = new Vec3();
var convexParticle_normal = new Vec3();
var convexParticle_penetratedFaceNormal = new Vec3();
var convexParticle_vertexToParticle = new Vec3();
var convexParticle_worldPenetrationVec = new Vec3();

/**
 * @method convexParticle
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.convexParticle = function(sj,si,xj,xi,qj,qi,bj,bi){
    var penetratedFaceIndex = -1;
    var penetratedFaceNormal = convexParticle_penetratedFaceNormal;
    var worldPenetrationVec = convexParticle_worldPenetrationVec;
    var minPenetration = null;
    var numDetectedFaces = 0;

    // Convert particle position xi to local coords in the convex
    var local = convexParticle_local;
    local.copy(xi);
    local.vsub(xj,local); // Convert position to relative the convex origin
    qj.conjugate(cqj);
    cqj.vmult(local,local);

    if(sj.pointIsInside(local)){

        if(sj.worldVerticesNeedsUpdate){
            sj.computeWorldVertices(xj,qj);
        }
        if(sj.worldFaceNormalsNeedsUpdate){
            sj.computeWorldFaceNormals(qj);
        }

        // For each world polygon in the polyhedra
        for(var i=0,nfaces=sj.faces.length; i!==nfaces; i++){

            // Construct world face vertices
            var verts = [ sj.worldVertices[ sj.faces[i][0] ] ];
            var normal = sj.worldFaceNormals[i];

            // Check how much the particle penetrates the polygon plane.
            xi.vsub(verts[0],convexParticle_vertexToParticle);
            var penetration = -normal.dot(convexParticle_vertexToParticle);
            if(minPenetration===null || Math.abs(penetration)<Math.abs(minPenetration)){
                minPenetration = penetration;
                penetratedFaceIndex = i;
                penetratedFaceNormal.copy(normal);
                numDetectedFaces++;
            }
        }

        if(penetratedFaceIndex!==-1){
            // Setup contact
            var r = this.createContactEquation(bi,bj,si,sj);
            penetratedFaceNormal.mult(minPenetration, worldPenetrationVec);

            // rj is the particle position projected to the face
            worldPenetrationVec.vadd(xi,worldPenetrationVec);
            worldPenetrationVec.vsub(xj,worldPenetrationVec);
            r.rj.copy(worldPenetrationVec);
            //var projectedToFace = xi.vsub(xj).vadd(worldPenetrationVec);
            //projectedToFace.copy(r.rj);

            //qj.vmult(r.rj,r.rj);
            penetratedFaceNormal.negate( r.ni ); // Contact normal
            r.ri.set(0,0,0); // Center of particle

            var ri = r.ri,
                rj = r.rj;

            // Make relative to bodies
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        } else {
            console.warn("Point found inside convex, but did not find penetrating face!");
        }
    }
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.boxHeightfield = function (si,sj,xi,xj,qi,qj,bi,bj){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    this.convexHeightfield(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj);
};

var convexHeightfield_tmp1 = new Vec3();
var convexHeightfield_tmp2 = new Vec3();
var convexHeightfield_faceList = [0];

/**
 * @method convexHeightfield
 */
Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.convexHeightfield = function (
    convexShape,
    hfShape,
    convexPos,
    hfPos,
    convexQuat,
    hfQuat,
    convexBody,
    hfBody
){
    var data = hfShape.data,
        w = hfShape.elementSize,
        radius = convexShape.boundingSphereRadius,
        worldPillarOffset = convexHeightfield_tmp2,
        faceList = convexHeightfield_faceList;

    // Get sphere position to heightfield local!
    var localConvexPos = convexHeightfield_tmp1;
    Transform.pointToLocalFrame(hfPos, hfQuat, convexPos, localConvexPos);

    // Get the index of the data points to test against
    var iMinX = Math.floor((localConvexPos.x - radius) / w) - 1,
        iMaxX = Math.ceil((localConvexPos.x + radius) / w) + 1,
        iMinY = Math.floor((localConvexPos.y - radius) / w) - 1,
        iMaxY = Math.ceil((localConvexPos.y + radius) / w) + 1;

    // Bail out if we are out of the terrain
    if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length){
        return;
    }

    // Clamp index to edges
    if(iMinX < 0){ iMinX = 0; }
    if(iMaxX < 0){ iMaxX = 0; }
    if(iMinY < 0){ iMinY = 0; }
    if(iMaxY < 0){ iMaxY = 0; }
    if(iMinX >= data.length){ iMinX = data.length - 1; }
    if(iMaxX >= data.length){ iMaxX = data.length - 1; }
    if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
    if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

    var minMax = [];
    hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // Bail out if we're cant touch the bounding height box
    if(localConvexPos.z - radius > max || localConvexPos.z + radius < min){
        return;
    }

    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            // Lower triangle
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
            }

            // Upper triangle
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, faceList, null);
            }
        }
    }
};

var sphereHeightfield_tmp1 = new Vec3();
var sphereHeightfield_tmp2 = new Vec3();

/**
 * @method sphereHeightfield
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.sphereHeightfield = function (
    sphereShape,
    hfShape,
    spherePos,
    hfPos,
    sphereQuat,
    hfQuat,
    sphereBody,
    hfBody
){
    var data = hfShape.data,
        radius = sphereShape.radius,
        w = hfShape.elementSize,
        worldPillarOffset = sphereHeightfield_tmp2;

    // Get sphere position to heightfield local!
    var localSpherePos = sphereHeightfield_tmp1;
    Transform.pointToLocalFrame(hfPos, hfQuat, spherePos, localSpherePos);

    // Get the index of the data points to test against
    var iMinX = Math.floor((localSpherePos.x - radius) / w) - 1,
        iMaxX = Math.ceil((localSpherePos.x + radius) / w) + 1,
        iMinY = Math.floor((localSpherePos.y - radius) / w) - 1,
        iMaxY = Math.ceil((localSpherePos.y + radius) / w) + 1;

    // Bail out if we are out of the terrain
    if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMaxY > data[0].length){
        return;
    }

    // Clamp index to edges
    if(iMinX < 0){ iMinX = 0; }
    if(iMaxX < 0){ iMaxX = 0; }
    if(iMinY < 0){ iMinY = 0; }
    if(iMaxY < 0){ iMaxY = 0; }
    if(iMinX >= data.length){ iMinX = data.length - 1; }
    if(iMaxX >= data.length){ iMaxX = data.length - 1; }
    if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
    if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

    var minMax = [];
    hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // Bail out if we're cant touch the bounding height box
    if(localSpherePos.z - radius > max || localSpherePos.z + radius < min){
        return;
    }

    var result = this.result;
    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            var numContactsBefore = result.length;

            // Lower triangle
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
            }

            // Upper triangle
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody);
            }

            var numContacts = result.length - numContactsBefore;

            if(numContacts > 2){
                return;
            }
            /*
            // Skip all but 1
            for (var k = 0; k < numContacts - 1; k++) {
                result.pop();
            }
            */
        }
    }
};

},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(_dereq_,module,exports){
/* global performance */

module.exports = World;

var Shape = _dereq_('../shapes/Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var GSSolver = _dereq_('../solver/GSSolver');
var Vec3Pool = _dereq_('../utils/Vec3Pool');
var ContactEquation = _dereq_('../equations/ContactEquation');
var FrictionEquation = _dereq_('../equations/FrictionEquation');
var Narrowphase = _dereq_('./Narrowphase');
var EventTarget = _dereq_('../utils/EventTarget');
var ArrayCollisionMatrix = _dereq_('../collision/ArrayCollisionMatrix');
var Material = _dereq_('../material/Material');
var ContactMaterial = _dereq_('../material/ContactMaterial');
var Body = _dereq_('../objects/Body');
var TupleDictionary = _dereq_('../utils/TupleDictionary');
var RaycastResult = _dereq_('../collision/RaycastResult');
var AABB = _dereq_('../collision/AABB');
var Ray = _dereq_('../collision/Ray');
var NaiveBroadphase = _dereq_('../collision/NaiveBroadphase');

/**
 * The physics world
 * @class World
 * @constructor
 * @extends EventTarget
 */
function World(){
    EventTarget.apply(this);

    /**
     * Currently / last used timestep. Is set to -1 if not available. This value is updated before each internal step, which means that it is "fresh" inside event callbacks.
     * @property {Number} dt
     */
    this.dt = -1;

    /**
     * Makes bodies go to sleep when they've been inactive
     * @property allowSleep
     * @type {Boolean}
     */
    this.allowSleep = false;

    /**
     * All the current contacts (instances of ContactEquation) in the world.
     * @property contacts
     * @type {Array}
     */
    this.contacts = [];
    this.frictionEquations = [];

    /**
     * How often to normalize quaternions. Set to 0 for every step, 1 for every second etc.. A larger value increases performance. If bodies tend to explode, set to a smaller value (zero to be sure nothing can go wrong).
     * @property quatNormalizeSkip
     * @type {Number}
     */
    this.quatNormalizeSkip = 0;

    /**
     * Set to true to use fast quaternion normalization. It is often enough accurate to use. If bodies tend to explode, set to false.
     * @property quatNormalizeFast
     * @type {Boolean}
     * @see Quaternion.normalizeFast
     * @see Quaternion.normalize
     */
    this.quatNormalizeFast = false;

    /**
     * The wall-clock time since simulation start
     * @property time
     * @type {Number}
     */
    this.time = 0.0;

    /**
     * Number of timesteps taken since start
     * @property stepnumber
     * @type {Number}
     */
    this.stepnumber = 0;

    /// Default and last timestep sizes
    this.default_dt = 1/60;

    this.nextId = 0;
    /**
     * @property gravity
     * @type {Vec3}
     */
    this.gravity = new Vec3();

    /**
     * @property broadphase
     * @type {Broadphase}
     */
    this.broadphase = new NaiveBroadphase();

    /**
     * @property bodies
     * @type {Array}
     */
    this.bodies = [];

    /**
     * @property solver
     * @type {Solver}
     */
    this.solver = new GSSolver();

    /**
     * @property constraints
     * @type {Array}
     */
    this.constraints = [];

    /**
     * @property narrowphase
     * @type {Narrowphase}
     */
    this.narrowphase = new Narrowphase(this);

    /**
     * @property {ArrayCollisionMatrix} collisionMatrix
	 * @type {ArrayCollisionMatrix}
	 */
	this.collisionMatrix = new ArrayCollisionMatrix();

    /**
     * CollisionMatrix from the previous step.
     * @property {ArrayCollisionMatrix} collisionMatrixPrevious
	 * @type {ArrayCollisionMatrix}
	 */
	this.collisionMatrixPrevious = new ArrayCollisionMatrix();

    /**
     * All added materials
     * @property materials
     * @type {Array}
     */
    this.materials = [];

    /**
     * @property contactmaterials
     * @type {Array}
     */
    this.contactmaterials = [];

    /**
     * Used to look up a ContactMaterial given two instances of Material.
     * @property {TupleDictionary} contactMaterialTable
     */
    this.contactMaterialTable = new TupleDictionary();

    this.defaultMaterial = new Material("default");

    /**
     * This contact material is used if no suitable contactmaterial is found for a contact.
     * @property defaultContactMaterial
     * @type {ContactMaterial}
     */
    this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial, { friction: 0.3, restitution: 0.0 });

    /**
     * @property doProfiling
     * @type {Boolean}
     */
    this.doProfiling = false;

    /**
     * @property profile
     * @type {Object}
     */
    this.profile = {
        solve:0,
        makeContactConstraints:0,
        broadphase:0,
        integrate:0,
        narrowphase:0,
    };

    /**
     * @property subsystems
     * @type {Array}
     */
    this.subsystems = [];

    this.addBodyEvent = {
        type:"addBody",
        body : null,
    };

    this.removeBodyEvent = {
        type:"removeBody",
        body : null,
    };
}
World.prototype = new EventTarget();

// Temp stuff
var tmpAABB1 = new AABB();
var tmpArray1 = [];
var tmpRay = new Ray();

/**
 * Get the contact material between materials m1 and m2
 * @method getContactMaterial
 * @param {Material} m1
 * @param {Material} m2
 * @return {ContactMaterial} The contact material if it was found.
 */
World.prototype.getContactMaterial = function(m1,m2){
    return this.contactMaterialTable.get(m1.id,m2.id); //this.contactmaterials[this.mats2cmat[i+j*this.materials.length]];
};

/**
 * Get number of objects in the world.
 * @method numObjects
 * @return {Number}
 * @deprecated
 */
World.prototype.numObjects = function(){
    return this.bodies.length;
};

/**
 * Store old collision state info
 * @method collisionMatrixTick
 */
World.prototype.collisionMatrixTick = function(){
	var temp = this.collisionMatrixPrevious;
	this.collisionMatrixPrevious = this.collisionMatrix;
	this.collisionMatrix = temp;
	this.collisionMatrix.reset();
};

/**
 * Add a rigid body to the simulation.
 * @method add
 * @param {Body} body
 * @todo If the simulation has not yet started, why recrete and copy arrays for each body? Accumulate in dynamic arrays in this case.
 * @todo Adding an array of bodies should be possible. This would save some loops too
 * @deprecated Use .addBody instead
 */
World.prototype.add = World.prototype.addBody = function(body){
    if(this.bodies.indexOf(body) !== -1){
        return;
    }
    body.index = this.bodies.length;
    this.bodies.push(body);
    body.world = this;
    body.initPosition.copy(body.position);
    body.initVelocity.copy(body.velocity);
    body.timeLastSleepy = this.time;
    if(body instanceof Body){
        body.initAngularVelocity.copy(body.angularVelocity);
        body.initQuaternion.copy(body.quaternion);
    }
	this.collisionMatrix.setNumObjects(this.bodies.length);
    this.addBodyEvent.body = body;
    this.dispatchEvent(this.addBodyEvent);
};

/**
 * Add a constraint to the simulation.
 * @method addConstraint
 * @param {Constraint} c
 */
World.prototype.addConstraint = function(c){
    this.constraints.push(c);
};

/**
 * Removes a constraint
 * @method removeConstraint
 * @param {Constraint} c
 */
World.prototype.removeConstraint = function(c){
    var idx = this.constraints.indexOf(c);
    if(idx!==-1){
        this.constraints.splice(idx,1);
    }
};

/**
 * Raycast test
 * @method rayTest
 * @param {Vec3} from
 * @param {Vec3} to
 * @param {Function|RaycastResult} result
 * @deprecated Use .raycastAll, .raycastClosest or .raycastAny instead.
 */
World.prototype.rayTest = function(from, to, result){
    if(result instanceof RaycastResult){
        // Do raycastclosest
        this.raycastClosest(from, to, {
            skipBackfaces: true
        }, result);
    } else {
        // Do raycastAll
        this.raycastAll(from, to, {
            skipBackfaces: true
        }, result);
    }
};

/**
 * Ray cast against all bodies. The provided callback will be executed for each hit with a RaycastResult as single argument.
 * @method raycastAll
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {Function} callback
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastAll = function(from, to, options, callback){
    options.mode = Ray.ALL;
    options.from = from;
    options.to = to;
    options.callback = callback;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Ray cast, and stop at the first result. Note that the order is random - but the method is fast.
 * @method raycastAny
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {RaycastResult} result
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastAny = function(from, to, options, result){
    options.mode = Ray.ANY;
    options.from = from;
    options.to = to;
    options.result = result;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Ray cast, and return information of the closest hit.
 * @method raycastClosest
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {RaycastResult} result
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastClosest = function(from, to, options, result){
    options.mode = Ray.CLOSEST;
    options.from = from;
    options.to = to;
    options.result = result;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Remove a rigid body from the simulation.
 * @method remove
 * @param {Body} body
 * @deprecated Use .removeBody instead
 */
World.prototype.remove = function(body){
    body.world = null;
    var n = this.bodies.length-1,
        bodies = this.bodies,
        idx = bodies.indexOf(body);
    if(idx !== -1){
        bodies.splice(idx, 1); // Todo: should use a garbage free method

        // Recompute index
        for(var i=0; i!==bodies.length; i++){
            bodies[i].index = i;
        }

        this.collisionMatrix.setNumObjects(n);
        this.removeBodyEvent.body = body;
        this.dispatchEvent(this.removeBodyEvent);
    }
};

/**
 * Remove a rigid body from the simulation.
 * @method removeBody
 * @param {Body} body
 */
World.prototype.removeBody = World.prototype.remove;

/**
 * Adds a material to the World.
 * @method addMaterial
 * @param {Material} m
 * @todo Necessary?
 */
World.prototype.addMaterial = function(m){
    this.materials.push(m);
};

/**
 * Adds a contact material to the World
 * @method addContactMaterial
 * @param {ContactMaterial} cmat
 */
World.prototype.addContactMaterial = function(cmat) {

    // Add contact material
    this.contactmaterials.push(cmat);

    // Add current contact material to the material table
    this.contactMaterialTable.set(cmat.materials[0].id,cmat.materials[1].id,cmat);
};

// performance.now()
if(typeof performance === 'undefined'){
    performance = {};
}
if(!performance.now){
    var nowOffset = Date.now();
    if (performance.timing && performance.timing.navigationStart){
        nowOffset = performance.timing.navigationStart;
    }
    performance.now = function(){
        return Date.now() - nowOffset;
    };
}

var step_tmp1 = new Vec3();

/**
 * Step the physics world forward in time.
 *
 * There are two modes. The simple mode is fixed timestepping without interpolation. In this case you only use the first argument. The second case uses interpolation. In that you also provide the time since the function was last used, as well as the maximum fixed timesteps to take.
 *
 * @method step
 * @param {Number} dt                       The fixed time step size to use.
 * @param {Number} [timeSinceLastCalled]    The time elapsed since the function was last called.
 * @param {Number} [maxSubSteps=10]         Maximum number of fixed steps to take per function call.
 *
 * @example
 *     // fixed timestepping without interpolation
 *     world.step(1/60);
 *
 * @see http://bulletphysics.org/mediawiki-1.5.8/index.php/Stepping_The_World
 */
World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps){
    maxSubSteps = maxSubSteps || 10;
    timeSinceLastCalled = timeSinceLastCalled || 0;

    if(timeSinceLastCalled === 0){ // Fixed, simple stepping

        this.internalStep(dt);

        // Increment time
        this.time += dt;

    } else {

        // Compute the number of fixed steps we should have taken since the last step
        var internalSteps = Math.floor((this.time + timeSinceLastCalled) / dt) - Math.floor(this.time / dt);
        internalSteps = Math.min(internalSteps,maxSubSteps);

        // Do some fixed steps to catch up
        var t0 = performance.now();
        for(var i=0; i!==internalSteps; i++){
            this.internalStep(dt);
            if(performance.now() - t0 > dt * 1000){
                // We are slower than real-time. Better bail out.
                break;
            }
        }

        // Increment internal clock
        this.time += timeSinceLastCalled;

        // Compute "Left over" time step
        var h = this.time % dt;
        var h_div_dt = h / dt;
        var interpvelo = step_tmp1;
        var bodies = this.bodies;

        for(var j=0; j !== bodies.length; j++){
            var b = bodies[j];
            if(b.type !== Body.STATIC && b.sleepState !== Body.SLEEPING){

                // Interpolate
                b.position.vsub(b.previousPosition, interpvelo);
                interpvelo.scale(h_div_dt, interpvelo);
                b.position.vadd(interpvelo, b.interpolatedPosition);

                // TODO: interpolate quaternion
                // b.interpolatedAngle = b.angle + (b.angle - b.previousAngle) * h_div_dt;

            } else {

                // For static bodies, just copy. Who else will do it?
                b.interpolatedPosition.copy(b.position);
                b.interpolatedQuaternion.copy(b.quaternion);
            }
        }
    }
};

/**
 * Step the simulation
 * @method step
 * @param {Number} dt
 */
var World_step_postStepEvent = {type:"postStep"}, // Reusable event objects to save memory
    World_step_preStepEvent = {type:"preStep"},
    World_step_collideEvent = {type:"collide", body:null, contact:null },
    World_step_oldContacts = [], // Pools for unused objects
    World_step_frictionEquationPool = [],
    World_step_p1 = [], // Reusable arrays for collision pairs
    World_step_p2 = [],
    World_step_gvec = new Vec3(), // Temporary vectors and quats
    World_step_vi = new Vec3(),
    World_step_vj = new Vec3(),
    World_step_wi = new Vec3(),
    World_step_wj = new Vec3(),
    World_step_t1 = new Vec3(),
    World_step_t2 = new Vec3(),
    World_step_rixn = new Vec3(),
    World_step_rjxn = new Vec3(),
    World_step_step_q = new Quaternion(),
    World_step_step_w = new Quaternion(),
    World_step_step_wq = new Quaternion(),
    invI_tau_dt = new Vec3();
World.prototype.internalStep = function(dt){
    this.dt = dt;

    var world = this,
        that = this,
        contacts = this.contacts,
        p1 = World_step_p1,
        p2 = World_step_p2,
        N = this.numObjects(),
        bodies = this.bodies,
        solver = this.solver,
        gravity = this.gravity,
        doProfiling = this.doProfiling,
        profile = this.profile,
        DYNAMIC = Body.DYNAMIC,
        profilingStart,
        constraints = this.constraints,
        frictionEquationPool = World_step_frictionEquationPool,
        gnorm = gravity.norm(),
        gx = gravity.x,
        gy = gravity.y,
        gz = gravity.z,
        i=0;

    if(doProfiling){
        profilingStart = performance.now();
    }

    // Add gravity to all objects
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.type & DYNAMIC){ // Only for dynamic bodies
            var f = bi.force, m = bi.mass;
            f.x += m*gx;
            f.y += m*gy;
            f.z += m*gz;
        }
    }

    // Update subsystems
    for(var i=0, Nsubsystems=this.subsystems.length; i!==Nsubsystems; i++){
        this.subsystems[i].update();
    }

    // Collision detection
    if(doProfiling){ profilingStart = performance.now(); }
    p1.length = 0; // Clean up pair arrays from last step
    p2.length = 0;
    this.broadphase.collisionPairs(this,p1,p2);
    if(doProfiling){ profile.broadphase = performance.now() - profilingStart; }

    // Remove constrained pairs with collideConnected == false
    var Nconstraints = constraints.length;
    for(i=0; i!==Nconstraints; i++){
        var c = constraints[i];
        if(!c.collideConnected){
            for(var j = p1.length-1; j>=0; j-=1){
                if( (c.bodyA === p1[j] && c.bodyB === p2[j]) ||
                    (c.bodyB === p1[j] && c.bodyA === p2[j])){
                    p1.splice(j, 1);
                    p2.splice(j, 1);
                }
            }
        }
    }

    this.collisionMatrixTick();

    // Generate contacts
    if(doProfiling){ profilingStart = performance.now(); }
    var oldcontacts = World_step_oldContacts;
    var NoldContacts = contacts.length;

    for(i=0; i!==NoldContacts; i++){
        oldcontacts.push(contacts[i]);
    }
    contacts.length = 0;

    // Transfer FrictionEquation from current list to the pool for reuse
    var NoldFrictionEquations = this.frictionEquations.length;
    for(i=0; i!==NoldFrictionEquations; i++){
        frictionEquationPool.push(this.frictionEquations[i]);
    }
    this.frictionEquations.length = 0;

    this.narrowphase.getContacts(
        p1,
        p2,
        this,
        contacts,
        oldcontacts, // To be reused
        this.frictionEquations,
        frictionEquationPool
    );

    if(doProfiling){
        profile.narrowphase = performance.now() - profilingStart;
    }

    // Loop over all collisions
    if(doProfiling){
        profilingStart = performance.now();
    }

    // Add all friction eqs
    for (var i = 0; i < this.frictionEquations.length; i++) {
        solver.addEquation(this.frictionEquations[i]);
    }

    var ncontacts = contacts.length;
    for(var k=0; k!==ncontacts; k++){

        // Current contact
        var c = contacts[k];

        // Get current collision indeces
        var bi = c.bi,
            bj = c.bj,
            si = c.si,
            sj = c.sj;

        // Get collision properties
        var cm;
        if(bi.material && bj.material){
            cm = this.getContactMaterial(bi.material,bj.material) || this.defaultContactMaterial;
        } else {
            cm = this.defaultContactMaterial;
        }

        // c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

        var mu = cm.friction;
        // c.restitution = cm.restitution;

        // If friction or restitution were specified in the material, use them
        if(bi.material && bj.material){
            if(bi.material.friction >= 0 && bj.material.friction >= 0){
                mu = bi.material.friction * bj.material.friction;
            }

            if(bi.material.restitution >= 0 && bj.material.restitution >= 0){
                c.restitution = bi.material.restitution * bj.material.restitution;
            }
        }

		// c.setSpookParams(
  //           cm.contactEquationStiffness,
  //           cm.contactEquationRelaxation,
  //           dt
  //       );

		solver.addEquation(c);

		// // Add friction constraint equation
		// if(mu > 0){

		// 	// Create 2 tangent equations
		// 	var mug = mu * gnorm;
		// 	var reducedMass = (bi.invMass + bj.invMass);
		// 	if(reducedMass > 0){
		// 		reducedMass = 1/reducedMass;
		// 	}
		// 	var pool = frictionEquationPool;
		// 	var c1 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
		// 	var c2 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
		// 	this.frictionEquations.push(c1, c2);

		// 	c1.bi = c2.bi = bi;
		// 	c1.bj = c2.bj = bj;
		// 	c1.minForce = c2.minForce = -mug*reducedMass;
		// 	c1.maxForce = c2.maxForce = mug*reducedMass;

		// 	// Copy over the relative vectors
		// 	c1.ri.copy(c.ri);
		// 	c1.rj.copy(c.rj);
		// 	c2.ri.copy(c.ri);
		// 	c2.rj.copy(c.rj);

		// 	// Construct tangents
		// 	c.ni.tangents(c1.t, c2.t);

  //           // Set spook params
  //           c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);
  //           c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);

  //           c1.enabled = c2.enabled = c.enabled;

		// 	// Add equations to solver
		// 	solver.addEquation(c1);
		// 	solver.addEquation(c2);
		// }

        if( bi.allowSleep &&
            bi.type === Body.DYNAMIC &&
            bi.sleepState  === Body.SLEEPING &&
            bj.sleepState  === Body.AWAKE &&
            bj.type !== Body.STATIC
        ){
            var speedSquaredB = bj.velocity.norm2() + bj.angularVelocity.norm2();
            var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit,2);
            if(speedSquaredB >= speedLimitSquaredB*2){
                bi._wakeUpAfterNarrowphase = true;
            }
        }

        if( bj.allowSleep &&
            bj.type === Body.DYNAMIC &&
            bj.sleepState  === Body.SLEEPING &&
            bi.sleepState  === Body.AWAKE &&
            bi.type !== Body.STATIC
        ){
            var speedSquaredA = bi.velocity.norm2() + bi.angularVelocity.norm2();
            var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit,2);
            if(speedSquaredA >= speedLimitSquaredA*2){
                bj._wakeUpAfterNarrowphase = true;
            }
        }

        // Now we know that i and j are in contact. Set collision matrix state
		this.collisionMatrix.set(bi, bj, true);

        if (!this.collisionMatrixPrevious.get(bi, bj)) {
            // First contact!
            // We reuse the collideEvent object, otherwise we will end up creating new objects for each new contact, even if there's no event listener attached.
            World_step_collideEvent.body = bj;
            World_step_collideEvent.contact = c;
            bi.dispatchEvent(World_step_collideEvent);

            World_step_collideEvent.body = bi;
            bj.dispatchEvent(World_step_collideEvent);
        }
    }
    if(doProfiling){
        profile.makeContactConstraints = performance.now() - profilingStart;
        profilingStart = performance.now();
    }

    // Wake up bodies
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi._wakeUpAfterNarrowphase){
            bi.wakeUp();
            bi._wakeUpAfterNarrowphase = false;
        }
    }

    // Add user-added constraints
    var Nconstraints = constraints.length;
    for(i=0; i!==Nconstraints; i++){
        var c = constraints[i];
        c.update();
        for(var j=0, Neq=c.equations.length; j!==Neq; j++){
            var eq = c.equations[j];
            solver.addEquation(eq);
        }
    }

    // Solve the constrained system
    solver.solve(dt,this);

    if(doProfiling){
        profile.solve = performance.now() - profilingStart;
    }

    // Remove all contacts from solver
    solver.removeAllEquations();

    // Apply damping, see http://code.google.com/p/bullet/issues/detail?id=74 for details
    var pow = Math.pow;
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.type & DYNAMIC){ // Only for dynamic bodies
            var ld = pow(1.0 - bi.linearDamping,dt);
            var v = bi.velocity;
            v.mult(ld,v);
            var av = bi.angularVelocity;
            if(av){
                var ad = pow(1.0 - bi.angularDamping,dt);
                av.mult(ad,av);
            }
        }
    }

    this.dispatchEvent(World_step_preStepEvent);

    // Invoke pre-step callbacks
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.preStep){
            bi.preStep.call(bi);
        }
    }

    // Leap frog
    // vnew = v + h*f/m
    // xnew = x + h*vnew
    if(doProfiling){
        profilingStart = performance.now();
    }
    var q = World_step_step_q;
    var w = World_step_step_w;
    var wq = World_step_step_wq;
    var stepnumber = this.stepnumber;
    var DYNAMIC_OR_KINEMATIC = Body.DYNAMIC | Body.KINEMATIC;
    var quatNormalize = stepnumber % (this.quatNormalizeSkip+1) === 0;
    var quatNormalizeFast = this.quatNormalizeFast;
    var half_dt = dt * 0.5;
    var PLANE = Shape.types.PLANE,
        CONVEX = Shape.types.CONVEXPOLYHEDRON;

    for(i=0; i!==N; i++){
        var b = bodies[i],
            force = b.force,
            tau = b.torque;
        if((b.type & DYNAMIC_OR_KINEMATIC) && b.sleepState !== Body.SLEEPING){ // Only for dynamic
            var velo = b.velocity,
                angularVelo = b.angularVelocity,
                pos = b.position,
                quat = b.quaternion,
                invMass = b.invMass,
                invInertia = b.invInertiaWorld;

            velo.x += force.x * invMass * dt;
            velo.y += force.y * invMass * dt;
            velo.z += force.z * invMass * dt;

            if(b.angularVelocity){
                invInertia.vmult(tau,invI_tau_dt);
                invI_tau_dt.mult(dt,invI_tau_dt);
                invI_tau_dt.vadd(angularVelo,angularVelo);
            }

            // Use new velocity  - leap frog
            pos.x += velo.x * dt;
            pos.y += velo.y * dt;
            pos.z += velo.z * dt;

            if(b.angularVelocity){
                w.set(angularVelo.x, angularVelo.y, angularVelo.z, 0);
                w.mult(quat,wq);
                quat.x += half_dt * wq.x;
                quat.y += half_dt * wq.y;
                quat.z += half_dt * wq.z;
                quat.w += half_dt * wq.w;
                if(quatNormalize){
                    if(quatNormalizeFast){
                        quat.normalizeFast();
                    } else {
                        quat.normalize();
                    }
                }
            }

            if(b.aabb){
                b.aabbNeedsUpdate = true;
            }

            // Update world inertia
            if(b.updateInertiaWorld){
                b.updateInertiaWorld();
            }
        }
    }
    this.clearForces();

    this.broadphase.dirty = true;

    if(doProfiling){
        profile.integrate = performance.now() - profilingStart;
    }

    // Update world time
    this.time += dt;
    this.stepnumber += 1;

    this.dispatchEvent(World_step_postStepEvent);

    // Invoke post-step callbacks
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        var postStep = bi.postStep;
        if(postStep){
            postStep.call(bi);
        }
    }

    // Sleeping update
    if(this.allowSleep){
        for(i=0; i!==N; i++){
            bodies[i].sleepTick(this.time);
        }
    }
};

/**
 * Sets all body forces in the world to zero.
 * @method clearForces
 */
World.prototype.clearForces = function(){
    var bodies = this.bodies;
    var N = bodies.length;
    for(var i=0; i !== N; i++){
        var b = bodies[i],
            force = b.force,
            tau = b.torque;

        b.force.set(0,0,0);
        b.torque.set(0,0,0);
    }
};

},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])
(2)
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cannon_1 = __webpack_require__(3);
const gl_matrix_1 = __webpack_require__(1);
const IlluminationModelType_1 = __webpack_require__(22);
const IlluminationProperties_1 = __webpack_require__(23);
const ShadingModelType_1 = __webpack_require__(11);
const CoordinateConverter_1 = __webpack_require__(8);
const defaultIlluminationProperties = new IlluminationProperties_1.IlluminationProperties();
defaultIlluminationProperties.diffuseCoefficient = 0.8;
defaultIlluminationProperties.specularCoefficient = 0.5;
defaultIlluminationProperties.specularShininess = 50;
exports.configuration = {
    maxPhysicsWorldTimeAdvance: 1 / 30,
    physicsSpeed: 1,
    ambientLightColor: gl_matrix_1.vec3.fromValues(0, 0, 0),
    pointLightColor: gl_matrix_1.vec3.fromValues(1, 1, 1),
    pointLightPosition: CoordinateConverter_1.CoordinateConverter.physicsToRendering(new cannon_1.Vec3(0, 0, 5)),
    defaultIlluminationModelType: IlluminationModelType_1.IlluminationModelType.Phong,
    defaultShadingModelType: ShadingModelType_1.ShadingModelType.Phong,
    defaultIlluminationProperties,
    fidgetSpinnerMass: 400,
    dwarfMass: 80,
    spinnerAngularAcceleration: 6,
    hingeAngularAcceleration: 3
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "define", function() { return define; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyper", function() { return hyper; });
/* harmony export (immutable) */ __webpack_exports__["default"] = hyper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Component_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Intent_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hyper_render_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_domdiff_js__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_0__classes_Component_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return __WEBPACK_IMPORTED_MODULE_4__shared_domdiff_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "wire", function() { return __WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["b"]; });
/*! (c) Andrea Giammarchi (ISC) */







// all functions are self bound to the right context
// you can do the following
// const {bind, wire} = hyperHTML;
// and use them right away: bind(node)`hello!`;
const bind = context => __WEBPACK_IMPORTED_MODULE_3__hyper_render_js__["a" /* default */].bind(context);
const define = __WEBPACK_IMPORTED_MODULE_1__objects_Intent_js__["a" /* default */].define;

hyper.Component = __WEBPACK_IMPORTED_MODULE_0__classes_Component_js__["a" /* default */];
hyper.bind = bind;
hyper.define = define;
hyper.diff = __WEBPACK_IMPORTED_MODULE_4__shared_domdiff_js__["a" /* default */];
hyper.hyper = hyper;
hyper.wire = __WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["b" /* default */];

// the wire content is the lazy defined
// html or svg property of each hyper.Component
Object(__WEBPACK_IMPORTED_MODULE_0__classes_Component_js__["b" /* setup */])(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["a" /* content */]);

// everything is exported directly or through the
// hyperHTML callback, when used as top level script


// by default, hyperHTML is a smart function
// that "magically" understands what's the best
// thing to do with passed arguments
function hyper(HTML) {
  return arguments.length < 2 ?
    (HTML == null ?
      Object(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["a" /* content */])('html') :
      (typeof HTML === 'string' ?
        Object(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["b" /* default */])(null, HTML) :
        ('raw' in HTML ?
          Object(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["a" /* content */])('html')(HTML) :
          ('nodeType' in HTML ?
            __WEBPACK_IMPORTED_MODULE_3__hyper_render_js__["a" /* default */].bind(HTML) :
            Object(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["c" /* weakly */])(HTML, 'html')
          )
        )
      )) :
    ('raw' in HTML ?
      Object(__WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["a" /* content */])('html') : __WEBPACK_IMPORTED_MODULE_2__hyper_wire_js__["b" /* default */]
    ).apply(null, arguments);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// these are tiny helpers to simplify most common operations needed here
const create = (node, type) => doc(node).createElement(type);
/* harmony export (immutable) */ __webpack_exports__["a"] = create;

const doc = node => node.ownerDocument || node;
/* harmony export (immutable) */ __webpack_exports__["b"] = doc;

const fragment = node => doc(node).createDocumentFragment();
/* harmony export (immutable) */ __webpack_exports__["c"] = fragment;

const text = (node, text) => doc(node).createTextNode(text);
/* harmony export (immutable) */ __webpack_exports__["d"] = text;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_detection_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__easy_dom_js__ = __webpack_require__(6);






// appends an array of nodes
// to a generic node/fragment
// When available, uses append passing all arguments at once
// hoping that's somehow faster, even if append has more checks on type
const append = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["a" /* hasAppend */] ?
  (node, childNodes) => {
    node.append.apply(node, childNodes);
  } :
  (node, childNodes) => {
    const length = childNodes.length;
    for (let i = 0; i < length; i++) {
      node.appendChild(childNodes[i]);
    }
  };
/* harmony export (immutable) */ __webpack_exports__["a"] = append;


// remove comments parts from attributes to avoid issues
// with either old browsers or SVG elements
// export const cleanAttributes = html => html.replace(no, comments);
const attrName = '[^\\S]+[^ \\f\\n\\r\\t\\/>"\'=]+';
const no = new RegExp(
  '(<[a-z]+[a-z0-9:_-]*)((?:' +
    attrName +
  '(?:=(?:\'.*?\'|".*?"|<.+?>|\\S+))?)+)([^\\S]*/?>)',
  'gi'
);
const findAttributes = new RegExp('(' + attrName + '=)([\'"]?)' + __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* UIDC */] + '\\2', 'gi');
const comments = ($0, $1, $2, $3) =>
  $1 + $2.replace(findAttributes, replaceAttributes) + $3;
const replaceAttributes = ($0, $1, $2) => $1 + ($2 || '"') + __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* UID */] + ($2 || '"');

// given a node and a generic HTML content,
// create either an SVG or an HTML fragment
// where such content will be injected
const createFragment = (node, html) =>
  (__WEBPACK_IMPORTED_MODULE_0__constants_js__["g" /* OWNER_SVG_ELEMENT */] in node ?
    SVGFragment :
    HTMLFragment
  )(node, html.replace(no, comments));
/* harmony export (immutable) */ __webpack_exports__["b"] = createFragment;


// IE/Edge shenanigans proof cloneNode
// it goes through all nodes manually
// instead of relying the engine to suddenly
// merge nodes together
const cloneNode = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["c" /* hasDoomedCloneNode */] ?
  node => {
    const clone = node.cloneNode();
    const childNodes = node.childNodes ||
                      // this is an excess of caution
                      // but some node, in IE, might not
                      // have childNodes property.
                      // The following fallback ensure working code
                      // in older IE without compromising performance
                      // or any other browser/engine involved.
                      /* istanbul ignore next */
                      [];
    const length = childNodes.length;
    for (let i = 0; i < length; i++) {
      clone.appendChild(cloneNode(childNodes[i]));
    }
    return clone;
  } :
  // the following ignore is due code-coverage
  // combination of not having document.importNode
  // but having a working node.cloneNode.
  // This shenario is common on older Android/WebKit browsers
  // but basicHTML here tests just two major cases:
  // with document.importNode or with broken cloneNode.
  /* istanbul ignore next */
  node => node.cloneNode(true);

// used to import html into fragments
const importNode = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["d" /* hasImportNode */] ?
  (doc, node) => doc.importNode(node, true) :
  (doc, node) => cloneNode(node)
/* harmony export (immutable) */ __webpack_exports__["c"] = importNode;


// just recycling a one-off array to use slice
// in every needed place
const slice = [].slice;
/* harmony export (immutable) */ __webpack_exports__["d"] = slice;


// lazy evaluated, returns the unique identity
// of a template literal, as tempalte literal itself.
// By default, ES2015 template literals are unique
// tag`a${1}z` === tag`a${2}z`
// even if interpolated values are different
// the template chunks are in a frozen Array
// that is identical each time you use the same
// literal to represent same static content
// around its own interpolations.
const unique = template => TL(template);
/* harmony export (immutable) */ __webpack_exports__["e"] = unique;


// TL returns a unique version of the template
// it needs lazy feature detection
// (cannot trust literals with transpiled code)
let TL = template => {
  if (
    // TypeScript template literals are not standard
    template.propertyIsEnumerable('raw') ||
    (
      // Firefox < 55 has not standard implementation neither
      /Firefox\/(\d+)/.test((__WEBPACK_IMPORTED_MODULE_0__constants_js__["f" /* G */].navigator || {}).userAgent) &&
      parseFloat(RegExp.$1) < 55
    )
  ) {
    // in these cases, address templates once
    const templateObjects = {};
    // but always return the same template
    TL = template => {
      const key = '_' + template.join(__WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* UID */]);
      return templateObjects[key] || (
        templateObjects[key] = template
      );
    };
  }
  else {
    // make TL an identity like function
    TL = template => template;
  }
  return TL(template);
};

// create document fragments via native template
// with a fallback for browsers that won't be able
// to deal with some injected element such <td> or others
const HTMLFragment = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["b" /* hasContent */] ?
  (node, html) => {
    const container = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["a" /* create */])(node, 'template');
    container.innerHTML = html;
    return container.content;
  } :
  (node, html) => {
    const container = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["a" /* create */])(node, 'template');
    const content = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["c" /* fragment */])(node);
    if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
      const selector = RegExp.$1;
      container.innerHTML = '<table>' + html + '</table>';
      append(content, slice.call(container.querySelectorAll(selector)));
    } else {
      container.innerHTML = html;
      append(content, slice.call(container.childNodes));
    }
    return content;
  };

// creates SVG fragment with a fallback for IE that needs SVG
// within the HTML content
const SVGFragment = __WEBPACK_IMPORTED_MODULE_1__features_detection_js__["b" /* hasContent */] ?
  (node, html) => {
    const content = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["c" /* fragment */])(node);
    const container = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["b" /* doc */])(node).createElementNS(__WEBPACK_IMPORTED_MODULE_0__constants_js__["i" /* SVG_NAMESPACE */], 'svg');
    container.innerHTML = html;
    append(content, slice.call(container.childNodes));
    return content;
  } :
  (node, html) => {
    const content = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["c" /* fragment */])(node);
    const container = Object(__WEBPACK_IMPORTED_MODULE_2__easy_dom_js__["a" /* create */])(node, 'div');
    container.innerHTML = '<svg xmlns="' + __WEBPACK_IMPORTED_MODULE_0__constants_js__["i" /* SVG_NAMESPACE */] + '">' + html + '</svg>';
    append(content, slice.call(container.firstChild.childNodes));
    return content;
  };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cannon_1 = __webpack_require__(3);
const gl_matrix_1 = __webpack_require__(1);
// tslint:disable-next-line:no-stateless-class
class CoordinateConverter {
    static renderingToPhysics(v) {
        return new cannon_1.Vec3(-v[0], v[2], v[1]);
    }
    static physicsToRendering(vOrOut, source) {
        if (source) {
            const out = vOrOut;
            out[0] = -source.x;
            out[1] = source.z;
            out[2] = source.y;
        }
        else {
            const v = vOrOut;
            return gl_matrix_1.vec3.fromValues(-v.x, v.z, v.y);
        }
    }
}
exports.CoordinateConverter = CoordinateConverter;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseEvent {
    constructor() {
        this.eventType = this.constructor.name;
    }
}
exports.BaseEvent = BaseEvent;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(2);


// you know that kind of basics you need to cover
// your use case only but you don't want to bloat the library?
// There's even a package in here:
// https://www.npmjs.com/package/poorlyfills

// used to dispatch simple events
let Event = __WEBPACK_IMPORTED_MODULE_0__constants_js__["f" /* G */].Event;
try {
  new Event('Event');
} catch(o_O) {
  Event = function (type) {
    const e = document.createEvent('Event');
    e.initEvent(type, false, false);
    return e;
  };
}


// used to store template literals
const Map = __WEBPACK_IMPORTED_MODULE_0__constants_js__["f" /* G */].Map || function Map() {
  const keys = [], values = [];
  return {
    get(obj) {
      return values[keys.indexOf(obj)];
    },
    set(obj, value) {
      values[keys.push(obj) - 1] = value;
    }
  };
};
/* harmony export (immutable) */ __webpack_exports__["b"] = Map;


// used to store wired content
const WeakMap = __WEBPACK_IMPORTED_MODULE_0__constants_js__["f" /* G */].WeakMap || function WeakMap() {
  return {
    get(obj) { return obj[__WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* UID */]]; },
    set(obj, value) {
      Object.defineProperty(obj, __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* UID */], {
        configurable: true,
        value
      });
    }
  };
};
/* harmony export (immutable) */ __webpack_exports__["c"] = WeakMap;


// used to store hyper.Components
const WeakSet = __WEBPACK_IMPORTED_MODULE_0__constants_js__["f" /* G */].WeakSet || function WeakSet() {
  const wm = new WeakMap;
  return {
    add(obj) { wm.set(obj, true); },
    has(obj) { return wm.get(obj) === true; }
  };
};
/* harmony export (immutable) */ __webpack_exports__["d"] = WeakSet;


// used to be sure IE9 or older Androids work as expected
const isArray = Array.isArray || (toString =>
  arr => toString.call(arr) === '[object Array]'
)({}.toString);
/* harmony export (immutable) */ __webpack_exports__["e"] = isArray;


const trim = __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* UID */].trim || function () {
  return this.replace(/^\s+|\s+$/g, '');
};
/* harmony export (immutable) */ __webpack_exports__["f"] = trim;



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShadingModelType;
(function (ShadingModelType) {
    ShadingModelType[ShadingModelType["Phong"] = 0] = "Phong";
    ShadingModelType[ShadingModelType["Gouraud"] = 1] = "Gouraud";
})(ShadingModelType = exports.ShadingModelType || (exports.ShadingModelType = {}));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(62);
const InputReducer_1 = __webpack_require__(78);
const reducer = redux_1.combineReducers({
    input: InputReducer_1.inputReducer
});
exports.store = redux_1.createStore(reducer, 
// @ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEvent_1 = __webpack_require__(9);
class RestartEvent extends BaseEvent_1.BaseEvent {
}
exports.RestartEvent = RestartEvent;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;
/* harmony export (immutable) */ __webpack_exports__["b"] = setup;
// hyperHTML.Component is a very basic class
// able to create Custom Elements like components
// including the ability to listen to connect/disconnect
// events via onconnect/ondisconnect attributes
function Component() {}

// components will lazily define html or svg properties
// as soon as these are invoked within the .render() method
// Such render() method is not provided by the base class
// but it must be available through the Component extend.
function setup(content) {
  Object.defineProperties(
    Component.prototype,
    {
      handleEvent: {value(e) {
        const ct = e.currentTarget;
        this[
          ('getAttribute' in ct && ct.getAttribute('data-call')) ||
          ('on' + e.type)
        ](e);
      }},
      html: lazyGetter('html', content),
      svg: lazyGetter('svg', content),
      state: lazyGetter('state', function () { return this.defaultState; }),
      defaultState: {get() { return {}; }},
      setState: {value(state) {
        const target = this.state;
        const source = typeof state === 'function' ? state.call(this, target) : state;
        for (const key in source) target[key] = source[key];
        this.render();
      }}
    }
  );
}

// instead of a secret key I could've used a WeakMap
// However, attaching a property directly will result
// into better performance with thousands of components
// hanging around, and less memory pressure caused by the WeakMap
const lazyGetter = (type, fn) => {
  const secret = '_' + type + '$';
  return {
    get() {
      return this[secret] || (this[type] = fn.call(this, type));
    },
    set(value) {
      Object.defineProperty(this, secret, {configurable: true, value});
    }
  };
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const intents = {};
const keys = [];
const hasOwnProperty = intents.hasOwnProperty;

let length = 0;

/* harmony default export */ __webpack_exports__["a"] = ({

  // hyperHTML.define('intent', (object, update) => {...})
  // can be used to define a third parts update mechanism
  // when every other known mechanism failed.
  // hyper.define('user', info => info.name);
  // hyper(node)`<p>${{user}}</p>`;
  define: (intent, callback) => {
    if (!(intent in intents)) {
      length = keys.push(intent);
    }
    intents[intent] = callback;
  },

  // this method is used internally as last resort
  // to retrieve a value out of an object
  invoke: (object, callback) => {
    for (let i = 0; i < length; i++) {
      let key = keys[i];
      if (hasOwnProperty.call(object, key)) {
        return intents[key](object[key], callback);
      }
    }
  }
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Wire;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_easy_dom_js__ = __webpack_require__(6);



function Wire(childNodes) {
  this.childNodes = childNodes;
  this.length = childNodes.length;
  this.first = childNodes[0];
  this.last = childNodes[this.length - 1];
}

// when a wire is inserted, all its nodes will follow
Wire.prototype.insert = function insert() {
  const df = Object(__WEBPACK_IMPORTED_MODULE_1__shared_easy_dom_js__["c" /* fragment */])(this.first);
  Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils_js__["a" /* append */])(df, this.childNodes);
  return df;
};

// when a wire is removed, all its nodes must be removed as well
Wire.prototype.remove = function remove() {
  const first = this.first;
  const last = this.last;
  if (this.length === 2) {
    last.parentNode.removeChild(last);
  } else {
    const range = Object(__WEBPACK_IMPORTED_MODULE_1__shared_easy_dom_js__["b" /* doc */])(first).createRange();
    range.setStartBefore(this.childNodes[1]);
    range.setEndAfter(last);
    range.deleteContents();
  }
  return first;
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__ = __webpack_require__(7);





// a weak collection of contexts that
// are already known to hyperHTML
const bewitched = new __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__["c" /* WeakMap */];

// the collection of all template literals
// since these are unique and immutable
// for the whole application life-cycle
const templates = new __WEBPACK_IMPORTED_MODULE_0__shared_poorlyfills_js__["b" /* Map */];

// better known as hyper.bind(node), the render is
// the main tag function in charge of fully upgrading
// or simply updating, contexts used as hyperHTML targets.
// The `this` context is either a regular DOM node or a fragment.
function render(template) {
  const wicked = bewitched.get(this);
  if (wicked && wicked.template === Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["e" /* unique */])(template)) {
    update.apply(wicked.updates, arguments);
  } else {
    upgrade.apply(this, arguments);
  }
  return this;
}

// an upgrade is in charge of collecting template info,
// parse it once, if unknown, to map all interpolations
// as single DOM callbacks, relate such template
// to the current context, and render it after cleaning the context up
function upgrade(template) {
  template = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["e" /* unique */])(template);
  const info =  templates.get(template) ||
                createTemplate.call(this, template);
  const fragment = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["c" /* importNode */])(this.ownerDocument, info.fragment);
  const updates = __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__["a" /* default */].create(fragment, info.paths);
  bewitched.set(this, {template, updates});
  update.apply(updates, arguments);
  this.textContent = '';
  this.appendChild(fragment);
}

// an update simply loops over all mapped DOM operations
function update() {
  const length = arguments.length;
  for (let i = 1; i < length; i++) {
    this[i - 1](arguments[i]);
  }
}

// a template can be used to create a document fragment
// aware of all interpolations and with a list
// of paths used to find once those nodes that need updates,
// no matter if these are attributes, text nodes, or regular one
function createTemplate(template) {
  const paths = [];
  const fragment = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["b" /* createFragment */])(this, template.join(__WEBPACK_IMPORTED_MODULE_1__shared_constants_js__["l" /* UIDC */]));
  __WEBPACK_IMPORTED_MODULE_2__objects_Updates_js__["a" /* default */].find(fragment, paths, template.slice());
  const info = {fragment, paths};
  templates.set(template, info);
  return info;
}

/* harmony default export */ __webpack_exports__["a"] = (render);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* AUTOMATICALLY IMPORTED, DO NOT MODIFY */
/*! (c) 2017 Andrea Giammarchi (ISC) */

/**
 * This code is a revisited port of the snabbdom vDOM diffing logic,
 * the same that fuels as fork Vue.js or other libraries.
 * @credits https://github.com/snabbdom/snabbdom
 */

const identity = O => O;

const domdiff = (
  parentNode,     // where changes happen
  currentNodes,   // Array of current items/nodes
  futureNodes,    // Array of future items/nodes
  getNode,        // optional way to retrieve a node from an item
  beforeNode      // optional item/node to use as insertBefore delimiter
) => {
  const get = getNode || identity;
  const before = beforeNode == null ? null : get(beforeNode, 0);
  let currentStart = 0, futureStart = 0;
  let currentEnd = currentNodes.length - 1;
  let currentStartNode = currentNodes[0];
  let currentEndNode = currentNodes[currentEnd];
  let futureEnd = futureNodes.length - 1;
  let futureStartNode = futureNodes[0];
  let futureEndNode = futureNodes[futureEnd];
  while (currentStart <= currentEnd && futureStart <= futureEnd) {
    if (currentStartNode == null) {
      currentStartNode = currentNodes[++currentStart];
    }
    else if (currentEndNode == null) {
      currentEndNode = currentNodes[--currentEnd];
    }
    else if (futureStartNode == null) {
      futureStartNode = futureNodes[++futureStart];
    }
    else if (futureEndNode == null) {
      futureEndNode = futureNodes[--futureEnd];
    }
    else if (currentStartNode == futureStartNode) {
      currentStartNode = currentNodes[++currentStart];
      futureStartNode = futureNodes[++futureStart];
    }
    else if (currentEndNode == futureEndNode) {
      currentEndNode = currentNodes[--currentEnd];
      futureEndNode = futureNodes[--futureEnd];
    }
    else if (currentStartNode == futureEndNode) {
      parentNode.insertBefore(
        get(currentStartNode, 1),
        get(currentEndNode, -0).nextSibling
      );
      currentStartNode = currentNodes[++currentStart];
      futureEndNode = futureNodes[--futureEnd];
    }
    else if (currentEndNode == futureStartNode) {
      parentNode.insertBefore(
        get(currentEndNode, 1),
        get(currentStartNode, 0)
      );
      currentEndNode = currentNodes[--currentEnd];
      futureStartNode = futureNodes[++futureStart];
    }
    else {
      let index = currentNodes.indexOf(futureStartNode);
      if (index < 0) {
        parentNode.insertBefore(
          get(futureStartNode, 1),
          get(currentStartNode, 0)
        );
        futureStartNode = futureNodes[++futureStart];
      }
      else {
        let el = currentNodes[index];
        currentNodes[index] = null;
        parentNode.insertBefore(
          get(el, 1),
          get(currentStartNode, 0)
        );
        futureStartNode = futureNodes[++futureStart];
      }
    }
  }
  if (currentStart > currentEnd) {
    const pin = futureNodes[futureEnd + 1];
    const place = pin != null ? get(pin, 0) : before;
    while (futureStart <= futureEnd) {
      const ch = futureNodes[futureStart++];
      // ignore until I am sure the else could never happen.
      // it might be a vDOM thing 'cause it never happens here.
      /* istanbul ignore else */
      if (ch != null) parentNode.insertBefore(get(ch, 1), place);
    }
  }
  // ignore until I am sure the else could never happen.
  // it might be a vDOM thing 'cause it never happens here.
  /* istanbul ignore else */
  else if (futureStart > futureEnd) {
    while (currentStart <= currentEnd) {
      const ch = currentNodes[currentStart++];
      if (ch != null) parentNode.removeChild(get(ch, -1));
    }
  }
  return futureNodes;
};

/* harmony default export */ __webpack_exports__["a"] = (domdiff);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["fromMat4"] = fromMat4;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromMat2d"] = fromMat2d;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["normalFromMat4"] = normalFromMat4;
/* harmony export (immutable) */ __webpack_exports__["projection"] = projection;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  out[0] = (a11 * a22 - a12 * a21);
  out[1] = (a02 * a21 - a01 * a22);
  out[2] = (a01 * a12 - a02 * a11);
  out[3] = (a12 * a20 - a10 * a22);
  out[4] = (a00 * a22 - a02 * a20);
  out[5] = (a02 * a10 - a00 * a12);
  out[6] = (a10 * a21 - a11 * a20);
  out[7] = (a01 * a20 - a00 * a21);
  out[8] = (a00 * a11 - a01 * a10);
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b00 = b[0], b01 = b[1], b02 = b[2];
  let b10 = b[3], b11 = b[4], b12 = b[5];
  let b20 = b[6], b21 = b[7], b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],
    x = v[0], y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],

    s = Math.sin(rad),
    c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
          a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}



/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
         a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
         a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x*x + y*y + z*z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x*x + y*y + z*z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x*x + y*y + z*z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  let factorTimes2 = t * t;
  let factor1 = factorTimes2 * (2 * t - 3) + 1;
  let factor2 = factorTimes2 * (t - 2) + t;
  let factor3 = factorTimes2 * (t - 1);
  let factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  let inverseFactor = 1 - t;
  let inverseFactorTimesTwo = inverseFactor * inverseFactor;
  let factorTimes2 = t * t;
  let factor1 = inverseFactorTimesTwo * inverseFactor;
  let factor2 = 3 * t * inverseFactorTimesTwo;
  let factor3 = 3 * factorTimes2 * inverseFactor;
  let factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  let r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  let z = (__WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0) - 1.0;
  let zScale = Math.sqrt(1.0-z*z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  r[1] = p[1];
  r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let tempA = fromValues(a[0], a[1], a[2]);
  let tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  let cosine = dot(tempA, tempB);

  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2];
  let b0 = b[0], b1 = b[1], b2 = b[2];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec3.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec3.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 3;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x*x + y*y + z*z + w*w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  //TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[1] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[2] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  out[3] = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]();
  normalize(out, out);
  scale(out, out, vectorScale);
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec4.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec4.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec4.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 4;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IlluminationModelType;
(function (IlluminationModelType) {
    IlluminationModelType[IlluminationModelType["Phong"] = 0] = "Phong";
    IlluminationModelType[IlluminationModelType["Blinn"] = 1] = "Blinn";
})(IlluminationModelType = exports.IlluminationModelType || (exports.IlluminationModelType = {}));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IlluminationProperties {
    clone() {
        const cloned = new IlluminationProperties();
        cloned.specularShininess = this.specularShininess;
        cloned.diffuseCoefficient = this.diffuseCoefficient;
        cloned.specularCoefficient = this.specularCoefficient;
        return cloned;
    }
}
exports.IlluminationProperties = IlluminationProperties;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeyboardKeys;
(function (KeyboardKeys) {
    KeyboardKeys[KeyboardKeys["ArrowDown"] = 40] = "ArrowDown";
    KeyboardKeys[KeyboardKeys["ArrowUp"] = 38] = "ArrowUp";
    KeyboardKeys[KeyboardKeys["ArrowLeft"] = 37] = "ArrowLeft";
    KeyboardKeys[KeyboardKeys["ArrowRight"] = 39] = "ArrowRight";
    KeyboardKeys[KeyboardKeys["Space"] = 32] = "Space";
    KeyboardKeys[KeyboardKeys["R"] = 82] = "R";
})(KeyboardKeys = exports.KeyboardKeys || (exports.KeyboardKeys = {}));


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(70);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(64);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputActionTypes;
(function (InputActionTypes) {
    InputActionTypes["KeyPressed"] = "KEY_PRESSED";
    InputActionTypes["KeyReleased"] = "KEY_RELEASED";
})(InputActionTypes = exports.InputActionTypes || (exports.InputActionTypes = {}));
function keyPressed(keyCode) {
    return {
        type: InputActionTypes.KeyPressed,
        keyCode
    };
}
exports.keyPressed = keyPressed;
function keyReleased(keyCode) {
    return {
        type: InputActionTypes.KeyReleased,
        keyCode
    };
}
exports.keyReleased = keyReleased;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEvent_1 = __webpack_require__(9);
class ReleaseDwarfEvent extends BaseEvent_1.BaseEvent {
}
exports.ReleaseDwarfEvent = ReleaseDwarfEvent;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class WebGLBufferFacade {
    constructor(gl, itemSize, itemsCount) {
        this.gl = gl;
        this.itemSize = itemSize;
        this.itemsCount = itemsCount;
        this.buffer = gl.createBuffer();
    }
}
exports.WebGLBufferFacade = WebGLBufferFacade;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(1);
const configuration_1 = __webpack_require__(4);
class BodilessModel {
    constructor(modelPrototype, illuminationProperties = configuration_1.configuration.defaultIlluminationProperties.clone()) {
        this.modelPrototype = modelPrototype;
        this.illuminationProperties = illuminationProperties;
        this.modelMatrix = gl_matrix_1.mat4.clone(this.modelPrototype.modelMatrix);
    }
    draw(gl, webGLBinder) {
        this.modelPrototype.bindBuffersAndTexture(webGLBinder);
        webGLBinder.bindModelMatrix(this.modelMatrix);
        webGLBinder.bindNormalMatrix(this.modelMatrix);
        webGLBinder.bindIlluminationProperties(this.illuminationProperties);
        gl.drawElements(gl.TRIANGLES, this.modelPrototype.vertexIndexBuffer.itemsCount, gl.UNSIGNED_SHORT, 0);
    }
    reset() {
        // Nothing to do here
    }
}
exports.BodilessModel = BodilessModel;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function resetBody(body) {
    body.position.copy(body.initPosition);
    body.velocity.copy(body.initVelocity);
    body.angularVelocity.copy(body.initAngularVelocity);
    body.quaternion.copy(body.initQuaternion);
}
exports.resetBody = resetBody;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEvent_1 = __webpack_require__(9);
class NewIlluminationModelTypeEvent extends BaseEvent_1.BaseEvent {
    constructor(illuminationModelType) {
        super();
        this.illuminationModelType = illuminationModelType;
    }
}
exports.NewIlluminationModelTypeEvent = NewIlluminationModelTypeEvent;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEvent_1 = __webpack_require__(9);
class NewShadingModelTypeEvent extends BaseEvent_1.BaseEvent {
    constructor(shadingModelType) {
        super();
        this.shadingModelType = shadingModelType;
    }
}
exports.NewShadingModelTypeEvent = NewShadingModelTypeEvent;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ShaderType_1 = __webpack_require__(102);
const WebGLProgramFacade_1 = __webpack_require__(103);
class ProgramFactory {
    constructor(shaderCompiler, gl) {
        this.shaderCompiler = shaderCompiler;
        this.gl = gl;
    }
    compile() {
        if (this._compiledProgram) {
            return;
        }
        const vertexShader = this.shaderCompiler.compileShader(this.vertexShaderSource, ShaderType_1.ShaderType.VertexShader);
        const fragmentShader = this.shaderCompiler.compileShader(this.fragmentShaderSource, ShaderType_1.ShaderType.FragmentShader);
        this._compiledProgram = new WebGLProgramFacade_1.WebGLProgramFacade(this.gl, vertexShader, fragmentShader);
    }
    get compiledProgram() {
        if (!this._compiledProgram) {
            throw new Error('The program must be compiled first.');
        }
        return this._compiledProgram;
    }
}
exports.ProgramFactory = ProgramFactory;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(5);
function OptionComponent(selectedValue, value, label) {
    const isSelected = selectedValue === value;
    return esm_1.wire() `
    <option value=${value} selected=${isSelected}>
      ${label}
    </option>
  `;
}
function SelectComponent(options, selectedValue, onChangeCallback) {
    return esm_1.wire() `
    <select onChange=${handleOnChangeEvent.bind(null, options, onChangeCallback)}>
      ${options.map(option => OptionComponent(selectedValue, option.value, option.label))}
    </select>
  `;
}
exports.SelectComponent = SelectComponent;
function handleOnChangeEvent(options, onChangeCallback, event) {
    // tslint:disable-next-line:no-any
    const selectedValue = event.target.value;
    // tslint:disable-next-line:triple-equals
    const selectedOption = options.find(option => option.value == selectedValue);
    if (selectedOption) {
        onChangeCallback(selectedOption.value);
    }
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(5);
__webpack_require__(47);
__webpack_require__(52);
const Application_1 = __webpack_require__(53);
const ApplicationComponent_1 = __webpack_require__(109);
window.onload = bootstrap;
function bootstrap() {
    const mainCanvas = document.getElementById('main-canvas');
    if (!mainCanvas) {
        throw new Error('Main canvas not found');
    }
    const application = new Application_1.Application(mainCanvas);
    application.init();
    const uiContainer = document.querySelector('.ui-container');
    if (!uiContainer) {
        throw new Error('UI container not found');
    }
    const applicationComponent = new ApplicationComponent_1.ApplicationComponent(application.eventEmitter);
    // tslint:disable-next-line:no-unused-expression
    esm_1.bind(uiContainer) `${applicationComponent}`;
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return weakly; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_easy_dom_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_Wire_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__render_js__ = __webpack_require__(17);







// all wires used per each context
const wires = new __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__["c" /* WeakMap */];

// A wire is a callback used as tag function
// to lazily relate a generic object to a template literal.
// hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user
// This provides the ability to have a unique DOM structure
// related to a unique JS object through a reusable template literal.
// A wire can specify a type, as svg or html, and also an id
// via html:id or :id convention. Such :id allows same JS objects
// to be associated to different DOM structures accordingly with
// the used template literal without losing previously rendered parts.
const wire = (obj, type) => obj == null ?
  content(type || 'html') :
  weakly(obj, type || 'html');

// A wire content is a virtual reference to one or more nodes.
// It's represented by either a DOM node, or an Array.
// In both cases, the wire content role is to simply update
// all nodes through the list of related callbacks.
// In few words, a wire content is like an invisible parent node
// in charge of updating its content like a bound element would do.
const content = type => {
  let wire, container, content, template, updates;
  return function (statics) {
    statics = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["e" /* unique */])(statics);
    let setup = template !== statics;
    if (setup) {
      template = statics;
      content = Object(__WEBPACK_IMPORTED_MODULE_2__shared_easy_dom_js__["c" /* fragment */])(document);
      container = type === 'svg' ?
        document.createElementNS(__WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["i" /* SVG_NAMESPACE */], 'svg') :
        content;
      updates = __WEBPACK_IMPORTED_MODULE_5__render_js__["a" /* default */].bind(container);
    }
    updates.apply(null, arguments);
    if (setup) {
      if (type === 'svg') {
        Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["a" /* append */])(content, __WEBPACK_IMPORTED_MODULE_3__shared_utils_js__["d" /* slice */].call(container.childNodes));
      }
      wire = wireContent(content);
    }
    return wire;
  };
};

// wires are weakly created through objects.
// Each object can have multiple wires associated
// and this is thanks to the type + :id feature.
const weakly = (obj, type) => {
  const i = type.indexOf(':');
  let wire = wires.get(obj);
  let id = type;
  if (-1 < i) {
    id = type.slice(i + 1);
    type = type.slice(0, i) || 'html';
  }
  if (!wire) wires.set(obj, wire = {});
  return wire[id] || (wire[id] = content(type));
};

// a document fragment loses its nodes as soon
// as it's appended into another node.
// This would easily lose wired content
// so that on a second render call, the parent
// node wouldn't know which node was there
// associated to the interpolation.
// To prevent hyperHTML to forget about wired nodes,
// these are either returned as Array or, if there's ony one entry,
// as single referenced node that won't disappear from the fragment.
// The initial fragment, at this point, would be used as unique reference.
const wireContent = node => {
  const childNodes = node.childNodes;
  const length = childNodes.length;
  const wireNodes = [];
  for (let i = 0; i < length; i++) {
    let child = childNodes[i];
    if (
      child.nodeType === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["e" /* ELEMENT_NODE */] ||
      __WEBPACK_IMPORTED_MODULE_1__shared_poorlyfills_js__["f" /* trim */].call(child.textContent).length !== 0
    ) {
      wireNodes.push(child);
    }
  }
  return wireNodes.length === 1 ? wireNodes[0] : new __WEBPACK_IMPORTED_MODULE_4__classes_Wire_js__["a" /* default */](wireNodes);
};


/* harmony default export */ __webpack_exports__["b"] = (wire);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__easy_dom_js__ = __webpack_require__(6);


const testFragment = Object(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["c" /* fragment */])(document);

// DOM4 node.append(...many)
const hasAppend = 'append' in testFragment;
/* harmony export (immutable) */ __webpack_exports__["a"] = hasAppend;


// detect old browsers without HTMLTemplateElement content support
const hasContent = 'content' in Object(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["a" /* create */])(document, 'template');
/* harmony export (immutable) */ __webpack_exports__["b"] = hasContent;


// IE 11 has problems with cloning templates: it "forgets" empty childNodes
testFragment.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["d" /* text */])(testFragment, 'g'));
testFragment.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__easy_dom_js__["d" /* text */])(testFragment, ''));
const hasDoomedCloneNode = testFragment.cloneNode(true).childNodes.length === 1;
/* harmony export (immutable) */ __webpack_exports__["c"] = hasDoomedCloneNode;


// old browsers need to fallback to cloneNode
// Custom Elements V0 and V1 will work polyfilled
// but native implementations need importNode instead
// (specially Chromium and its old V0 implementation)
const hasImportNode = 'importNode' in document;
/* harmony export (immutable) */ __webpack_exports__["d"] = hasImportNode;



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Component_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Wire_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Path_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Style_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Intent_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_easy_dom_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_utils_js__ = __webpack_require__(7);












// hyper.Component have a connected/disconnected
// mechanism provided by MutationObserver
// This weak set is used to recognize components
// as DOM node that needs to trigger connected/disconnected events
const components = new __WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["d" /* WeakSet */];

// a basic dictionary used to filter already cached attributes
// while looking for special hyperHTML values.
function Cache() {}
Cache.prototype = Object.create(null);

// returns an intent to explicitly inject content as html
const asHTML = html => ({html});

// returns nodes from wires and components
const asNode = (item, i) => {
  return 'ELEMENT_NODE' in item ?
    item :
    (item.constructor === __WEBPACK_IMPORTED_MODULE_2__classes_Wire_js__["a" /* default */] ?
      // in the Wire case, the content can be
      // removed, post-pended, inserted, or pre-pended and
      // all these cases are handled by domdiff already
      /* istanbul ignore next */
      ((1 / i) < 0 ?
        (i ? item.remove() : item.last) :
        (i ? item.insert() : item.first)) :
      asNode(item.render(), i));
}

// returns true if domdiff can handle the value
const canDiff = value =>  'ELEMENT_NODE' in value ||
value instanceof __WEBPACK_IMPORTED_MODULE_2__classes_Wire_js__["a" /* default */] ||
value instanceof __WEBPACK_IMPORTED_MODULE_1__classes_Component_js__["a" /* default */];

// updates are created once per context upgrade
// within the main render function (../hyper/render.js)
// These are an Array of callbacks to invoke passing
// each interpolation value.
// Updates can be related to any kind of content,
// attributes, or special text-only cases such <style>
// elements or <textarea>
const create = (root, paths) => {
  const updates = [];
  const length = paths.length;
  for (let i = 0; i < length; i++) {
    const info = paths[i];
    const node = __WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].find(root, info.path);
    switch (info.type) {
      case 'any':
        updates.push(setAnyContent(node, []));
        break;
      case 'attr':
        updates.push(setAttribute(node, info.name, info.node));
        break;
      case 'text':
        updates.push(setTextContent(node));
        break;
    }
  }
  return updates;
};

// finding all paths is a one-off operation performed
// when a new template literal is used.
// The goal is to map all target nodes that will be
// used to update content/attributes every time
// the same template literal is used to create content.
// The result is a list of paths related to the template
// with all the necessary info to create updates as
// list of callbacks that target directly affected nodes.
const find = (node, paths, parts) => {
  const childNodes = node.childNodes;
  const length = childNodes.length;
  for (let i = 0; i < length; i++) {
    let child = childNodes[i];
    switch (child.nodeType) {
      case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["e" /* ELEMENT_NODE */]:
        findAttributes(child, paths, parts);
        find(child, paths, parts);
        break;
      case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["a" /* COMMENT_NODE */]:
        if (child.textContent === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["k" /* UID */]) {
          parts.shift();
          paths.push(
            // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["h" /* SHOULD_USE_TEXT_CONTENT */].test(node.nodeName) ?
              __WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('text', node) :
              __WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('any', child)
          );
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["j" /* TEXT_NODE */]:
        // the following ignore is actually covered by browsers
        // only basicHTML ends up on previous COMMENT_NODE case
        // instead of TEXT_NODE because it knows nothing about
        // special style or textarea behavior
        /* istanbul ignore if */
        if (
          __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["h" /* SHOULD_USE_TEXT_CONTENT */].test(node.nodeName) &&
          __WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["f" /* trim */].call(child.textContent) === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["l" /* UIDC */]
        ) {
          parts.shift();
          paths.push(__WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('text', node));
        }
        break;
    }
  }
};

// attributes are searched via unique hyperHTML id value.
// Despite HTML being case insensitive, hyperHTML is able
// to recognize attributes by name in a caseSensitive way.
// This plays well with Custom Elements definitions
// and also with XML-like environments, without trusting
// the resulting DOM but the template literal as the source of truth.
// IE/Edge has a funny bug with attributes and these might be duplicated.
// This is why there is a cache in charge of being sure no duplicated
// attributes are ever considered in future updates.
const findAttributes = (node, paths, parts) => {
  const cache = new Cache;
  const attributes = node.attributes;
  const array = __WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["d" /* slice */].call(attributes);
  const remove = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const attribute = array[i];
    if (attribute.value === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["k" /* UID */]) {
      const name = attribute.name;
      // the following ignore is covered by IE
      // and the IE9 double viewBox test
      /* istanbul ignore else */
      if (!(name in cache)) {
        const realName = parts.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/, '$1');
        cache[name] = attributes[realName] ||
                      // the following ignore is covered by browsers
                      // while basicHTML is already case-sensitive
                      /* istanbul ignore next */
                      attributes[realName.toLowerCase()];
        paths.push(__WEBPACK_IMPORTED_MODULE_3__Path_js__["a" /* default */].create('attr', cache[name], realName));
      }
      remove.push(attribute);
    }
  }
  const len = remove.length;
  for (let i = 0; i < len; i++) {
    node.removeAttributeNode(remove[i]);
  }

  // This is a very specific Firefox/Safari issue
  // but since it should be a not so common pattern,
  // it's probably worth patching regardless.
  // Basically, scripts created through strings are death.
  // You need to create fresh new scripts instead.
  // TODO: is there any other node that needs such nonsense ?
  const nodeName = node.nodeName;
  if (/^script$/i.test(nodeName)) {
    const script = Object(__WEBPACK_IMPORTED_MODULE_7__shared_easy_dom_js__["a" /* create */])(node, nodeName);
    for (let i = 0; i < attributes.length; i++) {
      script.setAttributeNode(attributes[i].cloneNode(true));
    }
    script.textContent = node.textContent;
    node.parentNode.replaceChild(script, node);
  }
};

// when a Promise is used as interpolation value
// its result must be parsed once resolved.
// This callback is in charge of understanding what to do
// with a returned value once the promise is resolved.
const invokeAtDistance = (value, callback) => {
  callback(value.placeholder);
  if ('text' in value) {
    Promise.resolve(value.text).then(String).then(callback);
  } else if ('any' in value) {
    Promise.resolve(value.any).then(callback);
  } else if ('html' in value) {
    Promise.resolve(value.html).then(asHTML).then(callback);
  } else {
    Promise.resolve(__WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].invoke(value, callback)).then(callback);
  }
};

// quick and dirty way to check for Promise/ish values
const isPromise_ish = value => value != null && 'then' in value;

// in a hyper(node)`<div>${content}</div>` case
// everything could happen:
//  * it's a JS primitive, stored as text
//  * it's null or undefined, the node should be cleaned
//  * it's a component, update the content by rendering it
//  * it's a promise, update the content once resolved
//  * it's an explicit intent, perform the desired operation
//  * it's an Array, resolve all values if Promises and/or
//    update the node with the resulting list of content
const setAnyContent = (node, childNodes) => {
  let fastPath = false;
  let oldValue;
  const anyContent = value => {
    switch (typeof value) {
      case 'string':
      case 'number':
      case 'boolean':
        if (fastPath) {
          if (oldValue !== value) {
            oldValue = value;
            childNodes[0].textContent = value;
          }
        } else {
          fastPath = true;
          oldValue = value;
          childNodes = Object(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
            node.parentNode,
            childNodes,
            [Object(__WEBPACK_IMPORTED_MODULE_7__shared_easy_dom_js__["d" /* text */])(node, value)],
            asNode,
            node
          );
        }
        break;
      case 'object':
      case 'undefined':
        if (value == null) {
          fastPath = false;
          childNodes = Object(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
            node.parentNode,
            childNodes,
            [],
            asNode,
            node
          );
          break;
        }
      default:
        fastPath = false;
        oldValue = value;
        if (Object(__WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["e" /* isArray */])(value)) {
          if (value.length === 0) {
            if (childNodes.length) {
              childNodes = Object(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
                node.parentNode,
                childNodes,
                [],
                asNode,
                node
              );
            }
          } else {
            switch (typeof value[0]) {
              case 'string':
              case 'number':
              case 'boolean':
                anyContent({html: value});
                break;
              case 'object':
                if (Object(__WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["e" /* isArray */])(value[0])) {
                  value = value.concat.apply([], value);
                }
                if (isPromise_ish(value[0])) {
                  Promise.all(value).then(anyContent);
                  break;
                }
              default:
                childNodes = Object(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
                  node.parentNode,
                  childNodes,
                  value,
                  asNode,
                  node
                );
                break;
            }
          }
        } else if (canDiff(value)) {
          childNodes = Object(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
            node.parentNode,
            childNodes,
            value.nodeType === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["d" /* DOCUMENT_FRAGMENT_NODE */] ?
              __WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["d" /* slice */].call(value.childNodes) :
              [value],
            asNode,
            node
          );
        } else if (isPromise_ish(value)) {
          value.then(anyContent);
        } else if ('placeholder' in value) {
          invokeAtDistance(value, anyContent);
        } else if ('text' in value) {
          anyContent(String(value.text));
        } else if ('any' in value) {
          anyContent(value.any);
        } else if ('html' in value) {
          childNodes = Object(__WEBPACK_IMPORTED_MODULE_6__shared_domdiff_js__["a" /* default */])(
            node.parentNode,
            childNodes,
            __WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["d" /* slice */].call(
              Object(__WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["b" /* createFragment */])(
                node,
                [].concat(value.html).join('')
              ).childNodes
            ),
            asNode,
            node
          );
        } else if ('length' in value) {
          anyContent(__WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["d" /* slice */].call(value));
        } else {
          anyContent(__WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].invoke(value, anyContent));
        }
        break;
    }
  };
  return anyContent;
};

// there are four kind of attributes, and related behavior:
//  * events, with a name starting with `on`, to add/remove event listeners
//  * special, with a name present in their inherited prototype, accessed directly
//  * regular, accessed through get/setAttribute standard DOM methods
//  * style, the only regular attribute that also accepts an object as value
//    so that you can style=${{width: 120}}. In this case, the behavior has been
//    fully inspired by Preact library and its simplicity.
const setAttribute = (node, name, original) => {
  const isSVG = __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["g" /* OWNER_SVG_ELEMENT */] in node;
  let oldValue;
  // if the attribute is the style one
  // handle it differently from others
  if (name === 'style') {
    return Object(__WEBPACK_IMPORTED_MODULE_4__Style_js__["a" /* default */])(node, original, isSVG);
  }
  // the name is an event one,
  // add/remove event listeners accordingly
  else if (/^on/.test(name)) {
    let type = name.slice(2);
    if (type === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* CONNECTED */] || type === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["c" /* DISCONNECTED */]) {
      if (notObserving) {
        notObserving = false;
        observe();
      }
      components.add(node);
    }
    else if (name.toLowerCase() in node) {
      type = type.toLowerCase();
    }
    return newValue => {
      if (oldValue !== newValue) {
        if (oldValue) node.removeEventListener(type, oldValue, false);
        oldValue = newValue;
        if (newValue) node.addEventListener(type, newValue, false);
      }
    };
  }
  // the attribute is special ('value' in input)
  // and it's not SVG *or* the name is exactly data,
  // in this case assign the value directly
  else if (name === 'data' || (!isSVG && name in node)) {
    return newValue => {
      if (oldValue !== newValue) {
        oldValue = newValue;
        if (node[name] !== newValue) {
          node[name] = newValue;
          if (newValue == null) {
            node.removeAttribute(name);
          }
        }
      }
    };
  }
  // in every other case, use the attribute node as it is
  // update only the value, set it as node only when/if needed
  else {
    let owner = false;
    const attribute = original.cloneNode(true);
    return newValue => {
      if (oldValue !== newValue) {
        oldValue = newValue;
        if (attribute.value !== newValue) {
          if (newValue == null) {
            if (owner) {
              owner = false;
              node.removeAttributeNode(attribute);
            }
            attribute.value = newValue;
          } else {
            attribute.value = newValue;
            if (!owner) {
              owner = true;
              node.setAttributeNode(attribute);
            }
          }
        }
      }
    };
  }
};

// style or textareas don't accept HTML as content
// it's pointless to transform or analyze anything
// different from text there but it's worth checking
// for possible defined intents.
const setTextContent = node => {
  let oldValue;
  const textContent = value => {
    if (oldValue !== value) {
      oldValue = value;
      if (typeof value === 'object' && value) {
        if (isPromise_ish(value)) {
          value.then(textContent);
        } else if ('placeholder' in value) {
          invokeAtDistance(value, textContent);
        } else if ('text' in value) {
          textContent(String(value.text));
        } else if ('any' in value) {
          textContent(value.any);
        } else if ('html' in value) {
          textContent([].concat(value.html).join(''));
        } else if ('length' in value) {
          textContent(__WEBPACK_IMPORTED_MODULE_9__shared_utils_js__["d" /* slice */].call(value).join(''));
        } else {
          textContent(__WEBPACK_IMPORTED_MODULE_5__Intent_js__["a" /* default */].invoke(value, textContent));
        }
      } else {
        node.textContent = value == null ? '' : value;
      }
    }
  };
  return textContent;
};

/* harmony default export */ __webpack_exports__["a"] = ({create, find});

// hyper.Components might need connected/disconnected notifications
// used by components and their onconnect/ondisconnect callbacks.
// When one of these callbacks is encountered,
// the document starts being observed.
let notObserving = true;
function observe() {

  // when hyper.Component related DOM nodes
  // are appended or removed from the live tree
  // these might listen to connected/disconnected events
  // This utility is in charge of finding all components
  // involved in the DOM update/change and dispatch
  // related information to them
  const dispatchAll = (nodes, type) => {
    const event = new __WEBPACK_IMPORTED_MODULE_8__shared_poorlyfills_js__["a" /* Event */](type);
    const length = nodes.length;
    for (let i = 0; i < length; i++) {
      let node = nodes[i];
      if (node.nodeType === __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["e" /* ELEMENT_NODE */]) {
        dispatchTarget(node, event);
      }
    }
  };

  // the way it's done is via the components weak set
  // and recursively looking for nested components too
  const dispatchTarget = (node, event) => {
    if (components.has(node)) {
      node.dispatchEvent(event);
    } else {
      const children = node.children;
      const length = children.length;
      for (let i = 0; i < length; i++) {
        dispatchTarget(children[i], event);
      }
    }
  }

  // The MutationObserver is the best way to implement that
  // but there is a fallback to deprecated DOMNodeInserted/Removed
  // so that even older browsers/engines can help components life-cycle
  try {
    (new MutationObserver(records => {
      const length = records.length;
      for (let i = 0; i < length; i++) {
        let record = records[i];
        dispatchAll(record.removedNodes, __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["c" /* DISCONNECTED */]);
        dispatchAll(record.addedNodes, __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* CONNECTED */]);
      }
    })).observe(document, {subtree: true, childList: true});
  } catch(o_O) {
    document.addEventListener('DOMNodeRemoved', event => {
      dispatchAll([event.target], __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["c" /* DISCONNECTED */]);
    }, false);
    document.addEventListener('DOMNodeInserted', event => {
      dispatchAll([event.target], __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["b" /* CONNECTED */]);
    }, false);
  }
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__ = __webpack_require__(2);


// every template literal interpolation indicates
// a precise target in the DOM the template is representing.
// `<p id=${'attribute'}>some ${'content'}</p>`
// hyperHTML finds only once per template literal,
// hence once per entire application life-cycle,
// all nodes that are related to interpolations.
// These nodes are stored as indexes used to retrieve,
// once per upgrade, nodes that will change on each future update.
// A path example is [2, 0, 1] representing the operation:
// node.childNodes[2].childNodes[0].childNodes[1]
// Attributes are addressed via their owner node and their name.
const createPath = node => {
  const path = [];
  let parentNode;
  switch (node.nodeType) {
    case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["e" /* ELEMENT_NODE */]:
    case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["d" /* DOCUMENT_FRAGMENT_NODE */]:
      parentNode = node;
      break;
    case __WEBPACK_IMPORTED_MODULE_0__shared_constants_js__["a" /* COMMENT_NODE */]:
      parentNode = node.parentNode;
      prepend(path, parentNode, node);
      break;
    default:
      parentNode = node.ownerElement;
      break;
  }
  for (
    node = parentNode;
    (parentNode = parentNode.parentNode);
    node = parentNode
  ) {
    prepend(path, parentNode, node);
  }
  return path;
};

const prepend = (path, parent, node) => {
  path.unshift(path.indexOf.call(parent.childNodes, node));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  create: (type, node, name) => ({type, name, node, path: createPath(node)}),
  find: (node, path) => {
    const length = path.length;
    for (let i = 0; i < length; i++) {
      node = node.childNodes[path[i]];
    }
    return node;
  }
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/constants.js
const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

// style is handled as both string and object
// even if the target is an SVG element (consistency)
/* harmony default export */ __webpack_exports__["a"] = ((node, original, isSVG) => {
  if (isSVG) {
    const style = original.cloneNode(true);
    style.value = '';
    node.setAttributeNode(style);
    return update(style, isSVG);
  }
  return update(node.style, isSVG);
});

// the update takes care or changing/replacing
// only properties that are different or
// in case of string, the whole node
const update = (style, isSVG) => {
  let oldType, oldValue;
  return newValue => {
    switch (typeof newValue) {
      case 'object':
        if (newValue) {
          if (oldType === 'object') {
            if (!isSVG) {
              if (oldValue !== newValue) {
                for (const key in oldValue) {
                  if (!(key in newValue)) {
                    style[key] = '';
                  }
                }
              }
            }
          } else {
            if (isSVG) style.value = '';
            else style.cssText = '';
          }
          const info = isSVG ? {} : style;
          for (const key in newValue) {
            const value = newValue[key];
            info[key] = typeof value === 'number' &&
                        !IS_NON_DIMENSIONAL.test(key) ?
                          (value + 'px') : value;
          }
          oldType = 'object';
          if (isSVG) style.value = toStyle((oldValue = info));
          else oldValue = newValue;
          break;
        }
      default:
        if (oldValue != newValue) {
          oldType = 'string';
          oldValue = newValue;
          if (isSVG) style.value = newValue || '';
          else style.cssText = newValue || '';
        }
        break;
    }
  };
};

const hyphen = /([^A-Z])([A-Z]+)/g;
const ized = ($0, $1, $2) => $1 + '-' + $2.toLowerCase();
const toStyle = object => {
  const css = [];
  for (const key in object) {
    css.push(key.replace(hyphen, ized), ':', object[key], ';');
  }
  return css.join('');
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(50)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  box-sizing: border-box;\n  min-width: 100%;\n  min-height: 100%; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\n#main-canvas {\n  border: solid 1px black; }\n", ""]);

// exports


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(51);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 51 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cannon_1 = __webpack_require__(3);
const configuration_1 = __webpack_require__(4);
const ShadingModelType_1 = __webpack_require__(11);
const Camera_1 = __webpack_require__(59);
const CoordinateConverter_1 = __webpack_require__(8);
const ImageLoader_1 = __webpack_require__(60);
const InputHandler_1 = __webpack_require__(61);
const KeyboardInputMapper_1 = __webpack_require__(80);
const ModelPrototypeLoader_1 = __webpack_require__(81);
const ProjectionService_1 = __webpack_require__(88);
const Renderer_1 = __webpack_require__(89);
const ShaderCompiler_1 = __webpack_require__(90);
const WebGLAttributeLoader_1 = __webpack_require__(91);
const WebGLBinder_1 = __webpack_require__(92);
const WebGLUniformLoader_1 = __webpack_require__(93);
const WorldLoader_1 = __webpack_require__(94);
const ApplicationEventEmitter_1 = __webpack_require__(99);
const NewIlluminationModelTypeEvent_1 = __webpack_require__(37);
const NewShadingModelTypeEvent_1 = __webpack_require__(38);
const RestartEvent_1 = __webpack_require__(13);
const GouraudShadingProgramFactory_1 = __webpack_require__(101);
const PhongShadingProgramFactory_1 = __webpack_require__(106);
__webpack_require__(12);
class Application {
    constructor(canvas) {
        this.canvas = canvas;
        this.eventEmitter = new ApplicationEventEmitter_1.ApplicationEventEmitter();
        const gl = this.canvas.getContext('webgl');
        if (!gl) {
            throw new Error('WebGL not supported');
        }
        this.gl = gl;
        this.render = this.render.bind(this);
        this.onNewIlluminationModelType = this.onNewIlluminationModelType.bind(this);
        this.onNewShadingModelType = this.onNewShadingModelType.bind(this);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.bindToEvents();
            this.initProjectionMatrix();
            this.initCamera();
            this.initPrograms();
            this.changeShadingModelType(configuration_1.configuration.defaultShadingModelType);
            yield this.initWorld();
            this.initInputServices();
            this.eventEmitter.emitAppEvent(new RestartEvent_1.RestartEvent());
            this.render();
        });
    }
    bindToEvents() {
        this.eventEmitter.on(NewIlluminationModelTypeEvent_1.NewIlluminationModelTypeEvent.name, this.onNewIlluminationModelType);
        this.eventEmitter.on(NewShadingModelTypeEvent_1.NewShadingModelTypeEvent.name, this.onNewShadingModelType);
    }
    render(timestamp) {
        requestAnimationFrame(this.render);
        let timeDelta = 0;
        if (timestamp) {
            if (this.previousRenderTimestamp) {
                timeDelta = (timestamp - this.previousRenderTimestamp) / 1000;
            }
            this.previousRenderTimestamp = timestamp;
        }
        timeDelta = Math.min(timeDelta, configuration_1.configuration.maxPhysicsWorldTimeAdvance);
        timeDelta *= configuration_1.configuration.physicsSpeed;
        this.inputHandler.step(timeDelta);
        this.world.physicsWorld.step(timeDelta);
        const targetPosition = this.world.dwarf.body.position;
        CoordinateConverter_1.CoordinateConverter.physicsToRendering(this.camera.target, targetPosition);
        this.renderer.refreshCamera();
        this.webGLBinder.bindViewerPosition(this.camera.position);
        this.renderer.clearCanvas();
        this.world.models.forEach(model => this.renderer.drawModel(model));
    }
    loadAttributes() {
        const attributeLoader = new WebGLAttributeLoader_1.WebGLAttributeLoader(this.gl, this.currentProgram);
        this.webGLAttributes = attributeLoader.loadAttributes();
    }
    loadUniforms() {
        const uniformLoader = new WebGLUniformLoader_1.WebGLUniformLoader(this.gl, this.currentProgram);
        this.webGLUniforms = uniformLoader.loadUniforms();
    }
    initProjectionMatrix() {
        const projectionService = new ProjectionService_1.ProjectionService();
        this.projectionMatrix = projectionService.createProjectionMatrix(45, this.canvas.width / this.canvas.height, 0.1, 100);
    }
    initCamera() {
        const position = new cannon_1.Vec3(0, -5, 2);
        const target = new cannon_1.Vec3(0, 0, 0);
        this.camera = new Camera_1.Camera(CoordinateConverter_1.CoordinateConverter.physicsToRendering(position), CoordinateConverter_1.CoordinateConverter.physicsToRendering(target));
    }
    initRenderer() {
        this.renderer = new Renderer_1.Renderer(this.canvas, this.gl, this.projectionMatrix, this.camera, this.webGLBinder);
        this.renderer.init();
    }
    initWebGLBinder() {
        this.webGLBinder = new WebGLBinder_1.WebGLBinder(this.gl, this.webGLUniforms, this.webGLAttributes);
    }
    initPrograms() {
        const shaderCompiler = new ShaderCompiler_1.ShaderCompiler(this.gl);
        const gouraudShadingProgramFactory = new GouraudShadingProgramFactory_1.GouraudShadingProgramFactory(shaderCompiler, this.gl);
        gouraudShadingProgramFactory.compile();
        const phongShadingProgramFactory = new PhongShadingProgramFactory_1.PhongShadingProgramFactory(shaderCompiler, this.gl);
        phongShadingProgramFactory.compile();
        this.programs = {
            [ShadingModelType_1.ShadingModelType.Gouraud]: gouraudShadingProgramFactory.compiledProgram,
            [ShadingModelType_1.ShadingModelType.Phong]: phongShadingProgramFactory.compiledProgram
        };
        this.currentProgram = this.programs[configuration_1.configuration.defaultShadingModelType];
    }
    initWorld() {
        return __awaiter(this, void 0, void 0, function* () {
            const physicsWorld = new cannon_1.World();
            physicsWorld.gravity.set(0, 0, -9.81);
            physicsWorld.broadphase = new cannon_1.NaiveBroadphase();
            const imageLoader = new ImageLoader_1.ImageLoader();
            const modelPrototypeLoader = new ModelPrototypeLoader_1.ModelPrototypeLoader(this.gl, imageLoader);
            const worldLoader = new WorldLoader_1.WorldLoader(modelPrototypeLoader);
            this.world = yield worldLoader.loadWorld(physicsWorld);
        });
    }
    changeShadingModelType(newShadingModelType) {
        const programFacade = this.programs[newShadingModelType];
        if (!programFacade) {
            throw new Error(`Program for shading model type ${newShadingModelType} does not exist`);
        }
        this.currentProgram = programFacade;
        programFacade.use();
        this.loadAttributes();
        this.loadUniforms();
        this.initWebGLBinder();
        this.webGLBinder.bindAmbientLightColor(configuration_1.configuration.ambientLightColor);
        this.webGLBinder.bindPointLight(configuration_1.configuration.pointLightPosition, configuration_1.configuration.pointLightColor);
        this.webGLBinder.bindIlluminationModelType(configuration_1.configuration.defaultIlluminationModelType);
        this.initRenderer();
    }
    onNewIlluminationModelType(event) {
        this.webGLBinder.bindIlluminationModelType(event.illuminationModelType);
    }
    onNewShadingModelType(event) {
        this.changeShadingModelType(event.shadingModelType);
    }
    initInputServices() {
        this.inputHandler = new InputHandler_1.InputHandler(this.world, this.eventEmitter);
        this.inputHandler.init();
        const keyboardInputMapper = new KeyboardInputMapper_1.KeyboardInputMapper(this.eventEmitter);
        keyboardInputMapper.init();
    }
}
exports.Application = Application;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["LDU"] = LDU;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    let a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];

  // Calculate the determinant
  let det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] =  a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] =  a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  let a0 = a[0];
  out[0] =  a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] =  a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2]/a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  let aa = a[0], ab = a[1], ac = a[2], ad = a[3];
  let atx = a[4], aty = a[5];

  let det = aa * ad - ab * ac;
  if(!det){
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 4x4 Matrix
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a03 = a[3];
    let a12 = a[6], a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
  out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
  out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
  out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
  out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
  out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  // Cache only the current line of the second matrix
  let b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
  out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
  out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
  out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1], z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
  a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
  a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
  b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
  b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[0]  = a[0];
    out[1]  = a[1];
    out[2]  = a[2];
    out[3]  = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[4]  = a[4];
    out[5]  = a[5];
    out[6]  = a[6];
    out[7]  = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[8]  = a[8];
    out[9]  = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;

  if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = 1;
  out[1]  = 0;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = 0;
  out[2]  = -s;
  out[3]  = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = s;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  let ox = o[0];
  let oy = o[1];
  let oz = o[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  let rl = 1 / (right - left);
  let tb = 1 / (top - bottom);
  let nf = 1 / (near - far);
  out[0] = (near * 2) * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = (near * 2) * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (far * near * 2) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  let upTan = Math.tan(fov.upDegrees * Math.PI/180.0);
  let downTan = Math.tan(fov.downDegrees * Math.PI/180.0);
  let leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0);
  let rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0);
  let xScale = 2.0 / (leftTan + rightTan);
  let yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = ((upTan - downTan) * yScale * 0.5);
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = (far * near) / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  let eyex = eye[0];
  let eyey = eye[1];
  let eyez = eye[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];
  let centerx = center[0];
  let centery = center[1];
  let centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"] &&
      Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]) {
    return mat4.identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  let len = z0*z0 + z1*z1 + z2*z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
          a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
          a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
          a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  out[9] = a[9] + (b[9] * scale);
  out[10] = a[10] + (b[10] * scale);
  out[11] = a[11] + (b[11] * scale);
  out[12] = a[12] + (b[12] * scale);
  out[13] = a[13] + (b[13] * scale);
  out[14] = a[14] + (b[14] * scale);
  out[15] = a[15] + (b[15] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
         a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
         a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
         a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3];
  let a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7];
  let a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11];
  let a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

  let b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3];
  let b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7];
  let b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11];
  let b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
          Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
          Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
          Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
          Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
          Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
          Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
          Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["setAxisAngle"] = setAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["getAxisAngle"] = getAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["calculateW"] = calculateW;
/* harmony export (immutable) */ __webpack_exports__["slerp"] = slerp;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["conjugate"] = conjugate;
/* harmony export (immutable) */ __webpack_exports__["fromMat3"] = fromMat3;
/* harmony export (immutable) */ __webpack_exports__["fromEuler"] = fromEuler;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4__ = __webpack_require__(21);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */






/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  let rad = Math.acos(q[3]) * 2.0;
  let s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let by = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bz = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  let x = a[0], y = a[1], z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if ( cosom < 0.0 ) {
    cosom = -cosom;
    bx = - bx;
    by = - by;
    bz = - bz;
    bw = - bw;
  }
  // calculate coefficients
  if ( (1.0 - cosom) > 0.000001 ) {
    // standard case (slerp)
    omega  = Math.acos(cosom);
    sinom  = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let dot = a0*a0 + a1*a1 + a2*a2 + a3*a3;
  let invDot = dot ? 1.0/dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0*invDot;
  out[1] = -a1*invDot;
  out[2] = -a2*invDot;
  out[3] = a3*invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if ( fTrace > 0.0 ) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0);  // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5/fRoot;  // 1/(4w)
    out[0] = (m[5]-m[7])*fRoot;
    out[1] = (m[6]-m[2])*fRoot;
    out[2] = (m[1]-m[3])*fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if ( m[4] > m[0] )
      i = 1;
    if ( m[8] > m[i*3+i] )
      i = 2;
    let j = (i+1)%3;
    let k = (i+2)%3;

    fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
    out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
    out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
    let halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);

    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;

    return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
const clone = __WEBPACK_IMPORTED_MODULE_3__vec4__["clone"];
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;


/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
const fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4__["fromValues"];
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;


/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = __WEBPACK_IMPORTED_MODULE_3__vec4__["copy"];
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;


/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = __WEBPACK_IMPORTED_MODULE_3__vec4__["set"];
/* harmony export (immutable) */ __webpack_exports__["set"] = set;


/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = __WEBPACK_IMPORTED_MODULE_3__vec4__["add"];
/* harmony export (immutable) */ __webpack_exports__["add"] = add;


/**
 * Alias for {@link quat.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = __WEBPACK_IMPORTED_MODULE_3__vec4__["scale"];
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;


/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = __WEBPACK_IMPORTED_MODULE_3__vec4__["dot"];
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;


/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = __WEBPACK_IMPORTED_MODULE_3__vec4__["lerp"];
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;


/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = __WEBPACK_IMPORTED_MODULE_3__vec4__["length"];
/* harmony export (immutable) */ __webpack_exports__["length"] = length;


/**
 * Alias for {@link quat.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4__["squaredLength"];
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;


/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = __WEBPACK_IMPORTED_MODULE_3__vec4__["normalize"];
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;


/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4__["exactEquals"];
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;


/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const equals = __WEBPACK_IMPORTED_MODULE_3__vec4__["equals"];
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;


/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function() {
  let tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["create"]();
  let xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](1,0,0);
  let yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3__["fromValues"](0,1,0);

  return function(out, a, b) {
    let dot = __WEBPACK_IMPORTED_MODULE_2__vec3__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3__["len"](tmpvec3) < 0.000001)
        __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
})();
/* harmony export (immutable) */ __webpack_exports__["rotationTo"] = rotationTo;


/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
const sqlerp = (function () {
  let temp1 = create();
  let temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}());
/* harmony export (immutable) */ __webpack_exports__["sqlerp"] = sqlerp;


/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function() {
  let matr = __WEBPACK_IMPORTED_MODULE_1__mat3__["create"]();

  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
})();
/* harmony export (immutable) */ __webpack_exports__["setAxes"] = setAxes;



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */



/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
};

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
};

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round (out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x*x + y*y;
};

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
    y = a[1];
  return Math.sqrt(x*x + y*y);
};

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1];
  return x*x + y*y;
};

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x*x + y*y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1];
  let b0 = b[0], b1 = b[1];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common__["EPSILON"]*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec2.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec2.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 2;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cannon_1 = __webpack_require__(3);
const gl_matrix_1 = __webpack_require__(1);
const CoordinateConverter_1 = __webpack_require__(8);
class Camera {
    constructor(position, target) {
        this.upVector = CoordinateConverter_1.CoordinateConverter.physicsToRendering(new cannon_1.Vec3(0, 0, 1));
        this._viewMatrix = gl_matrix_1.mat4.create();
        this.position = position;
        this.target = target;
        this.updateViewMatrix();
    }
    get viewMatrix() {
        return this._viewMatrix;
    }
    updateViewMatrix() {
        // TODO: stop using gl-matrix method for calculating the view matrix
        gl_matrix_1.mat4.lookAt(this.viewMatrix, this.position, this.target, this.upVector);
    }
}
exports.Camera = Camera;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ImageLoader {
    loadImage(url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = url;
        });
    }
}
exports.ImageLoader = ImageLoader;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cannon_1 = __webpack_require__(3);
const configuration_1 = __webpack_require__(4);
const KeyboardKeys_1 = __webpack_require__(24);
const store_1 = __webpack_require__(12);
const ReleaseDwarfEvent_1 = __webpack_require__(33);
const RestartEvent_1 = __webpack_require__(13);
class InputHandler {
    constructor(world, eventEmitter) {
        this.dwarfReleased = false;
        this.hingeAngle = 0;
        this.hingeRotationAxis = new cannon_1.Vec3(0, 0, 1);
        this.world = world;
        this.eventEmitter = eventEmitter;
        this.restartWorld = this.restartWorld.bind(this);
        this.releaseDwarf = this.releaseDwarf.bind(this);
    }
    init() {
        this.eventEmitter.on(RestartEvent_1.RestartEvent.name, this.restartWorld);
        this.eventEmitter.on(ReleaseDwarfEvent_1.ReleaseDwarfEvent.name, this.releaseDwarf);
    }
    destroy() {
        this.eventEmitter.removeListener(RestartEvent_1.RestartEvent.name, this.restartWorld);
        this.eventEmitter.removeListener(ReleaseDwarfEvent_1.ReleaseDwarfEvent.name, this.releaseDwarf);
    }
    step(_timeDelta) {
        const pressedKeys = store_1.store.getState().input.getIn(['pressedKeys']);
        this.rotateFidgetSpinner(pressedKeys, _timeDelta);
        this.rotateHinge(pressedKeys, _timeDelta);
    }
    restartWorld() {
        this.world.models.forEach(model => model.reset());
        this.hingeAngle = 0;
        if (this.dwarfReleased) {
            this.world.physicsWorld.addConstraint(this.world.dwarfConstraint);
            this.dwarfReleased = false;
        }
    }
    releaseDwarf() {
        if (this.dwarfReleased) {
            return;
        }
        this.world.physicsWorld.removeConstraint(this.world.dwarfConstraint);
        this.dwarfReleased = true;
    }
    rotateFidgetSpinner(pressedKeys, timeDelta) {
        const fidgetSpinnerBody = this.world.fidgetSpinner.body;
        const tickAcceleration = configuration_1.configuration.spinnerAngularAcceleration * timeDelta;
        if (pressedKeys.has(KeyboardKeys_1.KeyboardKeys.ArrowUp)) {
            fidgetSpinnerBody.angularVelocity.x += tickAcceleration;
        }
        if (pressedKeys.has(KeyboardKeys_1.KeyboardKeys.ArrowDown)) {
            fidgetSpinnerBody.angularVelocity.x -= tickAcceleration;
        }
    }
    rotateHinge(pressedKeys, timeDelta) {
        const hingeBody = this.world.fidgetSpinnerHinge.body;
        const tickAcceleration = timeDelta * configuration_1.configuration.hingeAngularAcceleration;
        const rotateLeft = pressedKeys.has(KeyboardKeys_1.KeyboardKeys.ArrowLeft) ? 1 : -1;
        const rotateRight = pressedKeys.has(KeyboardKeys_1.KeyboardKeys.ArrowRight) ? 1 : -1;
        if (rotateLeft * rotateRight === 1) {
            // Either both on or both off
            return;
        }
        if (rotateLeft > 0) {
            this.hingeAngle += tickAcceleration;
        }
        if (rotateRight > 0) {
            this.hingeAngle -= tickAcceleration;
        }
        hingeBody.quaternion.setFromAxisAngle(this.hingeRotationAxis, this.hingeAngle);
    }
}
exports.InputHandler = InputHandler;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(25)))

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(67);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(65);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(29)))

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(28);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(69);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(74);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29), __webpack_require__(73)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(30);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(25)))

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(31);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = __webpack_require__(79);
const InputActions_1 = __webpack_require__(32);
const defaultState = immutable_1.Map({
    pressedKeys: immutable_1.Set()
});
function inputReducer(state = defaultState, action) {
    switch (action.type) {
        case InputActions_1.InputActionTypes.KeyPressed:
            return state.updateIn(['pressedKeys'], (pressedKeys) => pressedKeys.add(action.keyCode));
        case InputActions_1.InputActionTypes.KeyReleased:
            return state.updateIn(['pressedKeys'], (pressedKeys) => pressedKeys.delete(action.keyCode));
        default:
            return state;
    }
}
exports.inputReducer = inputReducer;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Immutable = factory());
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const KeyboardKeys_1 = __webpack_require__(24);
const InputActions_1 = __webpack_require__(32);
const store_1 = __webpack_require__(12);
const ReleaseDwarfEvent_1 = __webpack_require__(33);
const RestartEvent_1 = __webpack_require__(13);
class KeyboardInputMapper {
    constructor(eventEmitter) {
        this.holdableKeys = [
            KeyboardKeys_1.KeyboardKeys.ArrowDown,
            KeyboardKeys_1.KeyboardKeys.ArrowLeft,
            KeyboardKeys_1.KeyboardKeys.ArrowRight,
            KeyboardKeys_1.KeyboardKeys.ArrowUp
        ];
        this.eventEmitter = eventEmitter;
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }
    init() {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
    }
    destroy() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
    }
    onKeyDown(event) {
        const { keyCode } = event;
        if (this.isHoldableKey(keyCode)) {
            store_1.store.dispatch(InputActions_1.keyPressed(keyCode));
        }
    }
    onKeyUp(event) {
        const { keyCode } = event;
        if (this.isHoldableKey(keyCode)) {
            return store_1.store.dispatch(InputActions_1.keyReleased(keyCode));
        }
        this.handleNotHoldableKey(keyCode);
    }
    isHoldableKey(keyCode) {
        return this.holdableKeys.indexOf(keyCode) !== -1;
    }
    handleNotHoldableKey(keyCode) {
        switch (keyCode) {
            case KeyboardKeys_1.KeyboardKeys.R:
                this.eventEmitter.emitAppEvent(new RestartEvent_1.RestartEvent());
                break;
            case KeyboardKeys_1.KeyboardKeys.Space:
                this.eventEmitter.emitAppEvent(new ReleaseDwarfEvent_1.ReleaseDwarfEvent());
                break;
            default:
                break;
        }
    }
}
exports.KeyboardInputMapper = KeyboardInputMapper;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
const expandVertexData = __webpack_require__(82);
const WebGLArrayBufferFacade_1 = __webpack_require__(83);
const WebGLElementArrayBufferFacade_1 = __webpack_require__(84);
const WebGLTextureFacade_1 = __webpack_require__(85);
const BufferUsageType_1 = __webpack_require__(86);
const ModelPrototype_1 = __webpack_require__(87);
class ModelPrototypeLoader {
    constructor(gl, imageLoader) {
        this.nextTextureId = 0;
        this.gl = gl;
        this.imageLoader = imageLoader;
    }
    loadModelPrototype(modelObjUrl, textureImageUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const [modelObjResponse, textureImage] = yield Promise.all([
                fetch(modelObjUrl),
                this.imageLoader.loadImage(textureImageUrl)
            ]);
            const vertexData = yield modelObjResponse.json();
            const gl = this.gl;
            const expandedVertexData = expandVertexData(vertexData, {
                facesToTriangles: true
            });
            const positionBuffer = this.createFloat32Buffer(gl, expandedVertexData.positions);
            const vertexNormalBuffer = this.createFloat32Buffer(gl, expandedVertexData.normals);
            const vertexTextureCoordsBuffer = this.createFloat32Buffer(gl, expandedVertexData.uvs, 2);
            const positionIndicesBuffer = new WebGLElementArrayBufferFacade_1.WebGLElementArrayBufferFacade(gl, new Uint16Array(expandedVertexData.positionIndices), 1, expandedVertexData.positionIndices.length, BufferUsageType_1.BufferUsageType.StaticDraw);
            const texture = new WebGLTextureFacade_1.WebGLTextureFacade(gl, textureImage, this.nextTextureId);
            this.nextTextureId += 1;
            return new ModelPrototype_1.ModelPrototype(vertexNormalBuffer, vertexTextureCoordsBuffer, positionBuffer, positionIndicesBuffer, texture);
        });
    }
    createFloat32Buffer(gl, data, itemSize = 3) {
        return new WebGLArrayBufferFacade_1.WebGLArrayBufferFacade(gl, new Float32Array(data), itemSize, data.length / itemSize, BufferUsageType_1.BufferUsageType.StaticDraw);
    }
}
exports.ModelPrototypeLoader = ModelPrototypeLoader;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = expandVertexData

/**
 * Decompress a set of position, normal and uv indices and their
 * accompanying data.
 * This solves for situations when you are re-using the same
 * vertex positions but with a different normal or uv index.
 * You can't have multiple indices (ELEMENT_ARRAY_BUFFER) in
 * WebGL, so this module the data expands your data so that it
 * can use one ELEMENT_ARRAY_BUFFER for your vertex position indices
 *
 * TODO: Look into whether or not it's worth checking when deduping indices
 * whether or not all of the other indices would have been the same.
 * Seems like the potential savings would be negligible if any.. but look into it
 * Yeah.... a triangle saved is a triangle earned...
 */
function expandVertexData (compressedVertexData, opts) {
  opts = opts || {}
  // Handles wavefront .obj files that can have lines with
  // 3 vertices (triangle) or 4 (face).
  // Specifically designed to work with the JSON that `wavefront-obj-parser` provides.
  // If we find a `-1` as the fourth number it means was a triangle line.
  // Otherwise it is a face line that we'll expand into two triangles
  // `1 2 3 -1` would be a set of triangle indices
  // `1 2 3 4` would be a face that we'd expand into `1 2 3 1 3 4`
  if (opts.facesToTriangles) {
    var decodedVertexPositionIndices = []
    var decodedVertexUVIndices = []
    var decodedVertexNormalIndices = []

    for (var i = 0; i < compressedVertexData.vertexPositionIndices.length / 4; i++) {
      decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4])
      decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4 + 1])
      decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4 + 2])
      decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4])
      decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4 + 1])
      decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4 + 2])
      decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4])
      decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4 + 1])
      decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4 + 2])
      // If this is a face with 4 vertices we push a second triangle
      if (compressedVertexData.vertexPositionIndices[i * 4 + 3] !== -1) {
        decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4])
        decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4 + 2])
        decodedVertexPositionIndices.push(compressedVertexData.vertexPositionIndices[i * 4 + 3])
        decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4])
        decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4 + 2])
        decodedVertexUVIndices.push(compressedVertexData.vertexUVIndices[i * 4 + 3])
        decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4])
        decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4 + 2])
        decodedVertexNormalIndices.push(compressedVertexData.vertexNormalIndices[i * 4 + 3])
      }
    }

    compressedVertexData.vertexPositionIndices = decodedVertexPositionIndices
    compressedVertexData.vertexNormalIndices = decodedVertexNormalIndices
    compressedVertexData.vertexUVIndices = decodedVertexUVIndices
  }

  // Create the arrays that will hold our expanded vertex data
  var expandedPositionIndices = []
  var expandedPositions = []
  var expandedNormals = []
  var expandedUVs = []
  var expandedJointInfluences = []
  var expandedJointWeights = []

  // Track indices that we've already encountered so that we don't use them twice
  var encounteredPositionIndices = {}
  // Track the largest vertex position index that we encounter. When expanding
  // the data we will increment all vertex position indices that were used
  // more than once.
  // We will insert the proper data into the corresponding array indices
  // for our normal and uv arrays
  var largestPositionIndex = 0
  // Track which counters we've already encountered so that we can loop through them later
  var unprocessedVertexNums = {}

  compressedVertexData.vertexPositionIndices.forEach(function (positionIndex, vertexNum) {
    // Keep track of the largest vertex index that we encounter
    largestPositionIndex = Math.max(largestPositionIndex, positionIndex)
    // If this is our first time seeing this index we build all of our
    // data arrays as usual.
    if (!encounteredPositionIndices[positionIndex]) {
      // Mark this vertex index as encountered. We'll deal with encountered indices later
      encounteredPositionIndices[positionIndex] = true
      setVertexData(positionIndex, vertexNum)
    } else {
      unprocessedVertexNums[vertexNum] = true
    }
  })

  // Go over all duplicate vertex indices and change them to a new index number.
  // Then duplicate their relevant data to that same index number
  Object.keys(unprocessedVertexNums).forEach(function (vertexNum) {
    var positionIndex = ++largestPositionIndex

    setVertexData(positionIndex, vertexNum)
  })

  /**
   * Helper function to set the vertex data at a specified index.
   * This is what builds the arrays that we return to the module user for consumption
   */
  function setVertexData (positionIndex, vertexNum) {
    // The position index before we incremented it to dedupe it
    var originalPositionIndex = compressedVertexData.vertexPositionIndices[vertexNum]

    expandedPositionIndices[vertexNum] = positionIndex
    var jointsAndWeights
    if (compressedVertexData.vertexJointWeights) {
      jointsAndWeights = compressedVertexData.vertexJointWeights[originalPositionIndex]
    }

    for (var i = 0; i < 4; i++) {
      if (jointsAndWeights) {
        // 4 bone (joint) influences and weights per vertex
        var jointIndex = Object.keys(jointsAndWeights)[i]
        // TODO: Should zero be -1? It will have a zero weight regardless, but that lets us distinguish between empty bone slots and zero index bone slots
        // TODO: If there are more than 4 bones take the four that have the strongest weight
        expandedJointInfluences[positionIndex * 4 + i] = Number(jointIndex) || 0
        expandedJointWeights[positionIndex * 4 + i] = jointsAndWeights[jointIndex] || 0
      }

      // 3 normals and position coordinates per vertex
      if (i < 3) {
        expandedPositions[positionIndex * 3 + i] = compressedVertexData.vertexPositions[originalPositionIndex * 3 + i]
        if (compressedVertexData.vertexNormals) {
          expandedNormals[positionIndex * 3 + i] = compressedVertexData.vertexNormals[compressedVertexData.vertexNormalIndices[vertexNum] * 3 + i]
        }
      }
      // 2 UV coordinates per vertex
      if (i < 2) {
        if (compressedVertexData.vertexUVs) {
          expandedUVs[positionIndex * 2 + i] = compressedVertexData.vertexUVs[compressedVertexData.vertexUVIndices[vertexNum] * 2 + i]
        }
      }
    }
  }

  return {
    jointInfluences: expandedJointInfluences,
    jointWeights: expandedJointWeights,
    normals: expandedNormals,
    positionIndices: expandedPositionIndices,
    positions: expandedPositions,
    uvs: expandedUVs
  }
}


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebGLBufferFacade_1 = __webpack_require__(34);
class WebGLArrayBufferFacade extends WebGLBufferFacade_1.WebGLBufferFacade {
    constructor(gl, data, itemSize, itemsCount, usageType) {
        super(gl, itemSize, itemsCount);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, usageType);
    }
    bindBuffer(attribute) {
        const gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.vertexAttribPointer(attribute, this.itemSize, gl.FLOAT, false, 0, 0);
    }
}
exports.WebGLArrayBufferFacade = WebGLArrayBufferFacade;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebGLBufferFacade_1 = __webpack_require__(34);
class WebGLElementArrayBufferFacade extends WebGLBufferFacade_1.WebGLBufferFacade {
    constructor(gl, data, itemSize, itemsCount, usageType) {
        super(gl, itemSize, itemsCount);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, usageType);
    }
    bindBuffer() {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    }
}
exports.WebGLElementArrayBufferFacade = WebGLElementArrayBufferFacade;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class WebGLTextureFacade {
    /**
     * @param gl
     * @param image
     * @param id Texture number (starting from 0)
     */
    constructor(gl, pixels, id) {
        this.gl = gl;
        this.id = id;
        this.textureNumber = gl.TEXTURE0 + this.id;
        this.texture = gl.createTexture();
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
    activate(uniformLocation) {
        const gl = this.gl;
        gl.activeTexture(this.textureNumber);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(uniformLocation, this.id);
    }
    enableWrapping(textureWrapType) {
        const gl = this.gl;
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, textureWrapType);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, textureWrapType);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
}
exports.WebGLTextureFacade = WebGLTextureFacade;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BufferUsageType;
(function (BufferUsageType) {
    BufferUsageType[BufferUsageType["StaticDraw"] = WebGLRenderingContext.STATIC_DRAW] = "StaticDraw";
    BufferUsageType[BufferUsageType["DynamicDraw"] = WebGLRenderingContext.DYNAMIC_DRAW] = "DynamicDraw";
    BufferUsageType[BufferUsageType["StreamDraw"] = WebGLRenderingContext.STREAM_DRAW] = "StreamDraw";
})(BufferUsageType = exports.BufferUsageType || (exports.BufferUsageType = {}));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(1);
class ModelPrototype {
    constructor(vertexNormalBuffer, vertexTextureCoordsBuffer, vertexPositionBuffer, vertexIndexBuffer, texture) {
        this.vertexNormalBuffer = vertexNormalBuffer;
        this.vertexTextureCoordsBuffer = vertexTextureCoordsBuffer;
        this.vertexPositionBuffer = vertexPositionBuffer;
        this.vertexIndexBuffer = vertexIndexBuffer;
        this.texture = texture;
        this.modelMatrix = gl_matrix_1.mat4.identity(gl_matrix_1.mat4.create());
    }
    bindBuffersAndTexture(webGLBinder) {
        this.bindBuffers(webGLBinder);
        this.bindTexture(webGLBinder);
    }
    bindBuffers(webGLBinder) {
        const { vertexIndexBuffer, vertexNormalBuffer, vertexPositionBuffer, vertexTextureCoordsBuffer } = this;
        webGLBinder.bindTextureCoordsBuffer(vertexTextureCoordsBuffer);
        webGLBinder.bindVertexPositionBuffer(vertexPositionBuffer);
        webGLBinder.bindVertexNormalBuffer(vertexNormalBuffer);
        webGLBinder.bindVertexIndexBuffer(vertexIndexBuffer);
    }
    bindTexture(webGLBinder) {
        webGLBinder.bindTexture(this.texture);
    }
}
exports.ModelPrototype = ModelPrototype;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(1);
class ProjectionService {
    createProjectionMatrix(fovy, aspectRatio, near, far) {
        const projectionMatrix = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.perspective(projectionMatrix, fovy, aspectRatio, near, far);
        return projectionMatrix;
    }
}
exports.ProjectionService = ProjectionService;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Renderer {
    constructor(canvas, gl, projectionMatrix, camera, webGLBinder) {
        this.canvas = canvas;
        this.gl = gl;
        this.projectionMatrix = projectionMatrix;
        this.camera = camera;
        this.webGLBinder = webGLBinder;
    }
    init() {
        const { gl, canvas } = this;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        this.clearCanvas();
        this.refreshCamera();
        this.webGLBinder.bindProjectionMatrix(this.projectionMatrix);
    }
    refreshCamera() {
        this.camera.updateViewMatrix();
        this.webGLBinder.bindViewMatrix(this.camera.viewMatrix);
    }
    clearCanvas() {
        const gl = this.gl;
        // tslint:disable-next-line:no-bitwise
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    drawModel(model) {
        model.draw(this.gl, this.webGLBinder);
    }
}
exports.Renderer = Renderer;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ShaderCompiler {
    constructor(gl) {
        this.gl = gl;
    }
    compileShader(shaderSource, shaderType) {
        const gl = this.gl;
        const shader = gl.createShader(shaderType);
        if (!shader) {
            throw new Error('Cannot create shader');
        }
        gl.shaderSource(shader, shaderSource);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            const compileErrorMessage = gl.getShaderInfoLog(shader);
            const error = new Error('Cannot compile shader');
            error.compileErrorMessage = compileErrorMessage;
            throw error;
        }
        return shader;
    }
}
exports.ShaderCompiler = ShaderCompiler;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class WebGLAttributeLoader {
    constructor(gl, programFacade) {
        this.gl = gl;
        this.programFacade = programFacade;
    }
    loadAttributes() {
        return {
            vertexPosition: this.loadAndEnableAttribute('aVertexPosition'),
            textureCoords: this.loadAndEnableAttribute('aTextureCoords'),
            normalVector: this.loadAndEnableAttribute('aNormalVector')
        };
    }
    loadAndEnableAttribute(name) {
        const attribute = this.gl.getAttribLocation(this.programFacade.program, name);
        this.gl.enableVertexAttribArray(attribute);
        return attribute;
    }
}
exports.WebGLAttributeLoader = WebGLAttributeLoader;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class WebGLBinder {
    constructor(gl, uniforms, attributes) {
        this.gl = gl;
        this.uniforms = uniforms;
        this.attributes = attributes;
    }
    bindTexture(texture) {
        texture.activate(this.uniforms.textureSampler);
    }
    bindVertexNormalBuffer(vertexNormalBuffer) {
        vertexNormalBuffer.bindBuffer(this.attributes.normalVector);
    }
    bindTextureCoordsBuffer(textureCoordsBuffer) {
        textureCoordsBuffer.bindBuffer(this.attributes.textureCoords);
    }
    bindVertexPositionBuffer(positionBuffer) {
        positionBuffer.bindBuffer(this.attributes.vertexPosition);
    }
    bindVertexIndexBuffer(vertexIndexBuffer) {
        vertexIndexBuffer.bindBuffer();
    }
    bindModelMatrix(modelMatrix) {
        this.gl.uniformMatrix4fv(this.uniforms.modelMatrix, false, modelMatrix);
    }
    bindNormalMatrix(normalMatrix) {
        this.gl.uniformMatrix4fv(this.uniforms.normalMatrix, false, normalMatrix);
    }
    bindViewMatrix(viewMatrix) {
        this.gl.uniformMatrix4fv(this.uniforms.viewMatrix, false, viewMatrix);
    }
    bindProjectionMatrix(projectionMatrix) {
        this.gl.uniformMatrix4fv(this.uniforms.projectionMatrix, false, projectionMatrix);
    }
    bindAmbientLightColor(ambientLightColor) {
        this.gl.uniform3fv(this.uniforms.ambientLightColor, ambientLightColor);
    }
    bindPointLight(position, color) {
        this.gl.uniform3fv(this.uniforms.pointLightPosition, position);
        this.gl.uniform3fv(this.uniforms.pointLightColor, color);
    }
    bindIlluminationModelType(illuminationModelType) {
        this.gl.uniform1i(this.uniforms.illuminationModelType, illuminationModelType);
    }
    bindDiffuseCoefficient(diffuseCoefficient) {
        this.gl.uniform1f(this.uniforms.diffuseCoefficient, diffuseCoefficient);
    }
    bindSpecularCoefficient(specularCoefficient) {
        this.gl.uniform1f(this.uniforms.specularCoefficient, specularCoefficient);
    }
    bindSpecularShininess(specularShininess) {
        this.gl.uniform1f(this.uniforms.specularShininess, specularShininess);
    }
    bindIlluminationProperties(illuminationProperties) {
        this.bindDiffuseCoefficient(illuminationProperties.diffuseCoefficient);
        this.bindSpecularCoefficient(illuminationProperties.specularCoefficient);
        this.bindSpecularShininess(illuminationProperties.specularShininess);
    }
    bindViewerPosition(viewerPosition) {
        this.gl.uniform3fv(this.uniforms.viewerPosition, viewerPosition);
    }
}
exports.WebGLBinder = WebGLBinder;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class WebGLUniformLoader {
    constructor(gl, programFacade) {
        this.gl = gl;
        this.programFacade = programFacade;
    }
    loadUniforms() {
        return {
            modelMatrix: this.loadUniform('uModelMatrix'),
            normalMatrix: this.loadUniform('uNormalMatrix'),
            viewMatrix: this.loadUniform('uViewMatrix'),
            projectionMatrix: this.loadUniform('uProjectionMatrix'),
            textureSampler: this.loadUniform('uTextureSampler'),
            ambientLightColor: this.loadUniform('uAmbientLightColor'),
            pointLightColor: this.loadUniform('uPointLightColor'),
            pointLightPosition: this.loadUniform('uPointLightPosition'),
            diffuseCoefficient: this.loadUniform('uDiffuseCoefficient'),
            illuminationModelType: this.loadUniform('uIlluminationModelType'),
            specularCoefficient: this.loadUniform('uSpecularCoefficient'),
            specularShininess: this.loadUniform('uSpecularShininess'),
            viewerPosition: this.loadUniform('uViewerPosition')
        };
    }
    loadUniform(name) {
        return this.gl.getUniformLocation(this.programFacade.program, name);
    }
}
exports.WebGLUniformLoader = WebGLUniformLoader;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cannon_1 = __webpack_require__(3);
const configuration_1 = __webpack_require__(4);
const IlluminationProperties_1 = __webpack_require__(23);
const TextureWrapType_1 = __webpack_require__(95);
const ApplicationWorld_1 = __webpack_require__(96);
const BodilessModel_1 = __webpack_require__(35);
const InvisibleModel_1 = __webpack_require__(97);
const PhysicalModel_1 = __webpack_require__(98);
class WorldLoader {
    constructor(modelPrototypeLoader) {
        this.modelPrototypeLoader = modelPrototypeLoader;
    }
    loadWorld(physicsWorld) {
        return __awaiter(this, void 0, void 0, function* () {
            const models = [];
            const world = new ApplicationWorld_1.ApplicationWorld(physicsWorld, models);
            yield Promise.all([
                this.loadGround(world),
                this.loadDwarf(world),
                this.loadFidgetSpinner(world),
                this.loadFidgetSpinnerHinge(world)
            ]);
            this.setConstraints(world);
            return world;
        });
    }
    loadGround(applicationWorld) {
        return __awaiter(this, void 0, void 0, function* () {
            const groundPrototype = yield this.modelPrototypeLoader.loadModelPrototype('assets/models/ground.json', 'assets/textures/ground_dirt_1226_9352_Small.jpg');
            groundPrototype.texture.enableWrapping(TextureWrapType_1.TextureWrapType.Repeat);
            const groundShape = new cannon_1.Plane();
            const groundBody = new cannon_1.Body({ mass: 0 });
            groundBody.addShape(groundShape);
            applicationWorld.physicsWorld.addBody(groundBody);
            const illuminationProperties = new IlluminationProperties_1.IlluminationProperties();
            illuminationProperties.diffuseCoefficient = 1;
            illuminationProperties.specularCoefficient = 0;
            illuminationProperties.specularShininess = 1;
            const ground = new BodilessModel_1.BodilessModel(groundPrototype, illuminationProperties);
            applicationWorld.models.push(ground);
        });
    }
    loadDwarf(applicationWorld) {
        return __awaiter(this, void 0, void 0, function* () {
            const dwarfPrototype = yield this.modelPrototypeLoader.loadModelPrototype('assets/models/Dwarf_2_Very_Low-centered.json', 'assets/textures/dwarf_2_1K_color.jpg');
            const dwarfBody = new cannon_1.Body({ mass: configuration_1.configuration.dwarfMass, position: new cannon_1.Vec3(2, 2, 3.05) });
            dwarfBody.initPosition.copy(dwarfBody.position);
            dwarfBody.initQuaternion.setFromAxisAngle(new cannon_1.Vec3(0, 1, 0), Math.PI / 2);
            const shape = new cannon_1.Box(new cannon_1.Vec3(0.4, 0.3, 0.75));
            dwarfBody.addShape(shape);
            applicationWorld.physicsWorld.addBody(dwarfBody);
            const dwarf = new PhysicalModel_1.PhysicalModel(dwarfPrototype, dwarfBody);
            applicationWorld.models.push(dwarf);
            applicationWorld.dwarf = dwarf;
        });
    }
    loadFidgetSpinner(applicationWorld) {
        return __awaiter(this, void 0, void 0, function* () {
            const fidgetSpinnerPrototype = yield this.modelPrototypeLoader.loadModelPrototype('assets/models/Fidget_Spinner-centered.json', 'assets/textures/fidget_texture.png');
            const radius = 1.1;
            const height = 0.05;
            const fidgetSpinnerBody = new cannon_1.Body({
                mass: configuration_1.configuration.fidgetSpinnerMass,
                position: new cannon_1.Vec3(2, 2, 5)
            });
            fidgetSpinnerBody.initPosition.copy(fidgetSpinnerBody.position);
            fidgetSpinnerBody.quaternion.setFromAxisAngle(new cannon_1.Vec3(0, 1, 0), Math.PI / 2);
            fidgetSpinnerBody.initQuaternion.copy(fidgetSpinnerBody.quaternion);
            const shape = new cannon_1.Cylinder(radius, radius, height, 10);
            fidgetSpinnerBody.addShape(shape);
            applicationWorld.physicsWorld.addBody(fidgetSpinnerBody);
            const fidgetSpinner = new PhysicalModel_1.PhysicalModel(fidgetSpinnerPrototype, fidgetSpinnerBody);
            applicationWorld.models.push(fidgetSpinner);
            applicationWorld.fidgetSpinner = fidgetSpinner;
        });
    }
    loadFidgetSpinnerHinge(applicationWorld) {
        return __awaiter(this, void 0, void 0, function* () {
            const hingeBody = new cannon_1.Body({
                mass: 0,
                position: new cannon_1.Vec3(2, 2, 5)
            });
            applicationWorld.physicsWorld.addBody(hingeBody);
            const hinge = new InvisibleModel_1.InvisibleModel(hingeBody);
            applicationWorld.fidgetSpinnerHinge = hinge;
            applicationWorld.models.push(hinge);
        });
    }
    setConstraints(applicationWorld) {
        const dwarfLocalPoint = new cannon_1.Vec3(0, 0, 0.75);
        const fidgetSpinnerLocalPoint = new cannon_1.Vec3(1.1, 0.3, 0);
        const constraint = new cannon_1.PointToPointConstraint(applicationWorld.dwarf.body, dwarfLocalPoint, applicationWorld.fidgetSpinner.body, fidgetSpinnerLocalPoint);
        applicationWorld.physicsWorld.addConstraint(constraint);
        applicationWorld.dwarfConstraint = constraint;
        const hingeConstraint = new cannon_1.HingeConstraint(applicationWorld.fidgetSpinner.body, applicationWorld.fidgetSpinnerHinge.body, {
            axisA: new cannon_1.Vec3(0, 0, 1)
        });
        applicationWorld.physicsWorld.addConstraint(hingeConstraint);
    }
}
exports.WorldLoader = WorldLoader;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TextureWrapType;
(function (TextureWrapType) {
    TextureWrapType[TextureWrapType["Repeat"] = WebGLRenderingContext.REPEAT] = "Repeat";
    TextureWrapType[TextureWrapType["MirroredRepeat"] = WebGLRenderingContext.MIRRORED_REPEAT] = "MirroredRepeat";
})(TextureWrapType = exports.TextureWrapType || (exports.TextureWrapType = {}));


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationWorld {
    constructor(physicsWorld, models) {
        this.physicsWorld = physicsWorld;
        this.models = models;
    }
}
exports.ApplicationWorld = ApplicationWorld;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const resetBody_1 = __webpack_require__(36);
class InvisibleModel {
    constructor(body) {
        this.body = body;
    }
    draw() {
        // Noop
    }
    reset() {
        resetBody_1.resetBody(this.body);
    }
}
exports.InvisibleModel = InvisibleModel;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = __webpack_require__(1);
const resetBody_1 = __webpack_require__(36);
const BodilessModel_1 = __webpack_require__(35);
const CoordinateConverter_1 = __webpack_require__(8);
class PhysicalModel extends BodilessModel_1.BodilessModel {
    // TODO: lights
    constructor(modelPrototype, body, illuminationProperties) {
        super(modelPrototype, illuminationProperties);
        this.body = body;
    }
    draw(gl, webGLBinder) {
        this.updateModelMatrixFromBody();
        super.draw(gl, webGLBinder);
    }
    reset() {
        resetBody_1.resetBody(this.body);
    }
    updateModelMatrixFromBody() {
        const { body } = this;
        const translationVector = CoordinateConverter_1.CoordinateConverter.physicsToRendering(body.position);
        // Same coordinates swap as in CoordinateConverter.
        const quaternion = gl_matrix_1.quat.fromValues(-body.quaternion.x, body.quaternion.z, body.quaternion.y, body.quaternion.w);
        gl_matrix_1.mat4.fromRotationTranslation(this.modelMatrix, quaternion, translationVector);
        gl_matrix_1.mat4.multiply(this.modelMatrix, this.modelMatrix, this.modelPrototype.modelMatrix);
    }
}
exports.PhysicalModel = PhysicalModel;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __webpack_require__(100);
class ApplicationEventEmitter extends events_1.EventEmitter {
    emitAppEvent(event) {
        this.emit(event.eventType, event);
    }
}
exports.ApplicationEventEmitter = ApplicationEventEmitter;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ProgramFactory_1 = __webpack_require__(39);
// tslint:disable no-require-imports import-name no-var-requires
const fragmentShaderSource = __webpack_require__(104);
const vertexShaderSource = __webpack_require__(105);
// tslint:enable no-require-imports, import-name
class GouraudShadingProgramFactory extends ProgramFactory_1.ProgramFactory {
    get fragmentShaderSource() {
        return fragmentShaderSource;
    }
    get vertexShaderSource() {
        return vertexShaderSource;
    }
}
exports.GouraudShadingProgramFactory = GouraudShadingProgramFactory;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShaderType;
(function (ShaderType) {
    ShaderType[ShaderType["VertexShader"] = WebGLRenderingContext.VERTEX_SHADER] = "VertexShader";
    ShaderType[ShaderType["FragmentShader"] = WebGLRenderingContext.FRAGMENT_SHADER] = "FragmentShader";
})(ShaderType = exports.ShaderType || (exports.ShaderType = {}));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class WebGLProgramFacade {
    constructor(gl, vertexShader, fragmentShader) {
        this.gl = gl;
        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            throw new Error('Cannot initialize WebGL program (linking failed)');
        }
    }
    use() {
        this.gl.useProgram(this.program);
    }
}
exports.WebGLProgramFacade = WebGLProgramFacade;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\r\n\r\nuniform sampler2D uTextureSampler;\r\n\r\nvarying vec2 vTextureCoords;\r\nvarying vec4 vLightIntensity;\r\n\r\nvoid main(void) {\r\n  gl_FragColor = vLightIntensity * texture2D(uTextureSampler, vTextureCoords);\r\n}\r\n"

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "#define PHONG_ILLUMINATION_TYPE 0\r\n#define BLINN_ILLUMINATION_TYPE 1\r\n\r\nprecision mediump float;\r\n\r\nattribute vec3 aVertexPosition;\r\nattribute vec3 aNormalVector;\r\nattribute vec2 aTextureCoords;\r\n\r\nuniform mat4 uModelMatrix;\r\nuniform mat4 uNormalMatrix;\r\nuniform mat4 uViewMatrix;\r\nuniform mat4 uProjectionMatrix;\r\n\r\nuniform vec3 uAmbientLightColor;\r\n\r\nuniform vec3 uPointLightPosition;\r\nuniform vec3 uPointLightColor;\r\n\r\nuniform vec3 uViewerPosition;\r\n\r\nuniform float uDiffuseCoefficient;\r\nuniform float uSpecularCoefficient;\r\nuniform int uIlluminationModelType;\r\nuniform float uSpecularShininess;\r\n\r\nvarying vec2 vTextureCoords;\r\nvarying vec4 vLightIntensity;\r\n\r\nvec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector);\r\nvec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector, vec3 viewerVector);\r\n\r\nvoid main(void) {\r\n  vTextureCoords = aTextureCoords;\r\n\r\n  vec4 worldPosition4D = uModelMatrix * vec4(aVertexPosition, 1.0);\r\n  vec3 worldPosition3D = vec3(worldPosition4D) / worldPosition4D.w;\r\n\r\n  gl_Position = uProjectionMatrix * uViewMatrix * worldPosition4D;\r\n\r\n  vec3 normalVector = normalize(vec3(uNormalMatrix * vec4(aNormalVector, 0.0)));\r\n  vec3 lightVector = normalize(uPointLightPosition - worldPosition3D);\r\n  vec3 viewerVector = normalize(uViewerPosition - worldPosition3D);\r\n\r\n  vec3 diffuseIntensity = getDiffuseLightIntensity(lightVector, normalVector);\r\n  vec3 specularIntensity = getSpecularLightIntensity(lightVector, normalVector, viewerVector);\r\n\r\n  vLightIntensity = vec4(uAmbientLightColor + diffuseIntensity + specularIntensity, 1.0);\r\n}\r\n\r\nvec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector) {\r\n  // Should sum across all light sources\r\n  float cosine = max(0.0, dot(normalVector, lightVector));\r\n\r\n  return uDiffuseCoefficient * uPointLightColor * cosine;\r\n}\r\n\r\nvec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector, vec3 viewerVector) {\r\n  // Should sum across all light sources\r\n  float shininess = uSpecularShininess;\r\n\r\n  float cosine = 0.0;\r\n  if (uIlluminationModelType == PHONG_ILLUMINATION_TYPE) {\r\n    vec3 reflectionVector = 2.0 * dot(normalVector, lightVector) * normalVector - lightVector;\r\n    cosine = dot(viewerVector, reflectionVector);\r\n  } else if (uIlluminationModelType == BLINN_ILLUMINATION_TYPE)  {\r\n    vec3 hVector = normalize(normalVector + lightVector);\r\n    cosine = dot(normalVector, hVector);\r\n    shininess /= 2.0;\r\n  }\r\n\r\n  cosine = max(0.0, cosine);\r\n\r\n  return uSpecularCoefficient * uPointLightColor * pow(cosine, uSpecularShininess);\r\n}\r\n"

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ProgramFactory_1 = __webpack_require__(39);
// tslint:disable no-require-imports import-name no-var-requires
const fragmentShaderSource = __webpack_require__(107);
const vertexShaderSource = __webpack_require__(108);
// tslint:enable no-require-imports, import-name
class PhongShadingProgramFactory extends ProgramFactory_1.ProgramFactory {
    get fragmentShaderSource() {
        return fragmentShaderSource;
    }
    get vertexShaderSource() {
        return vertexShaderSource;
    }
}
exports.PhongShadingProgramFactory = PhongShadingProgramFactory;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "#define PHONG_ILLUMINATION_TYPE 0\r\n#define BLINN_ILLUMINATION_TYPE 1\r\n\r\nprecision mediump float;\r\n\r\nuniform sampler2D uTextureSampler;\r\n\r\nuniform vec3 uAmbientLightColor;\r\n\r\nuniform vec3 uPointLightPosition;\r\nuniform vec3 uPointLightColor;\r\n\r\nuniform vec3 uViewerPosition;\r\n\r\nuniform float uDiffuseCoefficient;\r\nuniform float uSpecularCoefficient;\r\nuniform int uIlluminationModelType;\r\nuniform float uSpecularShininess;\r\n\r\nvarying vec3 vPosition;\r\nvarying vec3 vNormalVector;\r\nvarying vec2 vTextureCoords;\r\n\r\n\r\nvec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector);\r\nvec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector);\r\n\r\n\r\nvoid main(void) {\r\n  vec3 normalVector = normalize(vNormalVector);\r\n  vec3 lightVector = normalize(uPointLightPosition - vPosition);\r\n\r\n  vec3 diffuseIntensity = getDiffuseLightIntensity(lightVector, normalVector);\r\n  vec3 specularIntensity = getSpecularLightIntensity(lightVector, normalVector);\r\n\r\n  vec4 lightIntensity = vec4(uAmbientLightColor + diffuseIntensity + specularIntensity, 1.0);\r\n\r\n  gl_FragColor = lightIntensity * texture2D(uTextureSampler, vTextureCoords);\r\n}\r\n\r\n\r\nvec3 getDiffuseLightIntensity(vec3 lightVector, vec3 normalVector) {\r\n  // Should sum across all light sources\r\n  float cosine = max(0.0, dot(normalVector, lightVector));\r\n\r\n  return uDiffuseCoefficient * uPointLightColor * cosine;\r\n}\r\n\r\nvec3 getSpecularLightIntensity(vec3 lightVector, vec3 normalVector) {\r\n  // Should sum across all light sources\r\n  vec3 viewerVector = normalize(uViewerPosition - vPosition);\r\n  float shininess = uSpecularShininess;\r\n\r\n  float cosine = 0.0;\r\n  if (uIlluminationModelType == PHONG_ILLUMINATION_TYPE) {\r\n    vec3 reflectionVector = 2.0 * dot(normalVector, lightVector) * normalVector - lightVector;\r\n    cosine = dot(viewerVector, reflectionVector);\r\n  } else if (uIlluminationModelType == BLINN_ILLUMINATION_TYPE)  {\r\n    vec3 hVector = normalize(normalVector + lightVector);\r\n    cosine = dot(normalVector, hVector);\r\n    shininess /= 2.0;\r\n  }\r\n\r\n  cosine = max(0.0, cosine);\r\n\r\n  return uSpecularCoefficient * uPointLightColor * pow(cosine, uSpecularShininess);\r\n}\r\n"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\r\n\r\nattribute vec3 aVertexPosition;\r\nattribute vec3 aNormalVector;\r\nattribute vec2 aTextureCoords;\r\n\r\nuniform mat4 uModelMatrix;\r\nuniform mat4 uNormalMatrix;\r\nuniform mat4 uViewMatrix;\r\nuniform mat4 uProjectionMatrix;\r\n\r\nvarying vec3 vPosition;\r\nvarying vec3 vNormalVector;\r\nvarying vec2 vTextureCoords;\r\n\r\nvoid main(void) {\r\n  vTextureCoords = aTextureCoords;\r\n  vNormalVector = vec3(uNormalMatrix * vec4(aNormalVector, 0.0));\r\n\r\n  vec4 worldPosition = uModelMatrix * vec4(aVertexPosition, 1.0);\r\n  vPosition = vec3(worldPosition) / worldPosition.w;\r\n\r\n  gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;\r\n}\r\n"

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(5);
const IlluminationModelTypeSelectComponent_1 = __webpack_require__(110);
const ShadingModelTypeSelectComponent_1 = __webpack_require__(111);
class ApplicationComponent extends esm_1.Component {
    constructor(eventEmitter) {
        super();
        this.eventEmitter = eventEmitter;
        this.illuminationModelTypeSelect = new IlluminationModelTypeSelectComponent_1.IlluminationModelTypeSelectComponent(this.eventEmitter);
        this.shadingModelTypeSelect = new ShadingModelTypeSelectComponent_1.ShadingModelTypeSelectComponent(this.eventEmitter);
    }
    render() {
        return this.html `
      ${this.illuminationModelTypeSelect}
      ${this.shadingModelTypeSelect}
    `;
    }
}
exports.ApplicationComponent = ApplicationComponent;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(5);
const IlluminationModelType_1 = __webpack_require__(22);
const configuration_1 = __webpack_require__(4);
const NewIlluminationModelTypeEvent_1 = __webpack_require__(37);
const SelectComponent_1 = __webpack_require__(40);
class IlluminationModelTypeSelectComponent extends esm_1.Component {
    constructor(eventEmitter) {
        super();
        this.eventEmitter = eventEmitter;
        this.onIlluminationModelTypeChange = this.onIlluminationModelTypeChange.bind(this);
    }
    get defaultState() {
        return {
            illuminationModelType: configuration_1.configuration.defaultIlluminationModelType
        };
    }
    render() {
        const { illuminationModelType } = this.state;
        return this.html `
      <div>
        Illumination model type:
        ${SelectComponent_1.SelectComponent([
            {
                label: "Blinn's",
                value: IlluminationModelType_1.IlluminationModelType.Blinn
            },
            {
                label: "Phong's",
                value: IlluminationModelType_1.IlluminationModelType.Phong
            }
        ], illuminationModelType, this.onIlluminationModelTypeChange)}
      </div>
    `;
    }
    onIlluminationModelTypeChange(illuminationModelType) {
        this.setState({
            illuminationModelType
        });
        this.eventEmitter.emitAppEvent(new NewIlluminationModelTypeEvent_1.NewIlluminationModelTypeEvent(illuminationModelType));
    }
}
exports.IlluminationModelTypeSelectComponent = IlluminationModelTypeSelectComponent;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = __webpack_require__(5);
const ShadingModelType_1 = __webpack_require__(11);
const configuration_1 = __webpack_require__(4);
const NewShadingModelTypeEvent_1 = __webpack_require__(38);
const SelectComponent_1 = __webpack_require__(40);
class ShadingModelTypeSelectComponent extends esm_1.Component {
    constructor(eventEmitter) {
        super();
        this.eventEmitter = eventEmitter;
        this.onShadingModelTypeChange = this.onShadingModelTypeChange.bind(this);
    }
    get defaultState() {
        return {
            shadingModelType: configuration_1.configuration.defaultShadingModelType
        };
    }
    render() {
        const { shadingModelType } = this.state;
        return this.html `
      <div>
        Shading model type:
        ${SelectComponent_1.SelectComponent([
            {
                label: "Gouraud's",
                value: ShadingModelType_1.ShadingModelType.Gouraud
            },
            {
                label: "Phong's",
                value: ShadingModelType_1.ShadingModelType.Phong
            }
        ], shadingModelType, this.onShadingModelTypeChange)}
      </div>
    `;
    }
    onShadingModelTypeChange(shadingModelType) {
        this.setState({
            shadingModelType
        });
        this.eventEmitter.emitAppEvent(new NewShadingModelTypeEvent_1.NewShadingModelTypeEvent(shadingModelType));
    }
}
exports.ShadingModelTypeSelectComponent = ShadingModelTypeSelectComponent;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
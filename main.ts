

/// <reference path="ext/cat1js/Globals.ts" />
/// <reference path="core/RLApp.ts" />


// Define gl rendering globals
canvas = <HTMLCanvasElement> document.getElementById( 'glCanvas' );
gl = canvas.getContext( 'webgl' );

var rlApp : rljs.RLApp = new rljs.RLApp( canvas, gl );

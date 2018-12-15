
/// <reference path="../ext/cat1js/core/LApplication.ts" />
/// <reference path="../ext/cat1js/engine3d/debug/LDebugSystem.ts" />
/// <reference path="../ext/cat1js/LAssets.ts" />

/// <reference path="../RLAssets.ts" />
/// <reference path="RLCommon.ts" />
/// <reference path="RLWorld.ts" />



namespace rljs
{


    export class RLApp
    {

        public static INSTANCE : RLApp = null;

        protected m_gApp        : core.LApplication;
        protected m_canvas      : HTMLCanvasElement;
        protected m_glContext   : WebGLRenderingContext;

        protected m_world : RLWorld;

        constructor( canvas : HTMLCanvasElement,
                     glContext : WebGLRenderingContext )
        {
            RLApp.INSTANCE = this;

            this.m_canvas     = canvas;
            this.m_glContext  = glContext;
            this.m_gApp       = null;
            this.m_world      = null;

            this._initializeRenderingEngine();
        }

        protected _initializeRenderingEngine() : void
        {
            let _textures   : core.LTextureAssetInfo[] = rljs.Textures.concat( assets.Textures );
            let _shaders    : core.LShaderAssetInfo[]  = rljs.Shaders.concat( assets.Shaders );
            let _models     : core.LModelInfo[]        = rljs.Models.concat( assets.Models );
            let _textAssets : core.LTextAssetInfo[]    = rljs.TextAssets.concat( assets.TextAssets );

            let _appData : core.LApplicationData = new core.LApplicationData( _textures, 
                                                                              _shaders, 
                                                                              _models, 
                                                                              _textAssets );
            this.m_gApp = new core.LApplication( this.m_canvas,  this.m_glContext, 
                                                 _appData, this._onInit, this._onUpdate );
            this.m_gApp.addUserResizeCallback( this._onResize );
        }

        public _onInit() : void 
        { 
            RLApp.INSTANCE.init(); 
        }

        public _onUpdate( dt : number ) : void 
        { 
            RLApp.INSTANCE.update( dt ); 
        }

        public _onResize( appWidth : number, appHeight : number ) : void
        {
            RLApp.INSTANCE.resizeApp( appWidth, appHeight );
        }

        public init() : void
        {
            // Create world and some other stuff here
            this.m_world = new RLWorld( this.m_gApp.width(),
                                        this.m_gApp.height() );

            // and add the world's scene to the rendering engine
            this.m_gApp.addScene( this.m_world.scene() );
        }

        public update( dt : number ) : void
        {
            // Update the world
            // ...

            // Draw axes just for reference
            engine3d.DebugSystem.drawLine( core.ORIGIN, new core.LVec3( 3, 0, 0 ), core.RED );
            engine3d.DebugSystem.drawLine( core.ORIGIN, new core.LVec3( 0, 3, 0 ), core.GREEN );
            engine3d.DebugSystem.drawLine( core.ORIGIN, new core.LVec3( 0, 0, 3 ), core.BLUE );
        }

        public resizeApp( appWidth : number, appHeight : number ) : void
        {
            // update world parameters accordingly
        }

        public world() : RLWorld
        {
            return this.m_world;
        }
    }


}
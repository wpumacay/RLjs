
/// <reference path="RLBoot.ts" />

namespace rljs
{

    export class RLEntryPoint
    {

        public static include( file : string ) : void
        {
            document.write( '<script type="text/javascript" languaje="javascript" src="' +        
                            file + '"></script>' );
        }

        private static begin() : void
        {
            let _files : string[] = rljs.EntryPointFiles;

            let _i : number;

            for ( _i = 0; _i < _files.length; _i++ )
            {
                RLEntryPoint.include( _files[_i] );
            }
        }

    }

}

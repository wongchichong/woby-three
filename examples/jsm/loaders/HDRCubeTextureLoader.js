import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js';
export * from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.HDRCubeTextureLoader = HDRCubeTextureLoader;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\HDRCubeTextureLoader.d.ts
consParams.hdrCubeTextureLoader = [
    'manager',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\HDRCubeTextureLoader.d.ts    
objParams.hdrCubeTextureLoader = [...objParams.loader,
    'hdrLoader',
    'type',
].distinct();
defaults.hdrCubeTextureLoader = {};
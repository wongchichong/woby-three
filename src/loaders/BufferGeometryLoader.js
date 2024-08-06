import { BufferGeometryLoader } from 'three/src/loaders/BufferGeometryLoader.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Loader';
Three.BufferGeometryLoader = BufferGeometryLoader;
consParams.bufferGeometryLoader = [
    'manager',
].distinct();
objParams.bufferGeometryLoader = [...objParams.loader];
defaults.bufferGeometryLoader = {};

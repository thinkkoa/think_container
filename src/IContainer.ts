/**
 * @ author: richen
 * @ copyright: Copyright (c) - <richenlin(at)gmail.com>
 * @ license: MIT
 * @ version: 2020-05-10 11:41:01
 */
export type Scope = 'Singleton' | 'Prototype';
export type ComponentType = 'COMPONENT' | 'CONTROLLER' | 'MIDDLEWARE' | 'SERVICE';

// used to store class to be injected
export const TAGGED_CLS = 'INJECT_TAGGED_CLS';

// used to store class properties tags
export const TAGGED_PROP = 'INJECT_TAGGED_PROP';

// used to store class method to be injected
export const TAGGED_METHOD = 'INJECT_TAGGED_METHOD';

/**
 * Base Application
 *
 * @export
 * @interface Application
 */
export interface Application {
    config(propKey: string, type: string): any;
    on(event: string, callback: () => void): any;
    once(event: string, callback: () => void): any;
}

/**
 * Container interface
 *
 * @export
 * @interface IContainer
 */
export interface IContainer {
    setApp(app: Application): void;
    reg<T>(target: T, options?: ObjectDefinitionOptions): T;
    reg<T>(identifier: string, target: T, options?: ObjectDefinitionOptions): T;
    get(identifier: string, type?: ComponentType, args?: any[]): any;
    getClass(identifier: string, type?: ComponentType): Function;
    getInsByClass<T>(target: T, args?: any[]): T;
    saveClass(type: ComponentType, module: Function, identifier: string): void;
    listClass(type: ComponentType): any[];
    getIdentifier(target: Function): string;
    getType(target: Function): string;
    getMetadataMap(metadataKey: string | symbol, target: any, propertyKey?: string | symbol): any;
    saveClassMetadata(type: string, decoratorNameKey: string | symbol, data: any, target: Function | Object, propertyName?: string): void;
    attachClassMetadata(type: string, decoratorNameKey: string | symbol, data: any, target: Function | Object, propertyName?: string): void;
    getClassMetadata(type: string, decoratorNameKey: string | symbol, target: Function | Object, propertyName?: string): any;
    savePropertyData(decoratorNameKey: string | symbol, data: any, target: Function | Object, propertyName: string | symbol): void;
    attachPropertyData(decoratorNameKey: string | symbol, data: any, target: Function | Object, propertyName: string | symbol): void;
    getPropertyData(decoratorNameKey: string | symbol, target: Function | Object, propertyName: string | symbol): any;
    listPropertyData(decoratorNameKey: string | symbol, target: Function | Object): any[];
}


/**
 * BeanFactory Object interface
 *
 * @export
 * @interface ObjectDefinitionOptions
 */
export interface ObjectDefinitionOptions {
    isAsync?: boolean;
    initMethod?: string;
    destroyMethod?: string;
    scope?: Scope;
    type: ComponentType;
    args: any[];
}

/**
 *
 *
 * @export
 * @interface TagClsMetadata
 */
export interface TagClsMetadata {
    id: string;
    originName: string;
}

/**
 *
 *
 * @export
 * @interface TagPropsMetadata
 */
export interface TagPropsMetadata {
    key: string | number | symbol;
    value: any;
}

/**
 *
 *
 * @export
 * @interface ReflectResult
 */
export interface ReflectResult {
    [key: string]: TagPropsMetadata[];
}

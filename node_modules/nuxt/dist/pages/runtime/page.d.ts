import { DefineComponent } from 'vue';
import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router';
declare const _default: DefineComponent<{
    [key: string]: any;
    name?: string;
    route?: RouteLocationNormalized;
    pageKey?: string | ((route: RouteLocationNormalizedLoaded) => string);
}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    [key: string]: any;
    name?: string;
    route?: RouteLocationNormalized;
    pageKey?: string | ((route: RouteLocationNormalizedLoaded) => string);
}>>, {
    [x: string]: any;
}>;
export default _default;

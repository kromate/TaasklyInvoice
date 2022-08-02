import type { CompatibilityEvent } from 'h3';
import { NuxtApp } from '#app/nuxt';
export declare function useRequestHeaders<K extends string = string>(include: K[]): Record<K, string | undefined>;
export declare function useRequestHeaders(): Readonly<Record<string, string | undefined>>;
export declare function useRequestEvent(nuxtApp?: NuxtApp): CompatibilityEvent;

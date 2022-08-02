import type { FetchOptions } from 'ohmyfetch';
import type { TypedInternalResponse, NitroFetchRequest } from 'nitropack';
import { Ref } from 'vue';
import type { AsyncDataOptions, _Transform, KeyOfRes, AsyncData, PickFrom } from './asyncData';
export declare type FetchResult<ReqT extends NitroFetchRequest> = TypedInternalResponse<ReqT, unknown>;
export interface UseFetchOptions<DataT, Transform extends _Transform<DataT, any> = _Transform<DataT, DataT>, PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>> extends AsyncDataOptions<DataT, Transform, PickKeys>, FetchOptions {
    key?: string;
}
export declare function useFetch<ResT = void, ErrorT = Error, ReqT extends NitroFetchRequest = NitroFetchRequest, _ResT = ResT extends void ? FetchResult<ReqT> : ResT, Transform extends (res: _ResT) => any = (res: _ResT) => _ResT, PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>>(request: Ref<ReqT> | ReqT | (() => ReqT), opts?: UseFetchOptions<_ResT, Transform, PickKeys>): AsyncData<PickFrom<ReturnType<Transform>, PickKeys>, ErrorT | null | true>;
export declare function useLazyFetch<ResT = void, ErrorT = Error, ReqT extends NitroFetchRequest = NitroFetchRequest, _ResT = ResT extends void ? FetchResult<ReqT> : ResT, Transform extends (res: _ResT) => any = (res: _ResT) => _ResT, PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>>(request: Ref<ReqT> | ReqT | (() => ReqT), opts?: Omit<UseFetchOptions<_ResT, Transform, PickKeys>, 'lazy'>): AsyncData<PickFrom<ReturnType<Transform>, PickKeys>, ErrorT | null | true>;

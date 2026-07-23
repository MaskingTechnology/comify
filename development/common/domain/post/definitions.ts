
export type PostContent =
    | { readonly type: 'COMIC', readonly imageUrl: string; }
    | { readonly type: 'COMMENT', readonly message: string; };

export const EVENT_CHANNEL = 'common.post';

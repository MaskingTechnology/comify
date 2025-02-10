
export const VALUES =
{
    INPUT:
    {
        NON_STRING_VALUES: { boolean: true, number: 123, missing: undefined, undefined: null, bigint: BigInt(123) },
        LARGE_HTML_STRING: `<script>alert('XSS');</script><img src="x" onerror="alert('XSS')"><a href="javascript:alert('XSS')">Click me</a><div style="background-image: url('javascript:alert('XSS')')">Content</div><body onload="alert('XSS')">Hello World</body><svg onload="alert('XSS')"></svg><img src="data:image/svg+xml;base64,PHN2ZyBvbmxvYWQ9YWxlcnQoJ1hTUycpPjwvc3ZnPg==" alt="XSS"><object data="javascript:alert('XSS')"></object><form action="javascript:alert('XSS')"><input type="submit" value="Submit"></form><a href="#" onclick="alert('XSS')">Click me</a><meta http-equiv="refresh" content="0;url=javascript:alert('XSS')"><style>body { background-color: red; }</style><iframe src="javascript:alert('XSS')"></iframe><a href="&#x6A;&#x61;&#x76;&#x61;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;&#x3A;&#x61;&#x6C;&#x65;&#x72;&#x74;&#x28;&#x27;&#x58;&#x53;&#x53;&#x27;&#x29;">Click me</a><div><img src="x" onerror="alert('XSS')"></div><input type="text" value="Hello" onfocus="alert('XSS')"><script src="http://malicious.example.com/malicious.js"></script><div style="background: url('javascript:alert('XSS')');">Test</div><applet code="javascript:alert('XSS');"></applet><!-- <img src="x" onerror="alert('XSS')"> --><script>window['alert']('XSS');</script>`,
        NESTED_OBJECT: { nested: { html: '<p>abcd</p>' } },
        OBJECT_WITH_STRING_ARRAY: { array: ['<p>xyz</p>', '<p>efgh</p>'] }
    },

    OUTPUT:
    {
        NON_STRING_VALUES: { boolean: true, number: 123, missing: undefined, undefined: null, bigint: BigInt(123) },
        LARGE_HTML_STRING: 'Click meContentHello WorldClick meClick meTest',
        NESTED_OBJECT: { nested: { html: '<p>abcd</p>' } },
        OBJECT_WITH_STRING_ARRAY: { array: ['<p>xyz</p>', '<p>efgh</p>'] }
    }
};

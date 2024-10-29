module.exports = {
  auth0Domain: process.env.AUTH0_DOMAIN || 'https://turquoise-cod-20514.cic-demo-platform.auth0app.com',
  path: process.env.SAML_PATH || '/callback',
  entryPoint: process.env.SAML_ENTRY_POINT || 'https://turquoise-cod-20514.cic-demo-platform.auth0app.com/samlp/KpaNOR2lMliToRGBSY6iOwZVldrJj1yl',
  issuer: 'urn:turquoise-cod-20514.cic-demo-platform.auth0app.com',
  cert: process.env.SAML_CERT || `-----BEGIN CERTIFICATE-----
MIIDPzCCAiegAwIBAgIJT8CIgFr7jOKqMA0GCSqGSIb3DQEBCwUAMD0xOzA5BgNV
BAMTMnR1cnF1b2lzZS1jb2QtMjA1MTQuY2ljLWRlbW8tcGxhdGZvcm0uYXV0aDBh
cHAuY29tMB4XDTI0MTAyOTAzNDg1N1oXDTM4MDcwODAzNDg1N1owPTE7MDkGA1UE
AxMydHVycXVvaXNlLWNvZC0yMDUxNC5jaWMtZGVtby1wbGF0Zm9ybS5hdXRoMGFw
cC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDC0qKvmOxGBaR+
TLoxubLZaY9+XjzRSSOUGY0v5c7nkK9LGkH4QzIatH+0WV52kPaAfW5oFCDAt9zL
XXD2Bwwp26i7/xhi4AXSQyQg/OpChnxEjCQV+8l5vfy4rC75ZfbfBtCIJHc3Fs+t
oFOpKFu3qcImb8UzqifHWH1O/FaXVm0BCItCsn0IqhxnTWr7XTpkJu0UlDUNWvSQ
hPhFjOK6GnDbrtgmJ6PobqObIPws0ynrQ0nuqhsRJd0D5qmz6mDGkulQCQ4teqVk
typZNL+lp/f2r/QlrrqJUkALaJSAeLMM94lGEBPXkoE6vMdxyEVp4z3JVmiCllWB
Hj40DifvAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFNoGWkNj
VCWII0pkJoiWZeTqVz58MA4GA1UdDwEB/wQEAwIChDANBgkqhkiG9w0BAQsFAAOC
AQEAUcAO6DUZMMXRBxuL8XcVpFQA56gAFMXA3KcDjhNp/u9EFl+prt/u/2JnmQG8
36VmAf8mDQwk/NvIQOxlW/n7IT4e8UBizBVSgYSyPoIr3fDUSuqBXzD46DwIB5KU
zUg80LtThEVXzUmTCNCv6tam1rvJ64Iv2f4kq6x7cQYSptD+vbm5nAojfnNSnJVV
z8A2Dc30HmBRTyWpFYiA3U3/hdr3BrI3isazblBz5zY+Mq+ggftjI/ZUq4akfAEV
zMXJg1Kv1RhamFQSD386xoE9ag5cUAcCZYix1FBVX/ulNibhXDJUINC5m8OoZPtB
OjN/A+PNDbpVwjbvL6h2gb24zw==
-----END CERTIFICATE-----`,
};
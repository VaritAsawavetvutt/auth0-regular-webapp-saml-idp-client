module.exports = {
  auth0Domain: process.env.AUTH0_DOMAIN || 'dev-n7b07hx35gjlr4dy.us.auth0.com',
  path: process.env.SAML_PATH || '/callback',
  entryPoint: process.env.SAML_ENTRY_POINT || 'https://dev-n7b07hx35gjlr4dy.us.auth0.com/samlp/h4COyejhjkIwHVLFK0vy7rq3Wufrn8HV',
  issuer: 'urn:dev-n7b07hx35gjlr4dy.us.auth0.com',
  cert: process.env.SAML_CERT || `-----BEGIN CERTIFICATE-----
  MIIDHTCCAgWgAwIBAgIJCO5HSI89fAddMA0GCSqGSIb3DQEBCwUAMCwxKjAoBgNV
  BAMTIWRldi1uN2IwN2h4MzVnamxyNGR5LnVzLmF1dGgwLmNvbTAeFw0yNDAyMDYw
  NzIyNDJaFw0zNzEwMTUwNzIyNDJaMCwxKjAoBgNVBAMTIWRldi1uN2IwN2h4MzVn
  amxyNGR5LnVzLmF1dGgwLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
  ggEBAMQ4hbm+TknNU4Mfi6UemK5+miwe9pCr/NRbyqIrjsAD1lsvfwrFQGhoFq/w
  y6fZUJl5sv55JkKwV9ublsh+vqz+F+BbRdArrZQq4Jf4ffSuX/C+52LrxG8qAAhl
  bR/2qIqF71wdDexfDD1lbGJu35AnniyN2mqdqnKbnGORscxvHh+J5GmJ27tmjBSZ
  AqdrPsTgsY9oo4xVrD/Lh4NZRV/+/uKfvmsfpWxMyt1xeOGkcPxLWwvGxHb6IQPi
  P21EPWF95nBS7eVx9Ft1nV5rB52wy/z4QZ1/OasVqAbKixLfdrmgR42UPyL80u40
  MdvuChwfuN79eDBp/q37LQZowQECAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd
  BgNVHQ4EFgQUqNBEFK/okLjd0xvTaRZuujKKy9cwDgYDVR0PAQH/BAQDAgKEMA0G
  CSqGSIb3DQEBCwUAA4IBAQBbG797l33mRoD2LbJgk1ddx2eXFJIBNYFwWq5MkdNj
  R97KN3XWq+ZorRJAhqNZmBWTN7V0xJ8EOjlDtSV01brh4+lt78EWzYgWwz6WpcWu
  1tjEvJdRahKiRQmPbxBoYJ9eK3ozrG2s41rrjU4Z+NrzEgubQ2Fu2WcZraM4Bywy
  1QPZiiEhU5kciJSkHqWZOh4aqs+Yf6bibul/nUt8kKOgCmaeRdIWmtWbml5hYPvt
  jbD2yJAl8UVyvRVvSQl9WnLFiaE7BQOnbr/18mOSrd5vUbDD7ec+KJgiA4/IZ2rg
  sWwY6oLKfs0YMnhD3IAMmDjBrgO9krcoU6AXFxHhy04m
  -----END CERTIFICATE-----`
};

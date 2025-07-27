# Straightening out the OAuth stuff to access GC

- Probably the most crucial obstacle to overcome in developing this extension.
- So it's exciting to be getting close.
- Here's where we're at today:
    - The Authorize button in the popup successfully sends you to log in to google.
    - There's a redirect page set up at amccolm.codes/p2gcauth, but the popup isn't going there anymore.
    - That page *was* successfully receiving a code (code challenge?)
    - Anyway, here's where we end up in the oauth stuff now.

```
Access blocked: This app’s request is invalid
mccolmalex@gmail.com
You can’t sign in because this app sent an invalid request. You can try again later, or contact the developer about this issue. Learn more about this error
If you are a developer of this app, see error details.
Error 400: redirect_uri_mismatch
```

So we need to straighten out the redirect_uri business, obviously.

## TODO for July 28th
- straighten out the redirect_uri business
- get tokens coming back to the extension
- consider moving auth logic to background script!?!?
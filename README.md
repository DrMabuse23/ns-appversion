# ns-appversion

### Usage
```js
import * as AppVersion from `ns-appversion`;
class MyClass{
  constructor(private appVersion: AppVersion) {
    console.log(this.appVersion.getApplicationVersion());
  }
}
```

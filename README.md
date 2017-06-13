# ns-appversion

### Usage
```js
import * as AppVersion from `ns-appversion`;
class MyClass{
  private appVersion: AppVersion;
  constructor() {
    this.appVersion = new AppVersion();
    console.log(this.appVersion.getApplicationVersion());
  }
}
```

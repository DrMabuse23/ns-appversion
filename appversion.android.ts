import * as app from "tns-core-modules/application";
 
declare var android: any;
declare var java: any;
 
export class AppVersion {
 
    public constructor() { }
 
    public getApplicationVersion(): string {
        let PackageManager = android.content.pm.PackageManager;
        let pkg = app.android.context.getPackageManager().getPackageInfo(app.android.context.getPackageName(), PackageManager.GET_META_DATA);
        return java.lang.Integer.toString(pkg.versionCode);
    }
}
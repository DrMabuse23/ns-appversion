import * as app from "tns-core-modules/application";

declare var NSBundle: any;

export class AppVersion {
    public constructor() { }
 
    public getApplicationVersion(): string {
        let version = NSBundle.mainBundle().objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    }
 
}
export = LogUtil;
declare function LogUtil(): void;
declare class LogUtil {
    consoleLog: Console;
    _level: number;
    setLevel(level: any): void;
    runLog(level: any, methodName: any, msg: any): void;
}

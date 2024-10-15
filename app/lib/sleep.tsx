export default function sleepSync(milliseconds: number) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {
        // 什么也不做，持续检查时间
    }
}
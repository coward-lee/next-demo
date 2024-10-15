function sleepSync(milliseconds: number) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {
        // 什么也不做，持续检查时间
    }
}

export default function Page() {


    sleepSync(7000);
    throw new Error("custom error")
    return (
        <div className={"text-blue-600 text-3xl"}>
            dashboard pages
        </div>
    )
}
import sleepSync from "@/app/lib/sleep";


export default function Page(){
    sleepSync(5000)
    return (
        <h1 className={"text-4xl text-orange-300"}>
            team {new Date().toTimeString()} settings
        </h1>
    )
}
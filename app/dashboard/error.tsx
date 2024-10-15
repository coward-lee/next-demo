'use client'

export default function Error({
                                  error,
                                  reset
                              }: {
    error: Error,
    reset: () => void
}) {
    return <div>
        <h2>error happened error is :{error?.message}</h2>
        <button onClick={() => reset()}>reset</button>
    </div>
}
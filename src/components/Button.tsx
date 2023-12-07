interface IButton {
    text: string
}

export function Button({text}: Readonly<IButton>) {
    return <button>{text}</button>
}
import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(import('@lark/monaco-editor'), { ssr: false })

export default function Web() {
  return (
    <div>
      <MonacoEditor saveViewState={true} />
    </div>
  )
}

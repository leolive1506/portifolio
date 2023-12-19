import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default async function Home() {
  const markdown = await fetch("https://raw.githubusercontent.com/leolive1506/leolive1506/main/README.md").then(res => res.text());
  
  return (
    <Markdown className="unreset col-span-1 mt-6 md:ml-14" rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
  )
}

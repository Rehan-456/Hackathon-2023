import Card from "@/component/card"

export default function Home({blogs}) {
  return (
    <div className='container'>
      <Card blogs={blogs} />
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/blogs?requestType=Home')
  const data = await res.json()

  return {
    props: {
      blogs: data
    }
  }
}
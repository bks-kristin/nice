import Image from 'next/image'

export default function Home() {
  return (
    <div>
        <h1 className="title">
          Welcome to my nice page!
        </h1>
        <h2 className="text">
        This is a small site that talks about my musical taste. 
        It's impossible to describe a person's taste in music in three points,
        but this at least describes what I'm listening to this week :&#x29;
        </h2>
        <div className="">
          <Image
            className=""
            src="/nice.png"
            alt="NiceLogo"
            width={500}
            height={400}
            priority
          />
      </div>
    </div>
  )
}
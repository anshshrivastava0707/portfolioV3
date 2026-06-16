// Force typescript to know that params is a Promise holding an object with an 'id' string
interface PageProps {
  params: Promise<{ blogsid: string }>;
}

export default async function Articles({ params }: PageProps) {
    // Correctly awaiting the promise (Required in Next.js 15)
    const { blogsid } = await params; 
    
    const BlogsData = [
        {
            "id":1,
            "title":"Statistics in Sports",
            "date":"7 July 2023",
            "time":"3 min read",
            "content": "We all enjoy playing sports. A game of football or basketball does a lot for the human body. But what if we are going competitive in a sport? If we are planning to represent our nations or just in general trying to improve our game, then the habit of practicing all day and night eventually becomes ineffective. As a habit, we turn to technology to find our solution and this is how statistics was introduced into sports. Nowadays we can find all kinds of data on every player. This not only helps the player identify what they need to work on but also increases their worth as various clubs and teams sign these players based on their stats. As an individual we can use sensors that collect the data and run algorithms on the data so that we know what areas you are lacking in and how we should work on them to take our game to the next level. This now helps us focus on what matters and not on what doesn't."
        },{
            "id":2,
            "title":"Are we the problem?",
            "date":"27 June 2023",
            "time":"3 min read",
            "content":"We, as humans have been considered superior to other organisms due to our ability to solve problems using our intellect and skills. Although nowadays, we are prone to creating our problems rather than solving the already existing problems rather than solving the already existing problems. These problems have gone overlooked for so long that it impacts our development. An example could be Microsoft Tay, this would have been a big step in the Tech Industry if not for the human behavior coming in the way. Another example could be the hiring AI created by Amazon, revealing the gender bias among us humans. From being problem solvers to becoming problem creators, this is not the kind of development we aim for as a community. This raises the question of whether or not instead of searching for problems to solve, we have become the problem."
        }, {
            "id":3,
            "title":"Rapid changes",
            "date":"23 June 2023",
            "time":"3 min read",
            "content":"We all don't need to be reminded that technology advances quickly, just a blink and a new kind of chipset or processor might come out. One example could be how before you would have a 24-pin connector for your motherboard. Well, now that is replaced by 2 x 6-pin connectors. These rapid changes can also be seen in prices. We all remember the good old days when buying a graphic card did not make an irreparable hole in your wallet. Before, the rule was that the more money you are willing to spend, the more performance you get. Well, we now see that rule being broken as you no longer get the same kind of increment in performance no matter how much money you are willing to throw in."
        },{
            "id":4,
            "title":"Perfection in the Tech Industry",
            "date":"21 June 2023",
            "time":"3 min read",
            "content":"In the tech industry, perfection is essential.The number of people who are familiar with Steve Jobs is one example. There is a chance that if you ask the same folks who Andy Rubin is, they won't know. As a community of people who use and appreciate technology, we all tend to be so preoccupied with the greatest that we never consider the runners up. Human nature is what it is, and it cannot be changed. Because all you want is the newest iPhone, why should you be concerned about Andy Rubin, the man who built Android. Because Apple produces some of the best goods, we all covet Apple stuff. Although they are pricey, the idea that Apple is the finest has already been ingrained in our minds.The key takeaway is that only the person who placed first is ever remembered."
        }
    ]
    const blogIndex = parseInt(blogsid,10)
    const blog = BlogsData.find((blog) => blog.id === blogIndex)
    
    return (
        <div className="lg:mr-125 lg:ml-125 mr-5 ml-5">
            <h1 className="text-white text-center lg:text-6xl text-5xl p-5 font-bold text-shadow-lg text-shadow-green-800 font-mono ">{blog?.title}</h1>
            <div className="flex gap-4 justify-center">
            <h1 className="text-sm text-center p-5 font-mono">[{blog?.date}]</h1>
            <h1 className="text-sm text-center p-5 font-mono">[{blog?.time}]</h1>
            </div>
            <hr className="border-dashed border-4 text-green-400"/>
            <p className="font-mono p-5 tracking-wide leading-loose">{blog?.content}</p>
        </div>
    );
}
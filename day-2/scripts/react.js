const App = () => {
  return (
    <div className="container">
      {DATA.map((item, index) => (
        <Card key={index} isHidden={item.isHidden} title={item.title} desc={item.desc} />
      ))}
      <div className="main-title">
        <h1>Cards?</h1>
        <p>This page is about cards and sequence</p>
        <button>Click Me</button>
      </div>
    </div>
  )
}

const Card = ({ isHidden, title, desc }) => {
  return (
    <div className={`card ${isHidden ? 'hidden' : ''}`}>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


const DATA = [
  {
    title: "content 1",
    desc: "lorem ipsum dolor amet",
    isHidden: false
  },
  {
    title: "content 2",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 3",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 4",
    desc: "lorem ipsum dolor amet",
    isHidden: false
  },
  {
    title: "content 5",
    desc: "lorem ipsum dolor amet",
    isHidden: false
  },
  {
    title: "content 6",
    desc: "lorem ipsum dolor amet",
    isHidden: false
  },
  {
    title: "content 7",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 8",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 9",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 10",
    desc: "lorem ipsum dolor amet",
    isHidden: false
  },
  {
    title: "content 11",
    desc: "lorem ipsum dolor amet",
    isHidden: false
  },
  {
    title: "content 12",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 13",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 14",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 15",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 16",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 17",
    desc: "lorem ipsum dolor amet",
    isHidden: false
  },
  {
    title: "content 18",
    desc: "lorem ipsum dolor amet",
    isHidden: false
  },
  {
    title: "content 19",
    desc: "lorem ipsum dolor amet",
    isHidden: true
  },
  {
    title: "content 20",
    desc: "lorem ipsum dolor amet",
    isHidden: false
  },
]
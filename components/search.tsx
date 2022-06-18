interface IProps {
  input: string
  setInput: any
}

const Search = ({ input, setInput }: IProps) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Seach Here"
        className="py-3 pl-3 bg-slate-200 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  )
}

export default Search

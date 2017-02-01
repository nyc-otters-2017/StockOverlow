class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = { positions: [
      {id: 1, shares: 100, buy_price: 13, ticker: 'GOOG'},
      {id: 2, shares: 200, buy_price: 5, ticker: 'AMZN'}
    ] }
  }

  componentDidMount(){
    console.log(this.state.positions)
    console.log(this.props)
  }

  render() {
    return (
      <section className="user-profile">
        <h1>{this.props.fullname}</h1>

        <ul className="positions-list">
          {
            this.state.positions.map(position=>{
              return (
                <li key={position.id}>
                  <Position data={position}
                   />
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

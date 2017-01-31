class DisplayStocks extends React.Component {
  render() {
    return(
      <div>
        {
          this.props.stockCollection.map((ticker) => {
            return <Stock {ticker.quote} />
          })
        }
      </div>

    )
  }
}

import * as React from 'react';
import PageContainer from './components/PageContainer'

interface Props { }
interface State {
  recipeQuery: string,
}

export default class HomePage extends React.PureComponent<Props, State> {
  state: State = {
    recipeQuery: '',
  }

  render() {
    return (
      <PageContainer noPadding whiteNavbar>
        <div className="home-background-image">
          <img className="home-background-image-img" src="https://images.squarespace-cdn.com/content/v1/518ea9e4e4b0eb1ecff22776/1484164084354-3PQLWVE4Y1I7SXHQ1TMN/ke17ZwdGBToddI8pDm48kG87Sfbgg29A4BYEDq3OXvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcf4OxbJOyh_wHUnyc4kQLQ6SBshRGOku7c30Y_IRDNPta8R2IY5BHMaEj1zOWoDTZ/Chef?format=2500w" />
        </div>
        <div className="home-page-search">
          <form method="GET" action="/search">
            <input
              name="query"
              onChange={this.handleSearchInputChange}
              onSubmit={this.handleSearchSubmitted}
              placeholder="Braised pork, glazed salmon, mashed potatoes..."
              value={this.state.recipeQuery} />
            <button className="home-page-search-button" type="submit">Search</button>
          </form>
        </div>
      </PageContainer>
    );
  }

  handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ recipeQuery: e.target.value });
  }

  handleSearchSubmitted = (): void => {
    const { recipeQuery } = this.state;

    if (!recipeQuery) {
      return;
    }

    console.log("search for : ", recipeQuery);
  }
}

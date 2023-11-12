import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Container, GlobalStyle } from './GlobalStyles';

import { fetchImg } from '../ApiRequest';
import { SearchBar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../button/Button';
import { Loader } from '../Loader/Loader';

export class App extends Component {
  state = {
    query: ``,
    gallery: [],
    page: 1,
    loading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true, error: false });

      const initialImages = await fetchImg(this.state.query, this.state.page);
      this.setState({
        gallery: initialImages,
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true, error: false });

        const newImages = await fetchImg(this.state.query, this.state.page);

        if (newImages.hits.length === 0) {
          toast.error('No more images available');
        } else {
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...newImages.hits],
          }));
        }
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSubmit = searchQuery => {
    this.setState({ query: searchQuery, page: 1, gallery: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { gallery, loading, error } = this.state;

    return (
      <Container>
        <SearchBar onSubmit={this.onSubmit} />
        {error && <p>Something went wrong! Please reload this page!</p>}
        {gallery.length > 0 && <ImageGallery images={gallery} />}
        {loading && <Loader />}
        {gallery.length > 0 && <Button onLoadMore={this.onLoadMore} />}
        <GlobalStyle />
        <Toaster />
      </Container>
    );
  }
}

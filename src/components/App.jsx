import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Container, GlobalStyle } from './GlobalStyle';

import { fetchImg } from './ApiRequest';
import { SearchBar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    query: ``,
    gallery: [],
    page: 1,
    loading: false,
    error: false,
  };

  async componentDidMount() {
    // const savedQuery = window.localStorage.getItem(storageKey);
    // if (savedQuery !== null) {
    //   this.setState({
    //     query: JSON.parse(savedQuery),
    //   });
    // }
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
      // const clearQuery = this.state.query.split('/').pop();
      try {
        this.setState({ loading: true, error: false });

        const newImages = await fetchImg(this.state.query, this.state.page);

        if (newImages.length === 0) {
          toast.error('Sorry, no more images available');
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...newImages],
          }));
        }
      } catch (err0r) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  onSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, loading, error } = this.state;

    return (
      <Container>
        <SearchBar submit={this.onSubmit} />
        {error && <p>Something went wrong! Please reload this page!</p>}
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {images.length > 0 && <Button loadMore={this.onLoadMore} />}
        <GlobalStyle />
        <Toaster />
      </Container>
    );
  }
}

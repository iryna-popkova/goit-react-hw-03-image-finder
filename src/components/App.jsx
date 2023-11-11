import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Container, GlobalStyle } from './GlobalStyles';

import { fetchImg } from './ApiRequest';
import { SearchBar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';

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
    this.setState({
      query: `${searchQuery}`,
      page: 1,
      images: [],
    });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { gallery, loading, error } = this.state;

    return (
      <Container>
        <SearchBar submit={this.onSubmit} />
        {error && <p>Something went wrong! Please reload this page!</p>}
        {gallery.length > 0 && <ImageGallery images={gallery} />}
        {loading && <Loader />}
        {gallery.length > 0 && <Button loadMore={this.onLoadMore} />}
        <GlobalStyle />
        <Toaster />
      </Container>
    );
  }
}

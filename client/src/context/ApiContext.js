import { Component, createContext } from "react";
import { API_URL } from "@env";
import fetchApi from "../helpers/fetchApi";

export const APIContext = createContext();
class APIProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      data: null,
    };
  }
  componentDidMount() {
    fetchApi("/APIContext")
    this.fetchData();
    console.log("API_URL", API_URL);
  }
  fetchData = async () => {
    this.setState({ isLoading: true, error: null });
    try {
      const response = await fetch(API_URL + "level");
      const data = await response.json();
      this.setState({ isLoading: false, data: data });
    } catch (error) {
      this.setState({ isLoading: false, error: error });
    }
  };

  render() {
    return (
      <APIContext.Provider
        value={{
          state: {
            isLoading: this.state.isLoading,
            error: this.state.error,
            data: this.state.data,
          },
          actions: {},
        }}
      >
        {this.props.children}
      </APIContext.Provider>
    );
  }
}

export default APIProvider;

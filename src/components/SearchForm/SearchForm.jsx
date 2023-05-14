import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    value: '',
  };
  onChange = event => {
    this.setState({ value: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    if (!this.state.value) {
      alert('Enter name query');
      return;
    }
    this.props.handleSubmit(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <SearchFormStyled onSubmit={this.onSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={this.state.value}
          onChange={this.onChange}
        />
      </SearchFormStyled>
    );
  }
}

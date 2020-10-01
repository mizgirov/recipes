import { elements } from "./views/base";
import * as searchView from "./views/searchView";

import Search from "./models/Search";

/* Global state of the app
- search object
- current recipe object
- shopping list object  
- liked receipes  */
const state = {};

const controlSearch = async () => {
  // 1) Get the uery from the view
  const query = searchView.getInput(); // todo

  if (query) {
    // 2) new search object and add to state
    state.search = new Search(query);

    // 3) prepare ui for the results
    searchView.clearResults();
    // 4) search for the recipes
    await state.search.getResults();

    // 5) render result on the UI
    searchView.renderResults(state.search.result);

    searchView.clearInput();
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

// tests/unit/Layout.spec.js
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Layout from '@/views/Layout.vue';
import FileList from '@/components/FileList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Layout.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        layout: {
          namespaced: true,
          state: { files: [] },
          getters: {
            filteredAndSortedFiles: jest.fn(),
          },
          actions: {
            fetchFiles: jest.fn(),
          },
        },
      },
    });
  });

  // tests/unit/Layout.spec.js
  it('renders FileList with computed files', () => {
    const files = [
      {
        "id": "6eb00541-1fd5-4779-a155-ba0e53e0fabc",
        "description": "A kitten that is 200x300",
        "filename": "kitten.jpg",
        "mimetype": "image/jpg",
        "tags": "kitten",
        "date": "2001-07-01T14:00:00.000+00:00",
        "src": "http://placekitten.com/200/300"
      },
      {
        "id": "6eb00541-1fd5-4779-a155-ba0e53e0fdef",
        "description": "Another kitten because the internet is for kittens, 500x300",
        "filename": "kitten(1).jpg",
        "mimetype": "image/jpg",
        "tags": "kitten|snow",
        "date": "2002-06-06T14:00:00.000+00:00",
        "src": "http://placekitten.com/500/300"
      },
      {
        "id": "6eb00541-1fd5-4779-a155-ba0e53e0f123",
        "description": "The last kitten, I promise. Black & White because 🎨 (800x700)",
        "filename": "kitten(2).jpg",
        "mimetype": "image/jpg",
        "tags": "kitten",
        "date": "2003-06-11T14:00:00.000+00:00",
        "src": "http://placekitten.com/g/800/700"
      },
      {
        "id": "6eb00541-1fd5-4779-a155-ba0e53e0f12a",
        "description": "A pretty fluffy dog. Waaaay too much fur for that beach",
        "filename": "dog(2).jpg",
        "mimetype": "image/jpg",
        "tags": "puppy",
        "date": "2004-08-01T14:00:00.000+00:00",
        "src": "https://placedog.net/1200/550"
      },
    ]; // Provide sample files data for testing
    const store = new Vuex.Store({
      modules: {
        layout: {
          namespaced: true,
          state: { files }, // Set the files state
          getters: {
            filteredAndSortedFiles: () => files, // Return files as-is for testing
          },
          actions: {
            fetchFiles: jest.fn(),
          },
        },
      },
    });
  
    const wrapper = mount(Layout, {
      localVue,
      store,
      stubs: {
        FileList,
      },
    });
  
    // Ensure that the files prop is passed correctly
    expect(wrapper.findComponent(FileList).props('files')).toEqual(files);
  });
  
});

import files from "@/store/files.js";
import { cloneDeep } from "lodash";
//import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; // Use this if you're using axios in your api.js
import { createLocalVue } from "@vue/test-utils";
//import api from "@/api";

jest.mock("axios");

const mockFiles = [
  {
    id: "6eb00541-1fd5-4779-a155-ba0e53e0fabc",
    description: "A kitten that is 200x300",
    filename: "kitten.jpg",
    mimetype: "image/jpg",
    tags: "kitten",
    date: "2001-07-01T14:00:00.000+00:00",
    src: "http://placekitten.com/200/300",
  },
];

jest.mock("@/api", () => ({
  files: {
    get: jest.fn(() => Promise.resolve({ data: mockFiles })),
  },
}));

const localVue = createLocalVue();
localVue.use(Vuex);

describe("files module", () => {
  let store;

  beforeEach(() => {
    axios.get.mockClear();
    store = new Vuex.Store(cloneDeep(files));
  });

  it("fetchFiles action should fetch files and commit setFiles mutation", async () => {
    // Mock the API response to match your actual data structure
    axios.get.mockResolvedValue({ data: mockFiles });

    await store.dispatch("fetchFiles");
    expect(store.state.files.data).toHaveLength(mockFiles.length); // Adjust length based on the number of files you've mocked
    expect(store.state.files.data).toEqual(mockFiles);
  });

  it("setFiles mutation sets the files state", () => {
    const newFiles = [
      {
        id: "6eb00541-1fd5-4779-a155-ba0e53e0fabc",
        description: "A kitten that is 200x300",
        filename: "kitten.jpg",
        mimetype: "image/jpg",
        tags: "kitten",
        date: "2001-07-01T14:00:00.000+00:00",
        src: "http://placekitten.com/200/300",
      },
      {
        id: "6eb00541-1fd5-4779-a155-ba0e53e0fdef",
        description:
          "Another kitten because the internet is for kittens, 500x300",
        filename: "kitten(1).jpg",
        mimetype: "image/jpg",
        tags: "kitten|snow",
        date: "2002-06-06T14:00:00.000+00:00",
        src: "http://placekitten.com/500/300",
      },
    ];
    store.commit("setFiles", newFiles);
    expect(store.state.files).toEqual(newFiles);
  });

  // Additional test for testing getters
  it("filteredFiles getter returns files filtered by tag and sorted by date", () => {
    const newFiles = [
      // Assuming your store and getters handle the structure properly
      // Ensure the date format and structure match your actual data
      {
        id: "6eb00541-1fd5-4779-a155-ba0e53e0fabc",
        tags: ["kitten"],
        date: "2021-02-01T00:00:00.000Z",
      },
      {
        id: "6eb00541-1fd5-4779-a155-ba0e53e0fdef",
        tags: ["kitten"],
        date: "2021-01-01T00:00:00.000Z",
      },
      {
        id: "6eb00541-1fd5-4779-a155-ba0e53e0f123",
        tags: ["puppy"],
        date: "2021-01-01T00:00:00.000Z",
      },
    ];
    store.commit("setFiles", newFiles);
    const filteredFiles = store.getters.filteredFiles;
    expect(filteredFiles.length).toBe(2);
    expect(filteredFiles[0].id).toBe("6eb00541-1fd5-4779-a155-ba0e53e0fdef"); // Earlier date
    expect(filteredFiles[1].id).toBe("6eb00541-1fd5-4779-a155-ba0e53e0fabc"); // Later date
  });
});

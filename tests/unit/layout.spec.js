// tests/unit/Layout.spec.js
jest.mock("axios");
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Layout from "@/views/Layout.vue";
import FileItem from "@/components/FileItem.vue";
//import flushPromises from "flush-promises";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Layout.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      fetchFiles: jest.fn(),
    };
    getters = {
      filteredFiles: () => [
        { id: 1, filename: "file1.jpg", src: "http://example.com/file1.jpg" },
        { id: 2, filename: "file2.jpg", src: "http://example.com/file2.jpg" },
      ],
    };
    store = new Vuex.Store({
      modules: {
        files: {
          namespaced: true,
          actions,
          getters,
        },
      },
    });
  });

  it("calls store action 'fetchFiles' when created", () => {
    shallowMount(Layout, { store, localVue });
    expect(actions.fetchFiles).toHaveBeenCalled();
  });

  it("renders FileItem for each file in filteredFiles", () => {
    const files = [{ id: 1 }, { id: 2 }];
    getters.filteredFiles = () => files;
    store = new Vuex.Store({
      modules: {
        files: {
          namespaced: true,
          actions,
          getters,
        },
      },
    });
    const wrapper = shallowMount(Layout, { store, localVue });
    expect(wrapper.findAllComponents(FileItem).length).toBe(files.length);
  });
});

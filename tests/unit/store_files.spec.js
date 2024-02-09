// Import necessary modules for testing
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import filesModule from "@/store/files"; // Import the files store module
import api from "@/api"; // Import the API module

// Create a local Vue instance
const localVue = createLocalVue();
localVue.use(Vuex);

// Mock the API module
jest.mock("@/api", () => ({
  files: {
    get: jest.fn(), // Mock the get method of the files API
    create: jest.fn(), // Mock the create method of the files API
    update: jest.fn(), // Mock the update method of the files API
    remove: jest.fn(), // Mock the remove method of the files API
  },
}));

// Describe the unit tests for the files store module
describe("Files Store Module", () => {
  let store; // Declare a variable to hold the Vuex store

  // Before each test, create a new Vuex store with the files module
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        files: filesModule, // Use the files store module
      },
    });
  });

  // Test fetching files from the API and setting them in the state
  it("fetches files from API and sets them in the state", async () => {
    const mockFiles = [
      { id: "1", filename: "file1.png" },
      { id: "2", filename: "file2.png" },
    ];
    api.files.get.mockResolvedValue(mockFiles); // Mock the API response

    await store.dispatch("files/getAll"); // Dispatch the action to fetch files

    // Assert that the API method was called and state is updated correctly
    expect(api.files.get).toHaveBeenCalled();
    expect(store.state.files.files).toEqual(mockFiles);
  });

  // Test adding a new file to the state
  it("adds a new file to the state", async () => {
    const newFile = { id: "3", filename: "file3.png" };
    api.files.create.mockResolvedValue(newFile); // Mock the API response

    await store.dispatch("files/create", newFile); // Dispatch the action to create a file

    // Assert that the API method was called and state is updated correctly
    expect(api.files.create).toHaveBeenCalledWith(newFile);
    expect(store.state.files.files).toContainEqual(newFile);
  });

  // Test updating an existing file in the state
  it("updates an existing file in the state", async () => {
    const updatedFile = { id: "1", filename: "file1_updated.png" };
    api.files.update.mockResolvedValue(updatedFile); // Mock the API response

    await store.dispatch("files/updateOne", updatedFile); // Dispatch the action to update a file

    // Assert that the API method was called and state is updated correctly
    expect(api.files.update).toHaveBeenCalledWith(updatedFile);
    expect(store.state.files.files).toContainEqual(updatedFile);
  });

  // Test removing a file from the state
  it("removes a file from the state", async () => {
    const removeFileId = "1";
    api.files.remove.mockResolvedValue({ id: removeFileId }); // Mock the API response

    await store.dispatch("files/remove", removeFileId); // Dispatch the action to remove a file

    // Assert that the API method was called and state is updated correctly
    expect(api.files.remove).toHaveBeenCalledWith({ id: removeFileId });
    expect(store.state.files.files).not.toContainEqual({ id: removeFileId });
  });
});

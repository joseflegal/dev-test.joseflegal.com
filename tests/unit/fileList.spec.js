import { shallowMount } from "@vue/test-utils";
import FileList from "@/components/fileComponents/FileList.vue";
import { date, files } from "./constants";

describe("FileList.vue", () => {
  it("Format Date Method: return Date", () => {
    // Mount the component
    const wrapper = shallowMount(FileList, {
      propsData: { files: files },
    });

    // Access the formatDate method from the component instance
    const filteredFilesResult = wrapper.vm.formatDate(date);

    expect(filteredFilesResult).toBe("June 11, 2003");
  });

  it("Format Date Method: return Invalid Date", () => {
    // Mount the component
    const wrapper = shallowMount(FileList, {
      propsData: { files: files },
    });

    // Access the formatDate method from the component instance
    const filteredFilesResult = wrapper.vm.formatDate("Today");

    expect(filteredFilesResult).toBe("Invalid Date");
  });
});

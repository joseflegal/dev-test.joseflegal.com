import { shallowMount } from "@vue/test-utils";
import FileItem from "@/components/files/FileItem.vue";

describe("FileItem.vue", () => {
  it("renders file information", () => {
    const file = {
      id: "1",
      filename: "file1.png",
      description: "Description for file1",
    };
    const wrapper = shallowMount(FileItem, {
      propsData: { file },
    });

    expect(wrapper.text()).toContain(file.filename);
    expect(wrapper.text()).toContain(file.description);
  });
});

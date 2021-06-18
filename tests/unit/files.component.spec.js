import { shallowMount } from "@vue/test-utils";
import Files from "@/components/File.vue";

describe("File.vue", () => {
  it("renders props.msg when passed", () => {
    const fileData = {
      fileId: "123412",
      fileName: "BestTestFile.jpg",
      fileMimeType: "image/jpg",
      fileTags: "",
      fileDate: "01/01/2001",
      fileSource: "http://www.hrwiki.org/w/images/c/c0/A_dragon.PNG",
    };
    const file = shallowMount(Files, {
      propsData: { fileData },
    });
    expect(file.attributes().class).toMatch("file-card");
  });
});

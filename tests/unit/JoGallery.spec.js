import { shallowMount } from "@vue/test-utils";

import JoGallery from "@/components/globals/JoGallery";

describe("JoGallery.vue", () => {
  const files = [
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
    {
      id: "6eb00541-1fd5-4779-a155-ba0e53e0f123",
      description:
        "The last kitten, I promise. Black & White because 🎨 (800x700)",
      filename: "kitten(2).jpg",
      mimetype: "image/jpg",
      tags: "kitten",
      date: "2003-06-11T14:00:00.000+00:00",
      src: "http://placekitten.com/g/800/700",
    },
  ];

  it("renders snow files when snow tag is passed", () => {
    const tag = "snow";
    const wrapper = shallowMount(JoGallery, {
      propsData: { files, tag },
    });

    expect(wrapper.findAll(".card")).toHaveLength(1);
  });

  it("renders kitten files when kitten tag is passed", () => {
    const tag = "kitten";
    const wrapper = shallowMount(JoGallery, {
      propsData: { files, tag },
    });

    expect(wrapper.findAll(".card")).toHaveLength(3);
  });

  it("renders no files when unknown tag is passed", () => {
    const tag = "unknown";
    const wrapper = shallowMount(JoGallery, {
      propsData: { files, tag },
    });

    expect(wrapper.findAll(".card")).toHaveLength(0);
  });

  it("renders files with a theme when variant is passed", () => {
    const tag = "snow";
    const variant = "blue";
    const wrapper = shallowMount(JoGallery, {
      propsData: { files, tag, variant },
    });

    expect(wrapper.find(".is-blue")).toBeTruthy();
  });
});

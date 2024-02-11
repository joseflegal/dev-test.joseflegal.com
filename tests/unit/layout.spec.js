import { shallowMount } from "@vue/test-utils";
import Layout from "@/views/Layout.vue";



describe("Layout.vue", () => {
  const files =  [
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
      "tags": "dog",
      "date": "2003-06-11T14:00:00.000+00:00",
      "src": "http://placekitten.com/g/800/700"
    }
  ]
  it('renders only filtered files based on tags' , () => {

    const wrapper = shallowMount(Layout, {
      data() {
        return {
          files
        }
      }
    });
    expect(wrapper.text()).toContain('kitten');
    expect(wrapper.text()).toContain('kitten|snow');
    expect(wrapper.text()).not.toContain('dog');
  });

  it('renders first file based on earliest date' , () => {

    const wrapper = shallowMount(Layout, {
      data() {
        return {
          files
        }
      }
    });
    expect(wrapper.find('h2').text()).toBe("kitten.jpg");
  });

});